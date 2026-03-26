### Newton's second law
difficulty: basic
labels: newtons-laws

State Newton's second law in its most general form (not assuming constant mass).

---

$\vec{F} = \frac{d\vec{p}}{dt}$, where $\vec{p}$ is the momentum of the body.

---

The familiar $\vec{F} = m\vec{a}$ is a special case when mass is constant. The general form is the time derivative of momentum.

===

### Euler-Lagrange equation
difficulty: basic
labels: lagrangian-mechanics

What is the Euler-Lagrange equation for a system with generalized coordinate $q$ and Lagrangian $L(q, \dot{q}, t)$?

---

$\frac{d}{dt} \frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = 0$

---

Derived from Hamilton's principle (stationary action). This is the foundational equation of Lagrangian mechanics.

===

### Lagrangian to Hamiltonian
difficulty: basic
labels: hamiltonian-mechanics

What is the relationship between the Lagrangian $L$ and the Hamiltonian $H$?

---

$H = \sum_i p_i \dot{q}_i - L$, where $p_i = \frac{\partial L}{\partial \dot{q}_i}$ are the conjugate momenta.

---

This is the Legendre transformation from $(q, \dot{q})$ to $(q, p)$. For many systems $H$ equals the total energy $T + V$.

===

### Noether's theorem
difficulty: intermediate
labels: noethers-theorem

Derive Noether's theorem: given an action $S = \int L(q, \dot{q}, t)\,dt$ invariant under a continuous symmetry, show that there is a conserved quantity $Q$.

---

Consider an infinitesimal transformation $q \to q + \epsilon\,\delta q$ that leaves the action invariant ($\delta S = 0$). Then $\delta L = \frac{\partial L}{\partial q}\delta q + \frac{\partial L}{\partial \dot{q}}\delta\dot{q}$. Using the Euler-Lagrange equation $\frac{\partial L}{\partial q} = \frac{d}{dt}\frac{\partial L}{\partial \dot{q}}$, this becomes $\delta L = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\delta q\right)$. If the symmetry leaves $L$ invariant (or changes it by a total derivative $\delta L = \frac{d}{dt}\Lambda$), then $Q = \frac{\partial L}{\partial \dot{q}}\delta q - \Lambda$ satisfies $\frac{dQ}{dt} = 0$.

---

Classic examples: time translation ($\delta q = \dot{q}\,\delta t$) gives energy $H = p\dot{q} - L$; spatial translation ($\delta q_i = \epsilon_i$) gives momentum $p_i = \partial L/\partial \dot{q}_i$; rotation ($\delta \vec{r} = \vec{\epsilon} \times \vec{r}$) gives angular momentum $\vec{L} = \vec{r} \times \vec{p}$. In field theory the same logic yields conserved currents $j^\mu$ with $\partial_\mu j^\mu = 0$ rather than conserved charges, and the conserved charge is $Q = \int j^0\,d^3x$. For example, the $U(1)$ phase symmetry $\psi \to e^{i\alpha}\psi$ of the Dirac Lagrangian gives the electromagnetic current $j^\mu = \bar{\psi}\gamma^\mu\psi$. References: Goldstein, Classical Mechanics, Section 13.7; Landau & Lifshitz, Mechanics, Sections 6--9; Peskin & Schroeder, Section 2.2 (field theory version).

===

### angular momentum from $\vec{r}$ and $\vec{p}$
difficulty: basic
labels: angular-momentum

What is the angular momentum $\vec{L}$ of a particle with position $\vec{r}$ and momentum $\vec{p}$?

---

$\vec{L} = \vec{r} \times \vec{p}$. In components, $L_i = \epsilon_{ijk} r_j p_k$. The magnitude is $|\vec{L}| = |\vec{r}||\vec{p}|\sin\theta$, where $\theta$ is the angle between $\vec{r}$ and $\vec{p}$.

---

$\vec{L}$ is conserved when the net torque $\vec{\tau} = \vec{r} \times \vec{F} = \frac{d\vec{L}}{dt}$ vanishes, i.e. for central forces. In quantum mechanics, the components become operators satisfying $[\hat{L}_i, \hat{L}_j] = i\hbar\epsilon_{ijk}\hat{L}_k$, and only $\hat{L}^2$ and one component (conventionally $\hat{L}_z$) can be simultaneously diagonalized.

===

### central force conserved quantities
difficulty: basic
labels: central-force

For a central force problem, what two quantities are conserved and why?

---

Energy (time-translation invariance) and angular momentum (rotational symmetry about the force center).

---

Conservation of angular momentum confines the orbit to a plane. The effective 1D potential is $V_{\text{eff}}(r) = V(r) + \frac{L^2}{2mr^2}$.

===

### Poisson bracket
difficulty: intermediate
labels: poisson-brackets

What is the definition of the Poisson bracket $\{f, g\}$ for two phase-space functions $f$ and $g$?

---

$\{f, g\} = \sum_i \left(\frac{\partial f}{\partial q_i} \frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right)$

---

Poisson brackets encode the symplectic structure of phase space and are the classical analogue of quantum commutators (up to a factor of $i\hbar$).

===

