---
title: "Chapter 4: The Free Particle"
short_title: "Ch. 4: Free particle"
numbering:
  enumerator: 4.%s
---
(s-free)=

````{important} Video: _The Free Particle I_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/d6d089a674dd448e9f8d1601b6de9f3a1d
:width: 100%
```
````

In this section we will solve the Schrödinger equation fully for the first time, in order to learn about the quantum mechanics of a ''free particle'' — one where there are no forces acting, such that $V(x) = 0$. 

Before solving the Schrödinger equation, it is instructive to briefly recall how free particles behave in classical mechanics. When there are no forces, the equation of motion [](#e-classical-EoM) becomes 
```{math}
\frac{dp}{dt} = 0, \quad \frac{dx}{dt} = \frac{p(t)}{M},
```
with the arbitrary initial condition $x(t_0) = x_0$, $p(t_0) = p_0$. The solution is
```{math}
:label: e-classical-soln
x(t) = x_0 + \frac{p_0}{M} (t-t_0),\quad p(t) = p_0.
```
That is, the momentum of the particle is **constant in time**, and the particle travels with constant momentum, and therefore constant velocity. We would like to understand now the similarities and differences that arise with this in quantum mechanics. 

## Solving the Time-Independent Schrödinger Equation
In the previous section, we saw that under the assumption of a separable solution, we can reduce the problem of solving the Schrödinger equation [](#e-SE), to that of solving the the TISE [](#e-TISE). We will make this assumption here, and study the consequences.

In the case of a free particle, the TISE becomes
```{math}
:label: e-TISE-free-particle
\vph-\frac{\hbar^2}{2M} \frac{d^2u}{dx^2} = E u(x).
```
It will be useful to rearrange this equation and introduce a new constants in order to better understand it. Multiplying both sides by $-\frac{2M}{\hbar^2}$ leads to
```{math}
:label: e-TISE-free-1
\frac{d^2u}{dx^2} = -\frac{2ME}{\hbar^2} u(x).
```
This form suggests that we can introduce a constant $k$,
```{math}
:label: e-k-versus-E
k = \frac{\sqrt{2ME}}{\hbar}.
```
If the constant $E$ is **real** and **positive**, $E > 0$, then $k$ too will be real and positive. Since $E$ was introduced arbitrarily before, let us tentatively assume that it is indeed real and positive (we will come back to this assumption later, but it will be justified once we have confirmed that $E$ is the energy of the particle). With this substitution, [](#e-TISE-free-1) now becomes
```{math}
:label:e-TISE-free-2
\frac{d^2u}{dx^2} = -k^2 u(x).
```
We now see that the TISE for a free particle is in fact an equation that we have encountered before in the context of **simple harmonic motion** in classical mechanics. Two functions that are readily seen to solve this equation are $e^{ikx}$ and $e^{-ikx}$. In particular,
\begin{equation}
\vph	\frac{d^2}{dx^2} e^{\pm ikx} = \frac{d}{dx}\left[ \pm ik e^{\pm ikx}\right] = (\pm ik)^2 e^{\pm ikx} = -k^2 e^{\pm ikx}.
\end{equation}
Therefore, the general solution of the TISE [](#e-TISE-free-2) is any superposition of these two solutions, namely
```{math}
:label: e-sep-spatial
u(x) = B e^{ikx} + Ce^{-ikx}
```
where $B$ and $C$ are arbitrary complex constants.
```{attention} Remark
:class: dropdown
Previously you may have found $\cos(kx)$ and $\sin(kx)$ to be the solutions to [](#e-TISE-free-2). Using the complex exponential solutions, instead of the trigonometric solutions is merely a matter of preference, as both are equivalent. In particular, since $\cos\theta = \frac{1}{2}(e^{i\theta} + e^{-i\theta})$ and $\sin\theta = \frac{1}{2i}(e^{i\theta} - e^{-i\theta})$, a general superposition of complex exponentials is equivalent to a general superposition of cosines and sines. As an exercise, you should confirm that this is true. 
```

Having solved the TISE, we can now use [](#e-sep-form) to **write down** a solution to the Schrödinger equation. In particular, we obtain a solution to the Schrödinger equation by multiplying by $f(t) = Ae^{-iEt/\hbar}$,
```{math}
:label: e-free-sep
\Psi(x,t) &= f(t)u(x),  \\
&= Ae^{-iEt/\hbar}(B e^{ikx} + Ce^{-ikx}), \\
	&= e^{-i\hbar k^2t/2M}(A' e^{ikx} + B'e^{-ikx})
```
This is a separable solution to the free-particle Schrödinger equation, and in the third line we have used [](#e-k-versus-E) to write $E = \hbar^2k^2/2M$, and have combined the constants together, i.e. $A' = AB$ and $B' = AC$.  This is a solution for all values of $A'$ and $B'$, and all values of $k > 0$. 

```{exercise}
By substituting the  wavefunction [](#e-sep-form) into the Schrödinger equation [](#e-SE), confirm that it is a solution.
```
It might appear that we are thus done, as we have managed to solve the Schrödinger equation, and thus have found how a free particle evolves in time. There are however a number of obstacles that we still need to overcome. 

First, as discussed in [](#s-freedom), we can specify an **arbitrary** initial state of the particle, i.e. an arbitrary wavefunction $\Psi(x,t_0)$ at $t = t_0$. For stationary states of the form [](#e-free-sep), at $t = t_0$, we only have two complex numbers $A'$ and $B'$ to specify, and hence this definitely does not amount to an arbitrary wavefunction. We therefore seem to have much less generality than we need. 

More worryingly, as we will see next, the solutions found don't appear to be permissible at all, due to their normalisation. We will see below that both of these problems can be overcome, by using the **superposition principle** from [](#s-superposition). 


## Using the Superposition Principle to Find Normalised Solutions

````{important} Video: _The Free Particle II_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/cb92713987844489a86609bbc20822961d
:width: 100%
```
````

### Separable solutions are unnormalisable for a free particle
Wavefunctions must be normalised in order that the probability to find the particle somewhere is one, as discussed in [](#s-normalisation). Let us therefore attempt to normalise the wavefunction [](#e-free-sep):
```{math}
\vph\infint  |\Psi(x,t)|^2dx &= \infint |(A' e^{ikx} + B'e^{-ikx})|^2 dx  \\
&= \infint |A'|^2 + |B'|^2 + A'B'^*e^{2ikx} + A'^*B' e^{-2ikx} dx, \\
&=\infty
```
unless $A' = B' = 0$. Indeed, when $A' \neq 0$ and $B' \neq 0$, the first two terms are positive and constant, and hence contribute an infinite amount to the integral. Moreover, the wavefunction **does not decay** for large $x$, as we already showed was necessary for normalised wavefunctions in [](#s-decay). On the other hand, $A' = B' = 0$ leads to the solution $\Psi(x,t) = 0$, which also cannot be normalised, and is inadmissible. 

At first sight, this appears like a major problem with the separation of variables method. Assuming a separable form, we found the most general solution to the Schrödinger equation, of the form [](#e-sep-form). This form is not normalisable for a free particle, hence it implies that our initial assumption, that the wavefunction was separable is inconsistent, and there are no stationary states for a free particle.

It is true that our assumption that the wavefunction is separable, for a free particle, is in fact inconsistent, and free particles cannot be in stationary states. However, it does not mean that the method of separation of variables is a bad one, but only that we have to **use it in a smarter way**. We must further make use of the **superposition principle** in order to turn it into a powerful technique for solving the Schrödinger equation. 

### Normalisation of superposed wavefunctions
Consider two distinct separable solutions to the Schrödinger equation, $\Psi_1(x,t)$ and $\Psi_2(x,t)$, each with a corresponding constant $E_1 > 0$ and $E_2 > 0$, such that $E_1 \neq E_2$. That is, consider

```{math}
\Psi_1(x,t) &= e^{-i\hbar k_1^2t/2M}(A_1 e^{ik_1x} + B_1e^{-ik_1x}), \\
\Psi_2(x,t) &= e^{-i\hbar k_2^2t/2M}(A_2 e^{ik_2x} + B_2e^{-ik_2x}),
```

where $k_1 = \sqrt{2ME_1}/\hbar$ and $k_2 = \sqrt{2ME_2}/\hbar$, and $A_1$, $B_1$, $A_2$ and $B_2$ are arbitrary complex constants. Both of these  wavefunctions solve the Schrödinger equation separately. Now, because of the superposition principle from [](#s-superposition), we know that
```{math}
:label: e-superpose-2
	\Psi'(x,t) &= \alpha \Psi_1(x,t) + \beta \Psi_2(x,t)  \\
	&= \alpha e^{-i\hbar k_1^2t/2M}(A_1 e^{ik_1x} + B_1e^{-ik_1x}) \\ & \quad + \beta e^{-i\hbar k_2^2t/2M}(A_2 e^{ik_2x} + B_2e^{-ik_2x})
```
is also a solution to the Schrödinger equation, for arbitrary complex numbers $\alpha$ and $\beta$. 

This new superposed wavefunction has an interesting form. First, it is **no longer separable**. That is, $\Psi'(x,t)$ is not of the form $\Psi'(x,t) = f'(t) u'(x)$, for some functions $f'(t)$ and $u'(x)$.  Second, the normalisation of $\Psi'(x,t)$ is not directly related to the normalisation of $\Psi_1(x,t)$ or $\Psi_2(x,t)$. We will not calculate the normalisation of $\Psi'(x,t)$ just yet, but will show next that we can in fact **form normalised wavefunctions by carefully superposing separable solutions**. 

Before doing so, it will turn out to be important to first ask ourselves what form the **most general** superposition of separable solutions can take. In particular, whereas we superposed two solutions in the above, more generally we can in fact superpose as many solutions as we wish.

In the above example [](#e-superpose-2) it is instructive to realise that although we superposed two solutions, it is more natural to view it as a superposition of **four wavefunctions** all of the form
```{math}
:label: e-psik
\Psi_k(x,t) = \frac{1}{\sqrt{2\pi}}e^{-i\hbar k^2 t/2M} e^{ikx},
```
where $k = k_1$, $-k_1$, $k_2$  and $-k_2$. These all correspond to separable solutions, with $f(t)$ of the form $f(t) = e^{-i\hbar k^2 t/2M}$ and $u(x)$ of the form $u(x) = \frac{1}{\sqrt{2\pi}}e^{ikx}$. 

```{attention} Remark
:class: dropdown
I have introduced the constant $\frac{1}{\sqrt{2\pi}}$ in $\Psi_k(x,t)$ as it turns out to be the '**correct**' normalisation. It is much easier to introduce it at this stage, even if this appears somewhat arbitrary and unjustified, rather than to wait and fix the normalisation later. 
```

With this in mind, we could in fact superpose **infinitely many** separable solutions, one for every value of $k$ — positive or negative. Such a wavefunction can be written
```{math}
:label: e-wavepacket
\Psi(x,t) = \frac{1}{\sqrt{2\pi}}\infint c(k) e^{-i\hbar k^2 t/2M} e^{ikx} dk,
```
where $c(k)$ is a complex function which collects together all of the constants that multiply each function $\Psi_k(x,t)$. We have written this as an **integral** as $k$ can vary continuously. This should not alarm you. Although this form may appear at first sight more complicated than the superposition in [](#e-superpose-2), which is just a sum, it is really of the same form. 

We will now show that by choosing the function $c(k)$ appropriately — i.e. by carefully superposing  separable solutions — we can obtain a normalised solution to the Schrödinger equation. This is in spite of the fact that the separable solutions themselves cannot be normalised. 

We can also use the insight from [](#s-cons-of-norm), that **normalisation is conserved in time**, in order to simplify our calculation. In particular, we need only calculate the normalisation of $\Psi(x,0)$, which has a simpler form than $\Psi(x,t)$. If $\Psi(x,0)$ is normalised, we know that $\Psi(x,t)$ will also be normalised, so we should carry out the simplest calculation we can. We see that 
```{math}
:label: e-norm-calc-1
	\infint |\Psi(x,0)|^2  dx &= \frac{1}{2\pi}\infint dx \infint dk c^*(k) e^{-ikx} \infint dk' c(k')  e^{ik'x},  \\
	&= \frac{1}{2\pi}\infint dk \infint dk' c^*(k)c(k')\infint dx e^{i(k'-k)x},
```
where we introduced a new variable $k'$ for the second integration (which is just a dummy variable that we are integrating over).

```{attention} Remark
:class: dropdown
Note that here we have used a convention — which is common when writing down multiple integrals (here we are integrating over $x$, $k$ and $k'$) — to write the infinitesimals $dx$, $dk$ and $dk'$ **next to the integral signs**. This does not change the meaning of the integral, and we could write it with the infinitesimals at the end, e.g. $\int_{-\infty}^{\infty} ( \int_{-\infty}^{\infty} (\int_{-\infty}^{\infty} f(x,k,k') dk) dk') dx$. This modified notation is supposed to be intuitive, and is introduced as it is both simpler and more useful, since it makes is very easy to see which limits correspond to which integrals (which happen to coincide in the above example, but often do not).  
```

This expression looks formidable, but it can in fact be substantially simplified, by using some of the mathematics from your Mathematical Physics 202 course. In particular, there you learnt about the **Dirac Delta function**:

````{prf:definition} Dirac Delta Function
:class: dropdown
The Dirac Delta function $\delta(y)$ is defined such that
\begin{equation}
\infint  f(y) \delta(y-y_0) dy = f(y_0).
\end{equation}
One representation of the Dirac Delta function is
```{math}
:label: e-delta
\delta(y)  = \frac{1}{2\pi} \infint e^{iay} da.
```
The delta function is an infinitely thin, infinitely tall 'spike', as depicted below:

```{image} ./Pictures/delta.svg
:alt: 
:width: 300px
:align: center
```
Two key properties of the delta function are that it is an **even** function,
```{math}
:label: e-delta-even
\delta(-y) = \delta(y).
```
and that under a **change of scale**
```{math}
:label: e-delta-scale
\delta\left(by\right) = \frac{1}{|b|}\delta(y),
```
````


We therefore see, using [](#e-delta), that the final integral in [](#e-norm-calc-1) is in fact $2\pi \delta(k'-k)$, and so
```{math}
	\infint |\Psi(x,0)|^2  dx &= \frac{1}{2\pi}\infint dk \infint dk' c^*(k')c(k) 2\pi \delta(k'-k) \\
	&=\infint  |c(k)|^2dk.
```
```{attention} Remark
:class: dropdown
Note that the $\frac{1}{\sqrt{2 \pi}}$ that was introduced 'arbitrarily' into the definition of $\Psi_k(x,t)$, has ended up being squared, and has exactly cancelled the $2\pi$ which arises from the definition of the Dirac Delta function. This is the first way of seeing why this was the 'correct' normalisation. 
```
Therefore the wavefunction $\Psi(x,0)$ will be normalised if
````{card}
```{math}
:label: e-ck-norm
\infint |c(k)|^2  dk = 1
```
````
This has exactly the form of a **normalisation condition** for the function $c(k)$, just like [](#e-norm). In the next section we will study further this function and the significance of this normalisation condition. 

To summarise, a wavefunction of the form [](#e-wavepacket) is a **normalised solution** to the Schrödinger equation whenever [](#e-ck-norm) is satisfied. We thus see that the superposition principle allows us to go from the unnormalised separable solutions [](#e-free-sep) to normalised  inseparable ones. 

We now have enough machinery in place to actually study concrete examples, in order to start building some intuition for how particles behave in quantum mechanics. 
(s-Gaussian)=
## Gaussian wavepackets

````{important} Video: _The Free Particle: Gaussian Wavepacket_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/cbfb438a8b304f049292a002489e32711d
:width: 100%
```
````

We are going to study a solution to the Schrödinger equation known as a **Gaussian wavepacket**. This is  a very special solution, whereby the particle is seen to be roughly **localised** in a **packet**, which evolves in time in a rather simple way, maintaining the same general form for all time. 
````{prf:example} Gaussian wavepacket
:label: example-gaussian-1
Consider a superposition specified by
```{math}
:label: e-ck-for-gaussian
	c(k) = \left(\frac{2a^2}{\pi}\right)^{1/4}e^{-a^2(k-k_0)^2}.
```
which is a Gaussian function, centred at $k = k_0$, with width $\sqrt{2}/a$ (distance between inflection points). 
```{image} ./Pictures/gaussian-ck.svg
:alt: 
:width: 400px
:align: center
```	
	
The integral [](#e-wavepacket) can be evaluated explicitly in this case, and this is carried out as an Problem in Problem Sheet 1. At $t = 0$, the wavefunction is found to be
```{math}
:label: e-gaussian-example
	\Psi(x,0) = \left(\frac{1}{a\sqrt{2\pi}}\right)^{1/2} e^{-x^2/4a^2}e^{ik_0 x}
```
This is also a Gaussian function, now centred at the origin, $x = 0$, and multiplied by a **phase factor** $e^{ik_0 x}$. This is depicted below:
```{image} ./Pictures/gaussian-x-t0.svg
:alt: 
:width: 500px
:align: center
```
The probability density to find the particle at position $x$ is
\begin{equation}
	P(x,0) = \frac{1}{a\sqrt{2\pi} } e^{-x^2/2a^2},
\end{equation}
which is a **normal distribution** (see figure below) with mean and standard deviation
```{math}
	\langle x \rangle &= 0, \\
\Delta x&= \sqrt{\langle x^2\rangle - \langle x \rangle^2} = a.
``` 
The particle is therefore localised close to the origin, and the smaller $a$ is, the smaller the standard deviation is, and hence the particle is more tightly localised. 
	
For other times $t$ the integral [](#e-wavepacket) can again be carried out, although the calculation is significantly more lengthy. It is found that the wavefunction is given by
```{math}
	\Psi(x,t) & = \left(\frac{1}{a(1+i\gamma t)\sqrt{2\pi}}\right)^{1/2}\\ &\times \exp\left(\frac{-\left(x-\hbar k_0 t/M\right)^2}{4a^2(1+i\gamma t)}\right)\exp\left(ik_0(x-\hbar k_0t/2M)\right)
```
where 
```{math}
:label: e-gamma
	\gamma = \frac{\hbar}{2 M a^2}.
```
Although this formula looks much more complicated, the wavefunction looks very similar in form at all times:
```{image} ./Pictures/Gaussian-wavepacket.gif
:alt: 
:width: 600px
:align: center
```
	
The probability density to find the particle at a position $x$ at time $t$ is 
```{math}
	P(x,t) = \frac{1}{a\sqrt{2\pi (1+\gamma^2 t^2)}}\exp\left(\frac{-\left(x-\hbar k_0 t/M\right)^2}{2a^2(1+\gamma^2 t^2)}\right)
```
This is plotted for a number of times below (with a reduced scale for the $x$-axis, in order to fit everything into one plot):

```{image} ./Pictures/gaussian-x-t
:alt: 
:width: 500px
:align: center
```

The probability distribution is a normal distribution (Gaussian) for all times, with mean and standard deviation given by
```{math}
	\langle x(t) \rangle &= \frac{\hbar k_0 t}{M}, \\
	\Delta x(t) &= a\sqrt{1 + \gamma^2 t^2}.
```
Thus, the centre of the wavepacket is moving with a constant **speed** equal to $v = \hbar k_0 t/M$. This is somewhat analogous to a classical free particle, that moves with constant speed.
	
At the same time, the wavepacket of a quantum particle is also seen to **spread** — its width (which is what the standard deviation is measuring) increases in time from the initial width of $a$ at $t = 0$, to $a\sqrt{1+ \gamma^2 t^2}$ at time $t$. The parameter $\gamma$ therefore dictates the **rate** of spreading: when $\gamma$ is large the packet spreads faster, whereas when $\gamma$ is small, the packet spreads more slowly. We see from [](#e-gamma) that if we have a **heavier** particle, with a larger mass, $\gamma$ is smaller, and the wavefunction spreads more slowly in time compared to a lighter particle. More interestingly, we see that the particle **spreads faster if it has a smaller width initially**. In particular, $\gamma$ is inversely proportional to $a^2$, which is precisely the variance (standard deviation squared) of the wavepacket at $t = 0$. We will come back to this phenomenon in the next section. 
````

(s-arb-init-wf)=
## Arbitrary initial wavefunction

````{important} Video: _Arbitrary Initial Wavefunction_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/6cd304114a2e48c38f1bd957bb518fab1d
:width: 100%
```
````

In the above example we specified the function $c(k)$ and then used this to determine the wavefunction at all times $\Psi(x,t)$. This fixed the wavefunction at the initial time $t = 0$ also, and hence specifying $c(k)$ can be seen to be equivalent to specifying an initial condition $\Psi(x,0)$. 

What we really want to be able to do however is to specify an initial condition $\Psi(x,0)$ (i.e. a complete description of the particle at a time $t = 0$), and to determine how the wavefunction evolves in time from this initial condition. It is also possible to do this, as we now see. 

The problem that we need to solve is the **reverse** problem to the one we already solved: In the example we saw how to determine $\Psi(x,0)$ from $c(k)$, now we want to determine the function $c(k)$ from an initial wavefunction $\Psi(x,0)$. That is, we want to find the the function $c(k)$ that satisfies
```{math}
:label: e-inverse-1
\Psi(x,0) = \frac{1}{\sqrt{2\pi}}\infint c(k) e^{ikx} dk.
```
To do so, we consider multiplying both sides of [](#e-inverse-1) by $e^{-ik'x}$ and integrating over $x$, to obtain
```{math}
\infint \Psi(x,0) e^{-ik'x} dx& = \frac{1}{\sqrt{2\pi}}\infint dx\infint dk c(k) e^{ikx} e^{-ik'x}, \\
& = \frac{1}{\sqrt{2\pi}}\infint dk c(k) \infint dxe^{i(k-k')x}.
```
The inner integral is equal to $2\pi \delta(k-k')$, as can be seen from [](#e-delta), thus we arrive at
```{math}
\infint  \Psi(x,0) e^{-ik'x} dx &= \frac{1}{\sqrt{2\pi}}\infint c(k) 2\pi \delta(k-k') dk ,  \\
&= \sqrt{2\pi} c(k').
```
We therefore find (changing from $k'$ to $k$), that
````{card}
```{math}
:label: e-c-from-psi
c(k) = \frac{1}{\sqrt{2\pi}} \infint  \Psi(x,0) e^{-ikx} dx.
```
````
There is a  wonderful symmetry between this result and [](#e-inverse-1). In fact, what we have just shown is that $c(k)$ is the **inverse Fourier transform** of $\Psi(x,0)$, and $\Psi(x,0)$ is the **Fourier transform** of $c(k)$, which you learnt about in Mathematical Physics 202. 

Importantly, this shows that for a free particle, we now have the **general solution for an arbitrary initial condition $\Psi(x,0)$**. It is worth pausing to take in the implications of this. In principle, you now have the ability to specify an arbitrary initial wavefunction for the particle $\Psi(x,t_0)$ (which of course must be normalised), and from this determine the wavefunction of the particle at all other times, $\Psi(x,t)$. Combining [](#e-c-from-psi) with [](#e-wavepacket) (and taking care to introduce a number dummy variable $x'$ for the integration), we arrive at the — rather formidable looking — general solution
```{math}
:label: e-final-soln
\vph\Psi(x,t) = \frac{1}{2\pi}\infint dk \infint dx' \Psi(x',0) e^{-ikx'} e^{-i\hbar k^2 t/2M} e^{ikx}
```
It is indeed difficult in general to **evalulate** the right-hand side, that is to carry out the two integrations, but that is a calculational issue, not a conceptual one. Eq.[](#e-final-soln) really is the completely general solution, the equivalent to [](#e-classical-soln) —  which provides the analogous general solution in classical mechanics (and is remarkably simpler).

There is nevertheless more to understand about free particles, and otherwise. In particular, we can use the free particle stationary states [](#e-psik) in order begin understanding **momentum** in quantum mechanics, which we start in the next section. 