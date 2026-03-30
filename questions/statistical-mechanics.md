### canonical partition function
difficulty: basic
labels: partition-function

What is the canonical partition function for a system at temperature $T$?

---

$Z = \sum_i e^{-E_i / (k_B T)}$, where the sum runs over all microstates $i$ with energy $E_i$.

---

All thermodynamic quantities can be derived from $Z$. For example, the free energy is $F = -k_B T \ln Z$.

===

### Boltzmann distribution
difficulty: basic
labels: boltzmann-distribution

What is the Boltzmann distribution? What is the probability of a system being in microstate $i$?

---

$P_i = \frac{e^{-E_i / (k_B T)}}{Z}$, where $Z$ is the partition function.

---

This applies to a system in thermal equilibrium with a heat bath at temperature $T$ (canonical ensemble).

===

### two-level system partition function
difficulty: basic
labels: partition-function

What is the partition function of a two-level system with energies $0$ and $\epsilon$?

---

$Z = 1 + e^{-\epsilon / (k_B T)}$

---

The average energy is $\langle E \rangle = \frac{\epsilon}{e^{\epsilon/(k_B T)} + 1}$. This is one of the most fundamental exactly solvable models.

===

### equipartition theorem
difficulty: basic
labels: equipartition

State the equipartition theorem.

---

Each quadratic degree of freedom in the Hamiltonian contributes $\frac{1}{2} k_B T$ to the average energy in thermal equilibrium.

---

For example, a classical ideal gas molecule with 3 translational degrees of freedom has $\langle E \rangle = \frac{3}{2} k_B T$. This breaks down at low temperatures where quantum effects dominate.

===

### Fermi-Dirac and Bose-Einstein distributions
difficulty: intermediate
labels: quantum-statistics

What are the Fermi-Dirac and Bose-Einstein distribution functions?

---

Fermi-Dirac: $f(E) = \frac{1}{e^{(E - \mu)/(k_B T)} + 1}$. Bose-Einstein: $f(E) = \frac{1}{e^{(E - \mu)/(k_B T)} - 1}$.

---

The $+1$ for fermions enforces the Pauli exclusion principle ($f \leq 1$). The $-1$ for bosons allows unlimited occupation and can lead to Bose-Einstein condensation.

===

### statistical ensembles
difficulty: basic
labels: ensembles

What are the three standard statistical ensembles and what variables are held fixed in each?

---

\u2022 Microcanonical (NVE): fixed $E$, $V$, $N$. All accessible microstates equally probable. Partition function: $\Omega(E)$ = number of microstates. Thermodynamic potential: entropy $S = k_B \ln \Omega$. Temperature emerges as $1/T = \partial S/\partial E$. Models an isolated system.\n\u2022 Canonical (NVT): fixed $T$, $V$, $N$. System exchanges energy with a heat bath. Partition function: $Z = \sum_i e^{-\beta E_i}$, $\beta = 1/(k_B T)$. Probability of microstate $i$: $P_i = e^{-\beta E_i}/Z$ (Boltzmann distribution). Thermodynamic potential: Helmholtz free energy $F = -k_B T \ln Z$. Energy fluctuations: $\langle (\Delta E)^2 \rangle = k_B T^2 C_V$.\n\u2022 Grand canonical ($\mu$VT): fixed $T$, $V$, $\mu$. System exchanges both energy and particles with a reservoir. Partition function: $\mathcal{Z} = \sum_N \sum_i e^{-\beta(E_i - \mu N)}$. Thermodynamic potential: grand potential $\Phi = -k_B T \ln \mathcal{Z} = F - \mu N$. Particle number fluctuations: $\langle (\Delta N)^2 \rangle = k_B T (\partial \langle N \rangle / \partial \mu)_T$.

---

The ensembles are equivalent in the thermodynamic limit ($N \to \infty$): relative fluctuations scale as $1/\sqrt{N}$, so $\Delta E/\langle E \rangle \sim 1/\sqrt{N} \to 0$. Each ensemble is obtained from the previous by a Legendre transform -- canonical from microcanonical by trading $E$ for $T$, grand canonical from canonical by trading $N$ for $\mu$. The canonical ensemble is most commonly used because most lab systems are in thermal contact with their surroundings. The grand canonical ensemble is essential for quantum gases (Bose-Einstein and Fermi-Dirac statistics), where fixing $N$ exactly is impractical and the fugacity $z = e^{\beta\mu}$ controls the mean particle number. The microcanonical ensemble is the most fundamental (no assumptions about a bath) and is the starting point for deriving the other two. References: Pathria & Beale, Statistical Mechanics, Chapters 2--4; Kardar, Statistical Physics of Particles, Chapters 4--5; Reif, Fundamentals of Statistical and Thermal Physics, Chapters 6--7.

===

### entropy (statistical)
difficulty: basic
labels: entropy

What is the statistical definition of entropy?

---

$S = k_B \ln \Omega$, where $\Omega$ is the number of accessible microstates (Boltzmann entropy). More generally, $S = -k_B \sum_i P_i \ln P_i$ (Gibbs entropy).

---

The Boltzmann formula applies to the microcanonical ensemble. The Gibbs formula is more general and reduces to Boltzmann's when all accessible states are equally probable.

===

### phase transitions
difficulty: intermediate
labels: phase-transitions

What is a phase transition, and what distinguishes first-order from second-order (continuous) phase transitions?

---

A phase transition is a non-analyticity in the free energy. In a first-order transition, the first derivative of the free energy (e.g., entropy, volume) is discontinuous, involving latent heat. In a second-order transition, first derivatives are continuous but second derivatives (e.g., heat capacity, susceptibility) diverge.

---

