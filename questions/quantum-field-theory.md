### Dirac equation
difficulty: basic
labels: dirac-equation

Write the Dirac equation for a free particle of mass $m$.

---

$(i\gamma^\mu \partial_\mu - m)\psi = 0$, where $\gamma^\mu$ are the $4 \times 4$ Dirac gamma matrices satisfying $\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}$ (in natural units $\hbar = c = 1$).

---

The Dirac equation is the relativistic wave equation for spin-$1/2$ particles. It naturally predicts antiparticles and the correct electron magnetic moment. The four-component spinor $\psi$ encodes both particle and antiparticle, each with two spin states.

===

### Klein-Gordon equation
difficulty: basic
labels: klein-gordon

What is the Klein-Gordon equation, and what kind of particle does it describe?

---

$(\partial_\mu \partial^\mu + m^2)\phi = 0$, i.e., $(\Box + m^2)\phi = 0$. It describes relativistic spin-$0$ (scalar) particles.

---

This is the simplest relativistic field equation. It follows from the energy-momentum relation $E^2 = p^2 + m^2$ by the substitution $E \to i\partial_t$, $\vec{p} \to -i\nabla$. The Higgs boson is a physical spin-0 particle.

===

### Feynman propagator
difficulty: intermediate
labels: propagators

What is the Feynman propagator for a free scalar field, and what does it represent physically?

---

Using the mostly-minus convention $\eta_{\mu\nu} = \mathrm{diag}(+,-,-,-)$ so that $k^2 = k_0^2 - |\vec{k}|^2$: $$D_F(x - y) = \int \frac{d^4 k}{(2\pi)^4} \frac{i}{k^2 - m^2 + i\epsilon}$$ It represents the amplitude for a particle to propagate from $y$ to $x$ (equivalently, the time-ordered two-point function $\langle 0|T\{\phi(x)\phi(y)\}|0\rangle$).

---

The $i\epsilon$ prescription selects the Feynman boundary condition: positive-frequency modes propagate forward in time, negative-frequency backward (antiparticles). Each internal line in a Feynman diagram contributes one propagator factor.

===

### Feynman rules in $\lambda\phi^4$
difficulty: intermediate
labels: feynman-rules

In $\lambda \phi^4$ scalar field theory, what are the Feynman rules in momentum space?

---

Propagator: $\frac{i}{k^2 - m^2 + i\epsilon}$ for each internal line. Vertex: $-i\lambda$ for each four-point vertex. Impose momentum conservation at each vertex, integrate $\int \frac{d^4k}{(2\pi)^4}$ over each undetermined loop momentum, and include symmetry factors.

---

These rules translate Feynman diagrams into integrals. The symmetry factor accounts for overcounting due to identical internal lines or vertices related by symmetry.

===

### Wick's theorem
difficulty: intermediate
labels: wick-theorem

What does Wick's theorem state, and why is it important for computing scattering amplitudes?

---

The time-ordered product of free fields equals the normal-ordered product plus all possible contractions: $T\{\phi_1 \phi_2 \cdots \phi_n\} = :\!\phi_1 \phi_2 \cdots \phi_n\!: + \text{all contractions}$. Each contraction equals the Feynman propagator $D_F$.

---

This is the bridge between the operator formalism and Feynman diagrams. Only fully contracted terms survive in vacuum expectation values, since $\langle 0|:\!\cdots\!:|0\rangle = 0$.

===

### gauge invariance in QED
difficulty: intermediate
labels: gauge-invariance

What is a local gauge transformation in QED, and what does gauge invariance require?

---

$\psi(x) \to e^{i\alpha(x)}\psi(x)$, $A_\mu \to A_\mu - \frac{1}{e}\partial_\mu \alpha(x)$. Gauge invariance requires replacing $\partial_\mu$ with the covariant derivative $D_\mu = \partial_\mu + ieA_\mu$ and forbids a photon mass term $m^2 A_\mu A^\mu$.

---

The requirement of local gauge invariance generates the entire interaction between matter and gauge fields. In QED it dictates the electron-photon coupling. The masslessness of the photon is a direct consequence.

===

### renormalization
difficulty: intermediate
labels: renormalization

What is the basic idea of renormalization? Why do loop integrals in QFT diverge, and how is this handled?

---

Loop integrals diverge because we integrate over arbitrarily high momenta (UV divergence). Renormalization absorbs these infinities into redefinitions of physical parameters (mass, charge, field strength). A theory is renormalizable if only finitely many types of divergent diagrams appear.

---

