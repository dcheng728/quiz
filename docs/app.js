// State
let queue = [];       // shuffled question queue
let currentIndex = 0;
let sessionRight = 0;
let sessionWrong = 0;
let sessionUnsure = 0;

// DOM
const categoryFilter = document.getElementById('category-filter');
const difficultyFilter = document.getElementById('difficulty-filter');
const familiarityFilter = document.getElementById('familiarity-filter');
const sortOrder = document.getElementById('sort-order');
const shuffleBtn = document.getElementById('shuffle-btn');
const counterEl = document.getElementById('counter');
const categoryBadge = document.getElementById('category-badge');
const difficultyBadge = document.getElementById('difficulty-badge');
const familiarityBadge = document.getElementById('familiarity-badge');
const sessionScore = document.getElementById('session-score');
const questionText = document.getElementById('question-text');
const answerSection = document.getElementById('answer-section');
const answerText = document.getElementById('answer-text');
const explanationText = document.getElementById('explanation-text');
const showAnswerBtn = document.getElementById('show-answer-btn');
const showAnswerContainer = document.getElementById('show-answer-container');
const gradeContainer = document.getElementById('grade-container');
const statsBar = document.getElementById('stats-bar');

// ── LocalStorage ──

function getHistory() {
    try {
        const raw = localStorage.getItem('quiz-history');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveResult(questionObj, grade) {
    const history = getHistory();
    history.push({
        question: questionObj.question,
        subject: questionObj.subject,
        subtopic: questionObj.subtopic,
        difficulty: questionObj.difficulty,
        grade: grade,
        timestamp: new Date().toISOString(),
    });
    localStorage.setItem('quiz-history', JSON.stringify(history));
}

// ── Filtering & shuffling ──

// ── Familiarity Parameters ──

// Familiarity scoring constants
const FAM_TAU = 48; // exponential decay time constant in hours
const FAM_SCORES = { right: 1, unsure: 0.3, wrong: 0 };

function buildFamiliarityMap() {
    const history = getHistory();
    const now = Date.now();
    // Group answers by question, preserving chronological order
    const answersBy = {};
    for (const h of history) {
        if (!answersBy[h.question]) answersBy[h.question] = [];
        answersBy[h.question].push({ grade: h.grade, time: new Date(h.timestamp).getTime() });
    }
    // Compute weighted score for each question
    const map = {};
    for (const [q, entries] of Object.entries(answersBy)) {
        let weightedSum = 0;
        let weightSum = 0;
        for (const entry of entries) {
            const t = (now - entry.time) / 3600000; // hours since answer
            const w = Math.exp(-t / FAM_TAU);
            weightedSum += (FAM_SCORES[entry.grade] ?? 0) * w;
            weightSum += w;
        }
        map[q] = {
            score: weightSum > 0 ? weightedSum / weightSum : 0,
            attempts: entries.length,
        };
    }
    return map;
}

function getFamiliarityLabel(score) {
    if (score === null) return { text: 'new', cls: 'fam-new' };
    if (score < 0.3) return { text: Math.round(score * 100) + '%', cls: 'fam-weak' };
    if (score < 0.6) return { text: Math.round(score * 100) + '%', cls: 'fam-shaky' };
    if (score < 0.85) return { text: Math.round(score * 100) + '%', cls: 'fam-decent' };
    return { text: Math.round(score * 100) + '%', cls: 'fam-strong' };
}

function getFilteredPool() {
    let pool = ALL_QUESTIONS;
    const cat = categoryFilter.value;
    const diff = difficultyFilter.value;
    const fam = familiarityFilter.value;
    if (cat !== 'all') pool = pool.filter(q => q.subject === cat);
    if (diff !== 'all') pool = pool.filter(q => q.difficulty === diff);

    if (fam !== 'all') {
        const famMap = buildFamiliarityMap();
        pool = pool.filter(q => {
            const record = famMap[q.question];
            if (fam === 'unseen') return !record;
            if (fam === 'weak') return record && record.score < 0.5;
            if (fam === 'strong') return record && record.score >= 0.7;
            return true;
        });
    }

    return pool;
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildQueue() {
    const pool = getFilteredPool();
    if (pool.length === 0) {
        queue = [];
        return;
    }

    const order = sortOrder.value;

    if (order === 'random') {
        // Weight: questions previously missed or unsure appear more often
        const history = getHistory();
        const recentWrong = new Set(
            history
                .filter(h => h.grade === 'wrong' || h.grade === 'unsure')
                .slice(-200)
                .map(h => h.question)
        );

        const weighted = [];
        for (const q of pool) {
            weighted.push(q);
            if (recentWrong.has(q.question)) {
                weighted.push(q); // double weight
            }
        }

        // Shuffle and deduplicate
        const shuffled = shuffle(weighted);
        const seen = new Set();
        queue = [];
        for (const q of shuffled) {
            if (!seen.has(q.question)) {
                seen.add(q.question);
                queue.push(q);
            }
        }
    } else if (order === 'easiest') {
        const diffRank = { basic: 0, intermediate: 1, advanced: 2 };
        queue = shuffle([...pool]).sort((a, b) => {
            return (diffRank[a.difficulty] ?? 1) - (diffRank[b.difficulty] ?? 1);
        });
    } else {
        // Sort by familiarity score
        const famMap = buildFamiliarityMap();
        queue = [...pool].sort((a, b) => {
            const sa = famMap[a.question]?.score ?? -1; // unseen = -1 (lowest)
            const sb = famMap[b.question]?.score ?? -1;
            if (order === 'least-familiar') return sa - sb;        // weakest first
            if (order === 'most-familiar') return sb - sa;         // strongest first
            if (order === 'least-seen') {
                const aa = famMap[a.question]?.attempts ?? 0;
                const ab = famMap[b.question]?.attempts ?? 0;
                return aa - ab; // fewest attempts first
            }
            return 0;
        });
    }
}

function reshuffleAndReset() {
    buildQueue();
    currentIndex = 0;
    sessionRight = 0;
    sessionWrong = 0;
    sessionUnsure = 0;
    displayQuestion();
}

// ── Display ──

function displayQuestion() {
    if (queue.length === 0) {
        questionText.textContent = 'No questions match your filters. Try different settings.';
        answerSection.classList.add('hidden');
        showAnswerContainer.classList.add('hidden');
        gradeContainer.classList.add('hidden');
        counterEl.textContent = '';
        categoryBadge.textContent = '';
        difficultyBadge.textContent = '';
        familiarityBadge.textContent = '';
        familiarityBadge.className = 'familiarity-indicator';
        return;
    }

    // Wrap around if we've gone through all questions
    if (currentIndex >= queue.length) {
        // Reshuffle for another pass
        buildQueue();
        currentIndex = 0;
    }

    const q = queue[currentIndex];
    counterEl.textContent = `Question ${currentIndex + 1} of ${queue.length}`;
    categoryBadge.textContent = q.subject.replace(/-/g, ' ');
    difficultyBadge.textContent = q.difficulty;

    // Color the difficulty badge
    difficultyBadge.className = 'badge diff-' + q.difficulty;

    // Familiarity badge
    const famMap = buildFamiliarityMap();
    const famRecord = famMap[q.question];
    const famScore = famRecord ? famRecord.score : null;
    const famLabel = getFamiliarityLabel(famScore);
    familiarityBadge.textContent = famLabel.text;
    familiarityBadge.className = 'familiarity-indicator ' + famLabel.cls;

    questionText.innerHTML = q.question;
    answerText.innerHTML = q.answer;
    explanationText.innerHTML = q.explanation || '';

    answerSection.classList.add('hidden');
    showAnswerContainer.classList.remove('hidden');
    gradeContainer.classList.add('hidden');

    renderMath(questionText);
    updateScore();
}

function renderMath(container) {
    if (typeof renderMathInElement === 'undefined') return;
    if (!container) container = document.getElementById('question-card');
    renderMathInElement(container, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
        ],
        throwOnError: false,
    });
}

function showAnswer() {
    answerSection.classList.remove('hidden');
    showAnswerContainer.classList.add('hidden');
    gradeContainer.classList.remove('hidden');
    renderMath(document.getElementById('question-card'));
}

function gradeQuestion(grade) {
    const q = queue[currentIndex];
    saveResult(q, grade);

    if (grade === 'right') sessionRight++;
    else if (grade === 'unsure') sessionUnsure++;
    else sessionWrong++;

    currentIndex++;
    displayQuestion();
    updateStats();

    // Auto-push to Gist if connected
    if (getGistToken() && getGistId()) {
        gistPush(true);
    }
}

function updateScore() {
    const total = sessionRight + sessionWrong + sessionUnsure;
    if (total === 0) {
        sessionScore.textContent = '';
        return;
    }
    sessionScore.textContent = `${sessionRight}✓  ${sessionUnsure}~  ${sessionWrong}✗`;
}

function updateStats() {
    const stats = getStats();
    if (!stats) {
        statsBar.style.display = 'none';
        return;
    }
    statsBar.style.display = 'block';
    const pct = Math.round(stats.right / stats.total * 100);
    statsBar.innerHTML = `
        <span>All time: ${stats.total} answered</span>
        <span>${pct}% correct</span>
        <span>${stats.sessions} day${stats.sessions !== 1 ? 's' : ''}</span>
    `;
}

function getStats() {
    const history = getHistory();
    const total = history.length;
    if (total === 0) return null;
    const right = history.filter(h => h.grade === 'right').length;
    const sessions = new Set(history.map(h => h.timestamp.slice(0, 10))).size;
    return { total, right, sessions };
}

// ── Events ──

showAnswerBtn.addEventListener('click', showAnswer);

document.querySelectorAll('[data-grade]').forEach(btn => {
    btn.addEventListener('click', () => gradeQuestion(btn.dataset.grade));
});

shuffleBtn.addEventListener('click', reshuffleAndReset);
categoryFilter.addEventListener('change', reshuffleAndReset);
difficultyFilter.addEventListener('change', reshuffleAndReset);
familiarityFilter.addEventListener('change', reshuffleAndReset);
sortOrder.addEventListener('change', reshuffleAndReset);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!answerSection.classList.contains('hidden')) return; // already showing
        showAnswer();
    }
    if (!gradeContainer.classList.contains('hidden')) {
        if (e.key === '1') gradeQuestion('wrong');
        if (e.key === '2') gradeQuestion('unsure');
        if (e.key === '3') gradeQuestion('right');
    }
});

