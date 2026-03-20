// ── Filter Configuration ──

const SORT_OPTIONS = [
    { value: 'least-familiar', label: 'Most unfamiliar' },
    { value: 'random', label: 'Random' },
    { value: 'most-familiar', label: 'Most familiar' },
    { value: 'least-seen', label: 'Least seen' },
];

// ── Derived Data ──

const ALL_SUBJECTS = [...new Set(ALL_QUESTIONS.map(q => q.subject))].sort();
const ALL_LABELS = [...new Set(ALL_QUESTIONS.flatMap(q => q.labels))].sort();

// ── Filter State ──

const filterState = {
    subjects: new Set(ALL_SUBJECTS),  // all selected by default
    labels: [],                        // active label filters (intersection)
};

// ── Populate Controls ──

function populateFilters() {
    // Sort order dropdown
    const sortSelect = document.getElementById('sort-order');
    for (const opt of SORT_OPTIONS) {
        const el = document.createElement('option');
        el.value = opt.value;
        el.textContent = opt.label;
        sortSelect.appendChild(el);
    }

    // Subject checkboxes
    const container = document.getElementById('subject-checkboxes');
    for (const subj of ALL_SUBJECTS) {
        const label = document.createElement('label');
        label.className = 'subject-checkbox';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = subj;
        cb.checked = true;
        cb.addEventListener('change', () => {
            if (cb.checked) filterState.subjects.add(subj);
            else filterState.subjects.delete(subj);
            updateSubjectButtonLabel();
            reshuffleAndReset();
        });
        label.appendChild(cb);
        label.appendChild(document.createTextNode(' ' + subj));
        container.appendChild(label);
    }
}

function updateSubjectButtonLabel() {
    const btn = document.getElementById('subject-dropdown-btn');
    const n = filterState.subjects.size;
    const total = ALL_SUBJECTS.length;
    if (n === total) btn.textContent = 'Subjects (all)';
    else if (n === 0) btn.textContent = 'Subjects (none)';
    else btn.textContent = `Subjects (${n}/${total})`;
}

// ── Subject Dropdown Toggle ──

function initSubjectDropdown() {
    const btn = document.getElementById('subject-dropdown-btn');
    const panel = document.getElementById('subject-dropdown-panel');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!document.getElementById('subject-dropdown').contains(e.target)) {
            panel.classList.add('hidden');
        }
    });

    document.getElementById('select-all-subjects').addEventListener('click', (e) => {
        e.preventDefault();
        filterState.subjects = new Set(ALL_SUBJECTS);
        document.querySelectorAll('#subject-checkboxes input').forEach(cb => cb.checked = true);
        updateSubjectButtonLabel();
        reshuffleAndReset();
    });

    document.getElementById('deselect-all-subjects').addEventListener('click', (e) => {
        e.preventDefault();
        filterState.subjects.clear();
        document.querySelectorAll('#subject-checkboxes input').forEach(cb => cb.checked = false);
        updateSubjectButtonLabel();
        reshuffleAndReset();
    });
}

// ── Label Filtering ──

function addLabelFilter(label) {
    if (filterState.labels.includes(label)) return;
    filterState.labels.push(label);
    renderActiveLabels();
    reshuffleAndReset();
}

function removeLabelFilter(label) {
    filterState.labels = filterState.labels.filter(l => l !== label);
    renderActiveLabels();
    reshuffleAndReset();
}

function renderActiveLabels() {
    const container = document.getElementById('active-labels');
    const hint = document.getElementById('label-filter-hint');
    container.innerHTML = '';

    if (filterState.labels.length === 0) {
        hint.style.display = '';
        return;
    }
    hint.style.display = 'none';

    for (const label of filterState.labels) {
        const pill = document.createElement('span');
        pill.className = 'label-pill active';
        pill.innerHTML = label + ' <button class="pill-x">&times;</button>';
        pill.querySelector('.pill-x').addEventListener('click', () => removeLabelFilter(label));
        container.appendChild(pill);
    }
}

// ── Search ──

