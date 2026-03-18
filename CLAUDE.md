# Physics & Math Daily Quiz

## Project Overview

A static flashcard quiz app for GitHub Pages that helps a theoretical physics student stay sharp on fundamental math and physics — the kind of things expected in faculty interviews. No backend; all client-side.

## Key Design Decisions

- **No start screen** — app loads directly into a question. Continuous flow, no sessions.
- **Flashcard style** — show question → "Show Answer" → self-grade (Got it / Not sure / Missed it). NOT multiple choice, because recall > recognition.
- **Shuffle button** to reshuffle the queue at any time. Changing filters also reshuffles.
- **Filters**: subject (12 categories) and difficulty (basic / intermediate / advanced) dropdowns in the top bar.
- **Weighted repetition**: questions previously marked wrong or unsure appear more often.
- **Keyboard shortcuts**: Space/Enter to reveal answer, 1/2/3 to grade.
- **localStorage** for progress tracking (history, stats). Gist sync discussed as a future cross-device option but not implemented yet.
- **KaTeX** for LaTeX math rendering (loaded via CDN).
- **Light theme** with warm `#f5f0eb` background, white cards, earth-tone buttons.
- **Footer art** (mountains, clouds, birds SVG) fetched at runtime from `https://raw.githubusercontent.com/dcheng728/dcheng728.github.io/main/_includes/footer-art.html`.

## File Structure

```
index.html          — main page
style.css           — light theme styles
app.js              — quiz logic, localStorage, rendering
questions.js        — all 145 questions bundled as JS (not JSON, to avoid fetch/CORS issues with file://)
questions/          — original JSON files per subject (kept for reference/editing)
```

## Question Bank (145 questions)

Each question has: `question`, `answer`, `explanation`, `subject`, `subtopic`, `difficulty`.

All text uses LaTeX notation (`$...$` inline, `$$...$$` display) rendered by KaTeX.

| Subject                        | Count |
|--------------------------------|-------|
| Math — Calculus                | 36    |
| Math — Linear Algebra          | 10    |
| Math — Differential Equations  | 10    |
| Math — Complex Analysis        | 8     |
| Math — Discrete                | 5     |
| Math — Probability             | 12    |
| Math — Trigonometry            | 5     |
| Classical Mechanics            | 12    |
| Electromagnetism               | 12    |
| Quantum Mechanics              | 15    |
| Statistical Mechanics          | 10    |
| Relativity                     | 10    |

## Deployment

Target: GitHub Pages (static hosting, free). The app works with `file://` too since questions are bundled in JS, not fetched as JSON.

## Question Style Guidelines

- Questions should be framed the way a **physicist** would think about them, not a pure mathematician.
- Prefer "expand to second order for small $x$" over "write the Maclaurin series."
- Prefer concrete physical intuition over formal definitions when possible.
- Answers should be the quick, practical result a physicist would recall — not the most general theorem statement.
- Explanations should connect to physics applications (e.g., "used in perturbation theory" rather than "converges for $|x|<1$").

## Future Ideas Discussed

- **Gist sync** for cross-device progress persistence (GitHub personal access token + Gist API)
- **Spaced repetition** (more sophisticated than current weighted random)
- Adding more questions over time
