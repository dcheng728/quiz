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
    // Auto-detects provider from key: sk-ant-* → Anthropic, otherwise → OpenRouter
    // Override with provider: 'anthropic' or 'openrouter'
    ai: {
        provider: 'openrouter',
        model: 'google/gemini-2.5-flash',
        maxTokens: 512,
        questionsPerBatch: 15,
    },
};