function stripLatex(str) {
    return str
        .replace(/\$\$([^$]*)\$\$/g, '$1')
        .replace(/\$([^$]*)\$/g, '$1')
        .replace(/\\[a-zA-Z]+/g, '')
        .replace(/[{}\\^_]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function initSearch() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            results.classList.add('hidden');
            results.innerHTML = '';
            return;
        }

        results.innerHTML = '';
        results.classList.remove('hidden');

        // Matching labels
        const matchingLabels = ALL_LABELS.filter(l => l.toLowerCase().includes(query));
        if (matchingLabels.length > 0) {
            const section = document.createElement('div');
            section.className = 'search-section';
            section.innerHTML = '<div class="search-section-title">Labels</div>';
            for (const label of matchingLabels.slice(0, 10)) {
                const item = document.createElement('div');
                item.className = 'search-item search-label';
                item.innerHTML = `<span class="label-pill">${label}</span>`;
                const addBtn = document.createElement('button');
                addBtn.className = 'btn btn-add-label';
                addBtn.textContent = '+';
                addBtn.title = 'Add to label filter';
                addBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addLabelFilter(label);
                    input.value = '';
                    results.classList.add('hidden');
                });
                item.appendChild(addBtn);
                section.appendChild(item);
            }
            results.appendChild(section);
        }

        // Matching flashcards
        const matchingCards = ALL_QUESTIONS.filter(q => {
            const searchable = (q.name + ' ' + stripLatex(q.question) + ' ' + stripLatex(q.answer)).toLowerCase();
            return searchable.includes(query);
        });
        if (matchingCards.length > 0) {
            const section = document.createElement('div');
            section.className = 'search-section';
            section.innerHTML = '<div class="search-section-title">Flashcards</div>';
            for (const card of matchingCards.slice(0, 15)) {
                const item = document.createElement('div');
                item.className = 'search-item search-card';
                item.innerHTML = `<span class="search-card-preview">${card.name}</span>`;
                renderMath(item);
                item.addEventListener('click', () => {
                    jumpToQuestion(card);
                    input.value = '';
                    results.classList.add('hidden');
                });
                section.appendChild(item);
            }
            results.appendChild(section);
        }

        if (matchingLabels.length === 0 && matchingCards.length === 0) {
            results.innerHTML = '<div class="search-item search-empty">No results</div>';
        }
    });

    // Close search on outside click
    document.addEventListener('click', (e) => {
        if (!document.getElementById('search-container').contains(e.target)) {
            results.classList.add('hidden');
        }
    });

    // Re-open on focus if there's a query
    input.addEventListener('focus', () => {
        if (input.value.trim()) {
            input.dispatchEvent(new Event('input'));
        }
    });
}

function jumpToQuestion(questionObj) {
    // Find in current queue
    const idx = queue.findIndex(q => q.name === questionObj.name);
    if (idx >= 0) {
        currentIndex = idx;
        displayQuestion();
        return;
    }
    // If not in queue (filtered out), add temporarily by adjusting filters
    // For simplicity, just rebuild with all filters and jump
    queue.push(questionObj);
    currentIndex = queue.length - 1;
    displayQuestion();
}

// ── State ──

let queue = [];
let currentIndex = 0;
let sessionRight = 0;
let sessionWrong = 0;
let sessionUnsure = 0;

// ── DOM ──

