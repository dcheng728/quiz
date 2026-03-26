### derivative of $\sin(x)$
difficulty: basic
labels: derivatives

What is the derivative of $\sin(x)$?

---

$\cos(x)$

---

Follows directly from the limit definition or from the Taylor series of $\sin(x)$.

===

### derivative of $e^{ax}$
difficulty: basic
labels: derivatives

What is the derivative of $e^{ax}$?

---

$a e^{ax}$

---

The exponential function is its own derivative, scaled by the chain rule factor $a$.

===

### derivative of $\ln(x)$
difficulty: basic
labels: derivatives

What is the derivative of $\ln(x)$?

---

$\frac{1}{x}$

---

Follows from the inverse function theorem applied to $e^x$.

===

### Gaussian integral
difficulty: basic
labels: integrals

What is the Gaussian integral: $\int_{-\infty}^{+\infty} e^{-x^2} \, dx$?

---

$\sqrt{\pi}$

---

Classic trick: square the integral, convert to polar coordinates, and evaluate the resulting $r$ integral.

===

### $\int \frac{1}{x}\, dx$
difficulty: basic
labels: integrals

What is $\int \frac{1}{x} \, dx$?

---

$\ln|x| + C$

---

This is the antiderivative definition of the natural logarithm.

===

### Gamma function integral
difficulty: intermediate
labels: integrals

What is $\int_0^\infty x^{n-1} e^{-x} \, dx$?

---

$\Gamma(n) = (n-1)!$ for positive integers $n$

---

This defines the Gamma function, which generalizes the factorial to non-integer arguments.

===

### divergence theorem
difficulty: basic
labels: vector-calculus

