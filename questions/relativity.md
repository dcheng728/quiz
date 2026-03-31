### Lorentz transformation
difficulty: basic
labels: lorentz-transformations

Write down the Lorentz transformation for coordinates $(t, x)$ between two inertial frames with relative velocity $v$ along the $x$-axis.

---

$t' = \gamma\left(t - \frac{vx}{c^2}\right)$, $x' = \gamma(x - vt)$, where $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$.

---

$y$ and $z$ are unchanged. These reduce to the Galilean transformation in the limit $v \ll c$.

===

### spacetime interval
difficulty: basic
labels: metric-tensor

What is the spacetime interval in special relativity and why is it important?

---

$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$ (in the $-+++$ convention). It is invariant under Lorentz transformations, meaning all observers agree on its value.

---

Timelike intervals ($ds^2 < 0$) connect causally related events; spacelike intervals ($ds^2 > 0$) connect causally unrelated events; null intervals ($ds^2 = 0$) describe light signals.

===

### equivalence principle
difficulty: basic
labels: equivalence-principle

What is the equivalence principle?

---

The effects of gravity are locally indistinguishable from the effects of acceleration. Equivalently, inertial mass equals gravitational mass.

---

This is the foundational physical principle of general relativity. It implies that gravity is described by the geometry of spacetime.

===

### Einstein field equations
difficulty: intermediate
labels: einstein-field-equations

Write the Einstein field equations.

---

$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R = \frac{8\pi G}{c^4} T_{\mu\nu}$, where $G_{\mu\nu}$ is the Einstein tensor, $R_{\mu\nu}$ is the Ricci tensor, $R$ is the Ricci scalar, and $T_{\mu\nu}$ is the stress-energy tensor.

---

The left side encodes spacetime geometry; the right side encodes matter and energy content. Sometimes a cosmological constant term $\Lambda g_{\mu\nu}$ is added.

===

### geodesic equation
difficulty: intermediate
labels: geodesic-equation

What is the geodesic equation?

---

$\frac{d^2 x^\mu}{d\tau^2} + \Gamma^\mu_{\alpha\beta} \frac{dx^\alpha}{d\tau} \frac{dx^\beta}{d\tau} = 0$, where $\Gamma^\mu_{\alpha\beta}$ are the Christoffel symbols and $\tau$ is proper time.

---

This describes the motion of a free particle in curved spacetime. Geodesics extremize the proper time between two events.

===

### Schwarzschild metric
difficulty: intermediate
labels: schwarzschild-solution

What is the Schwarzschild metric?

---

$ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right)c^2 dt^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{-1} dr^2 + r^2 (d\theta^2 + \sin^2\theta \, d\phi^2)$

---

