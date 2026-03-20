const CONFIG = {
    // Familiarity score awarded for each self-grade
    gradeScores: { right: 1, unsure: 0.3, wrong: 0.01 },
    // Exponential decay time constant in hours (weight drops to 1/e after this many hours)
    familiarityTau: 192,
};
