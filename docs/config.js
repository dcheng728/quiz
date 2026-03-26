const CONFIG = {
    // Familiarity score awarded for each self-grade
    gradeScores: { right: 1, unsure: 0.3, wrong: 0.01 },
    // Exponential decay time constant in hours (weight drops to 1/e after this many hours)
    familiarityTau: 192,

    // Metric signature conventions
    conventions: [
        { context: 'QFT', signature: 'Mostly minus', metric: '\\mathrm{diag}(+,-,-,-)' },
        { context: 'GR, String theory', signature: 'Mostly plus', metric: '\\mathrm{diag}(-,+,+,+)' },
    ],
    // Additional convention notes (supports LaTeX)
    conventionNotes: 'Natural units: $\\hbar = c = 1$ unless stated otherwise. SI units for electromagnetism.',

    // AI queue curation
    // Auto-detects provider from key format:
    //   sk-ant-* → Anthropic, sk-or-* → OpenRouter, ghp_/github_pat_* → GitHub Models
    // Override with provider: 'anthropic', 'openrouter', or 'github'
    ai: {
        model: {
            anthropic: 'claude-sonnet-4-20250514',
            openrouter: 'google/gemini-2.5-flash',
            github: 'gpt-4o',
        },
        anthropicModels: [
            { id: 'claude-sonnet-4-20250514', label: 'Sonnet 4' },
            { id: 'claude-opus-4-20250514', label: 'Opus 4' },
            { id: 'claude-haiku-4-5-20251001', label: 'Haiku 4.5' },
        ],
        maxTokens: 1024,
        questionsPerBatch: 15,
    },
};
