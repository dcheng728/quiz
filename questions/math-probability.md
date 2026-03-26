### expectation value $E[X]$
difficulty: basic
labels: expectation

What is the expectation value $E[X]$ for a discrete and for a continuous random variable?

---

Discrete: $E[g(X)] = \sum_x g(x) \Pr[X = x]$. Continuous: $E[g(X)] = \int_{-\infty}^{\infty} g(x) p(x) \, dx$

---

In quantum mechanics, the expectation value of an observable $\hat{A}$ is $\langle \hat{A} \rangle = \langle \psi|\hat{A}|\psi \rangle$, which is the continuous analog weighted by $|\psi|^2$.
===

### formula for variance and STD
difficulty: basic
labels: variance

Express the variance $\text{Var}[X]$ in terms of expectations. What is the standard deviation?

---

$\text{Var}[X] = E[X^2] - (E[X])^2$. The standard deviation is $\sigma = \sqrt{\text{Var}[X]}$.

---

This 'computational formula' is often easier to use than the definition $E[(X - \mu)^2]$. In physics, $\sigma$ quantifies fluctuations  --  e.g., energy fluctuations in the canonical ensemble: $\langle (\Delta E)^2 \rangle = k_B T^2 C_V$.
===

### Bayes' theorem
difficulty: basic
labels: bayes-theorem

State Bayes' theorem.

---

$\Pr[A_i | B] = \frac{\Pr[B | A_i] \Pr[A_i]}{\sum_{j=1}^{n} \Pr[A_j] \Pr[B | A_j]}$

---

Bayes' theorem updates prior probabilities given new evidence. Used in data analysis, parameter estimation, and interpreting detector signals with known false-positive rates.
===

### linearity of expectation
difficulty: basic
labels: expectation

State the linearity of expectation. When does $E[XY] = E[X] \cdot E[Y]$?

---

$E[X + Y] = E[X] + E[Y]$ (always), $E[cX] = cE[X]$ (always). But $E[XY] = E[X] \cdot E[Y]$ only when $X$ and $Y$ are independent.

---

Linearity holds even for correlated variables  --  a surprisingly powerful result. The product rule requires independence.
===

### Markov and Chebyshev inequalities
difficulty: intermediate
labels: inequalities

State the Markov and Chebyshev inequalities.

---

Markov: $\Pr[|X| \geq \lambda E[X]] \leq \frac{1}{\lambda}$. Chebyshev: $\Pr[|X - E[X]| \geq \lambda \sigma] \leq \frac{1}{\lambda^2}$.

---

These bound the probability of large deviations from the mean without knowing the full distribution. Chebyshev guarantees at least $1 - 1/k^2$ of the probability lies within $k$ standard deviations.
===

### inclusion-exclusion for two events
difficulty: basic
labels: probability-rules

State the inclusion-exclusion formula for $\Pr[A \cup B]$. When does it simplify?

---

$\Pr[A \cup B] = \Pr[A] + \Pr[B] - \Pr[A \cap B]$. If $A$ and $B$ are mutually exclusive ($A \cap B = \emptyset$), this simplifies to $\Pr[A] + \Pr[B]$. Separately, if $A$ and $B$ are independent, $\Pr[A \cap B] = \Pr[A]\Pr[B]$.

---

Mutually exclusive (no overlap) and independent (knowing one doesn't affect the other) are different conditions. For $n$ events, inclusion-exclusion generalizes: $\Pr[\bigcup_i A_i] = \sum_i \Pr[A_i] - \sum_{i<j} \Pr[A_i \cap A_j] + \cdots$
===

### conditional probability
difficulty: basic
labels: probability-rules

State the conditional probability formula.

---

$\Pr[A|B] = \frac{\Pr[A \cap B]}{\Pr[B]}$

---

This defines the probability of $A$ given that $B$ has occurred. It is the starting point for deriving Bayes' theorem.
===

### binomial distribution
difficulty: basic
labels: distributions

What is the binomial distribution? Give its PMF and expected value.

---

$\Pr[X = k] = \binom{n}{k} p^k (1-p)^{n-k}$ with $E[X] = np$.

---

Describes $k$ successes in $n$ independent trials, each with probability $p$. In quantum mechanics: the probability of getting $k$ spin-up outcomes in $n$ Stern-Gerlach measurements on identically prepared spin-$\frac{1}{2}$ particles.
===

### Poisson distribution
difficulty: basic
labels: distributions

What is the Poisson distribution? Give its PMF and expected value.

---

$\Pr[X = k] = \frac{e^{-\lambda} \lambda^k}{k!}$ with $E[X] = \lambda$.

---

Describes the number of events in a fixed interval when events occur independently at a constant average rate $\lambda$  --  radioactive decays, photon counts, cosmic ray arrivals.
===

### Gaussian distribution
difficulty: basic
labels: distributions

Write the probability density function for the normal (Gaussian) distribution.

---

$p(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2 / 2\sigma^2}$ with $E[X] = \mu$.

---

The central limit theorem explains why the Gaussian appears everywhere: the sum of many independent random variables tends toward a normal distribution regardless of their individual distributions.
===

### geometric distribution
difficulty: basic
labels: distributions

What is the geometric distribution? Give its PMF and expected value.

---

$\Pr[X = k] = p(1-p)^{k-1}$ with $E[X] = \frac{1}{p}$.

---

Models the number of trials until the first success. The 'memoryless' property of radioactive decay is connected: the waiting time for the first decay is geometrically (or exponentially) distributed.
===

### coupon collector problem
difficulty: intermediate
labels: coupon-collector

In the coupon collector problem, what is the expected number of draws to collect all $n$ types?

---

$nH_n = n\sum_{i=1}^{n}\frac{1}{i} \approx n \ln n$

---

$H_n$ is the $n$-th harmonic number. This result is useful for estimating how many samples are needed to explore all states of a discrete system.
===
