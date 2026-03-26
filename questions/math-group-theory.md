### Lie groups and generators
difficulty: basic
labels: lie-groups

What is a Lie group, and what are its generators?

---

A Lie group is a continuous group that is also a smooth manifold. Its generators $T^a$ are the basis of the Lie algebra, related to group elements near the identity by $g = e^{i\alpha_a T^a}$. They satisfy $[T^a, T^b] = if^{abc} T^c$, where $f^{abc}$ are the structure constants.

---

In physics, generators correspond to conserved charges via Noether's theorem. Angular momentum operators are the generators of $SO(3)$; the Hamiltonian generates time translations.

===

### $SU(2)$ and $SO(3)$
difficulty: basic
labels: su2

What is $SU(2)$, what are its generators, and how is it related to $SO(3)$?

---

$SU(2)$ is the group of $2 \times 2$ unitary matrices with determinant 1. Its generators are $T^a = \frac{1}{2}\sigma^a$ (half the Pauli matrices), satisfying $[T^a, T^b] = i\epsilon^{abc} T^c$. $SU(2)$ is the double cover of $SO(3)$: every rotation corresponds to two $SU(2)$ elements ($\pm g$).

---

This is why spinors pick up a minus sign under $2\pi$ rotation. Integer-spin representations see only $SO(3)$; half-integer representations require the full $SU(2)$.

===

### $SU(2)$ irreps
difficulty: intermediate
labels: representations

What are the irreducible representations of $SU(2)$, and what labels them?

---

The irreps are labeled by $j = 0, \frac{1}{2}, 1, \frac{3}{2}, 2, \ldots$ with dimension $2j + 1$. Each has basis states $|j, m\rangle$ with $m = -j, -j+1, \ldots, j$.

---

These are exactly the angular momentum multiplets in quantum mechanics. $j = 1/2$ is the fundamental (spinor), $j = 1$ is the adjoint (vector), etc.

===

### Schur's lemma
difficulty: basic
labels: schur-lemma

State Schur's lemma and explain its importance in physics.

---

(1) Any operator that commutes with all generators of an irreducible representation is proportional to the identity. (2) Any intertwining map between inequivalent irreps is zero.

---

This is why $\hat{L}^2$ has a single eigenvalue $\hbar^2 l(l+1)$ within a given angular momentum multiplet. It also underlies selection rules: matrix elements of operators between states in different irreps vanish unless the operator transforms appropriately.

===

### $SU(2)$ tensor product decomposition
difficulty: intermediate
labels: tensor-products, lie-groups

How do you decompose the tensor product of two $SU(2)$ irreps $j_1 \otimes j_2$?

---

$$j_1 \otimes j_2 = |j_1 - j_2| \oplus (|j_1 - j_2| + 1) \oplus \cdots \oplus (j_1 + j_2)$$This is the Clebsch-Gordan decomposition. Alternatively, this follows from characters: the character of the spin-$j$ irrep is $\chi_j(\theta) = \frac{\sin((2j+1)\theta/2)}{\sin(\theta/2)}$, and the tensor product character is the product $\chi_{j_1}\chi_{j_2}$. Using the product-to-sum identity for sines, this decomposes as $\chi_{j_1}\chi_{j_2} = \sum_{j=|j_1-j_2|}^{j_1+j_2} \chi_j$, proving the decomposition.

---

For example, $1/2 \otimes 1/2 = 0 \oplus 1$ (singlet + triplet). Via characters: $\chi_{1/2}(\theta) = 2\cos(\theta/2)$, so $\chi_{1/2}^2 = 2\cos^2(\theta/2) = 1 + (2\cos\theta + 1)/(1) = \chi_0 + \chi_1$. The expansion coefficients in the state basis are the Clebsch-Gordan coefficients. This is the group-theoretic content of angular momentum addition.

===

### $SU(3)$ in the Standard Model
difficulty: intermediate
labels: su3

What is $SU(3)$, how many generators does it have, and what role does it play in the Standard Model?

---

$SU(3)$ is the group of $3 \times 3$ unitary matrices with determinant 1, with $3^2 - 1 = 8$ generators (the Gell-Mann matrices $\lambda^a/2$). It is the gauge group of QCD: quarks carry three color charges and gluons transform in the adjoint (octet) representation.

---

The fundamental is $\mathbf{3}$ (quarks), the conjugate is $\bar{\mathbf{3}}$ (antiquarks), the adjoint is $\mathbf{8}$ (gluons). Mesons are $\mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{1} \oplus \mathbf{8}$.

===

### Noether's theorem and symmetry groups
difficulty: basic
labels: noether

How does Noether's theorem connect symmetry groups to conservation laws? Give three examples.

---

Every continuous symmetry of the action has a corresponding conserved quantity. Time translation gives energy; spatial translation gives momentum; rotation ($SO(3)$) gives angular momentum.

---

Internal symmetries also apply: $U(1)$ phase invariance gives charge conservation, $SU(3)$ color symmetry gives color charge conservation. The conserved current is $j^\mu = \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \delta \phi$.

===

### Lie algebra structure constants
difficulty: intermediate
labels: structure-constants

What are the structure constants $f^{abc}$ of a Lie algebra?

---

They are defined by $[T^a, T^b] = if^{abc} T^c$, are fully antisymmetric ($f^{abc} = -f^{bac}$), and satisfy the Jacobi identity: $f^{abe}f^{ecd} + f^{bce}f^{ead} + f^{cae}f^{ebd} = 0$.

---

For $SU(2)$, $f^{abc} = \epsilon^{abc}$. For $SU(3)$, the structure constants are more complex but tabulated. In gauge theory, structure constants determine gluon self-interaction vertices.

===

### Young tableaux
difficulty: advanced
labels: young-tableaux

What are Young tableaux, and how are they used in physics?

---

Young tableaux are diagrams of boxes in left-justified rows of non-increasing length that label irreducible representations of $SU(N)$ and the permutation group $S_n$. Rows represent symmetrization and columns represent antisymmetrization of tensor indices.

---

For $SU(3)$: one box is $\mathbf{3}$, two boxes in a column is $\bar{\mathbf{3}}$, two in a row is $\mathbf{6}$. They systematize tensor product decompositions and the classification of hadrons in the quark model.

===

### Casimir operators
difficulty: intermediate
labels: casimir

What is a Casimir operator, and what is the quadratic Casimir of $SU(2)$?

---

A Casimir operator commutes with all generators of the Lie algebra. For $SU(2)$, the quadratic Casimir is $C_2 = T^a T^a$. In the spin-$j$ representation, its eigenvalue is $j(j+1)$.

---

By Schur's lemma, a Casimir is proportional to the identity within each irrep, so its eigenvalue labels the representation. $SU(3)$ has two independent Casimirs (quadratic and cubic), matching the two labels needed for an $SU(3)$ irrep.

===

### weight diagrams
difficulty: advanced
labels: weight-diagrams

What is a weight diagram for a Lie algebra representation?

---

A weight diagram plots the eigenvalues of the Cartan (mutually commuting) generators for each state. The roots are the weights of the adjoint representation, corresponding to raising/lowering operators. For $SU(2)$, the single Cartan generator is $T^3$, and the roots are $\pm 1$ (corresponding to $T^\pm$).

---

For $SU(3)$, the Cartan subalgebra is 2D ($T^3$, $T^8$), so weight diagrams are 2D. The fundamental $\mathbf{3}$ has three weights forming a triangle; the adjoint $\mathbf{8}$ has a hexagonal diagram with two states at the origin.

===
