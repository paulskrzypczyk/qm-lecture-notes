---
title: "Chapter 7: Commutation and the Uncertainty Principle"
short_title: "Ch. 7: Commutation & UP"
numbering:
  enumerator: 7.%s
---

````{important} Video: _Commutation and the Uncertainty Principle_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/0e7304f134ee4c828f86d2cf95e894df1d
:width: 100%
```
````

In the previous section we introduced the notion of an operator and saw that to each physical quantity in quantum mechanics we associate an operator. This operator is useful for calculating average values, and the eigenfunctions of the operator are precisely those wavefunctions where the property becomes definite. 

In this section we will now move on to looking at **multiple quantities** in quantum mechanics. This will lead us to the notion of **incompatible** observables, which are **physical properties that cannot be simultaneously well defined or measured**. This leads to one of the most famous results in quantum mechanics, namely **Heisenberg's uncertainty principle**, which states, roughly, that the more _certain_ the position of a particle, the more _uncertain_ the momentum, and vice versa.

## Commutation

Operators act on functions to generate new functions. The net effect of acting on a function with multiple operators in general **depends upon the order in which the operators are applied**. This shouldn't be too surprising, since it is common from everyday life: for example, cracking an egg open before placing it in boiling water makes a poached egg, while placing it in boiling water before cracking it upon makes a boiled egg. The order in which we act on the egg matters. So too does the order in which we act on wavefunctions. 

Let us consider the action of the position and momentum operators applied to a wavefunction $\Psi(x)$, in the two different orders:
```{math}
\hat{X}\hat{P}\Psi(x) &= \hat{X}\left(\hat{P}\Psi(x)\right), \\
&= \hat{X} \left(-i\hbar \frac{\partial \Psi(x)}{\partial x}\right),\\
&= -i\hbar x \frac{\partial \Psi(x)}{\partial x},
```
while
```{math}
:label: e-px
\hat{P}\hat{X}\Psi(x) &= \hat{P}\left(\hat{X}\Psi(x)\right), \\
&= -i\hbar \frac{\partial}{\partial x}\left(x\Psi(x)\right),\\
&= -i\hbar \left(\Psi(x) + x \frac{\partial \Psi(x)}{\partial x}\right), \\
&= -i\hbar \Psi(x) - i\hbar x \frac{\partial \Psi(x)}{\partial x}
```
where we have used the product rule for differentiation to obtain the two terms.

The two resulting functions are clearly different from each other, and hence applying the operators in the two different orders is not equivalent. 

Whenever this happens, we say that the operators **do not commute**. If on the other hand it would have been the case that the two different orders lead to the *same* final function, then we would have said that the operators **commute**. 

It is useful to consider the **difference** between the two orders. That is, it is useful to look at
\begin{equation}
\hat{X}\hat{P}\Psi(x) - \hat{P}\hat{X}\Psi(x)
\end{equation}
In this case, we see that
```{math}
:label: e-comm-xp-1
\hat{X}\hat{P}\Psi(x) - \hat{P}\hat{X}\Psi(x) &= -i\hbar x \frac{\partial \Psi(x)}{\partial x} - \left(-i\hbar \Psi(x) - i\hbar x \frac{\partial \Psi(x)}{\partial x}\right) , \\
&= i\hbar \Psi(x).
```
That is, the difference between the action of $\hat{X}$ followed by $\hat{P}$ and the action of $\hat{P}$ followed by $\hat{X}$ is **proportional** to the original function $\Psi(x)$, with the constant of proportionality being the imaginary number $i\hbar$.

The difference between the action of operators is such an important concept that we will use a special notation and terminology for it. We define **the commutator** of the operators $\hat{X}$ and $\hat{P}$ to be
\begin{equation}
[\hat{X},\hat{P}] = \hat{X}\hat{P} - \hat{P}\hat{X}.
\end{equation}
With this notation we can re-express [](#e-comm-xp-1) as
````{card}
\begin{equation}
[\hat{X},\hat{P}]\Psi(x) = i\hbar \Psi(x).
\end{equation}
````
Since this holds for all wavefunctions $\Psi(x)$, it is common to write, **as an abuse of notation**,
````{card}
\begin{equation}\label{e-canonical-commutation}
[\hat{X},\hat{P}] = i\hbar,
\end{equation}
````
that is, **to omit the function $\Psi(x)$** that the operators are acting upon. One of the most common mistakes that students make is to forget that [](#e-canonical-commutation) is an abuse of notation. Indeed, to arrive at [](#e-canonical-commutation) we had to use the product rule for differentiation, which required $\hat{P}$ to act on $x\Psi(x)$, hence there is no way to derive or make sense of this equation without the wavefunction present. 

Equation [](#e-canonical-commutation) is known as the **canonical commutation relation**. It shows that operators corresponding to the two fundamental properties of a particle — the position and the momentum — do not commute with each other. 

## Incompatible observables
The fact that the operators corresponding to position and momentum do not commute is a signature that these physical properties are **incompatible** in quantum mechanics. By this we mean that in quantum mechanics **it is impossible for a particle to have at the same time a definite position and a definite momentum**. Said another way, states that correspond to definite position do not correspond to definite momenta, and vice versa. 

More generally, when you come to look at other physical quantities, such as energy, or angular momentum, if the quantum mechanical operators associated to these quantities do not commute, it signifies, just as for position and momentum, that it is impossible in quantum mechanics for a particle to have at the same time a definite value for both quantities simultaneously, and they cannot be measured simultaneously. 

Importantly the opposite is also true: If the operators corresponding to two quantities in fact **commute**, then a particle can have at the same time definite values for both quantities, and both can be measured simultaneously. 

## The uncertainty principle
We can in fact make the above statements about incompatible observables more quantitative through the notion of **the uncertainty principle**. In this part of the course we will only present the uncertainty principle for **position and momentum**, known as the **Heisenberg Uncertainty Principle**. It is possible to write down uncertainty relations for any pair of observables, but this will only be covered later on in the degree. 

The uncertainty principle states that for any wavefunction $\Psi(x)$, the following relationship holds between the **standard deviation** of position and momentum,
````{card}
\begin{equation}
\Delta x \Delta p \geq \frac{\hbar}{2},
\end{equation}
````
where
```{math}
\Delta x &= \sqrt{\langle x^2\rangle - \langle{x}\rangle^2},& \Delta p &= \sqrt{\langle p^2\rangle - \langle{p}\rangle^2}.
```
The uncertainty principle states that the **product** of the standard deviations of position and momentum are lower bounded by a constant, equal to $\hbar/2$. We will **not prove** the uncertainty principle in this course — for that you will have to wait until Quantum Physics 301 next year. Nevertheless, the uncertainty principle arises precisely because of the fact that the operators for position and momentum **do not commute**. In fact, any pair of observables that don't commute satisfy an uncertainty principle, as you will also see next year. 

The standard deviation of position tells us how well defined the position of the particle is. If the standard deviation is small, this means that all of the probability amplitude $\Psi(x)$ to find the particle somewhere must be concentrated around some particular point. On the other hand, if the standard deviation is large, it means that the probability amplitude must be spread out, and the particle can be found in a wide range of places. The situation is completely analogous for momentum.

Therefore, the uncertainty principle says that if the uncertainty in position $\Delta x$ is **small**, then necessarily the uncertainty in the momentum of the particle is **large**,
\begin{equation}
\Delta p \geq \frac{\hbar}{2\Delta x}.
\end{equation}
Therefore, the particle must be in a superposition of a wide range of momentum. Conversely, if the uncertainty in momentum is small, then the uncertainty in position must be high, signifying that the particle is in a superposition of being in a wide range of places. 

````{prf:example} Gaussian wavepacket
Consider again the Gaussian wavepacket from [](#example-gaussian-1) and [](#example-gaussian-momentum). At $t = 0$, the wavefunction is
\begin{equation}
\Psi(x,0) = \left(\frac{1}{2\pi a^2}\right)^{1/4} e^{-x^2/4a^2}e^{ik_0 x}.
\end{equation} 
The standard deviations in position and momentum of this wavefunction were previously shown to be
```{math}
	 \Delta x&=a,& \Delta p &= \frac{\hbar}{2a}
```
Therefore,
\begin{equation}
\Delta x \Delta p = \frac{\hbar}{2}.
\end{equation}
The Gaussian wavepacket at $t = 0$ therefore **saturates** the uncertainty principle: the product of the uncertainty in position and momentum is as small as allowed by quantum mechanics. This is very special, and it can in fact be shown that **only** the Gaussian wavepacket has this property.
````
