# Physics & Math Daily Quiz

## Project Overview

A static flashcard quiz app for GitHub Pages that helps a theoretical physics student stay sharp on fundamental math and physics. No backend; all client-side.

## Key Design Decisions

- **No start screen** -- app loads directly into a question. Continuous flow, no sessions.
- **Flashcard style** -- show question, "Show Answer", self-grade (Got it / Not sure / Missed it). Recall over recognition.
- **Shuffle button** to reshuffle the queue. Changing filters also reshuffles.
- **Subject filter**: multi-select dropdown with checkboxes, select/deselect all. Subjects displayed as-is (e.g., `math-calculus`), no display-name mapping.
- **Label filter**: freeform labels with intersection logic (questions must have ALL selected labels). Labels shown as pills; click to add, "x" to remove.
- **Search**: unified search input showing matching labels (with "+" to add to filter) and matching flashcards (click to jump to card).
- **Queue navigation**: forward/backward through the queue with prev/next buttons and arrow keys. Queue panel shows upcoming flashcards.
- **Sort options**: most unfamiliar, random, most familiar, least seen.
- **Weighted repetition**: questions previously marked wrong or unsure appear more often in random mode.
- **Keyboard shortcuts**: Space/Enter to reveal answer, 1/2/3 to grade, arrow keys to navigate.
- **localStorage** for progress tracking (history keyed by question `name`).
- **Gist sync** for cross-device progress (GitHub personal access token + Gist API).
- **KaTeX** for LaTeX math rendering (loaded via CDN).
- **Light theme** with warm `#f5f0eb` background, white cards, earth-tone buttons.
- **Footer art** (mountains, clouds, birds SVG) fetched at runtime from `https://raw.githubusercontent.com/dcheng728/dcheng728.github.io/main/_includes/footer-art.html`.

## File Structure

```
docs/
  index.html      -- main page (minimal structure, controls populated by JS)
  style.css       -- light theme styles
  app.js          -- quiz logic, filters, search, queue nav, localStorage, gist sync
  questions.js    -- all 189 questions bundled as JS
```

## Question Schema

Each question in `questions.js` has:

| Field         | Type     | Description                                    |
|---------------|----------|------------------------------------------------|
| `name`        | string   | Very succinct summary used as unique identifier (e.g., `derivative of $\sin(x)$`). Should be as short as possible while remaining unambiguous. Displayed in the queue list with KaTeX rendering. |
| `question`    | string   | Full question text with LaTeX                  |
| `answer`      | string   | Answer text with LaTeX                         |
| `explanation` | string   | Explanation connecting to physics              |
| `subject`     | string   | Exactly one subject (e.g., `math-calculus`)    |
| `labels`      | string[] | Freeform tags (e.g., `["derivatives", "basic"]`) |

### Subjects (15)

`math-calculus`, `math-linear-algebra`, `math-differential-equations`, `math-complex-analysis`, `math-discrete`, `math-probability`, `math-trigonometry`, `math-special-functions`, `math-group-theory`, `classical-mechanics`, `electromagnetism`, `quantum-mechanics`, `statistical-mechanics`, `relativity`, `quantum-field-theory`

### History Format (localStorage `quiz-history`)

```json
[{"name": "derivative of $\\sin(x)$", "grade": "right", "timestamp": "2026-03-18T..."}]
```

## Deployment

Target: GitHub Pages (static hosting). Also works with `file://` since questions are bundled in JS, not fetched as JSON.

## Writing `name` vs `question`

The `name` is a very succinct label; the `question` is the full prompt the student sees.

| `name` | `question` |
|--------|-----------|
| `derivative of $\sin(x)$` | What is $\frac{d}{dx}\sin(x)$? |
| `Feynman rules in $\lambda\phi^4$` | In $\lambda\phi^4$ scalar field theory, what are the Feynman rules in momentum space? |
| `formula for variance and STD` | Express the variance $\text{Var}[X]$ in terms of expectations. What is the standard deviation? |
| `Gaussian integral` | Evaluate $\int_{-\infty}^{\infty} e^{-x^2}\, dx$. |

- **Name**: shortest unambiguous phrase that identifies the topic. Can include LaTeX. Think "index entry."
- **Question**: the full, precise question a student should be able to answer from memory.

## Question Style Guidelines

- Frame questions the way a **physicist** would think about them, not a pure mathematician.
- Prefer "expand to second order for small $x$" over "write the Maclaurin series."
- Prefer concrete physical intuition over formal definitions.
- Answers should be the quick, practical result a physicist would recall.
- Explanations should connect to physics applications.

## Future Ideas

- Personalized question lists based on familiarity (e.g., prep for reading a specific paper)
- Spaced repetition (more sophisticated than current weighted random)
- Adding more questions over time
