### Cauchy's integral theorem
difficulty: basic
labels: cauchy-theorem

State Cauchy's integral theorem.

---

If $f(z)$ is analytic (holomorphic) inside and on a simple closed contour $C$, then $\oint_C f(z) \, dz = 0$.

---

Analytic functions have zero 'circulation.' This is the complex-variable analog of a conservative field having zero line integral around a closed loop.

===

### residue theorem
difficulty: basic
labels: residues

State the residue theorem.

---

The contour integral of $f(z)$ around a closed curve $C$ equals $2\pi i$ times the sum of residues of $f$ at its poles enclosed by $C$: $\oint_C f(z) \, dz = 2\pi i \sum_k \text{Res}(f, z_k)$.

---

The primary tool for evaluating difficult real integrals by extending to the complex plane.

===

### $\int \frac{dx}{x^2+a^2}$ by contour
difficulty: basic
labels: contour-integrals

Evaluate $\int_{-\infty}^{\infty} \frac{dx}{x^2 + a^2}$ for $a > 0$ using contour integration.

---

$\frac{\pi}{a}$

---

Close in the upper half-plane. Simple pole at $z = ia$ with residue $\frac{1}{2ia}$. Result: $2\pi i \cdot \frac{1}{2ia} = \frac{\pi}{a}$. This is the prototype contour integral every physicist should know.

===

### residue at a simple pole
difficulty: intermediate
labels: residues

How do you compute the residue at a simple pole $z_0$ of $f(z) = \frac{g(z)}{h(z)}$ where $h(z_0) = 0$ and $h'(z_0) \neq 0$?

---

$\text{Res}(f, z_0) = \frac{g(z_0)}{h'(z_0)}$

---

This follows from L'Hopital-style reasoning: $\frac{z - z_0}{h(z)} \to \frac{1}{h'(z_0)}$ as $z \to z_0$.

===

### branch cuts
difficulty: intermediate
labels: branch-cuts

What is a branch cut, and why is it needed for functions like $\log(z)$ or $z^{1/2}$?

---

A branch cut is a curve in the complex plane across which a multi-valued function is discontinuous, chosen so the function becomes single-valued on the cut plane.

---

$\log(z) = \ln|z| + i\arg(z)$ is multi-valued because $\arg(z)$ changes by $2\pi$ around the origin. The standard branch cut for $\log(z)$ is the negative real axis.

===

### Cauchy-Riemann equations
difficulty: basic
labels: analyticity

What are the Cauchy-Riemann equations?

---

For $f(z) = u(x,y) + iv(x,y)$ to be analytic: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

---

These are the necessary and sufficient conditions (given continuity of partials) for complex differentiability. They imply both $u$ and $v$ are harmonic: $\nabla^2 u = \nabla^2 v = 0$.

===

### analytic continuation
difficulty: intermediate
labels: analytic-continuation

What is analytic continuation and why does a physicist care about it?

---

Given an analytic function $f(z)$ defined on a domain $D \subset \mathbb{C}$, an analytic continuation is an analytic function $g(z)$ on a larger domain $D' \supset D$ such that $g|_D = f$. By the identity theorem, if two analytic functions agree on a set with an accumulation point, they agree everywhere on their common domain -- so the continuation is unique when it exists. Physics applications: (1) Zeta function regularization -- $\zeta(s) = \sum_{n=1}^\infty n^{-s}$ converges only for $\text{Re}(s) > 1$, but its analytic continuation to $s = -1$ gives $\zeta(-1) = -\frac{1}{12}$, used to regularize the Casimir energy $\sum_{n=1}^\infty n$ in string theory and QFT. (2) Wick rotation -- continuing $t \to -i\tau$ maps the Minkowski metric to Euclidean signature, turning oscillatory path integrals $e^{iS}$ into convergent ones $e^{-S_E}$. (3) Feynman propagator -- the $i\epsilon$ prescription $1/(p^2 - m^2 + i\epsilon)$ selects the correct causal boundary conditions by deforming the integration contour in the complex energy plane.

---

The continuation of $\zeta(s)$ is constructed via the functional equation $\zeta(s) = 2^s \pi^{s-1} \sin(\pi s/2)\,\Gamma(1-s)\,\zeta(1-s)$, which relates values at $s$ to values at $1-s$. The statement $\sum n = -1/12$ is shorthand: the divergent series does not equal $-1/12$ in the ordinary sense, but the analytic continuation of the function it defines assigns that value at $s = -1$. In the Casimir effect, this regularization gives a finite, experimentally confirmed force between conducting plates. For Wick rotation, the key requirement is that the integrand has no singularities in the quadrant being rotated through -- the $i\epsilon$ prescription ensures this. References: Boas, Mathematical Methods in the Physical Sciences, Chapter 14; Ablowitz & Fokas, Complex Variables, Chapter 4; Peskin & Schroeder, Section 9.3 (Wick rotation and Euclidean field theory).

===

### $\int \frac{e^{iz}}{z^2+a^2}\, dz$
difficulty: intermediate
labels: contour-integrals

What is $\int_{-\infty}^{+\infty} \frac{e^{iz}}{z^2 + a^2} \, dz$ for $a > 0$?

---

$\frac{\pi}{a} e^{-a}$

---

Close the contour in the upper half-plane (since $e^{iz}$ decays there). The pole at $z = ia$ is enclosed. $\text{Res} = \frac{e^{-a}}{2ia}$. Result: $2\pi i \cdot \frac{e^{-a}}{2ia} = \frac{\pi e^{-a}}{a}$.

===

### extracting coefficients via contour integral
difficulty: intermediate
labels: contour-integrals

Given a generating function $f(z) = \sum_{N=0}^{\infty} a_N z^N$, how do you extract the coefficient $a_N$ using a contour integral?

---

$a_N = \frac{1}{2\pi i} \oint \frac{f(z)}{z^{N+1}} \, dz$

---

This is Cauchy's integral formula applied to Taylor coefficients. In practice it is how fixed-$N$ quantities are extracted from generating functions  --  the contour integral can then be evaluated by saddle-point methods for large $N$.

===