// ── Gist Sync ──

const GIST_FILENAME = 'quiz-history.json';
const syncBar = document.getElementById('sync-bar');
const syncLoggedOut = document.getElementById('sync-logged-out');
const syncLoggedIn = document.getElementById('sync-logged-in');
const syncStatus = document.getElementById('sync-status');
const gistLoginBtn = document.getElementById('gist-login-btn');
const gistPushBtn = document.getElementById('gist-push-btn');
const gistPullBtn = document.getElementById('gist-pull-btn');
const gistLogoutBtn = document.getElementById('gist-logout-btn');

function getGistToken() { return localStorage.getItem('gist-token'); }
function getGistId() { return localStorage.getItem('gist-id'); }
function setGistToken(t) { localStorage.setItem('gist-token', t); }
function setGistId(id) { localStorage.setItem('gist-id', id); }
function clearGistAuth() { localStorage.removeItem('gist-token'); localStorage.removeItem('gist-id'); }

function updateSyncUI() {
    const token = getGistToken();
    if (token) {
        syncLoggedOut.classList.add('hidden');
        syncLoggedIn.classList.remove('hidden');
        const gistId = getGistId();
        syncStatus.textContent = gistId ? 'Gist connected' : 'No Gist yet';
    } else {
        syncLoggedOut.classList.remove('hidden');
        syncLoggedIn.classList.add('hidden');
    }
}

function showTokenModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal">
            <h2>Connect GitHub Gist</h2>
            <p>Enter a GitHub Personal Access Token with <strong>gist</strong> scope.
               Create one at <a href="https://github.com/settings/tokens/new?scopes=gist&description=Quiz+Sync" target="_blank" rel="noopener">github.com/settings/tokens</a>.</p>
            <input type="text" id="token-input" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" autocomplete="off">
            <div class="modal-buttons">
                <button class="btn btn-cancel" id="modal-cancel">Cancel</button>
                <button class="btn btn-sync" id="modal-connect">Connect</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#token-input');
    input.focus();

    overlay.querySelector('#modal-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#modal-connect').addEventListener('click', async () => {
        const token = input.value.trim();
        if (!token) return;
        overlay.querySelector('#modal-connect').textContent = 'Connecting...';
        overlay.querySelector('#modal-connect').disabled = true;

        try {
            // Verify token by listing gists and looking for an existing quiz gist
            const res = await fetch('https://api.github.com/gists', {
                headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' }
            });
            if (!res.ok) throw new Error('Invalid token');

            setGistToken(token);

            // Search for existing quiz gist
            const gists = await res.json();
            const existing = gists.find(g => g.files && g.files[GIST_FILENAME]);
            if (existing) {
                setGistId(existing.id);
                syncStatus.textContent = 'Gist found! Pull to load history.';
            } else {
                syncStatus.textContent = 'Connected. Push to create Gist.';
            }

            overlay.remove();
            updateSyncUI();
        } catch (err) {
            alert('Failed to connect: ' + err.message);
            overlay.querySelector('#modal-connect').textContent = 'Connect';
            overlay.querySelector('#modal-connect').disabled = false;
        }
    });
}

