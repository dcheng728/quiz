### Hermitian eigenvalues
difficulty: basic
labels: hermitian-matrices

What are the eigenvalues of a Hermitian (self-adjoint) matrix guaranteed to be?

---

Real

---

If $A = A^\dagger$, then $\langle v|A|v\rangle = \langle v|A^\dagger|v\rangle^* = \langle v|A|v\rangle^*$, so eigenvalues equal their complex conjugates.
===

### matrix trace
difficulty: basic
labels: traces

What is the trace of a matrix?

---

The sum of its diagonal elements, equivalently the sum of its eigenvalues.

---

$\text{Tr}(A) = \sum_i A_{ii}$. The trace is invariant under similarity transformations: $\text{Tr}(P^{-1}AP) = \text{Tr}(A)$.
===

### determinant as eigenvalue product
difficulty: basic
labels: determinants

What is the determinant of a matrix in terms of its eigenvalues?

---

The product of all its eigenvalues.

---

$\det(A) = \prod_i \lambda_i$. A matrix is singular (non-invertible) if and only if at least one eigenvalue is zero.
===

### orthogonality of eigenstates
difficulty: basic
labels: hermitian-matrices

Why are eigenstates of a quantum observable with different eigenvalues orthogonal?

---

Because the observable is Hermitian: if $\hat{A}|a\rangle = a|a\rangle$ and $\hat{A}|b\rangle = b|b\rangle$ with $a \neq b$, then $(a - b)\langle a|b\rangle = 0$ forces $\langle a|b\rangle = 0$.

---

This is why measurement outcomes are distinguishable  --  states with different eigenvalues have zero overlap.
===

### spectral theorem
difficulty: intermediate
labels: decompositions

What is the spectral theorem for Hermitian matrices?

---

Any Hermitian matrix can be diagonalized by a unitary transformation: $A = U D U^\dagger$, where $D$ is diagonal with real eigenvalues and $U$ is unitary.

---

This is why observables in quantum mechanics (Hermitian operators) have real eigenvalues and orthogonal eigenstates forming a complete basis.
===

### unitary matrix
difficulty: basic
labels: special-matrices

What is a unitary matrix?

---

A matrix $U$ such that $U^\dagger U = U U^\dagger = I$ (its inverse is its conjugate transpose).

---

Unitary matrices preserve inner products: $\langle Uv|Uw\rangle = \langle v|w\rangle$. In quantum mechanics, time evolution operators are unitary.
===

### unitary eigenvalues
difficulty: intermediate
labels: special-matrices

What are the eigenvalues of a unitary matrix constrained to be?

---

They lie on the unit circle in the complex plane: $|\lambda| = 1$, i.e., $\lambda = e^{i\theta}$.

---

If $U|v\rangle = \lambda|v\rangle$ and $U$ is unitary, then $|\lambda|^2 \langle v|v\rangle = \langle Uv|Uv\rangle = \langle v|v\rangle$, so $|\lambda| = 1$.
===

### Cayley-Hamilton theorem
difficulty: intermediate
labels: theorems

What is the Cayley-Hamilton theorem?

---

Every square matrix satisfies its own characteristic equation: if $p(\lambda) = \det(A - \lambda I)$, then $p(A) = 0$.

---

For a 2x2 matrix with characteristic polynomial $\lambda^2 - \text{Tr}(A)\lambda + \det(A) = 0$, this gives $A^2 - \text{Tr}(A) A + \det(A) I = 0$.
===

### why observables are Hermitian
difficulty: intermediate
labels: hermitian-matrices

Why must quantum mechanical observables be represented by Hermitian operators?

---

Because Hermitian operators have real eigenvalues (measurement outcomes must be real numbers) and their eigenstates form a complete orthonormal basis (any state can be expanded in the eigenbasis).

---

The spectral theorem guarantees both properties. Anti-Hermitian operators have purely imaginary eigenvalues and generate unitary transformations instead.
===

### commutator $[A,B]$ and simultaneous diagonalization
difficulty: intermediate
labels: commutators

What is the commutator $[A, B]$ of two matrices, and when can $A$ and $B$ be simultaneously diagonalized?

---

$[A, B] = AB - BA$. Two Hermitian matrices can be simultaneously diagonalized if and only if they commute: $[A, B] = 0$.

---

If $[A,B]=0$, then $B$ maps each eigenspace of $A$ into itself (since $A(B|v\rangle) = B(A|v\rangle) = a(B|v\rangle)$), so $B$ can be diagonalized within each eigenspace of $A$ without disturbing $A$. Conversely, if they are simultaneously diagonal, they commute because diagonal matrices commute. In quantum mechanics, commuting observables share a common eigenbasis and can be measured simultaneously without uncertainty.
===
