### values of $\mu_0$ and $\epsilon_0$
difficulty: basic
labels: constants

What are the values of the vacuum permeability $\mu_0$ and vacuum permittivity $\epsilon_0$ in SI units?

---

$\mu_0 = 4\pi \times 10^{-7}\;\text{N/A}^2 \approx 1.257 \times 10^{-6}\;\text{N/A}^2$ (equivalently $\text{H/m}$). $\epsilon_0 = \frac{1}{\mu_0 c^2} \approx 8.854 \times 10^{-12}\;\text{F/m}$ (equivalently $\text{C}^2/\text{N}\cdot\text{m}^2$).

---

Since the 2019 SI redefinition, $\mu_0$ is no longer exact but is determined experimentally through the fine-structure constant: $\mu_0 = 2\alpha h/(e^2 c)$. Previously $\mu_0 = 4\pi \times 10^{-7}$ was exact by definition. The relation $c = 1/\sqrt{\mu_0 \epsilon_0}$ always holds, so knowing one determines the other. In Gaussian units these constants do not appear -- Coulomb's law is simply $F = q_1 q_2/r^2$.

===

### Maxwell's equations
difficulty: basic
labels: maxwells-equations

Write down all four of Maxwell's equations in differential form (in vacuum with sources).

---

1. $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$ (Gauss's law),
2. $\nabla \cdot \vec{B} = 0$ (no magnetic monopoles), 
3. $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ (Faraday's law), 
4. $\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$ (Ampere-Maxwell law).

---

These four equations, together with the Lorentz force law, form the complete classical theory of electromagnetism.

===

### Poynting vector
difficulty: basic
labels: poynting-vector

What is the Poynting vector and what does it represent?

---

$\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}$. It represents the energy flux (power per unit area) carried by the electromagnetic field.

---

The Poynting theorem states $\frac{\partial u}{\partial t} + \nabla \cdot \vec{S} = -\vec{J} \cdot \vec{E}$, where $u$ is the EM energy density.

===

### EM boundary conditions
difficulty: intermediate
labels: boundary-conditions

State the boundary conditions for $\vec{E}$ and $\vec{B}$ at an interface between two linear media (no free surface charge or current).

---

The tangential component of $\vec{E}$ and the normal component of $\vec{B}$ are continuous. Additionally, the normal component of $\vec{D}$ and the tangential component of $\vec{H}$ are continuous.

---

Each condition comes from one of Maxwell's equations applied to a thin surface at the interface. (1) $\nabla \cdot \vec{D} = \rho_f$: apply Gauss's law to a pillbox straddling the surface. The flux through the sides vanishes as the height shrinks, giving $D_{1\perp} = D_{2\perp}$ (no free surface charge). (2) $\nabla \cdot \vec{B} = 0$: same pillbox argument gives $B_{1\perp} = B_{2\perp}$ (always true -- no magnetic monopoles). (3) $\nabla \times \vec{E} = -\partial\vec{B}/\partial t$: apply Faraday's law to a thin rectangular loop with long sides parallel to the surface. As the height shrinks the flux through the loop vanishes, giving $E_{1\parallel} = E_{2\parallel}$ (always true). (4) $\nabla \times \vec{H} = \vec{J}_f + \partial\vec{D}/\partial t$: same loop argument gives $H_{1\parallel} = H_{2\parallel}$ (no free surface current). In linear media, $\vec{D} = \epsilon\vec{E}$ and $\vec{B} = \mu\vec{H}$, so continuity of $D_\perp$ means $\epsilon_1 E_{1\perp} = \epsilon_2 E_{2\perp}$ (the normal $E$ is discontinuous), and continuity of $H_\parallel$ means $B_{1\parallel}/\mu_1 = B_{2\parallel}/\mu_2$ (the tangential $B$ is discontinuous). These conditions determine reflection and transmission coefficients (Fresnel equations) and are essential for waveguides, optical coatings, and cavity design. References: Griffiths, Introduction to Electrodynamics, Section 7.3.5 (boundary conditions) and Section 9.3.2 (Fresnel equations); Jackson, Classical Electrodynamics, Section 1.5.

===

### EM energy density
difficulty: basic
labels: energy

What is the electromagnetic energy density in vacuum?

---

$u = \frac{1}{2}\left(\epsilon_0 E^2 + \frac{B^2}{\mu_0}\right)$

---

This is the energy stored per unit volume in the electric and magnetic fields.

===

### gauge transformations in EM
difficulty: intermediate
labels: gauge-transformations

What is a gauge transformation in electrodynamics, and what are the Lorenz and Coulomb gauges?

---

A gauge transformation is $\vec{A} \to \vec{A} + \nabla \lambda$, $\phi \to \phi - \frac{\partial \lambda}{\partial t}$, which leaves $\vec{E}$ and $\vec{B}$ unchanged. The Lorenz gauge requires $\nabla \cdot \vec{A} + \mu_0 \epsilon_0 \frac{\partial \phi}{\partial t} = 0$. The Coulomb gauge requires $\nabla \cdot \vec{A} = 0$.

---

The physical fields $\vec{E}$ and $\vec{B}$ are gauge-invariant. Choosing a gauge simplifies the equations for the potentials.

===

### multipole expansion
difficulty: basic
labels: multipole-expansion

What is the leading-order term in the multipole expansion of the potential of a localized charge distribution, far from the source?

---

The monopole term: $\phi \sim \frac{1}{4\pi\epsilon_0} \frac{Q}{r}$, where $Q$ is the total charge.

---

If $Q = 0$, the next term is the dipole term proportional to $\frac{1}{r^2}$, then the quadrupole proportional to $\frac{1}{r^3}$, etc.

===

### speed of EM waves
difficulty: basic
labels: electromagnetic-waves

What is the speed of electromagnetic waves in vacuum, expressed in terms of fundamental constants?

---

$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$

---

This follows directly from the wave equation derived from Maxwell's equations in vacuum. It was one of the great triumphs of Maxwell's theory.

===

### retarded potentials
difficulty: intermediate
labels: retarded-potentials

What are retarded potentials and why are they called 'retarded'?

---

The retarded potentials are $\phi(\vec{r},t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec{r}', t_r)}{|\vec{r}-\vec{r}'|} d^3r'$ (and similarly for $\vec{A}$), where $t_r = t - \frac{|\vec{r}-\vec{r}'|}{c}$ is the retarded time. They are 'retarded' because the field at $(\vec{r},t)$ depends on the source at the earlier time $t_r$, reflecting the finite speed of light.

