---
title: "Chapter 9: The Infinite Square Well: Dynamics"
short_title: "Ch. 9: Inf. Sq. Well Dynamics"
numbering:
  enumerator: 9.%s
---

````{important} Video: _Infinite Square Well: Dynamics_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/78ac713d0e2c488e8b38581055152d211d
:width: 100%
```
````

In the previous section we started our exploration of the infinite square well potential. We found the energy eigenstates of the well, which are the stationary states, and explored some of their properties, which hold for arbitrary potential wells.

We would now like to move onto studying the **dynamics** of a particle trapped inside an infinite square well. In particular, given an arbitrary initial wavefunction $\Psi(x,0)$ at $t = 0$ – i.e. a complete specification of the state of the particle – we would like to solve for the wavefunction $\Psi(x,t)$ at later times $t$. Having found the energy eigenstates, this is in fact a relatively easy task, as we will now show. 

## Dynamics of an energy eigenstate
We will start our exploration not with an arbitrary initial state $\Psi(x,0)$, but with a single energy eigenstates. That is, let us first recap how the state
\begin{equation}
\Psi(x,0) = u_n(x)
\end{equation}
evolves in time, for $n$ an arbitrary integer, i.e. an arbitrary energy eigenstate.

Recall from [](./03-sep-TISE.md) that energy eigenstates are solutions to the time-independent Schrödinger equation, which we arrived at by postulating a **separable** solution to the Schrödinger equation. We know that such states constitute **stationary states**, and evolve in time in a very simple manner, in particular
\begin{equation}
\Psi(x,t) = e^{-iE_n t/\hbar}u_n(x),
\end{equation}
where
\begin{equation}
E_n = \frac{\hbar^2 \pi^2 n^2}{2Ma^2}
\end{equation}
is the corresponding energy eigenvalue. That is, stationary states **only accumulate a phase $e^{-iE_n t/\hbar}$ in time**. Recall that these are called stationary states since **all physical properties are constant in time** for stationary states. 

## Dynamics of an arbitrary state
Moving on to an arbitrary initial state $\Psi(x,0)$, we saw in the previous section that we can always express this as a superposition of energy eigenstates. In particular, it is always possible to write
\begin{equation}
\Psi(x,0) = \sum_{n=1}^{\infty} c_n u_n(x),
\end{equation}  
where the **amplitude** to have energy $E_n$ is
\begin{equation}
c_n = \infint u^*_n(x)\Psi(x,0)  dx.
\end{equation}
It is now that we once again apply the **superposition principle**: Since we know how each energy eigenstates evolves, **the evolution of the superposition is precisely the superposition of the evolution**, that is
````{card}
\begin{equation}
\Psi(x,t) = \sum_{n=1}^{\infty} c_n e^{-iE_n t/\hbar}u_n(x).
\end{equation}
````
As we have stressed before, remarkably  we **are simply able to write down the solution** once we have expressed the wavefunction at $t = 0$ as a superposition of energy eigenstates. This is precisely the reason why the energy eigenstates are so important. The above formula shows that all of the hard calculational work that needs to be done in quantum mechanics is in **finding the energy eigenstates and energy eigenvalues** for a given potential $V(x)$. Once this has been done, by writing an arbitrary initial state as a superposition of energy eigenstates, writing down how this state evolves in time is immediate. 

We can express the above in a slightly different way, which makes the analogy between the energy amplitudes $c_n$, the spatial amplitudes $\Psi(x,t)$ and the momentum amplitudes $\tilde{\Psi}(p,t)$ clearer. To do so, we write $c_n = c_n(0)$ as the energy amplitudes at $t = 0$, and realise that we can write
\begin{equation}
\Psi(x,t) = \sum_{n=1}^{\infty} c_n(t) u_n(x),
\end{equation}
where
````{card}
\begin{equation}
c_n(t) = c_n(0)e^{-iE_n t/\hbar}
\end{equation}
````
Written in this form, it emphasises that at all times $c_n(t)$ is the amplitude for the particle to have energy $E_n$, and that the amplitudes evolve in a very simple fashion: they accumulate the phase $e^{-iE_n t/\hbar}$ over time. This should be contrasted to both $\Psi(x,t)$, which in general has a (very) complicated relation with $\Psi(x,0)$, (as given by [](#e-final-soln) for a free particle), and $\tilde{\Psi}(p,t)$, which also in general has a complicated relationship with $\tilde{\Psi}(p,0)$. 

The reason why the time evolution in terms of the energy amplitudes is much simpler than position and momentum amplitudes is precisely because of the fact that **energy is a constant of motion, whereas the position of the particle is most definitely not a constant of motion, and in general neither is the momentum**. 

It is most insightful to put the above into context in a simple example. 

````{prf:example} Simple bouncing particle 
It is instructive to consider a very simple example, of a particle bouncing back and forth, in order to see how simple superpositions of energy eigenstates evolve in time, and lead to interesting, and in some respects recognisable, dynamics.

Consider the following wavefunction at time $t = 0$,
```{math}
\Psi(x,0) &= \frac{1}{\sqrt{2}}\left(u_1(x) + u_2(x)\right), \\
&=\sqrt{\frac{1}{a}} \sin\left(\frac{\pi x}{a}\right)+\sqrt{ \frac{1}{a}} \sin \left(\frac{2\pi x}{a}\right),
```
for $0 \leq x \leq a$, and $\Psi(x,0) = 0$ otherwise (i.e. the particle as inside the well, as expected). This wavefunction is a **superposition** of the ground state $u_1(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{\pi x}{a}\right)$ and the first excited state $u_2(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{2\pi x}{a}\right)$ with equal **real** amplitudes $c_1 = c_2 = \frac{1}{\sqrt{2}}$. The form of the wavefunction is the following:

```{image} ./Pictures/evolution-t0-inf-sq-well.svg
:alt: 
:width: 400px
:align: center
```
We see that most of the probability amplitude is on the left-hand side of the well, with a much smaller amount on the right-hand side. We can write down the wavefunction of the particle at time $t$ immediately, since we have already written it as a superposition of energy eigenstates. In particular, the wavefunction is
\begin{equation}
\Psi(x,t) = \sqrt{\frac{1}{a}} e^{-i \hbar \pi^2 t/2 M a^2}\sin\left(\frac{\pi x}{a}\right)+\sqrt{ \frac{1}{a}} e^{-2 i \hbar \pi^2 t/ M a^2}\sin \left(\frac{2\pi x}{a}\right).
\end{equation}
That is, the first term is simply multiplied by $e^{-iE_1 t/\hbar} = e^{-i\hbar \pi^2 t/2Ma^2}$ and the second term is multiplied by $e^{-iE_2 t/\hbar} = e^{-2 i\hbar \pi^2 t/Ma^2}$.

It is most illuminating to look at the **probability density** to find the particle at $x$ at time $t$, i.e. to look at $P(x,t) = |\Psi(x,t)|^2$. After simplification, we find 
\begin{equation}
P(x,t) = \frac{1}{a}\left[\sin^2\left(\frac{\pi x}{a}\right) + \sin^2 \left(\frac{2\pi x}{a}\right) + 2 \sin\left(\frac{\pi x}{a}\right)\sin \left(\frac{2\pi x}{a}\right)\cos \left(\frac{3\hbar \pi^2 t}{2 M a^2}\right)\right] 
\end{equation}
where the final cosine term is $\cos((E_2 - E_1)t/\hbar)$. 

The first term is just the probability density for a particle in the ground state, while the second term is just the probability density for a particle in first excited state. Both of these terms are independent of time. What is interesting is the final term, which we call the **interference term**, and is where all the time dependence occurs. 

We see furthermore that this interference term has an interesting structure- The spatial profile is constant, and equal to $2 \sin\left(\frac{\pi x}{a}\right)\sin \left(\frac{2\pi x}{a}\right)$. This is multiplied by a term which depends **only** upon time, and **oscillates** sinuosoidally with period
\begin{equation}
T = \frac{2\pi \hbar}{E_2 - E_1} = \frac{4 M a^2}{3\hbar \pi}.
\end{equation}
The motion of the particle is thus oscillatory, and we can sketch the probability density at a number of times within a period to get a feeling for how the particle evolves:

```{image} ./Pictures/evolution-t-inf-sq-well.svg
:alt: 
:width: 500px
:align: center
```
It is also useful to see this in the form of an animation: 

```{image} ./Pictures/inf-sq-well-wf-pd-phase.gif
:alt: 
:width: 500px
:align: center
```

We see that the particle roughly '**bounces**' back and forth between the two walls of the well. Remarkably, this is all generated by the simple interference term. 

More general initial states, which are superpositions of more than two energy eigenstates will in general have more intricate dynamics. However, the underlying **mechanism** is the same- there is interference between the different energy eigenstates, and this is what leads to the probability density evolving in time.
````