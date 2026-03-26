### $\frac{dy}{dx} = ky$
difficulty: basic
labels: odes

What is the general solution to $\frac{dy}{dx} = ky$?

---

$y(x) = A e^{kx}$, where $A$ is determined by initial conditions.

---

The exponential function is the eigenfunction of the derivative operator. Ubiquitous in radioactive decay ($k < 0$) and population growth ($k > 0$).

===

### derivative of $\frac{1}{r}$
difficulty: basic
labels:

What is the derivative of $\frac{1}{r}$ where $r =\sqrt{x^m x^m}$?

---

$-\frac{x^m}{r}\frac{1}{r}$

---

Should compute in 5 sec.

===

### simple harmonic oscillator
difficulty: basic
labels: odes

What is the general solution to the simple harmonic oscillator equation: $\frac{d^2x}{dt^2} + \omega^2 x = 0$?

---

$x(t) = A \cos(\omega t) + B \sin(\omega t)$, equivalently $x(t) = C e^{i\omega t} + D e^{-i\omega t}$.

---

The most important ODE in physics. Appears in mass-spring systems, LC circuits, small oscillations about equilibrium, and quantum harmonic oscillator.

===

### separation of variables
difficulty: basic
labels: pdes

What is separation of variables for PDEs?

---

Assume the solution factors as a product of functions of each variable, e.g., $u(x,t) = X(x)T(t)$, then substitute into the PDE to get separate ODEs for each factor.

---

Each separated ODE involves only one variable, so both sides must equal a constant (the separation constant). Standard technique for wave, heat, and Laplace equations.

===

### Green's function
difficulty: intermediate
labels: greens-functions

What is the Green's function $G(x, x')$ conceptually?

---

The response of a linear differential operator $L$ to a point source: $L G(x, x') = \delta(x - x')$. The solution to $Lu = f$ is then $u(x) = \int G(x, x') f(x') \, dx'$.

---

Green's functions are propagators in physics. In electrostatics, the Green's function for the Laplacian is $\frac{1}{4\pi |\vec{x} - \vec{x}'|}$.

===

### heat equation
difficulty: basic
labels: pdes

What is the heat equation in one dimension?

---

$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$, where $\alpha$ is the thermal diffusivity.

---

Parabolic PDE. Solutions smooth out over time (irreversible). The fundamental solution is a spreading Gaussian.

===

### wave equation
difficulty: basic
labels: pdes

What is the wave equation in one dimension?

---

$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$, where $c$ is the wave speed.

---

Hyperbolic PDE. General solution is $u = f(x - ct) + g(x + ct)$  --  two counter-propagating waves (d'Alembert's solution).

===

### Sturm-Liouville problem
difficulty: intermediate
labels: sturm-liouville

What is a Sturm-Liouville problem?

---

An eigenvalue problem of the form: $\frac{d}{dx}\left[p(x) \frac{dy}{dx}\right] + q(x) y = -\lambda w(x) y$, with boundary conditions on an interval $[a, b]$.

---

A regular Sturm-Liouville problem (with $p, w > 0$ on $[a,b]$) has countably infinite real eigenvalues $\lambda_1 < \lambda_2 < \cdots \to \infty$, each with a unique eigenfunction $y_n(x)$. These eigenfunctions form an orthonormal basis of $L^2([a,b], w)$: $\int_a^b y_m(x) y_n(x) w(x)\,dx = \delta_{mn}$, and any square-integrable function can be expanded as $f(x) = \sum c_n y_n(x)$. Many physics eigenvalue problems are Sturm-Liouville: Legendre ($p = 1-x^2$, $w = 1$), Bessel, Hermite, and Laguerre equations. The Schrodinger equation $-\frac{\hbar^2}{2m}\psi'' + V\psi = E\psi$ is also Sturm-Liouville, which is why energy eigenstates form a complete orthonormal set.

===

### Wronskian
difficulty: intermediate
labels: odes

What is the Wronskian and what does it test?

---

For two functions $y_1$ and $y_2$: $W = y_1 y_2' - y_2 y_1'$. If $W \neq 0$, the functions are linearly independent.

---

Used to verify you have a complete set of solutions to a second-order ODE. If $W = 0$ everywhere, the solutions are linearly dependent.

===

### Frobenius method
difficulty: intermediate
labels: odes

What is the Frobenius method?

---

A method to find series solutions of ODEs near regular singular points by assuming $y = \sum a_n x^{n+s}$, where $s$ is determined by the indicial equation.

---

Essential for solving Bessel's equation, Legendre's equation, and the hydrogen atom radial equation near the origin.

===

### Laplace's equation
difficulty: basic
labels: pdes

What is Laplace's equation and what are its solutions called?

---

$\nabla^2 u = 0$. Its solutions are called harmonic functions.

---

Describes electrostatic potential in charge-free regions, steady-state heat flow, and gravitational potential in vacuum. Solutions satisfy the mean value property.

===

### Airy function
difficulty: intermediate
labels: special-functions

The Airy function $\mathrm{Ai}(x)$ solves which ODE, and what is its qualitative behavior?

---

$\frac{d^2y}{dx^2} - xy = 0$. It oscillates for $x < 0$ and decays exponentially $\sim e^{-\frac{2}{3}x^{3/2}}$ for $x > 0$.

---

Airy functions arise wherever a WKB solution transitions between oscillatory and exponential behavior (classical turning points). They also appear in random matrix theory via the Tracy-Widom distribution, and in optics near caustics.

===