Examples: melting is first-order; the ferromagnetic transition at the Curie point is second-order.

===

### Ising model
difficulty: intermediate
labels: ising-model

What is the Ising model?

---

A lattice model where spin variables $s_i = \pm 1$ interact via $H = -J \sum_{\langle i,j \rangle} s_i s_j - h \sum_i s_i$, where $J$ is the coupling constant, $h$ is an external field, and the first sum is over nearest neighbors.

---

The 1D Ising model has no phase transition (solved by Ising). The 2D model has a phase transition at $T_c$ (solved exactly by Onsager). The 3D model has no known exact solution.

===

### Helmholtz free energy
difficulty: basic
labels: free-energy

What is the Helmholtz free energy and when is it minimized?

---

$F = U - TS$, where $U$ is internal energy, $T$ is temperature, and $S$ is entropy. It is minimized at equilibrium for a system at constant $T$ and $V$.

---

The Gibbs free energy $G = U - TS + PV$ is minimized at constant $T$ and $P$ instead. These are related to the partition function by $F = -k_B T \ln Z$.

===

### Fermi gas ground-state energy
difficulty: inetermediate
labels: fermi-gas

What is the total ground-state energy of $N$ non-interacting fermions in 3D, in terms of the Fermi energy $E_F$?

---

$E = \frac{3}{5} N E_F$

---

The 3D density of states is $g(E) = C E^{1/2}$ where $C = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}$. At $T=0$, all states up to $E_F$ are filled, so $N = \int_0^{E_F} g(E)\,dE = C \cdot \frac{2}{3} E_F^{3/2}$. The total energy is $E_{\text{tot}} = \int_0^{E_F} E\,g(E)\,dE = C \int_0^{E_F} E^{3/2}\,dE = C \cdot \frac{2}{5} E_F^{5/2}$. Dividing: $E_{\text{tot}}/N = \frac{C \cdot \frac{2}{5} E_F^{5/2}}{C \cdot \frac{2}{3} E_F^{3/2}} = \frac{3}{5} E_F$. The factor $3/5$ (not $1/2$) arises because $g(E) \propto E^{1/2}$ weights higher energies more heavily -- there are more states near $E_F$ than near $E = 0$.

===

### density of states for 3D noninteracting fermions
difficulty: intermediate
labels: fermi-gas, density-of-states

What is the density of states $g(E)$ for $N$ noninteracting fermions confined to a box of volume $V$ in 3D?
If you don't know the exact form give its scaling with respect to $E$.

---

$g(E) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \sqrt{E}$, or more compactly $g(E) = C E^{1/2}$.

---

- a state $|\vec{k}\rangle$ has energy $E = \frac{\hbar^2 |k|^2}{2m}$. 
- the total number of state scales like $\frac{4\pi}{3}k^3 \sim E^{3/2}$
- the density of state scales like the derivative which is like $E^{1/2}$

===

### $PV = U/3$ for ultrarelativistic gas
difficulty: advanced
labels: fermi-gas, bose-gas, equation-of-state

Show that for an extreme relativistic noninteracting Fermi or Bose gas with dispersion $E(\vec{k}) = c\hbar |\vec{k}|$, the relation $PV = \frac{1}{3}U$ holds. Hint: use $PV = k_BT \ln \mathcal{Z}$, where $\mathcal{Z}(\mu, T)$ is the grand partition function.

---

The grand partition function gives $\ln \mathcal{Z} = \mp \sum_{\vec{k}} \ln(1 \mp z e^{-\beta \epsilon_k})$, with $z = e^{\beta\mu}$ and $\epsilon_k = c\hbar k$ (upper signs for bosons).

Replace the sum with an integral: $\sum_{\vec{k}} \to \frac{V}{(2\pi)^3} \int d^3k = \frac{V}{2\pi^2} \int_0^\infty k^2 \, dk$.

Substitute $u = \beta c\hbar k$, so $k = u/(\beta c\hbar)$ and $dk = du/(\beta c\hbar)$:
$$\ln \mathcal{Z} = \frac{V}{2\pi^2 (\beta c\hbar)^3} \underbrace{\int_0^\infty (\mp) u^2 \ln(1 \mp z e^{-u})\, du}_{\equiv\, I(z)}$$
The crucial point: at fixed fugacity $z$, $I(z)$ is independent of $\beta$, so $\ln \mathcal{Z} \propto \beta^{-3}$.

Since $PV = k_BT \ln \mathcal{Z} = \beta^{-1} \ln \mathcal{Z}$, and $U = -\frac{\partial \ln \mathcal{Z}}{\partial \beta}\bigg|_z = 3\beta^{-1} \ln \mathcal{Z} = 3PV$. $\quad\square$

---

The linear dispersion $\epsilon \propto k$ produces the $\beta^{-3}$ scaling that gives $U = 3PV$. Photon and phonon gases obey the same relation for the same reason. By contrast, nonrelativistic gases ($\epsilon \propto k^2$) give $\ln \mathcal{Z} \propto \beta^{-5/2}$ and $PV = \frac{2}{3}U$. (MIT Fall 1997 Qualifying Exam.)

===

### grand canonical partition function
difficulty: basic
labels: grand-canonical

How is the grand canonical partition function $\Xi$ related to the canonical partition functions $Z(N)$?

---

$\Xi(\mu) = \sum_{N=0}^{\infty} e^{\beta \mu N} Z(N)$

---

$\Xi$ is the generating function for $Z(N)$ weighted by the fugacity $z = e^{\beta\mu}$. This relation lets you move between fixed-$N$ and variable-$N$ descriptions, which is essential whenever a quantum system is easier to solve in one ensemble than the other.

===
