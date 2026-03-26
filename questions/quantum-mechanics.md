### de Broglie wavelength
difficulty: basic
labels: wave-particle-duality

What is the de Broglie wavelength of a particle with momentum $p$, and what is its physical significance?

---

$\lambda = \frac{h}{p}$. It is the wavelength associated with a massive particle's matter wave—quantum effects become important when $\lambda$ is comparable to the length scales of the system.

---

Electrons at $\sim$eV energies have $\lambda \sim$ angstroms, enabling electron diffraction off crystal lattices. The WKB approximation is valid when the potential varies slowly compared to $\lambda$.
===

### $[\hat{x}, \hat{p}]$ commutation relation
difficulty: basic
labels: commutation-relations

What is the canonical commutation relation between position $\hat{x}$ and momentum $\hat{p}$?

---

$[\hat{x}, \hat{p}] = i\hbar$

---

This is the foundational commutation relation of quantum mechanics, from which the uncertainty principle follows directly.
===

### Schrodinger equation
difficulty: basic
labels: schrodinger-equation

Write the time-dependent Schrodinger equation.

---

$i\hbar \frac{\partial \psi}{\partial t} = \hat{H} \psi$, where $\hat{H}$ is the Hamiltonian operator.

---

For a single particle in a potential, $\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V(\vec{r})$. The time-independent version is $\hat{H}\psi = E\psi$.
===

### quantum harmonic oscillator energies
difficulty: basic
labels: harmonic-oscillator

What are the energy eigenvalues of the quantum harmonic oscillator?

---

$E_n = \hbar\omega\left(n + \frac{1}{2}\right)$, for $n = 0, 1, 2, \ldots$

---

The equally spaced energy levels and nonzero ground state energy ($\frac{1}{2}\hbar\omega$) are hallmarks of the quantum harmonic oscillator. Solved elegantly via creation and annihilation operators.
===

### hydrogen atom energy levels
difficulty: basic
labels: hydrogen-atom

What are the energy levels of the hydrogen atom (nonrelativistic, ignoring fine structure)?

---

$E_n = -\frac{13.6 \text{ eV}}{n^2}$, for $n = 1, 2, 3, \ldots$

---

The degeneracy of each level is $n^2$ (ignoring spin) or $2n^2$ (including spin). This follows from the Coulomb potential and the accidental $SO(4)$ symmetry.
===

### $\hat{L}^2$ and $\hat{L}_z$ eigenvalues
difficulty: basic
labels: angular-momentum

What are the eigenvalues of the angular momentum operators $\hat{L}^2$ and $\hat{L}_z$?

---

$\hat{L}^2$ has eigenvalues $\hbar^2 l(l+1)$ for $l = 0, 1, 2, \ldots$ and $\hat{L}_z$ has eigenvalues $\hbar m$ for $m = -l, -l+1, \ldots, l-1, l$.

---

These follow from the commutation relations $[\hat{L}_i, \hat{L}_j] = i\hbar \epsilon_{ijk} \hat{L}_k$ and $[\hat{L}^2, \hat{L}_i] = 0$.
===

### electron spin
difficulty: basic
labels: spin

What is the spin of an electron, and what are the possible measurement outcomes of $\hat{S}_z$?

---

The electron has spin $\frac{1}{2}$. The possible outcomes of $\hat{S}_z$ are $+\frac{\hbar}{2}$ and $-\frac{\hbar}{2}$.

---

Spin is an intrinsic angular momentum with no classical analogue. The spin-$\frac{1}{2}$ operators are represented by $\frac{\hbar}{2}$ times the Pauli matrices.
===

### generalized uncertainty principle
difficulty: basic
labels: uncertainty-principle

State the generalized uncertainty principle for two observables $\hat{A}$ and $\hat{B}$.

---

$\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$

---

For $\hat{x}$ and $\hat{p}$, this gives $\sigma_x \sigma_p \geq \frac{\hbar}{2}$, the Heisenberg uncertainty principle.
===