State the divergence theorem (Gauss's theorem).

---

The volume integral of $\nabla \cdot \vec{F}$ equals the surface integral of $\vec{F} \cdot d\vec{A}$ over the closed boundary surface: $\int_V (\nabla \cdot \vec{F}) \, dV = \oint_S \vec{F} \cdot d\vec{A}$

---

Converts a volume integral of a divergence into a flux integral over the enclosing surface. Fundamental in electrostatics (Gauss's law).

===

### Stokes' theorem
difficulty: basic
labels: vector-calculus

State Stokes' theorem.

---

The surface integral of $\nabla \times \vec{F}$ equals the line integral of $\vec{F}$ around the boundary curve: $\int_S (\nabla \times \vec{F}) \cdot d\vec{A} = \oint_C \vec{F} \cdot d\vec{l}$

---

Relates the curl of a vector field over a surface to its circulation around the boundary. Underlies Faraday's law and Ampere's law.

===

### $\nabla \cdot (\nabla \times \vec{F})$
difficulty: basic
labels: vector-calculus

What is $\nabla \cdot (\nabla \times \vec{F})$ for any smooth vector field $\vec{F}$?

---

Zero

---

$\nabla \cdot (\nabla \times \vec{F}) = 0$ identically. This is why magnetic monopoles are absent in Maxwell's equations: $\nabla \cdot \vec{B} = 0$ follows from $\vec{B} = \nabla \times \vec{A}$.

===

### $\nabla \times (\nabla f)$
difficulty: basic
labels: vector-calculus

What is $\nabla \times (\nabla f)$ for any smooth scalar field $f$?

---

Zero

---

$\nabla \times (\nabla f) = 0$ identically. This is why conservative forces have zero curl: if $\vec{F} = -\nabla V$, then $\nabla \times \vec{F} = 0$.

===

### $e^x$ expansion
difficulty: basic
labels: series

Expand $e^x$ to third order for small $x$.

---

$1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$

---

The general pattern is $\sum \frac{x^n}{n!}$. Used everywhere  --  thermal factors $e^{-\beta E}$, time evolution $e^{-iHt/\hbar}$, etc.

===

### $\frac{1}{1-x}$ expansion
difficulty: basic
labels: series

Expand $\frac{1}{1-x}$ to second order for small $x$.

---

$1 + x + x^2 + \cdots$

---

The geometric series. In physics, used constantly for perturbative expansions  --  e.g., expanding $\frac{1}{1 - \frac{v^2}{c^2}}$ or gravitational potentials with small corrections.

===

### radial Laplacian in spherical coordinates
difficulty: intermediate
labels: multivariable

What is the Laplacian ($\nabla^2$) in spherical coordinates acting on a function that depends only on $r$?

---

$\frac{1}{r^2} \frac{d}{dr}\left(r^2 \frac{df}{dr}\right)$

---

The angular parts vanish for spherically symmetric functions. Equivalently, $\frac{1}{r} \frac{d^2}{dr^2}(r f)$.

===

### gradient in spherical coordinates
difficulty: intermediate
labels: multivariable

What is the gradient in spherical coordinates $(r, \theta, \phi)$?

---

$\nabla f = \frac{\partial f}{\partial r} \hat{r} + \frac{1}{r}\frac{\partial f}{\partial \theta} \hat{\theta} + \frac{1}{r \sin\theta}\frac{\partial f}{\partial \phi} \hat{\phi}$

---

The scale factors $1$, $r$, and $r \sin\theta$ come from the metric of spherical coordinates.

===

### Leibniz integral rule
difficulty: intermediate
labels: integrals

State the Leibniz integral rule with variable limits, and use differentiation under the integral sign to evaluate $\int_0^\infty \frac{\sin x}{x}\,dx$.

---

$\frac{d}{dt} \int_{a(t)}^{b(t)} f(x,t) \, dx = \int_{a(t)}^{b(t)} \frac{\partial f}{\partial t} \, dx + f(b,t) b'(t) - f(a,t) a'(t)$. For $\int_0^\infty \frac{\sin x}{x}\,dx$: introduce $I(t) = \int_0^\infty \frac{\sin x}{x} e^{-tx}\,dx$ for $t \geq 0$. Differentiating under the integral: $I'(t) = -\int_0^\infty \sin(x)\,e^{-tx}\,dx = -\frac{1}{1+t^2}$. Integrating: $I(t) = -\arctan(t) + C$. Since $I(\infty) = 0$, we get $C = \pi/2$, so $I(0) = \pi/2$.

---

Feynman's favorite trick: introduce a parameter to make a hard integral tractable. The constant-limits case ($\partial_t \int_a^b f\,dx = \int_a^b \partial_t f\,dx$) is just swapping the derivative inside. The power of the technique is in choosing the right parametrization -- here, the $e^{-tx}$ regulator turns $\sin(x)/x$ into a Laplace transform that can be done in closed form.

===

### finite geometric sum
difficulty: basic
labels: series

What is the finite geometric sum $\sum_{i=0}^{n} c^i$ for $c \neq 1$?

---

$\frac{c^{n+1} - 1}{c - 1}$

---

Used when truncating perturbation series after $n$ terms. For $c = 1$, the sum is simply $n + 1$.

===

### infinite geometric series
difficulty: basic
labels: series

What does the infinite geometric series $\sum_{i=0}^{\infty} c^i$ converge to, and when?

---

$\frac{1}{1-c}$ for $|c| < 1$. Also: $\sum_{i=1}^{\infty} c^i = \frac{c}{1-c}$

---

The convergence condition $|c| < 1$ is crucial. This is the foundation of perturbative expansions throughout physics.

===

### values of $\pi$ and $e$
difficulty: basic
labels: constants

What are the numerical values of $\pi$ and $e$ to five decimal places?

---

$\pi \approx 3.14159$, $e \approx 2.71828$

---

Essential for quick order-of-magnitude estimates. Useful mnemonics: $\pi \approx 22/7$ and $e \approx 19/7$.

===

### change-of-base formula
difficulty: basic
labels: logarithms

State the change-of-base formula for logarithms.

---

$\log_b x = \frac{\log_a x}{\log_a b}$

---

This lets you convert between any two logarithm bases. In physics, you often switch between $\ln$ (natural) and $\log_{10}$.

===

### quadratic formula
difficulty: basic
labels: algebra

State the quadratic formula for the roots of $ax^2 + bx + c = 0$.

---

$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

---

The discriminant $b^2 - 4ac$ determines the nature of roots: positive gives two real roots, zero gives one degenerate root, negative gives complex conjugate pairs.

===

### $e$ as series
difficulty: basic
labels: constants

Express Euler's number $e$ as an infinite series.

---

$e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} + \cdots$

---

This follows from evaluating the Taylor series of $e^x$ at $x = 1$. Also: $e = \lim_{n \to \infty} (1 + 1/n)^n$.

===

### product rule
difficulty: basic
labels: derivatives

State the product rule for differentiation.

---

$\frac{d(uv)}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}$