### Hamilton's equations
difficulty: basic
labels: hamiltonian-mechanics

What are Hamilton's equations of motion?

---

$\dot{q}_i = \frac{\partial H}{\partial p_i}$ and $\dot{p}_i = -\frac{\partial H}{\partial q_i}$

---

These are $2N$ first-order ODEs equivalent to the $N$ second-order Euler-Lagrange equations.

===

### Hamilton-Jacobi equation
difficulty: advanced
labels: hamilton-jacobi

What is the physical significance of the Hamilton-Jacobi equation, and what is its form?

---

$H\!\left(q_i, \frac{\partial S}{\partial q_i}, t\right) + \frac{\partial S}{\partial t} = 0$, where $S$ is Hamilton's principal function. Solving it yields a complete solution to the equations of motion via a canonical transformation to constant coordinates and momenta.

---

Start from Hamilton's equations with a canonical transformation $(q,p) \to (Q,P)$ chosen so that the new Hamiltonian $K = 0$. Then $\dot{Q} = \dot{P} = 0$, meaning the new variables are constants -- the problem is solved. The generating function $S(q, P, t)$ of this transformation satisfies $p_i = \partial S/\partial q_i$, and the condition $K = H + \partial S/\partial t = 0$ gives the Hamilton-Jacobi equation. For a time-independent $H$, write $S = W(q) - Et$ (separation of time), where $W$ is Hamilton's characteristic function satisfying $H(q_i, \partial W/\partial q_i) = E$. For separable systems you can further write $W = \sum_i W_i(q_i)$, reducing the PDE to uncoupled ODEs -- one per degree of freedom. Example: for a 1D free particle, $H = p^2/2m$, the HJ equation gives $\frac{1}{2m}(\partial S/\partial x)^2 + \partial S/\partial t = 0$. Trying $S = \alpha x - \frac{\alpha^2}{2m}t$ yields $p = \alpha$ (constant momentum), $x = (\alpha/m)t + \beta$ (uniform motion). The deep connection: $S$ equals the classical action $\int L\,dt$ evaluated along the actual trajectory, and its gradient gives the momentum field. This is why the Hamilton-Jacobi equation is the classical limit of the Schrodinger equation -- write $\psi = A e^{iS/\hbar}$ and take $\hbar \to 0$. References: Goldstein, Classical Mechanics, Chapter 10; Landau & Lifshitz, Mechanics, Sections 47--48; Arnold, Mathematical Methods of Classical Mechanics, Chapter 9.

===

### moment of inertia tensor
difficulty: intermediate
labels: rigid-body

What is the moment of inertia tensor, and when can you describe rotation with a single scalar moment of inertia?

---

The moment of inertia tensor $I_{ij} = \sum_a m_a (r_a^2 \delta_{ij} - r_{a,i} r_{a,j})$. A single scalar suffices when the body rotates about a principal axis.

---

The inertia tensor generalizes the scalar $I$ to 3D: the angular momentum is $L_i = I_{ij}\omega_j$, so $\mathbf{L}$ need not be parallel to $\boldsymbol{\omega}$ unless you rotate about a principal axis. Diagonalizing $I_{ij}$ gives three principal moments $I_1, I_2, I_3$ along orthogonal body-fixed axes. A single scalar $I$ works when $\boldsymbol{\omega}$ is along one of these axes, because then $\mathbf{L} = I\boldsymbol{\omega}$. For a symmetric top ($I_1 = I_2 \neq I_3$), the free rotation decomposes into spin about the symmetry axis plus precession of that axis around $\mathbf{L}$. The parallel and perpendicular axis theorems relate moments about different axes. Euler's equations $I_i \dot{\omega}_i + \epsilon_{ijk}\omega_j I_k \omega_k = \tau_i$ (no sum on $i$) govern rigid body dynamics in the body frame. References: Goldstein, Classical Mechanics, Chapter 5 (especially 5.3--5.6); Landau & Lifshitz, Mechanics, Sections 32--36; Taylor, Classical Mechanics, Chapter 10.

===

### normal modes
difficulty: intermediate
labels: normal-modes

What are normal modes of a coupled oscillator system?

---

Normal modes are independent patterns of oscillation in which all parts of the system move sinusoidally at the same frequency. They are the eigenvectors of the matrix $M^{-1}K$, where $M$ is the mass matrix and $K$ is the stiffness matrix.

---

Any motion of the system can be expressed as a superposition of its normal modes.

===

### relativistic free particle Lagrangian
difficulty: intermediate
labels: lagrangian-mechanics

Write the Lagrangian for a free particle in special relativity.

---

$L = -mc^2 \sqrt{1 - \frac{v^2}{c^2}}$

---

The action is $-mc^2 \int d\tau$, where $\tau$ is proper time. This Lagrangian reproduces relativistic momentum $p = \gamma m v$.

===

### Liouville's theorem
difficulty: intermediate
labels: hamiltonian-mechanics

State Liouville's theorem in classical mechanics.

---

The phase-space distribution function is constant along the trajectories of the system; equivalently, phase-space volume is preserved under Hamiltonian time evolution.

---

Mathematically, $\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \{\rho, H\} = 0$. This is foundational for statistical mechanics.

===