### first-order perturbation theory
difficulty: intermediate
labels: perturbation-theory

What is the first-order energy correction in non-degenerate perturbation theory?

---

$E_n^{(1)} = \langle n^{(0)}| \hat{H}' |n^{(0)}\rangle$, the expectation value of the perturbation $\hat{H}'$ in the unperturbed state.

---

The first-order correction to the state is $|n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)}|\hat{H}'|n^{(0)}\rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\rangle$.
===

### Fermi's golden rule
difficulty: intermediate
labels: perturbation-theory

What is Fermi's golden rule?

---

The transition rate from state $|i\rangle$ to state $|f\rangle$ under a time-dependent perturbation is $\Gamma_{i \to f} = \frac{2\pi}{\hbar} |\langle f|\hat{H}'|i\rangle|^2 \rho(E_f)$, where $\rho(E_f)$ is the density of final states.

---

This is derived from first-order time-dependent perturbation theory in the long-time limit.
===

### WKB approximation
difficulty: intermediate
labels: wkb

What is the WKB approximation for the allowed energies of a bound state in one dimension?

---

The Bohr-Sommerfeld quantization condition: $\int_a^b p(x) \, dx = \left(n + \frac{1}{2}\right)\pi\hbar$, where $a$ and $b$ are the classical turning points and $p(x) = \sqrt{2m(E - V(x))}$.

---

WKB (Wentzel-Kramers-Brillouin) approximates the wavefunction when the potential varies slowly on the scale of the de Broglie wavelength $\lambda = h/p(x)$. You write $\psi(x) \approx \frac{C}{\sqrt{p(x)}} e^{\pm \frac{i}{\hbar}\int p(x)\,dx}$ in classically allowed regions ($E > V$) and an exponentially decaying form in forbidden regions ($E < V$). This breaks down at classical turning points where $p(x) \to 0$; there you match to Airy function solutions. Each turning point introduces a phase shift of $\pi/2$ (the Maslov index). For a bound state between turning points $a$ and $b$, demanding single-valuedness of the wavefunction after a round trip gives $\int_a^b p\,dx = (n + 1/2)\pi\hbar$, where the $1/2$ accounts for the two turning-point phase shifts. The full-period form $\oint p\,dq = 2\pi\hbar(n+1/2)$ is the Bohr-Sommerfeld condition. This beautifully connects quantum energy levels to classical phase-space areas: each state occupies an area $2\pi\hbar = h$ in phase space. For the harmonic oscillator $V = \frac{1}{2}m\omega^2 x^2$, the phase-space orbit is an ellipse with area $2\pi E/\omega$, and the WKB condition gives the exact result $E_n = \hbar\omega(n+1/2)$. References: Griffiths, Introduction to Quantum Mechanics, Chapter 8 (the WKB approximation); Landau & Lifshitz, Quantum Mechanics, Section 46--48; Sakurai, Modern Quantum Mechanics, Section 2.4 (WKB and semiclassical methods).
===

### bosons vs fermions
difficulty: basic
labels: identical-particles

What is the difference between bosons and fermions regarding identical particles?

---

Bosons have symmetric wavefunctions under particle exchange and obey Bose-Einstein statistics (integer spin). Fermions have antisymmetric wavefunctions and obey Fermi-Dirac statistics (half-integer spin). Fermions satisfy the Pauli exclusion principle.

---

The spin-statistics theorem connects spin to exchange symmetry. It is proven rigorously in relativistic quantum field theory.
===

### Feynman path integral
difficulty: advanced
labels: path-integrals

What is the Feynman path integral expression for the quantum propagator?

---

$K(x_f, t_f; x_i, t_i) = \int \mathcal{D}[\text{path}] \, e^{iS[\text{path}]/\hbar}$, where $S$ is the classical action along the path.

---

Every path contributes with a phase proportional to its action. Classical paths dominate in the limit $\hbar \to 0$ due to stationary phase.
===

### Pauli matrices
difficulty: basic
labels: spin

What are the Pauli matrices?

---