---

In quantum mechanics, this appears when differentiating products of wavefunctions, e.g., computing $\hat{p}(\psi_1 \psi_2)$.

===

### quotient rule
difficulty: basic
labels: derivatives

State the quotient rule for differentiation.

---

$\frac{d(u/v)}{dx} = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$

---

Less commonly needed than the product rule in physics, but useful when differentiating ratios like efficiency or transition rates.

===

### $\frac{d}{dx}(\arctan u)$
difficulty: basic
labels: derivatives

What is $\frac{d}{dx}(\arctan u)$?

---

$\frac{1}{1+u^2}\frac{du}{dx}$

---

Appears when integrating Lorentzian line shapes and in scattering phase shifts. The integral form $\int \frac{dx}{1+x^2} = \arctan x$ is equally important.

===

### $\frac{d}{dx}(\arcsin u)$
difficulty: basic
labels: derivatives

What is $\frac{d}{dx}(\arcsin u)$?

---

$\frac{1}{\sqrt{1-u^2}}\frac{du}{dx}$

---

The domain restriction $|u| < 1$ reflects the range of $\sin$. Related: $\frac{d}{dx}(\arccos u) = \frac{-1}{\sqrt{1-u^2}}\frac{du}{dx}$.

===

### integration by parts
difficulty: basic
labels: integrals

State integration by parts.

---

$\int u \frac{dv}{dx} dx = uv - \int v \frac{du}{dx} dx$

---

The integral analog of the product rule. Essential for evaluating matrix elements in quantum mechanics, e.g., showing that $\hat{p}$ is Hermitian.

===

### $\int \frac{dx}{1+x^2}$
difficulty: basic
labels: integrals

What is $\int \frac{dx}{1+x^2}$?

---

$\arctan x + C$

---

The Fourier transform of a Lorentzian peak. Also appears in scattering cross-section integrals.

===

### $\int \sec x\, dx$
difficulty: intermediate
labels: integrals

What is $\int \sec x \, dx$?

---

$\ln|\sec x + \tan x| + C$

---

Multiply top and bottom by $(\sec x + \tan x)$; the numerator is $d(\sec x + \tan x)$, giving $\int du/u$.

===

### $\ln(1+x)$ expansion
difficulty: basic
labels: series

Expand $\ln(1+x)$ for small $x$.

---

$x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{i=1}^{\infty}(-1)^{i+1}\frac{x^i}{i}$

---

Converges for $-1 < x \leq 1$. In thermodynamics, $\ln(1+x) \approx x$ for small $x$ is used constantly  --  e.g., in Stirling's approximation and entropy of mixing.

===

### $\sin x$ expansion
difficulty: basic
labels: series

Expand $\sin x$ for small $x$.

---

$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = \sum_{i=0}^{\infty}(-1)^i \frac{x^{2i+1}}{(2i+1)!}$

---

Only odd powers appear (since $\sin$ is an odd function). The small-angle approximation $\sin x \approx x$ is the leading term.

===

### $\cos x$ expansion
difficulty: basic
labels: series

Expand $\cos x$ for small $x$.

---

