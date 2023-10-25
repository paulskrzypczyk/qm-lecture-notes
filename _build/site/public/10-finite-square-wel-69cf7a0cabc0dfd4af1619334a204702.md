---
title: "Chapter 10: The Finite Square Well"
short_title: "Ch. 10: Finite Sq. Well"
numbering:
  enumerator: 10.%s
---

````{important} Video: _Finite Square Well I_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/b4d75aac912242ada2a53020a56c64981d
:width: 100%
```

In the previous two sections we studied a particle confined in an infinite square well potential. This is a highly idealised well, which does not occur in real life. The merit of studying it, however, is that it is relatively simple to analyse, and allowed us to see how discrete energy levels arises. It however missed some crucial general aspects of quantum mechanics.

In this section, we will study a second potential well, which is the **finite square well**. It is still a highly idealised well, but a better physical approximation to the types of forces that can occur in nature. Our focus will be on finding the energy eigenstates and eigenvalues of this well. These are the only aspect that differs compared to the previous section.  Once we know the energy eigenstates and eigenvalues, the dynamics of a particle confined to the well are solved in exactly the same way as previously. 

We will see here that, unlike for the infinite square well, it is not possible to find exact **analytic** formulas for the energy eigenvalues. Nevertheless, we will see how we can approximately find them graphically, and understand their structure nevertheless. This is in itself an important lesson — almost all real problems in physics cannot be solved exactly. It is important to realise that we can obtain good approximations, and make use of sensible methods, such as graphical ones, to essentially solve the problem to the desired level of detail. 

Studying the finite square well will also allow us to see a new and absolutely fundamental feature of quantum mechanics that is not present in the infinite square well: **tunnelling** or **barrier penetration**. In quantum mechanics particles can pass through regions or can be found in places where classically they should never be found or never have been able to reach, as they shouldn't have sufficient energy to be or get there. The importance of tunnelling cannot be understated — it is fundamental to the functioning of transistors, one of the most important inventions of the last century.


## The finite square well potential
We are going to consider a situation where a particle is trapped inside a **finite square well**. That is, we are going to take the potential energy of the particle to be

\begin{equation}
V(x) = \begin{cases}
		0 & \text{if } 0 \leq x \leq a, \\
		V_0 & \text{if } x < 0 \text{ or } x > a.
		\end{cases}
\end{equation}
which is depicted in [](#finite-square-well). As you can see, this is closely related to the infinite square well, the only difference now is that outside the well the potential energy is no longer infinite, but takes some value $V_0 > 0$, which is positive, but otherwise arbitrary. 

````{figure} ./Pictures/finite-square-well.svg
:name: finite-square-well
:width: 400px
:align: center

**Finite square well.** The potential energy of the finite square well. The potential vanishes for $0 \leq x \leq a$, and is equal to $V_0$ otherwise.
````

## Energy eigenstates: bound states
In this section we are going to find the energy eigenstates and eigenvalues of the finite square well. We are however not going to consider **all** eigenstates, but only a subset of them. In particular, we are only going to be interested in solving the time-independent Schrödinger equation for particles that have energies $E$ between $0$ and $V_0$ — that is, only those particles which are **bound inside the well.** We will return in [](12-scattering.md) to study the energy eigenstates when $E > V_0$. Since such particles have more energy than the well, these are **free states**, much like the free particle we studied in [](04-free-particle.md), that are not trapped inside the well. As such, their behaviour is fundamentally different to bound states, and this is the reason why we will treat these two situations separately.

Just as for the infinite square well, we consider three distinct regions: to the left of the well; inside the well; and to the right of the well. In each region we need to solve the time-independent Schrödinger equation. We will then use the continuity of the eigenstates and their first derivatives at the boundary between the regions to determine the integration constants, and to find the quantisation condition on the energy. Note that for the infinite square well we only had to use the continuity of the wavefunction, and not the first derivative, since the potential was infinite at the boundary. That is no longer the case here, and we will need to enforce **both** continuity conditions.

In region I, where $x < 0$, the time-independent Schrödinger equation is
\begin{equation}
E u_\rI(x) = -\frac{\hbar^2}{2M}\frac{d^2 u_\rI}{dx^2} + V_0 u_\rI(x). 
\end{equation}
Re-arranging, this is equivalent to
\begin{equation}
\frac{2M(V_0 - E)}{\hbar^2} u_\rI(x) = \frac{d^2 u_\rI}{dx^2}. 
\end{equation}
At this stage, it is useful to make three new definitions:
```{math}
k^2 &=\frac{2ME}{\hbar^2},& k_0^2 &= \frac{2MV_0}{\hbar^2},
```
and
\begin{equation}\label{e-k-k0-kappa}
\zeta^2 = \frac{2M(V_0 - E)}{\hbar^2} = k_0^2 - k^2
\end{equation}
The definition of $k$ is exactly the same definition we have used previously (in [](#e-k-versus-E) in the context of a free particle, and in [](#e-k-vs-E-inf-well) in the context of the infinite square well), and we recognise it as the wavenumber associated to the energy $E$. $k_0$ is similar — it is the wavenumber associated with the energy $V_0$ that characterises the height of the potential well. 

Note that since in this section we are only interested in the situation where $E \leq V_0$, such that the particle is bound to the well, we have that $k^2 \leq k_0^2$, and hence $\zeta^2 \geq 0$. $\zeta$ is thus also a wavenumber, that associated with the energy difference between the height of the well and the energy of the particle.

With these definitions, the time-independent Schrödinger equation becomes
\begin{equation}
\zeta^2 u_\rI(x) = \frac{d^2 u_\rI}{dx^2}.
\end{equation}
The general solution to this can be written down straightforwardly. It is
\begin{equation}
u_\rI(x) = Ae^{\zeta x} + Be^{-\zeta x},
\end{equation}
where $A$ and $B$ are arbitrary constants. This can readily be verified to be a solution. 

We saw in [](#s-decay) that the wavefunction must decay at $x = -\infty$ in order to be a normalisable. For this reason, we see that **$B$ must vanish**, otherwise the term in $e^{-\zeta x}$ would diverge to infinity as $x$ tends to $-\infty$. The permissible solution in region I is therefore
\begin{equation}
u_\rI(x) = Ae^{\zeta x}.
\end{equation}
In Region II, where $0 \leq x \leq a$, the situation is **identical** to the infinite square well: the potential vanishes, and we already solved the time-independent Schrödinger equation in [](#s-inf-well-eigenstates). The solution, from [](#e-soln-inside-well) is
\begin{equation}
u_\rII(x) = C \cos k x + D \sin k x,
\end{equation}
where $C$ and $D$ are two more integration constants. 

Finally, region III, where $x > a$, is identical to region I, with constant potential $V = V_0$. The general solution to the time-independent Schrödinger equation is thus identical to before,
\begin{equation}
u_\rIII(x) = Fe^{\zeta x} + Ge^{-\zeta x},
\end{equation}
with $F$ and $G$ two final constants.

Similarly to region I, we know that the wavefunction must decay to zero at $x = +\infty$ in order to be normalised. This now means that we must take $F = 0$, since $e^{\zeta x}$ diverges as $x$ tends towards infinity. The permissible solution in region III is thus 
\begin{equation}
u_\rIII(x) = Ge^{-\zeta x}.
\end{equation} 

(s-continuity-I-II)=
### Continuity between region I and region II
We now use the fact that energy eigenstates must be continuous and have continuous first derivatives whenever the potential is not infinite, in order to determine the constants $A$, $C$, $D$ and $G$ that have appeared in the above solutions. We will start at $x = 0$, i.e. the boundary between region I and region II. We see that
```{math}
u_\rI(0) &= A,& u_\rII(0) &= C.
```
Therefore, in order for the wavefunction to be continuous, **we must set $C = A$.**

Considering the first derivative, we see that
```{math}
\frac{du_\rI}{dx} &= \zeta Ae^{\zeta x},& \frac{du_\rII}{dx} &= -kA\sin kx + kD \cos kx,
```
where we have substituted $C = A$ into the expression for region II. Therefore, at the boundary $x = 0$ we have
```{math}
\frac{du_\rI}{dx}\bigg|_{x=0} &= \zeta A,& \frac{du_\rII}{dx}\bigg|_{x=0} &= kD.
```
Therefore, in order to have a continuous first derivative at $x = 0$ we must take
\begin{equation}
D = \frac{\zeta}{k}A.
\end{equation}
We have therefore found that the wavefunction in region II must be given by
\begin{equation}
u_\rII(x) = A\left( \cos k x + \frac{\zeta}{k}\sin kx \right),
\end{equation}
where $A$ is still undetermined.

(s-continuity-II-III)=
### Continuity between region II and region III
We now use the continuity of energy eigenstates and their first derivative at the boundary between regions II and III at $x = a$, in order to further fix the constants. As before, for the wavefunction we find
```{math}
u_\rII(a)& = A\left( \cos k a + \frac{\zeta}{k}\sin ka \right),& u_\rIII(a) = Ge^{-\zeta a}.
```
Therefore, to be continuous at $x = a$, we obtain (the more cumbersome) expression
\begin{equation}
G = A\left( \cos k a + \frac{\zeta}{k}\sin ka \right)e^{\zeta a}
\end{equation}
The first derivative in region III is 
\begin{equation}
\frac{du_\rIII}{dx} = -\zeta A\left( \cos k a + \frac{\zeta}{k}\sin ka \right)e^{\zeta a} e^{-\zeta x}.
\end{equation}
At the boundary we therefore have
```{math}
\frac{du_\rII}{dx}\bigg|_{x=a} &= -kA\sin ka + \zeta A \cos ka,\\ \frac{du_\rIII}{dx}\bigg|_{x=a} &= -\zeta A\left( \cos k a + \frac{\zeta}{k}\sin ka \right),
```
and so to have continuity we must satisfy the equation
\begin{equation}\label{e-condition-1}
-kA\sin ka + \zeta A \cos ka = -\zeta A\left( \cos k a + \frac{\zeta}{k}\sin ka \right).
\end{equation}
The constant $A$ appears in each term. We can cancel it out, as long as it does not vanish. It is straightforward to see that this must in fact be the case, due to normalisation: We have just seen above that in all 3 regions, the wavefunction is proportional to $A$. If it were to vanish, the wavefunction would therefore vanish everywhere, and we would have the trivial, but unphysical solution $u(x) = 0$ everywhere. We are therefore only interested in situations where $A \neq 0$, and hence can safely cancel it. $A$ is fixed when we want to **normalise** the energy eigenstates, just as for the infinite square well. 

After a small amount of re-arrangement, we see that [](#e-condition-1) can be transformed to
\begin{equation}
\tan k a = \frac{2k\zeta}{k^2 - \zeta^2}
\end{equation}
Finally, we can recall that $k$ and $\zeta$ are not independent. In fact, in [](#e-k-k0-kappa) we see that $\zeta^2 = k_0^2 - k^2$, where $k_0^2 = 2MV_0/\hbar^2$ is a constant, determined by the depth of the well and the mass of the particle. We therefore arrive at an equation, solely in terms of a single unknown $k$, 
```{card}
\begin{equation}\label{e-quantisation-finite-well}
\tan k a = \frac{2k\sqrt{k_0^2 - k^2}}{2k^2 - k_0^2}.
\end{equation}
```
Only those values of $k$ that satisfy this equation are allowed values of $k$: for any other value of $k$ the first derivative of the wavefunction will not be continuous at $x = a$. **This is our quantisation condition for the finite square well**. Just as for the infinite square well, once the allowed values of $k$ are determined, so too are the allowed energies — the energy eigenvalues — since $E = \hbar^2 k^2/2M$, as in all previous cases. 

### Graphically solving the quantisation condition

````{important} Video: _Finite Square Well II_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/e86ff73822324179a9a00bf5eea2f2c41d
:width: 100%
```