$\sigma_x = \begin{pmatrix} 0 & 1 \\\\ 1 & 0 \end{pmatrix}$, $\sigma_y = \begin{pmatrix} 0 & -i \\\\ i & 0 \end{pmatrix}$, $\sigma_z = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix}$

---

They satisfy $\{\sigma_i, \sigma_j\} = 2\delta_{ij}I$ and $[\sigma_i, \sigma_j] = 2i\epsilon_{ijk}\sigma_k$. The spin operators are $\hat{S}_i = \frac{\hbar}{2}\sigma_i$.
===

### variational principle
difficulty: intermediate
labels: variational-method

What is the variational principle (Rayleigh-Ritz) in quantum mechanics?

---

For any normalized trial wavefunction $|\psi_{\text{trial}}\rangle$, the expectation value $\langle\psi_{\text{trial}}|\hat{H}|\psi_{\text{trial}}\rangle \geq E_0$, the true ground state energy. Equality holds only when $|\psi_{\text{trial}}\rangle$ is the exact ground state.

---

This gives an upper bound on the ground state energy and is the basis for variational methods.
===

### angular momentum addition
difficulty: intermediate
labels: angular-momentum

What is the addition rule for angular momenta $j_1$ and $j_2$? What total angular momentum values $j$ are possible?

---

$j$ ranges from $|j_1 - j_2|$ to $j_1 + j_2$ in integer steps.

---

When two angular momenta couple, the total $\mathbf{J} = \mathbf{J}_1 + \mathbf{J}_2$ has $J_z = m_1 + m_2$ (always), but $j$ is not simply $j_1 + j_2$. The range $|j_1 - j_2| \leq j \leq j_1 + j_2$ follows from counting states: the uncoupled basis has $(2j_1+1)(2j_2+1)$ states, and so does the coupled basis $\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1)$. The Clebsch-Gordan coefficients $\langle j_1, m_1; j_2, m_2 | j, m \rangle$ are the unitary transformation between these bases. They vanish unless $m = m_1 + m_2$ and the triangle inequality holds. Example: two spin-1/2 particles give $j = 1$ (triplet, 3 states, symmetric) and $j = 0$ (singlet, 1 state, antisymmetric). For $j_1 = 1, j_2 = 1$: $j = 0, 1, 2$ with $1 + 3 + 5 = 9 = 3 \times 3$ states. In group theory language this is the decomposition of the tensor product: $\mathbf{j_1} \otimes \mathbf{j_2} = \bigoplus_j \mathbf{j}$. This is essential for atomic spectroscopy (LS coupling), nuclear physics (isospin), and particle physics ($SU(2)$ flavor). References: Griffiths, Introduction to Quantum Mechanics, Chapter 4.3--4.4; Sakurai, Modern Quantum Mechanics, Chapter 3.7--3.8; Shankar, Principles of Quantum Mechanics, Chapter 15.
===

### non-perturbative $e^{-A/g}$
difficulty: intermediate
labels: non-perturbative

Why can't a contribution of the form $e^{-A/g}$ (with $A > 0$) be captured at any finite order in a perturbative expansion in $g$?

---

All derivatives of $e^{-A/g}$ at $g = 0$ vanish, so its Taylor series is identically zero  --  it is 'beyond all orders' of perturbation theory.

---

This is why non-perturbative effects (tunneling, instantons, bound states in some cases) require methods beyond Feynman diagrams. They are exponentially suppressed and invisible to any finite-order perturbative calculation.
===

### Bohr-Sommerfeld quantization
difficulty: intermediate
labels: semiclassical

What is the Bohr-Sommerfeld (WKB) quantization condition for bound states in 1D?

---

$\oint p \, dq = 2\pi\hbar\left(n + \frac{1}{2}\right)$, integrated over one full classical period.

---

The semiclassical limit connects quantum energy levels to classical phase-space areas. The $1/2$ correction (Maslov index) comes from the phase shift at each classical turning point, where the WKB approximation breaks down and Airy function matching is needed.
===