$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = \sum_{i=0}^{\infty}(-1)^i \frac{x^{2i}}{(2i)!}$

---

Only even powers appear (since $\cos$ is an even function). For small oscillations, $\cos \theta \approx 1 - \theta^2/2$ gives the harmonic potential.

===

### binomial series $(1+x)^n$
difficulty: basic
labels: series

State the binomial series expansion of $(1+x)^n$ for arbitrary $n$.

---

$(1+x)^n = \sum_{i=0}^{\infty} \binom{n}{i} x^i = 1 + nx + \frac{n(n-1)}{2}x^2 + \cdots$

---

For integer $n \geq 0$ the series terminates. For non-integer or negative $n$ it is infinite but converges for $|x|<1$. Physicists use this for $(1+\epsilon)^n \approx 1 + n\epsilon$ constantly  --  e.g., relativistic $\gamma \approx 1 + v^2/2c^2$.

===

### Euler's formula
difficulty: basic
labels: complex-exponentials

State Euler's formula relating the complex exponential to trigonometric functions.

---

$e^{ix} = \cos x + i\sin x$, and the special case $e^{i\pi} = -1$

---

The most important identity in physics. Plane waves $e^{i(kx - \omega t)}$, phasors, Fourier transforms, and quantum wavefunctions all follow from this.

===

### $\sinh x$ and $\cosh x$
difficulty: basic
labels: hyperbolic-functions

Define $\sinh x$ and $\cosh x$ in terms of exponentials.

---

$\sinh x = \frac{e^x - e^{-x}}{2}$, $\cosh x = \frac{e^x + e^{-x}}{2}$

---

The catenary curve is $y = a\cosh(x/a)$. In special relativity, Lorentz boosts are hyperbolic rotations: $ct' = ct\cosh\phi - x\sinh\phi$ where $\phi$ is the rapidity.

===

### $\cosh^2 x - \sinh^2 x$
difficulty: basic
labels: hyperbolic-functions

What is $\cosh^2 x - \sinh^2 x$?

---

$1$

---

The hyperbolic analog of $\sin^2 + \cos^2 = 1$. This identity reflects the invariance of the spacetime interval under Lorentz boosts, since $\cosh^2\phi - \sinh^2\phi = 1$.

===

### $\tanh x$ and hyperbolic identities
difficulty: basic
labels: hyperbolic-functions

Define $\tanh x$ and list two other key hyperbolic identities.

---

$\tanh x = \frac{e^x - e^{-x}}{e^x + e^{-x}} = \frac{\sinh x}{\cosh x}$. Also: $\cosh x + \sinh x = e^x$ and $\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$.

---

In relativity, the velocity addition formula $\beta = \tanh\phi$ maps the rapidity $\phi$ to velocity. The addition formula for $\sinh$ gives the rapidity addition rule.

===

### saddle-point approximation
difficulty: intermediate
labels: asymptotic-methods

For an integral $I = \int e^{N f(x)} \, dx$ with large $N$, what is the leading saddle-point (steepest descent) approximation?

---

$I \approx e^{N f(x_0)} \sqrt{\frac{2\pi}{N |f''(x_0)|}}$, where $f'(x_0) = 0$

---

The integral is dominated by the neighborhood of the maximum of $f(x)$, with Gaussian fluctuations giving the prefactor. This is the workhorse for evaluating partition functions, path integrals, and matrix model integrals in the large-$N$ limit.

===

### asymptotic series
difficulty: intermediate
labels: asymptotic-methods

A series $\sum a_n x^n$ is asymptotic to $f(x)$ as $x \to 0$. Does it need to converge?

---

No. The partial sum $\sum_{n=0}^{N} a_n x^n$ approximates $f(x)$ with error $O(x^{N+1})$ at fixed $N$ as $x \to 0$, even if the series diverges for any nonzero $x$.

---

Perturbative expansions in physics are almost always asymptotic, not convergent. The optimal truncation point is typically around $N \sim 1/g$, after which adding more terms makes the approximation worse.

===