async function gistPush(auto = false) {
    const token = getGistToken();
    if (!token) return;

    const history = getHistory();
    const content = JSON.stringify(history, null, 2);
    const gistId = getGistId();

    if (!auto) {
        gistPushBtn.textContent = 'Pushing...';
        gistPushBtn.disabled = true;
    }

    try {
        if (gistId) {
            // Update existing gist
            const res = await fetch(`https://api.github.com/gists/${gistId}`, {
                method: 'PATCH',
                headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ files: { [GIST_FILENAME]: { content } } })
            });
            if (!res.ok) throw new Error('Failed to update Gist');
            syncStatus.textContent = auto ? 'Gist updated' : `Pushed ${history.length} records`;
        } else {
            // Create new private gist
            const res = await fetch('https://api.github.com/gists', {
                method: 'POST',
                headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    description: 'Physics & Math Quiz — answer history',
                    public: false,
                    files: { [GIST_FILENAME]: { content } }
                })
            });
            if (!res.ok) throw new Error('Failed to create Gist');
            const data = await res.json();
            setGistId(data.id);
            syncStatus.textContent = auto ? 'Gist updated' : `Created Gist, pushed ${history.length} records`;
        }
    } catch (err) {
        if (!auto) syncStatus.textContent = 'Push failed: ' + err.message;
    }

    if (!auto) {
        gistPushBtn.textContent = 'Push to Gist';
        gistPushBtn.disabled = false;
    }
}

async function gistPull() {
    const token = getGistToken();
    const gistId = getGistId();
    if (!token || !gistId) {
        syncStatus.textContent = 'No Gist to pull from. Push first.';
        return;
    }

    gistPullBtn.textContent = 'Pulling...';
    gistPullBtn.disabled = true;

    try {
        const res = await fetch(`https://api.github.com/gists/${gistId}`, {
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' }
        });
        if (!res.ok) throw new Error('Failed to fetch Gist');

        const data = await res.json();
        const file = data.files[GIST_FILENAME];
        if (!file) throw new Error('Quiz history file not found in Gist');

        const remoteHistory = JSON.parse(file.content);
        const localHistory = getHistory();

        // Merge: combine both, deduplicate by question+timestamp
        const seen = new Set();
        const merged = [];
        for (const h of [...localHistory, ...remoteHistory]) {
            const key = h.question + '|' + h.timestamp;
            if (!seen.has(key)) {
                seen.add(key);
                merged.push(h);
            }
        }
        // Sort by timestamp
        merged.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

        localStorage.setItem('quiz-history', JSON.stringify(merged));

        const added = merged.length - localHistory.length;
        syncStatus.textContent = `Pulled. ${merged.length} total records` + (added > 0 ? ` (+${added} new)` : '');

        // Refresh the quiz state
        buildQueue();
        currentIndex = 0;
        displayQuestion();
        updateStats();
    } catch (err) {
        syncStatus.textContent = 'Pull failed: ' + err.message;
    }

    gistPullBtn.textContent = 'Pull from Gist';
    gistPullBtn.disabled = false;
}

function gistLogout() {
    if (!confirm('Disconnect Gist? Your local history will be kept.')) return;
    clearGistAuth();
    updateSyncUI();
}

gistLoginBtn.addEventListener('click', showTokenModal);
gistPushBtn.addEventListener('click', () => gistPush(false));
gistPullBtn.addEventListener('click', gistPull);
gistLogoutBtn.addEventListener('click', gistLogout);

// ── Familiarity Settings UI ──


// ── Init ──
buildQueue();
displayQuestion();
updateStats();
updateSyncUI();
