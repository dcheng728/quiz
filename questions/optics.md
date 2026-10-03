### law of reflection
difficulty: basic
labels: reflection, ray-optics

What is the law of reflection for a flat mirror, and from what reference line are the angles measured?

---

$\theta_i = \theta_r$, with both angles measured from the normal.

---

Convention, not necessity — works for curved surfaces too.

===

### real vs virtual image
difficulty: basic
labels: image-formation, ray-optics

What distinguishes a real image from a virtual image, and how could you test which one you're looking at?

---

A real image forms where actual light rays physically converge; a virtual image forms only where the backward extensions of diverging rays appear to meet, with no light actually passing through that point.

---

Practical test: a real image can be projected onto a screen placed at its location; a virtual image cannot. Plane-mirror images are virtual — light reflects from the object into your eye, and your visual system interprets it as though it came from behind the mirror.

===

### refraction and Snell's law
difficulty: basic
labels: refraction, snells-law, ray-optics

State Snell's law, and the qualitative rule for which way a ray bends when crossing between media of different refractive index $n$.

---

$n_1\sin\theta_1 = n_2\sin\theta_2$. Going from low $n$ to high $n$, the ray bends toward the normal; going from high $n$ to low $n$, it bends away from the normal.

---

Higher refractive index means slower light speed, $v = c/n$ — light bends toward the normal when entering the optically slower medium. Some reference values:

- vacuum: $n=1$ (exact, by definition)
- air: $n\approx1.0003$ (often rounded to $1.00$)
- water: $n\approx1.33$
- glass (typical): $n\approx1.5$
- diamond: $n\approx2.42$

===

### apparent depth in water
difficulty: basic
labels: refraction, ray-optics

Why does an object underwater appear shallower than it actually is when viewed from air?

---

Light from the object refracts at the water-air interface and bends away from the normal (going from high to low $n$). Back-tracing the refracted rays, as your eye does, their backward extensions intersect above the actual object, so the apparent image sits closer to the surface than the real one.

---

This is the same virtual-image mechanism as a mirror, just via refraction instead of reflection — actual rays never pass through the apparent location.

===

### ray-tracing strategy for refraction problems
difficulty: basic
labels: ray-optics, problem-solving

What is the general strategy for finding where an object appears to be after refraction?

---

First determine what the actual ray does physically — which way it bends, based on the index change — then back-trace the outgoing ray as an observer would, to find the apparent position.

---

Applying this to the reversed case — an object in air viewed by an observer underwater — light bends toward the normal (low-to-high $n$), so back-tracing places the apparent object farther from the interface than it really is, opposite to the underwater-object-viewed-from-air case.

===

### wave speed relation for light
difficulty: basic
labels: waves, electromagnetic-waves

How are frequency and wavelength related for a wave, and what follows for two EM waves of different frequency in air?

---

$v = f\lambda$, so $\lambda = c/f$ for EM waves in air ($v\approx c$). Higher frequency means shorter wavelength.

---

A 2560 MHz microwave has a shorter wavelength ($\approx11.7$ cm) than a 900 MHz one ($\approx33.3$ cm). Interference features, like microwave-oven hot/cold spots spaced roughly $\lambda/2$ apart, are correspondingly smaller at the higher frequency.

===

### EM wave intensity and field amplitudes
difficulty: basic
labels: waves, electromagnetic-waves, poynting-vector

How is the intensity of an EM wave related to power, and to the electric and magnetic field amplitudes?

---

$I = P/A$ (power per unit area). In terms of fields, $E_0 = cB_0$ and $I = \frac12c\epsilon_0E_0^2$.

---

Given $I$, solve for the field amplitude: $E_0=\sqrt{2I/(c\epsilon_0)}$, then $B_0=E_0/c$.

===