Unfortunately it is not possible to solve analytically [](#e-quantisation-finite-well) for the allowed values of $k$. This type of equation is known as a **transcendental equation**, and is known not to admit closed form expressions for the solutions. However, this definitely doesn't mean we should stop here, it just means we have to change our expectations for what we can learn. There are now essentially two ways to proceed: the first is to numerically solve [](#e-quantisation-finite-well), after fixing specific values for $a$, $m$ and $V_0$; the second is to look at the solutions **graphically** to obtain a **qualitative** understanding of the solutions. In practice, both methods are often useful in combination. Here we will focus on the latter, since for our purposes all we really want to do is to understand qualitatively the allowed energies, and how they relate to the allowed energies of the infinite square well.

To easist way to solve [](#e-quantisation-finite-well) graphically is to plot the left-hand side and the right-hand side separately, and look for the places where their curves **intersect**. These are precisely the values of $k$ such that the equation is satisfied. This is plotted below:


```{figure} ./Pictures/finite-square-well-numerical.svg
:name: graphical-k
:width: 500px
:align: center

**Graphically solving for the allowed values of $k$.** To solve graphically for the allowed values of $k$, we plot separately the left-hand and right-hand side of [](#e-quantisation-finite-well), and look at the *intersection points*. The values of $k$ at which this happens — which we denote by $k_n$, are the allowed values of $k$. In this example, we see that there are 6 intersection points, indicating that the finite square well has 6 allowed energy eigenvalues (equal to $E_n = \hbar^2 k_n^2/2M$) less than $V_0$ (which corresponds to $k_0$ on the $k$ axis), and accordingly only 6 bound energy eigenstates.
```


We see that the curves intersect a number of times, and these are the allowed values of $k$. We will call these intersection points $k_n$, for $n = 1$ to $N$, where $N$ is the total number of intersections. We see that there are thus $N$ energy eigenvalues, equal to 
\begin{equation}
E_n = \frac{\hbar^2 k_n^2}{2M}.
\end{equation}
The energy levels are plotted in [](#energy-levels-finite-sq-well), alongside the corresponding levels for the infinite square well, for comparison.

```{figure} ./Pictures/energy-levels-finite-sq-well.svg
:name: energy-levels-finite-sq-well
:width: 400px
:align: center

**Energy levels of the finite square well.** On the left are the 6 energy levels for the finite square well from [](#graphical-k). On the right are the 6 lowest energy levels of the infinite square well of the same width. In both cases, we plot the well in the background for illustrative purposes. We can see that for the low lying levels (the ground state, and first couple of excited states) there is little change in the energy eigenvalues. However, for higher levels, there is a significant change in the energy levels.
```

What can we say about the values of $k_n$? By being careful, we will see that we can say a fair amount:

- The allowed values $k_n$ are not regularly spaced. However, they still have some regularity about them. If we look carefully at [](#graphical-k), we see that there is **exactly one intersection** between $k = 0$ and $k = \pi/a$ (where $\tan ka = 0$ for the second time), one intersection between $k = \pi/a$ and $k = 2\pi/a$, and so on, up until the value $k_0$. The largest allowed value of $k$ for a particle confined to the well cannot be larger than $k_0$, which corresponds to an energy $E = V_0$. 
- The values $k = n\pi/a$ are exactly the allowed values of $k$ for the infinite square well. We thus see that **all of the allowed energies have decreased** compared to the infinite square well.
- In order to increase the depth of the well we need to increase $k_0$. Since the left-hand side (the tangent function) is independent of $k_0$, this only has the effect of **stretching** the pink curve, while leaving the blue curve untouched. We will thus have **more** intersections, and therefore more allowed energies, for a deeper well. This shows that as the well gets deeper, there are more allowed energies, which is  reasonable.
- Since the pink curve starts off slightly negative, but close to zero, as we increase $k$, the first few intersections — i.e. the ground state energy, and energies of the low lying excited states — start to get closer to the values where $\tan ka = 0$. These are the values $n\pi/a$, i.e. the energies of the infinite square well. Therefore, as the well becomes deeper, **the low lying energy levels start to approach the energy levels of the infinite square well**. 
- However, for the higher levels, where the pink curve is not close to zero, the intersection points are different. This means that the energy levels close to the top of the potential barrier differ significantly more than the low lying energy levels.

### Comparing the eigenstates with those of the infinite square well
Having solved for the allowed energy eigenvalues, it is useful to return to the energy eigenstates $u_n(x)$, and to see what they look like. Before doing so, we should put everything together from [](#s-continuity-I-II) and [](#s-continuity-II-III), in order to write down a final expression for $u_n(x)$. Collecting everything, the final expression is
\begin{equation}
u_n(x) = \begin{cases}
A_n e^{\zeta_n x} & \text{ if } x < 0, \\
A_n \left(\cos (k_n x) + \frac{\zeta_n}{k_n}\sin (k_n x) \right) & \text{ if } 0 \leq x \leq a, \\
A_n \left(\cos (k_n a) + \frac{\zeta_n}{k_n} \sin (k_n a) \right) e^{\zeta_n (a-x)} &\text{ if } x > a,
\end{cases}
\end{equation}
where $\zeta_n = \sqrt{k_0^2 - k_n^2}$, and where $A_n$ is the **normalisation constant** that needs to be calculated, and is in general complicated. Written in this form, the energy eigenstates appear complicated, however, this hides the fact that they are in fact **very similar** to the eigenstates of the infinite square well. This is best demonstrated by plotting the solutions. We do this below in [](#eigenstates-finite-sq-well) and [](#probs-finite-sq-well) for $V_0$ finite, as well as for the infinite square well ($V_0 = \infty)$ eigenstates. As we can see, the eigenstates are **qualitatively very similar** to the eigenstates of the infinite square well. 

```{figure} ./Pictures/eigenstates-finite-sq-well.svg
:name: eigenstates-finite-sq-well
:width: 400px
:align: center

**Wavefunctions of energy eigenstates for the finite square well.** On the left are the wavefunctions for the 6 energy levels for the finite square well from [](#graphical-k). On the right are the 6 corresponding wavefunctions for the infinite square well of the same width. We can see that for the low lying levels (the ground state, and first couple of excited states) there is a small amount of tunneling into the classically-forbidden region, while for larger energy levels the amount of tunneling becomes significant, and hence the difference with the infinite square well is more noticable.
```

```{figure} ./Pictures/probs-finite-sq-well.svg
:name: probs-finite-sq-well
:width: 400px
:align: center
**Probability densities for the finite square well.** On the left are the probability densities for the 6 energy levels for the finite square well from [](#graphical-k). On the right are the 6 corresponding probability densities for the infinite square well of the same width. We can see that for the low lying levels (the ground state, and first couple of excited states) there is a small amount of tunneling into the classically-forbidden region, while for larger energy levels the amount of tunneling becomes significant, and hence the difference with the infinite square well is more noticable.
```

The main difference is that while for the infinite square well for all energy eigenstates the wavefunction vanishes at the edge of the well at $x = 0$ and $x = a$, and is zero everywhere outside the well, that is no longer the case for the finite square well. Now we find that that the wavefunction does not vanish at $x = 0$ and $x = a$, but **decays exponentially** as we move into the barrier in either direction. This is in fact an extremely surprising and important aspect of quantum mechanics, as we discuss below. 

## Tunnelling and barrier penetration
The fact that the wavefunction does not vanish outside the well means that there is non-zero probability density to find the particle at positions $x < 0$ or $x > a$. This probability density decays exponentially with distance as we move away from the well. 

This is surprising, since if the particle is at any position $x < 0$ or $x > a$, then its potential energy is $V(x) = V_0$. However, we only looked for solutions to the time-independent Schrödinger equation when the total energy of the particle is $E_n \leq V_0$. That is, **the total energy of the particle is less than the potential energy!** In classical physics in order for the particle to be in this region it would need to have negative kinetic energy, which is impossible, and hence this region is ''**forbidden**''.  How then can it be that the particle is in this forbidden region? This is indeed one of the mysteries of quantum mechanics — particles can **penetrate** or **tunnel** into regions that they should not be allowed to be in from the perspective of energy conservation. 

```{attention} Remark
	Some texts like to make a distinction between **tunnelling** and **barrier penetration**. They use the former to refer to situations where a particle passes through a forbidden region, i.e. passes through a potential 'wall' and escapes to the other side, and use the latter to refer to situations where the particle can be found in the forbidden region, i.e. within the wall itself. In truth, these are one and the same effect, and merely two different aspects of it. For that reason, I will use the terminology 'tunneling' in both situations — i.e. to also refer to situations where a particle penetrates into a wall, since I want it to be clear that this is the same effect.  
```

For the infinite square well we did not see tunnelling, because the well was so deep that the decay of the wavefunction was infinitely fast. It is important to stress that **tunnelling is a completely generic feature of quantum mechanics** and it is only for the infinite square well where this effect is completely suppressed. 