const sortOrder = document.getElementById('sort-order');
const shuffleBtn = document.getElementById('shuffle-btn');
const counterEl = document.getElementById('counter');
const categoryBadge = document.getElementById('category-badge');
const difficultyIndicator = document.getElementById('difficulty-indicator');
const familiarityBadge = document.getElementById('familiarity-badge');
const sessionScore = document.getElementById('session-score');
const questionText = document.getElementById('question-text');
const questionLabelsEl = document.getElementById('question-labels');
const answerSection = document.getElementById('answer-section');
const answerText = document.getElementById('answer-text');
const explanationText = document.getElementById('explanation-text');
const showAnswerBtn = document.getElementById('show-answer-btn');
const showAnswerContainer = document.getElementById('show-answer-container');
const gradeContainer = document.getElementById('grade-container');
const statsBar = document.getElementById('stats-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// ── LocalStorage ──

function getHistory() {
    try {
        const raw = localStorage.getItem('quiz-history');
        const arr = raw ? JSON.parse(raw) : [];
        // Only keep entries with name field (discard old format)
        return arr.filter(h => h.name);
    } catch {
        return [];
    }
}

function saveResult(questionObj, grade) {
    const history = getHistory();
    history.push({
        name: questionObj.name,
        grade: grade,
        timestamp: new Date().toISOString(),
    });
    localStorage.setItem('quiz-history', JSON.stringify(history));
}

// ── Familiarity ──

const FAM_TAU = CONFIG.familiarityTau;
const FAM_SCORES = CONFIG.gradeScores;

function buildFamiliarityMap() {
    const history = getHistory();
    const now = Date.now();
    const answersBy = {};
    for (const h of history) {
        if (!answersBy[h.name]) answersBy[h.name] = [];
        answersBy[h.name].push({ grade: h.grade, time: new Date(h.timestamp).getTime() });
    }
    const map = {};
    for (const [name, entries] of Object.entries(answersBy)) {
        let weightedSum = 0;
        let weightSum = 0;
        for (const entry of entries) {
            const t = (now - entry.time) / 3600000;
            const w = Math.exp(-t / FAM_TAU);
            weightedSum += (FAM_SCORES[entry.grade] ?? 0) * w;
            weightSum += w;
        }
        map[name] = {
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

// ── Filtering & Shuffling ──

function getFilteredPool() {
    let pool = ALL_QUESTIONS;

    // Subject filter (union: show if subject is in selected set)
    if (filterState.subjects.size < ALL_SUBJECTS.length) {
        pool = pool.filter(q => filterState.subjects.has(q.subject));
    }

    // Label filter (intersection: must have ALL selected labels)
    if (filterState.labels.length > 0) {
        pool = pool.filter(q =>
            filterState.labels.every(label => q.labels.includes(label))
        );
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
        const history = getHistory();
        const recentWrong = new Set(
            history
                .filter(h => h.grade === 'wrong' || h.grade === 'unsure')
                .slice(-200)
                .map(h => h.name)
        );

        const weighted = [];
        for (const q of pool) {
            weighted.push(q);
            if (recentWrong.has(q.name)) weighted.push(q);
        }

        const shuffled = shuffle(weighted);
        const seen = new Set();
        queue = [];
        for (const q of shuffled) {
            if (!seen.has(q.name)) {
                seen.add(q.name);
                queue.push(q);
            }
        }
    } else {
        const famMap = buildFamiliarityMap();
        queue = shuffle([...pool]).sort((a, b) => {
            const sa = famMap[a.name]?.score ?? -1;
            const sb = famMap[b.name]?.score ?? -1;
            if (order === 'least-familiar') return sa - sb;
            if (order === 'most-familiar') return sb - sa;
            if (order === 'least-seen') {
                const aa = famMap[a.name]?.attempts ?? 0;
                const ab = famMap[b.name]?.attempts ?? 0;
                return aa - ab;
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

// ── Navigation ──

function goNext() {
    if (queue.length === 0) return;
    if (currentIndex < queue.length - 1) {
        currentIndex++;
    } else {
        buildQueue();
        currentIndex = 0;
    }
    displayQuestion();
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuestion();
    }
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
        difficultyIndicator.innerHTML = '';
        familiarityBadge.textContent = '';
        familiarityBadge.className = 'familiarity-indicator';
        questionLabelsEl.innerHTML = '';
        renderQueueList();
        return;
    }

    if (currentIndex >= queue.length) {
        buildQueue();
        currentIndex = 0;
    }

    const q = queue[currentIndex];
    counterEl.textContent = `Question ${currentIndex + 1} of ${queue.length}`;
    categoryBadge.textContent = q.subject;

    // Difficulty indicator (bars)
    const DIFFICULTY_LEVELS = ['basic', 'intermediate', 'advanced'];
    const diff = q.labels.find(l => DIFFICULTY_LEVELS.includes(l));
    const diffLevel = diff ? DIFFICULTY_LEVELS.indexOf(diff) + 1 : 0;
    const diffTitle = diff || 'unrated';
    difficultyIndicator.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.className = 'diff-bar' + (i < diffLevel ? ' active' : '');
        difficultyIndicator.appendChild(bar);
    }
    difficultyIndicator.title = diffTitle;

    // Familiarity badge
    const famMap = buildFamiliarityMap();
    const famRecord = famMap[q.name];
    const famScore = famRecord ? famRecord.score : null;
    const famLabel = getFamiliarityLabel(famScore);
    familiarityBadge.textContent = famLabel.text;
    familiarityBadge.className = 'familiarity-indicator ' + famLabel.cls;

    // Question labels (exclude difficulty since it's shown as bars)
    questionLabelsEl.innerHTML = '';
    for (const label of q.labels) {
        if (DIFFICULTY_LEVELS.includes(label)) continue;
        const pill = document.createElement('span');
        pill.className = 'label-pill small';
        pill.textContent = label;
        pill.title = 'Click to filter by this label';
        pill.addEventListener('click', () => addLabelFilter(label));
        questionLabelsEl.appendChild(pill);
    }

    questionText.innerHTML = q.question;
    answerText.innerHTML = q.answer;
    explanationText.innerHTML = q.explanation || '';

    answerSection.classList.add('hidden');
    showAnswerContainer.classList.remove('hidden');
    gradeContainer.classList.add('hidden');

    // Nav button states
    prevBtn.disabled = currentIndex === 0;

    renderMath(questionText);
    updateScore();
    renderQueueList();
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

    goNext();
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
    sessionScore.textContent = `${sessionRight}\u2713  ${sessionUnsure}~  ${sessionWrong}\u2717`;
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

// ── Queue Display ──

function renderDifficultyBars(level) {
    let html = '<span class="difficulty-indicator">';
    for (let i = 0; i < 3; i++) {
        html += `<span class="diff-bar${i < level ? ' active' : ''}"></span>`;
    }
    return html + '</span>';
}

function renderFamiliarityBar(score) {
    // score: null (unseen), 0..1
    if (score === null) {
        return '<span class="fam-bar-wrap" title="unseen"><span class="fam-bar fam-bar-empty"></span></span>';
    }
    const pct = Math.round(score * 100);
    const cls = score < 0.3 ? 'fam-weak' : score < 0.6 ? 'fam-shaky' : score < 0.85 ? 'fam-decent' : 'fam-strong';
    return `<span class="fam-bar-wrap" title="${pct}%"><span class="fam-bar"><span class="fam-bar-fill ${cls}" style="width:${pct}%"></span></span></span>`;
}

function renderQueueList() {
    const list = document.getElementById('queue-list');
    list.innerHTML = '';

    if (queue.length === 0) return;

    const DIFFICULTY_LEVELS = ['basic', 'intermediate', 'advanced'];
    const famMap = buildFamiliarityMap();

    // Show a window of items around current index
    const WINDOW = 20;
    const start = Math.max(0, currentIndex - 3);
    const end = Math.min(queue.length, start + WINDOW);

    for (let i = start; i < end; i++) {
        const q = queue[i];
        const item = document.createElement('div');
        item.className = 'queue-item' + (i === currentIndex ? ' current' : '');

        // Difficulty
        const diff = q.labels.find(l => DIFFICULTY_LEVELS.includes(l));
        const diffLevel = diff ? DIFFICULTY_LEVELS.indexOf(diff) + 1 : 0;

        // Familiarity
        const famRecord = famMap[q.name];
        const famScore = famRecord ? famRecord.score : null;

        item.innerHTML =
            `<span class="queue-num">${i + 1}</span>` +
            `<span class="queue-preview">${q.name}</span>` +
            `<span class="queue-indicators">` +
                renderFamiliarityBar(famScore) +
                renderDifficultyBars(diffLevel) +
            `</span>`;
        renderMath(item);
        item.addEventListener('click', () => {
            currentIndex = i;
            displayQuestion();
        });
        list.appendChild(item);
    }

    if (end < queue.length) {
        const more = document.createElement('div');
        more.className = 'queue-item queue-more';
        more.textContent = `... ${queue.length - end} more`;
        list.appendChild(more);
    }

    // Scroll current item into view within the list only
    const currentItem = list.querySelector('.queue-item.current');
    if (currentItem) {
        const listTop = list.scrollTop;
        const listHeight = list.clientHeight;
        const itemTop = currentItem.offsetTop - list.offsetTop;
        const itemHeight = currentItem.offsetHeight;
        if (itemTop < listTop) {
            list.scrollTop = itemTop;
        } else if (itemTop + itemHeight > listTop + listHeight) {
            list.scrollTop = itemTop + itemHeight - listHeight;
        }
    }
}

// ── Events ──

showAnswerBtn.addEventListener('click', showAnswer);

document.querySelectorAll('[data-grade]').forEach(btn => {
    btn.addEventListener('click', () => gradeQuestion(btn.dataset.grade));
});

shuffleBtn.addEventListener('click', reshuffleAndReset);
sortOrder.addEventListener('change', reshuffleAndReset);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Don't capture if typing in search
    if (e.target.tagName === 'INPUT') return;

    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!answerSection.classList.contains('hidden')) return;
        showAnswer();
    }
    if (!gradeContainer.classList.contains('hidden')) {
        if (e.key === '1') gradeQuestion('wrong');
        if (e.key === '2') gradeQuestion('unsure');
        if (e.key === '3') gradeQuestion('right');
    }
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
});

// ── Gist Sync ──

const GIST_FILENAME = 'quiz-history.json';
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
            const res = await fetch('https://api.github.com/gists', {
                headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' }
            });
            if (!res.ok) throw new Error('Invalid token');

            setGistToken(token);

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
            const res = await fetch(`https://api.github.com/gists/${gistId}`, {
                method: 'PATCH',
                headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ files: { [GIST_FILENAME]: { content } } })
            });
            if (!res.ok) throw new Error('Failed to update Gist');
            syncStatus.textContent = auto ? 'Gist updated' : `Pushed ${history.length} records`;
        } else {
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

        // Merge: combine both, deduplicate by id+timestamp
        const seen = new Set();
        const merged = [];
        for (const h of [...localHistory, ...remoteHistory]) {
            if (!h.name) continue; // skip old format entries
            const key = h.name + '|' + h.timestamp;
            if (!seen.has(key)) {
                seen.add(key);
                merged.push(h);
            }
        }
        merged.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

        localStorage.setItem('quiz-history', JSON.stringify(merged));

        const fromRemote = merged.length - localHistory.length;
        const localOnly = merged.length - remoteHistory.length;
        let msg = `Merged: ${localHistory.length} local + ${remoteHistory.length} remote = ${merged.length} total`;
        if (fromRemote > 0) msg += ` (${fromRemote} new from Gist)`;
        if (localOnly > 0) msg += ` — push to upload ${localOnly} local-only`;
        syncStatus.textContent = msg;

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

// ── Familiarity Info Panel ──

(function populateFamiliarityInfo() {
    const body = document.getElementById('familiarity-info-body');
    if (!body) return;
    const s = CONFIG.gradeScores;
    const tau = CONFIG.familiarityTau;
    body.innerHTML = `
        <p class="info-formula">$$\\text{familiarity} = \\frac{\\sum_i s_i \\, e^{-\\Delta t_i / \\tau}}{\\sum_i e^{-\\Delta t_i / \\tau}}$$</p>
        <p>where $\\Delta t_i$ is the hours since answer $i$ and $s_i$ is the grade score.</p>
        <table class="info-table">
            <tr><th>Response</th><th>Score ($s_i$)</th></tr>
            <tr><td>Got it</td><td>${s.right}</td></tr>
            <tr><td>Not sure</td><td>${s.unsure}</td></tr>
            <tr><td>Missed it</td><td>${s.wrong}</td></tr>
        </table>
        <p>Decay time constant: $\\tau = ${tau}$ hours (weight drops to $1/e \\approx 37\\%$ after ${tau}h, half-life $\\approx ${Math.round(tau * Math.LN2)}$h)</p>
    `;
})();

// ── Init ──

populateFilters();
initSubjectDropdown();
initSearch();
buildQueue();
displayQuestion();
updateStats();
updateSyncUI();

// Re-render everything once KaTeX loads (scripts are deferred, so app.js runs first)
function renderAllMath() {
    renderMath(); // question card
    document.querySelectorAll('.queue-item').forEach(el => renderMath(el));
    document.querySelectorAll('.search-item').forEach(el => renderMath(el));
    const infoBody = document.getElementById('familiarity-info-body');
    if (infoBody) renderMath(infoBody);
}
document.addEventListener('DOMContentLoaded', renderAllMath);
if (typeof renderMathInElement === 'undefined') {
    const katexScript = document.querySelector('script[src*="auto-render"]');
    if (katexScript) katexScript.addEventListener('load', renderAllMath);
}
