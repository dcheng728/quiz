### Legendre polynomials
difficulty: basic
labels: legendre-polynomials

What ODE do the Legendre polynomials $P_l(x)$ satisfy, and where do they arise in physics?

---

$(1-x^2)P_l'' - 2xP_l' + l(l+1)P_l = 0$. They arise as the angular part of solutions to Laplace's equation in spherical coordinates.

---

The first few: $P_0 = 1$, $P_1 = x$, $P_2 = (3x^2 - 1)/2$. Orthogonality: $\int_{-1}^{1} P_l P_{l'} dx = \frac{2}{2l+1}\delta_{ll'}$. Every multipole expansion in electrostatics uses them.

===

### spherical harmonics $Y_l^m$
difficulty: basic
labels: spherical-harmonics

What are the spherical harmonics $Y_l^m(\theta, \phi)$, and what is their orthonormality relation?

---

$Y_l^m(\theta, \phi) = N_{lm} P_l^m(\cos\theta) e^{im\phi}$, where $P_l^m$ are associated Legendre functions. They satisfy $\int Y_l^m Y_{l'}^{m'*} d\Omega = \delta_{ll'}\delta_{mm'}$.

---

Spherical harmonics are eigenfunctions of $\hat{L}^2$ and $\hat{L}_z$ on the sphere. Any function on the sphere can be expanded in them  --  the angular analog of a Fourier series. They appear in hydrogen atom wavefunctions, multipole expansions, and CMB analysis.

===

### Bessel functions
difficulty: intermediate
labels: bessel-functions

What ODE do the Bessel functions $J_n(x)$ satisfy, and where do they appear in physics?

---

$x^2 y'' + xy' + (x^2 - n^2)y = 0$. The general solution is $y = AJ_n(x) + BY_n(x)$, where $Y_n$ is the Bessel function of the second kind (singular at the origin).

---

Bessel functions appear whenever you separate the wave, Helmholtz, or diffusion equation in cylindrical coordinates: vibrating drum heads, waveguide modes, diffraction from circular apertures.

===

### Fourier transform
difficulty: basic
labels: fourier-transform

Write the Fourier transform and its inverse for a function $f(x)$ (physicist's convention).

---

$$\tilde{f}(k) = \int_{-\infty}^{\infty} f(x) e^{-ikx} dx, \qquad f(x) = \int_{-\infty}^{\infty} \tilde{f}(k) \frac{e^{ikx}}{2\pi} dk$$

---

Key properties: convolution becomes multiplication, differentiation becomes $ik$, and the Fourier transform of a Gaussian is a Gaussian. Parseval's theorem: $\int |f|^2 dx = \int |\tilde{f}|^2 dk/(2\pi)$.

===

### Fourier transform of Gaussian
difficulty: intermediate
labels: fourier-transform

What is the Fourier transform of a Gaussian $f(x) = e^{-ax^2}$?

---

$$\tilde{f}(k) = \sqrt{\frac{\pi}{a}} \, e^{-k^2/(4a)}$$A narrow Gaussian in $x$ becomes wide in $k$, and vice versa.

---

This is a manifestation of the uncertainty principle: $\Delta x \cdot \Delta k \geq 1/2$, with equality for Gaussians. The Gaussian is the unique function that minimizes the uncertainty product.

===

### Helmholtz Green's function
difficulty: intermediate
labels: greens-functions

What is the Green's function for the Helmholtz equation $(\nabla^2 + k^2)G = -\delta^3(\vec{r})$ in 3D?

---

$$G(\vec{r}) = \frac{e^{\pm ikr}}{4\pi r}$$The $+$ sign gives the retarded (outgoing wave) Green's function; the $-$ sign gives the advanced (incoming wave) Green's function.

---

This is the starting point for scattering theory. The scattered wave is constructed by convolving the Green's function with the source. It reduces to the electrostatic $1/(4\pi r)$ when $k = 0$.

===

### Laplace transform
difficulty: basic
labels: laplace-transform

Write the definition of the Laplace transform and state two key properties.

---

$$F(s) = \int_0^\infty f(t) e^{-st} dt$$Properties: $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$ (derivatives become algebraic), and $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$ (frequency shifting).

---

The Laplace transform converts ODEs with initial conditions into algebraic equations. Especially useful for linear circuits, control theory, and solving the damped driven harmonic oscillator.

===

### Hermite polynomials
difficulty: intermediate
labels: hermite-polynomials

What ODE do the Hermite polynomials $H_n(x)$ satisfy, and where do they appear in quantum mechanics?

---

$H_n'' - 2xH_n' + 2nH_n = 0$. The harmonic oscillator wavefunctions are $\psi_n(x) = N_n H_n(\alpha x) e^{-\alpha^2 x^2/2}$, where $\alpha = \sqrt{m\omega/\hbar}$.

---

First few: $H_0 = 1$, $H_1 = 2x$, $H_2 = 4x^2 - 2$, $H_3 = 8x^3 - 12x$. Orthogonal with weight $e^{-x^2}$: $\int H_m H_n e^{-x^2} dx = \sqrt{\pi} \, 2^n n! \, \delta_{mn}$.

===

### Dirac delta representations
difficulty: intermediate
labels: delta-function

Write three useful representations of the Dirac delta function $\delta(x)$.

---

(1) Fourier: $\delta(x) = \int \frac{e^{ikx}}{2\pi} dk$. (2) Gaussian: $\delta(x) = \lim_{\epsilon \to 0} \frac{1}{\sqrt{2\pi}\epsilon} e^{-x^2/(2\epsilon^2)}$. (3) Lorentzian: $\delta(x) = \lim_{\epsilon \to 0} \frac{\epsilon}{\pi(x^2 + \epsilon^2)}$.

---

The Fourier representation is the most used  --  it is the completeness relation for plane waves. Also essential: $\delta(ax) = \delta(x)/|a|$ and $\delta(g(x)) = \sum_i \delta(x - x_i)/|g'(x_i)|$.

===

### spherical Bessel functions
difficulty: advanced
labels: spherical-bessel

What are the spherical Bessel functions, and where do they arise?

---

$j_l(x) = \sqrt{\frac{\pi}{2x}} J_{l+1/2}(x)$. The first two: $j_0(x) = \frac{\sin x}{x}$, $j_1(x) = \frac{\sin x}{x^2} - \frac{\cos x}{x}$. They solve the radial Helmholtz equation in spherical coordinates.

---

They appear in the partial wave expansion: $e^{ikr\cos\theta} = \sum_l (2l+1) i^l j_l(kr) P_l(\cos\theta)$. This is the starting point for partial wave analysis in quantum scattering theory.

===

### orthogonal polynomial families
difficulty: advanced
labels: orthogonal-polynomials

What general structure do Legendre, Hermite, and Laguerre polynomials share?

---

They are families of orthogonal polynomials satisfying Sturm-Liouville problems with weight $w(x)$: $\int p_m p_n w(x) dx = N_n \delta_{mn}$. Legendre: $w = 1$ on $[-1,1]$; Hermite: $w = e^{-x^2}$ on $(-\infty,\infty)$; Laguerre: $w = x^\alpha e^{-x}$ on $[0,\infty)$.

---

Laguerre polynomials appear in hydrogen radial wavefunctions. Sturm-Liouville theory guarantees completeness, so any reasonable function can be expanded in these polynomials on their domain.

===
