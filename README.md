# Physics & Math Daily Quiz

A static flashcard quiz app for GitHub Pages. Helps a theoretical physics student stay sharp on fundamental math and physics.

## Project Structure

```
src/                 source files (HTML, CSS, JS)
questions/           question files, one per subject (e.g., quantum-mechanics.md)
docs/                generated output for GitHub Pages (do not edit)
build.py             builds docs/ from src/ and questions/
environment.yml      conda environment specification
```

## Setup

```bash
conda env create -f environment.yml
conda activate quiz
```

## Adding / Editing Questions

Questions live in `questions/`, one file per subject. To add a question, open the subject file and append:

```
### name of question
difficulty: basic
labels: tag1, tag2

Question text with $\LaTeX$?

---

Answer text.

---

Explanation text.

===
```

## Building

After editing anything in `src/` or `questions/`, rebuild:

```bash
python build.py
```

This generates `docs/` from the source files. Do not edit files in `docs/` directly.

## Deployment

Push to GitHub. The app is served from the `docs/` folder via GitHub Pages.