QED is renormalizable: only the electron self-energy, vacuum polarization, and vertex correction are primitively divergent. The physical predictions (like the anomalous magnetic moment $g-2$) are finite and spectacularly confirmed by experiment.

===

### Dirac spinor components
difficulty: basic
labels: spinors

How many independent components does a Dirac spinor have, and what do they represent physically?

---

A Dirac spinor has 4 complex components. In the rest frame, two correspond to particle states (spin up/down) and two to antiparticle states (spin up/down).

---

The four-component structure arises because the Dirac equation combines two irreducible representations of the Lorentz group (left-handed and right-handed Weyl spinors). A Weyl spinor has 2 components; a Majorana spinor has 4 components with a reality condition.

===

### LSZ reduction formula
difficulty: intermediate
labels: lsz

What is the LSZ reduction formula, and what role does it play in QFT?

---

The LSZ formula relates $S$-matrix elements (scattering amplitudes) to time-ordered correlation functions of the interacting theory. Each external particle contributes an inverse propagator that amputates the external leg and puts it on-shell.

---

LSZ is the formal justification for computing scattering amplitudes from Feynman diagrams. It tells you to compute the connected, amputated Green's function and evaluate it with external momenta on-shell ($k^2 = m^2$).

===

### beta function and asymptotic freedom
difficulty: advanced
labels: running-coupling

What is the beta function in QFT, and what does asymptotic freedom mean?

---

The beta function $\beta(g) = \mu \frac{dg}{d\mu}$ describes how the coupling $g$ changes with the energy scale $\mu$. Asymptotic freedom means $\beta(g) < 0$: the coupling decreases at high energies. Non-abelian gauge theories like QCD (with $N_f < 33/2$) are asymptotically free.

---

QCD becomes weakly coupled at high energies, enabling perturbative calculations for hard scattering. At low energies the coupling grows, leading to confinement. QED has $\beta > 0$, so its coupling grows at high energies.

===

### differential cross-section from $\mathcal{M}$
difficulty: advanced
labels: cross-sections

How is a differential cross-section in the COM frame related to the matrix element $\mathcal{M}$ for a $2 \to 2$ process?

---

$$\frac{d\sigma}{d\Omega} = \frac{|\mathcal{M}|^2}{64\pi^2 s}$$

in the center-of-mass (COM) frame for massless or equal-mass particles, where $s$ is the Mandelstam variable. More generally, $d\sigma$ involves a flux factor and Lorentz-invariant phase space.

---

The general Lorentz-invariant formula is

$$d\sigma = \frac{1}{2E_A\,2E_B\,|v_A - v_B|} |\mathcal{M}|^2 \, d\Pi_{\text{LIPS}},$$

where the prefactor is the flux factor and $d\Pi_{\text{LIPS}}$ is the Lorentz-invariant phase-space measure, including 4-momentum conservation.

For $2 \to 2$ scattering in the COM frame, the phase space reduces to

$$d\Pi_{\text{LIPS}} = \frac{|\mathbf{p}_f|}{16\pi^2 \sqrt{s}} \, d\Omega,$$

and the flux factor becomes $4|\mathbf{p}_i|\sqrt{s}$. If $|\mathbf{p}_f| = |\mathbf{p}_i|$ as in the equal-mass or massless case, this gives

$$\frac{d\sigma}{d\Omega} = \frac{|\mathcal{M}|^2}{64\pi^2 s}.$$

To compute $\mathcal{M}$, sum the contributing Feynman diagrams, write the amplitude from the Feynman rules, then square it. For unpolarized scattering, average over initial spins and sum over final spins; in QCD, do the same for colors.

The total cross-section is $\sigma = \int d\sigma$, and collider event rates satisfy $R = \mathcal{L}\sigma$.

References: Peskin & Schroeder, Section 4.5 and Section 4.6; Schwartz, Quantum Field Theory and the Standard Model, Chapter 5; Griffiths, Introduction to Elementary Particles, Section 6.2.

===

### Noether stress-energy tensor
difficulty: intermediate
labels: noether-qft

In field theory, what conserved current does spacetime translation invariance give via Noether's theorem?

---

The energy-momentum tensor $T^{\mu\nu}$. The conserved charges are $P^\nu = \int T^{0\nu} \, d^3x$, and conservation is $\partial_\mu T^{\mu\nu} = 0$.

---

Lorentz invariance gives angular momentum conservation. Internal symmetries like $U(1)$ phase symmetry give conserved currents such as $j^\mu = \bar{\psi}\gamma^\mu\psi$ (electromagnetic current).

===