---

This enforces causality. The advanced potentials (using $t + \frac{|\vec{r}-\vec{r}'|}{c}$) are mathematically valid but physically rejected for radiation problems.

===

### Lorentz force law
difficulty: basic
labels: lorentz-force

Write the Lorentz force law for a charged particle in electric and magnetic fields.

---

$\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$

---

This is in SI units and is exact as written. In Gaussian units the form is $\vec{F} = q(\vec{E} + \frac{\vec{v}}{c} \times \vec{B})$. The electric force $q\vec{E}$ is independent of velocity and can do work. The magnetic force $q\vec{v} \times \vec{B}$ is always perpendicular to $\vec{v}$, so $\vec{F}_{\text{mag}} \cdot \vec{v} = 0$ -- it changes the direction of motion but never the speed or kinetic energy. This is why magnetic fields alone cannot accelerate particles from rest. The Lorentz force is the foundation of charged particle dynamics: cyclotron motion ($r = mv/qB$, $\omega_c = qB/m$), velocity selectors ($E = vB$), and the Hall effect. It also appears in the equation of motion for plasmas (magnetohydrodynamics) and underpins the $\vec{J} \times \vec{B}$ force on current-carrying conductors. References: Griffiths, Introduction to Electrodynamics, Section 5.1; Jackson, Classical Electrodynamics, Section 1.2 and 12.1 (covariant form $f^\mu = qF^{\mu\nu}u_\nu$).

===

### Larmor formula
difficulty: intermediate
labels: radiation

What is Larmor's formula for the power radiated by an accelerating point charge?

---

$P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}$, where $a$ is the magnitude of the acceleration.

---

This is the nonrelativistic result. It shows that only accelerating charges radiate. The relativistic generalization involves the four-acceleration.

===

### Gauss's law
difficulty: basic
labels: gausss-law

State Gauss's law in integral form and explain when it is most useful for computing $\vec{E}$.

---

The flux of $\vec{E}$ through a closed surface equals $\frac{Q_{\text{enc}}}{\epsilon_0}$. It is most useful when the charge distribution has sufficient symmetry (spherical, cylindrical, or planar) so that $\vec{E}$ can be pulled out of the integral.

---

For a spherically symmetric charge distribution, $\vec{E}$ is radial and constant on a concentric sphere, giving $E \cdot 4\pi r^2 = \frac{Q_{\text{enc}}}{\epsilon_0}$.

===

### field strength tensor $F^{\mu\nu}$
difficulty: advanced
labels: covariant-formulation

What is the covariant (four-vector) form of the electromagnetic field, and how are $\vec{E}$ and $\vec{B}$ encoded in the field strength tensor $F^{\mu\nu}$?

---

$F^{\mu\nu}$ is an antisymmetric rank-2 tensor. Its components are: $F^{0i} = -E^i/c$ (electric field), and $F^{ij} = -\epsilon^{ijk} B_k$ (magnetic field). Maxwell's equations become $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ and $\partial_{[\alpha} F_{\beta\gamma]} = 0$.

---

This formulation makes the Lorentz covariance of electrodynamics manifest and is essential for relativistic treatments.

===

### Wilson loop
difficulty: advanced
labels: gauge-theory

What is a Wilson loop in gauge theory, and what does it measure physically?

---

$W(\mathcal{C}) = \mathrm{Tr}\left[\mathcal{P} \exp\left(i \oint_{\mathcal{C}} A_\mu \, dx^\mu\right)\right]$. It measures the holonomy  --  the net phase (or rotation in gauge space) acquired by parallel-transporting a charged particle around a closed path $\mathcal{C}$.

---

Wilson loops are gauge-invariant observables that probe the gauge field non-locally. In electromagnetism, the phase reduces to $e^{iq\Phi_B/\hbar}$ (Aharonov-Bohm effect). In non-abelian theories, the path-ordering $\mathcal{P}$ is needed because gauge fields at different points don't commute.

===