This is the unique spherically symmetric vacuum solution to the Einstein field equations (Birkhoff's theorem). The coordinate singularity at $r = \frac{2GM}{c^2}$ is the event horizon.

===

### four-vectors
difficulty: basic
labels: four-vectors

What is a four-vector? Give three examples.

---

A four-vector is a quantity with four components that transforms as a vector under Lorentz transformations. Examples: four-position $(ct, x, y, z)$, four-momentum $(E/c, p_x, p_y, p_z)$, four-velocity $(\gamma c, \gamma v_x, \gamma v_y, \gamma v_z)$.

---

Four-vectors are elements of Minkowski spacetime. Their Lorentz-invariant norm is computed using the metric: $A_\mu A^\mu$.

===

### stress-energy tensor
difficulty: intermediate
labels: stress-energy-tensor

What is the stress-energy tensor for a perfect fluid?

---

$T^{\mu\nu} = \left(\rho + \frac{P}{c^2}\right) u^\mu u^\nu + P g^{\mu\nu}$, where $\rho$ is the energy density, $P$ is the pressure, and $u^\mu$ is the four-velocity of the fluid.

---

In the rest frame of the fluid, $T^{00} = \rho c^2$, $T^{ii} = P$ (no sum), and all off-diagonal components vanish.

===

### energy-momentum relation
difficulty: basic
labels: four-vectors

What is the relativistic energy-momentum relation?

---

$E^2 = (pc)^2 + (mc^2)^2$, where $E$ is total energy, $p$ is the magnitude of three-momentum, and $m$ is the rest mass.

---

For massless particles ($m = 0$), $E = pc$. For particles at rest ($p = 0$), $E = mc^2$. This is the Lorentz-invariant norm of the four-momentum.

===

### action of a relativistic particle
difficulty: intermediate
labels: action, lagrangian-mechanics

What is the covariant action for a free relativistic point particle of mass $m$, and how does it generalize to a particle coupled to an electromagnetic field $A_\mu$?

---

Free particle: $S = -mc \int ds = -mc^2 \int d\tau$, where $ds = c\,d\tau = c\sqrt{-g_{\mu\nu}\,dx^\mu\,dx^\nu / c^2}$ is the proper-time interval.

With electromagnetic coupling: $S = -mc \int ds - \frac{e}{c}\int A_\mu \, dx^\mu$, or equivalently $S = \int \left(-mc^2\sqrt{1 - v^2/c^2} - e\phi + \frac{e}{c}\vec{A}\cdot\vec{v}\right) dt$.

---

The free action $S = -mc\int ds$ is manifestly Lorentz invariant: it is proportional to the proper time elapsed along the worldline, which all observers agree on. Extremizing it yields geodesics (straight lines in flat spacetime). The minus sign ensures that timelike paths (physical trajectories) are stationary points. The electromagnetic coupling $-\frac{e}{c}\int A_\mu\,dx^\mu$ is the unique Lorentz-invariant, gauge-invariant (up to boundary terms) coupling of a charged particle to the gauge field. Varying the full action gives the Lorentz force law: $m\frac{du^\mu}{d\tau} = \frac{e}{c}F^{\mu\nu}u_\nu$. In curved spacetime, $ds^2 = g_{\mu\nu}dx^\mu dx^\nu$ and the free action yields the geodesic equation. This action is also the starting point for deriving the worldline path integral in quantum field theory.

===

### gravitational time dilation
difficulty: intermediate
labels: schwarzschild-solution

What is gravitational time dilation in the Schwarzschild geometry?

---

A clock at radial coordinate $r$ runs slower than a clock at infinity by a factor $\sqrt{1 - \frac{2GM}{c^2 r}}$. That is, $d\tau = \sqrt{1 - \frac{2GM}{c^2 r}} \, dt$.

---

The connection to $g_{tt}$ is direct. The Schwarzschild line element is $ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right)c^2 dt^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{-1}dr^2 + r^2 d\Omega^2$. For a clock sitting at fixed $r$ (i.e. $dr = d\theta = d\phi = 0$), the line element reduces to $ds^2 = g_{tt}\,c^2 dt^2$. Since proper time is $d\tau^2 = -ds^2/c^2$ (with our $-+++$ signature), we get $d\tau = \sqrt{-g_{tt}}\,dt = \sqrt{1 - 2GM/(c^2 r)}\,dt$. So $g_{tt}$ directly controls the rate at which proper time accumulates relative to coordinate time $t$ (which is the proper time of a distant observer at $r \to \infty$, where $g_{tt} \to -1$). This generalizes: in any stationary spacetime, $d\tau/dt = \sqrt{-g_{tt}}$ for a static observer. At the event horizon $r_s = 2GM/c^2$, $g_{tt} = 0$, so $d\tau/dt \to 0$ -- a distant observer sees the clock freeze. GPS satellites must correct for this: clocks in orbit at $r \approx 26{,}600$ km run ~45 microseconds/day faster than ground clocks due to weaker gravity (partially offset by ~7 microseconds/day slower from special-relativistic time dilation due to orbital velocity). The Pound-Rebka experiment (1959) confirmed gravitational redshift to 1% by measuring the frequency shift of gamma rays over a 22.5 m tower. References: Carroll, Spacetime and Geometry, Sections 5.1--5.2; Hartle, Gravity, Chapter 9; Schutz, A First Course in General Relativity, Section 10.1.

===

### Cherenkov radiation
difficulty: intermediate
labels: electrodynamics, radiation

What is Cherenkov radiation, and at what angle is it emitted?

---

Cherenkov radiation is electromagnetic radiation emitted when a charged particle travels through a dielectric medium at a speed $v$ exceeding the phase velocity of light in that medium, $c/n$ (where $n$ is the refractive index). The radiation is emitted in a cone at the Cherenkov angle:

$\cos\theta = \frac{1}{\beta n}$, where $\beta = v/c$.

The threshold condition is $\beta > 1/n$, i.e., $v > c/n$.

---

The physics is the electromagnetic analogue of a sonic boom: the particle outruns its own radiation field, and the wavefronts pile up into a coherent shock cone. The emitted power per unit frequency is given by the Frank-Tamm formula: $\frac{dE}{dx\,d\omega} = \frac{e^2}{c^2}\omega\left(1 - \frac{1}{\beta^2 n^2(\omega)}\right)$ for frequencies where $\beta n(\omega) > 1$. The spectrum is weighted toward higher frequencies (blue/UV), which gives Cherenkov light its characteristic blue glow. In particle physics, Cherenkov detectors (e.g., RICH detectors) measure $\theta$ to determine $\beta$, and combined with a momentum measurement this identifies the particle mass. Neutrino observatories like IceCube and Super-Kamiokande detect Cherenkov light from secondary charged leptons produced by neutrino interactions.

===
