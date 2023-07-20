---
title: Operators
short_title: Operators
numbering:
  enumerator: 6.%s
---

In this section we will introduce another basic ingredient of quantum mechanics, the fact that **physical quantities** are represented by mathematical _operators_. Such operators are sometimes referred to as **observables**, as they correspond to observable quantities, such as position and momentum. This will allow us to understand the true meaning of the time-independent Schrödinger equation, and why $E$ corresponds to energy. Finally, it will show that stationary states correspond to states with **definite** energy. 

In order to arrive at quantum mechanical operators we will look at **averages** of physical quantities, and how they are expressed in quantum mechanics, and see that this naturally leads us somewhere interesting.   
````{warning}
In this section we will be interested exclusively in the properties of a quantum particle **at a given time $t_0$**, and not the dynamics in time. In order to avoid clutter, instead of writing $\Psi(x,t_0)$ all of the time, we will **simplify the notation and write simply $\Psi(x)$**.  Similarly, we will write $\tilde{\Psi}(p)$ in place of $\tilde{\Psi}(p,t_0)$ to refer to the momentum wavefunction at $t_0$. Whenever we need to talk about the dynamics, we will revert back to the full notation.  
```` 

## Average values of position and momentum
The wavefunction $\Psi(x)$ specifies the probability density for a particle to be found at position $x$, according to $P(x) = |\Psi(x)|^2$. It can  often be useful to study **properties** of this probability density, for example the **average position** of the particle, 
````{card}
\begin{equation}\label{e-av-x}
\langle x \rangle = \infint x|\Psi(x)|^2 dx,
\end{equation}
````
or more generally the average of some function of position $f(x)$, 
````{card}
\begin{equation}
\langle f(x) \rangle = \infint f(x)|\Psi(x)|^2 dx,
\end{equation}
````
for example the squared position $f(x) = x^2$, or the squared distance from the average, $f(x) = (x - \langle x \rangle)^2$. 
```{note} Remark
:class: dropdown
	Such average values are often referred to as **expectation (or expected) values**. This terminology can however be misleading. For example, it can give the impression that you 'expect' to find the particle at $\langle x \rangle$, i.e. that the expectation value is equal to the most likely value of $x$. **This is most definitely not the case in general**. In fact, the expectation value is rather fictitious, and can be a position where there is zero probability density to find the particle. One should always think about what the probability density **looks like** before asking oneself whether the average value is a meaningful quantity to calculate or not.
```

Equivalently, $\tilde{\Psi}(p)$ specifies the probability density for the momentum of the particle. It is also often useful to study properties such as the **average momentum** of the particle,
````{card}
\begin{equation}\label{e-av-mom-from-mom-wf}
\langle p \rangle = \infint p |\tilde{\Psi}(p)|^2 dp,
\end{equation}
````
or other functions of momentum $g(p)$,
````{card}
\begin{equation}
\langle g(p)\rangle = \infint g(p) |\tilde{\Psi}(p)|^2 dp.
\end{equation}
````
### Average of momentum from the wavefunction}
In [](#e-av mom from mom wf) the average momentum of the particle is calculated from the momentum wavefunction $\tilde{\Psi}(p)$. However, it is customary to have the state of the particle specified not in terms of the momentum wavefunction, but in terms of the the (spatial) wavefunction $\Psi(x)$. 

It thus appears that in order to calculate the average momentum (or function of momentum) a rather complicated procedure needs to be carried out: first the momentum wavefunction must be obtained, by carrying out the integration in [](#e-psip). Then the expectation value must be calculated, by carrying out the integration in [](#e-av-mom-from-mom-wf). In the derivation below we will show that  there is **a much more direct method** for calculating the average momentum directly from the wavefunction, by introducing the notion of a **momentum operator**.

As our starting point, we first show below that the average momentum can equivalently be expressed as 

````{card}
\begin{equation}
\langle p \rangle = \Bigg|-i \hbar \infint dx \Psi^*(x) \frac{\partial \Psi}{\partial x}.\label{e-av-p-final-form}
\end{equation}
````

````{seealso} Derivation
:class: dropdown
Let us start by substituting the explicit expressions for the momentum wavefunction [](#e-psip), and its complex conjugate, into [](#e-av-mom-from-mom-wf),
```{math}
:label: e-p-op-step-1
\langle p \rangle &= \infint p \tilde{\Psi}^*(p)\tilde{\Psi}(p) dp, \\
&= \frac{1}{2\pi \hbar}\infint dp \, p\infint dx' \Psi^*(x')e^{ipx'/\hbar} \infint dx  \Psi(x) e^{-ipx/\hbar}, \\
&= \frac{1}{2\pi \hbar}\infint dx' \Psi^*(x' ) \infint dx  \Psi(x) \infint dp \, p e^{ip(x'-x)/\hbar},
```
which is another formidable looking expression. The inner integral can be written in a different form by noting that
\begin{equation}
p e^{ip(x'-x)/\hbar} = i\hbar\frac{\partial}{\partial x} e^{ip(x'-x)/\hbar}.
\end{equation}
This means that [](#e-p-op-step-1) can be written as
```{math}
\langle p \rangle &= \frac{i}{2\pi }\infint dx' \Psi^*(x')\infint dx  \Psi(x) \frac{\partial}{\partial x}\infint dp e^{ip(x'-x)/\hbar}, \\
&= i\hbar\infint dx' \Psi^*(x') \infint dx  \Psi(x) \frac{\partial}{\partial x}\delta\left(x'-x\right),
```
where in the first line we pulled $\frac{\partial}{\partial x}$ outside the integral over $p$, and in the second line we used the definition of the Dirac delta function [](#e-delta), and the scaling property [](#e-delta-scale). We can now integrate by parts on the inner integral, to move the partial derivative from the delta function $\delta\left(x'-x\right)$ onto the wavefunction $\Psi(x)$, 
```{math}
\langle p \rangle &= i\hbar \infint dx' \Psi^*(x')\left(\left[\Psi(x)\delta\left(x'-x\right)\right]_{-\infty}^{\infty} - \infint dx \frac{\partial\Psi(x)}{\partial x} \delta\left(x'-x\right)\right).
```
The term $\left[\Psi(x)\delta\left(x'-x\right)\right]_{-\infty}^{\infty}$ vanishes, since the wavefunction goes to zero at infinity (in order to be normalised). Finally, the relation [](#e-delta-scale) can be used, to arrive at
\begin{equation}
\langle p \rangle = -i\hbar\infint dx \Psi^*(x) \frac{\partial\Psi(x)}{\partial x},
\end{equation}
This is the final form, which should be compared to [](#e-p-op-step-1) to appreciate how significant of a simplification it is. 
````


## The momentum operator
We are now going to make an important realisation. We can in fact express the average momentum in a slightly different form, which will ultimately suggest the correct way to understand it. We can write it as
````{card}
	\begin{equation}\label{e-av-p-final-final-form}
	\langle p \rangle = \infint dx \Psi^*(x) \left(-i\hbar\frac{\partial }{\partial x}\right) \Psi(x),
	\end{equation}
````
that is, we can bring the $-i\hbar$ into the middle, and ''pull-out'' the partial derivative. 
 This new expression for the average momentum in terms of the wavefunction [](#e-av-p-final-form) suggests that we associate to momentum a **momentum operator $\hat{P}$**
````{card}
\begin{equation}\label{e-p-op}
\hat{P} = -i\hbar \frac{\partial}{\partial x}.
\end{equation}
````
This is an operator since its **acts on functions to create new functions**. In particular, it is a **partial differential operator**. 

This allows us to write the expectation of momentum as
````{card}
\begin{equation}\label{e-av-p}
\langle p \rangle = \infint \Psi^*(x) \hat{P} \Psi(x) dx,
\end{equation}
````
in which the momentum operator is **''sandwiched''** between $\Psi^*(x)$ and $\Psi(x)$ and integrated over all space. 

This formula is the quantum mechanical formula for the average (or expectation value of) momentum. It is important to stress that the left-hand side is **purely statistical** — it is the average value of momentum, as calculated from the probability density $P(p)$ (which we have denoted $P(p,t_0)$ up until now, when we explicitly want to talk about the time). This represents what will be measured in an experiment. The right-hand side gives the quantum mechanical **prediction** for this average momentum, in terms of a simple function of the wavefunction.  

````{note} Remark
:class: dropdown
In some places (e.g. in textbooks, or other lecture notes), you will find that once the momentum operator has been introduced, the expectation value of momentum as denoted by $\langle \hat{P} \rangle$, i.e. making explicit reference to the momentum operator $\hat{P}$. We will not use this notation here, as I think it is more important to emphasise that the average momentum is a physical quantity (which makes sense outside of the context of quantum mechanics), and to recall the quantum mechanical prediction of average momentum. The latter is equally given by the right-hand side of [](#e-av-p), in terms of the momentum operator $\hat{P}$, as well as the right-hand side of [](#e-av-mom-from-mom-wf), in terms of the momentum wavefunction $\tilde{\Psi}(p)$. These two choices for notation for expectation values occur for all physical quantities, and in all cases we will here use the notation which does not make reference to the operator.   
````

### Functions of momentum
We could carry out similar calculations to determine expressions for other functions of momentum. For example, if we were to look at the average square momentum $\langle p^2 \rangle$, starting with the definition 
\begin{equation}
\langle p^2 \rangle = \infint p^2 |\tilde{\Psi}(p)|^2 dp, 
\end{equation} 
by following a similar route, we would find an equivalent expression 
````{card}
```{math}
\langle p^2 \rangle &=  -\hbar^2\infint \Psi^*(x) \frac{\partial^2 \Psi}{\partial x^2} dx, \\
&=\infint \Psi^*(x) \left(-\hbar^2 \frac{\partial^2}{\partial x^2}\right)\Psi(x) dx,  \\
&= \infint \Psi^*(x) \hat{P}^2\Psi(x) dx
```
````
where
\begin{equation}\label{e-p2}
\hat{P}^2\Psi(x) = \hat{P}\hat{P}\Psi(x) = -i\hbar \frac{\partial}{\partial x}\left( -i\hbar \frac{\partial}{\partial x}\Psi(x)\right) = -\hbar^2 \frac{\partial^2 \Psi}{\partial x^2}.
\end{equation}
In general we find that
````{card}
\begin{equation}\label{e-av-g(p)}
\langle g(p) \rangle = \infint g(p) |\tilde{\Psi}(p)|^2 dp = \infint \Psi^*(x) g(\hat{P}) \Psi(x) dx,
\end{equation}
````
and hence the operator associated to $g(p)$, which we denote $\hat{g}(p)$, is 
\begin{equation}
\hat{g}(p) = g(\hat{P}),
\end{equation}
i.e. in the function, $p$ is replaced everywhere by $-i\hbar \frac{\partial}{\partial x}$. 

````{note} Remark
:class: dropdown
Strictly speaking, the above works **only** when the function $g(p)$ has a Taylor series, i.e. when it can be expanded in a power series of the form $g(p) = \sum_n a_n p^n$, in which case every $p^n$ in the series is replaced by $\hat{P}^n$ to obtain $\hat{g}(p)$. Any function we will meet in this course will have this form. You will learn in Quantum Mechanics II much more about operators, and that will allow you to furthermore understand how to associate operators to functions more generally.
````

## The position operator
Inspired by the momentum operator, it is also possible to introduce a position operator. In particular, the average position of the particle [](#e-av-x) can be written in a form similar to [](#e-av-p), using the fact that $|\Psi(x)|^2 = \Psi^*(x)\Psi(x)$,
```{math}
\langle x \rangle &= \infint x|\Psi(x)|^2 dx, \\
&= \infint \Psi^*(x) x \Psi(x) dx.
```
So too can any function of position be written in a form similar to [](#e-av-g(p)),
```{math}
\langle f(x) \rangle &= \infint f(x)|\Psi(x)|^2 dx, \\
&= \infint \Psi^*(x) f(x) \Psi(x) dx.
```
Both of these suggest that the **position operator $\hat{X}$** is given by 
````{card}
\begin{equation}
\hat{X} = x,
\end{equation}
````
i.e. the position operator is just the co-ordinate $x$. This is still an **operator**, since when we act on the function $\Psi(x)$ with the operator $\hat{X}$ it creates the function $\hat{X}\Psi(x) = x\Psi(x)$, i.e. the function $\Phi(x) = x\Psi(x)$ from the function $\Psi(x)$. 

As with momentum, the operator $\hat{f}(x)$ corresponding to $f(x)$ is
\begin{equation}\label{e-op-f(x)}
\hat{f}(x) = f(\hat{X}).
\end{equation}
In this case, since $\hat{X} = x$, we in fact have $\hat{f}(x) = f(x)$, which is to say that  $\hat{f}(x) \Psi(x) = f(x)\Psi(x)$, i.e. the wavefunction is just multiplied by the number $f(x)$ at every position $x$. 

## The time-independent Schrödinger equation
Having introduced the notion of an operator, now is the time to return to the time-independent Schrödinger equation [](#e-TISE) and take a closer look at its physical significance. The TISE is
\begin{equation}
E u(x) = -\frac{\hbar^2}{2M}\frac{d^2u}{dx^2} + V(x)u(x).
\end{equation}
Recalling that for functions of a single variable, such as $u(x)$, differentiation and partial differentiation coincide, then from [](#e-p2) we see that the first term on the right-hand side can be written as
```{math}
-\frac{\hbar^2}{2M}\frac{d^2u}{dx^2} &= -\frac{\hbar^2}{2M}\frac{\partial^2u}{\partial x^2}  \\
&= \left(-\frac{\hbar^2}{2M}\frac{\partial^2}{\partial x^2}\right)u(x),  \\
& = \frac{\hat{P}^2}{2M} u(x).
```
For the second term, from [](#e-op-f(x)), we have that $V(x) = \hat{V}(x)$, and so altogether the time-independent Schrödinger equation becomes
\begin{equation}
Eu(x) = \left( \frac{\hat{P}^2}{2M} + \hat{V}(x)\right)u(x).
\end{equation}
We have thus re-expressed the right-hand side of the equation as a sum of two operators acting on $u(x)$. This pair of operators has a special importance, as we see next.

### The Hamiltonian Operator
The operator appearing on the right-hand side is known as the **Hamiltonian operator** $\hat{H}$,
````{card}
\begin{equation}\label{e-Hamiltonian}
\hat{H} = \frac{\hat{P}^2}{2M} + \hat{V}(x).
\end{equation}
````
In classical mechanics, $p^2/2M$ is the **kinetic energy** of the particle and $V(x)$ is the **potential energy**. The sum of the two is thus the **total energy of the particle**. In classical mechanics the total energy function is known as the **Hamiltonian**, since it is the central object used in the formalism discovered by Hamilton, known as **Hamiltonian mechanics**. This is a powerful formalism which generalises Newton's laws to more general situations, and which is taught in the Analytical Mechanics course. 

### Eigenvalue equation
Using the definition [](#e-Hamiltonian), and interchanging the left-hand and right-hand side, the time-independent Schrödinger equation can be written 
\begin{equation}\label{e-TISE-eigenvalue}
\hat{H}u(x) = E u(x).
\end{equation}
Written this way, the time-independent Schrödinger equation is seen to have a form that is very important and prevalent in physics and mathematics. It has the form of an **eigenvalue equation**: the solutions $u(x)$ are precisely those functions that are only **scaled** when operated on by $\hat{H}$. We say that the solutions to this equation are **eigenfunctions** of the Hamiltonian operator $\hat{H}$, and that the scaling factor $E$ is the corresponding **eigenvalue**. 

(s-stationary-definite-energy)=
### Stationary states are states of definite energy

The realisation that the time-independent Schrödinger equation is an eigenvalue equation is **extremely important** as it shows that stationary states are states of definite energy. 

Recall that a stationary state is of the form $\Psi(x,t) = Ae^{-iEt/\hbar}u(x)$, where $u(x)$ is a solution to the time-independent Schrödinger equation, which we now see is equivalent to saying that $u(x)$ is an eigenfunction of the Hamiltonian operator $\hat{H}$ with eigenvalue $E$. First, it is important to realise that **stationary states are also eigenfunctions of the Hamiltonian operator**. In particular, 
```{math}
:label: e-stationary-eig
\hat{H}\left(Ae^{-iEt/\hbar}u(x)\right) &= \left(-\frac{\hbar^2}{2M}\frac{\partial^2}{\partial x^2} + V(x)\right)Ae^{-iEt/\hbar}u(x),  \\
&= Ae^{-iEt/\hbar} \left(-\frac{\hbar^2}{2M}\frac{\partial^2}{\partial x^2} + V(x)\right)u(x), \\
&= A e^{-iEt/\hbar} E u(x),\\
&= E\left(Ae^{-iEt/\hbar}u(x)\right),
```
where in the first line we wrote out the Hamiltonian operator in full, and in the second line we pulled $Ae^{-iEt/\hbar}$ to the front, which is allowed since it is not a function of $x$. The third line uses the fact that $u(x)$ is a solution to the time-independent Schrödinger equation [](#e-TISE-eigenvalue) with eigenvalue $E$, and the last is just a rearrangement. 


Let us now ask what is the **average total energy** of a stationary state? We now have the ability to answer this question given what we have learnt above. First, since the Hamiltonian is synonymous with total energy, we are interested in  the average of the Hamiltonian $\langle H \rangle$. Although the Hamiltonian is a function of both momentum and position, we can still **use the same rule** as for position or momentum for the expectation value of **any** physical quantity in terms of the quantum mechanical operator associated with that quantity. In particular, quantum mechanics predicts that the average total energy of the particle is given by
\begin{equation}
\langle H \rangle = \infint \Psi^*(x,t)\hat{H}\Psi(x,t) dx,
\end{equation}

When we consider stationary states, we can furthermore use [](#e-stationary-eig) to arrive at
```{math}
\langle H \rangle &= \infint \Psi^*(x,t)\hat{H}\Psi(x,t) dx,  \\
&= \infint \Psi^*(x,t)E\Psi(x,t) dx, \\
&= E\infint |\Psi(x,t)|^2 dx, \\
&= E,
```
where to obtain the second line we used [](#e-stationary-eig), the fact that stationary states are eigenfunctions of the Hamiltonian operator.  The average is thus seen to be equal to $E$. This already shows that **$E$ is in fact the average energy of the particle in the state $\Psi(x,t) = Ae^{-iEt/\hbar}u(x)$.** 


We can go further by first noticing that for the operator $\hat{H}^2$ the stationary state is still an eigenfunction, but now with eigenvalue $E^2$,
```{math}
\hat{H}^2\Psi(x,t)&=\hat{H}\left(\hat{H}\Psi(x,t)\right),  \\
&=\hat{H}\left(E\Psi(x,t)\right),  \\
&=E\hat{H}\Psi(x,t),  \\
&=E^2\Psi(x,t).  \\
```
Thus, looking at the average square total energy, $\langle H^2 \rangle$, we see that
```{math}
\langle H^2 \rangle &= \infint \Psi^*(x,t)\hat{H}^2\Psi(x,t) dx,  \\
&= \infint \Psi^*(x,t)E^2\Psi(x,t) dx, \\
&= E^2\infint |\Psi(x,t)|^2 dx, \\
&= E^2.
```
Finally, if we look at the standard deviation of the total energy in a stationary state, we see that
```{math}
\Delta H &= \sqrt{\langle H^2 \rangle - \langle H \rangle^2}, \\
&= \sqrt{E^2 - E^2}, \\
&= 0.
```
The fact that the standard deviation vanishes implies that **the energy of the particle is $E$ with certainty**. This is because the standard deviation tells us the **width** of the probability distribution of energy. The only way for the width of a probability distribution to be zero is if the energy takes on a certain value with certainty, in this case $E$.

We have arrived at the very important conclusion that **stationary states are states of definite energy $E$**. This is why we chose to call the constant $E$ all along. 

Note that we have implicitly assumed in the above that we are **not** talking about a **free** particle. For free particles we saw that the stationary states cannot be normalised. This is however **only** the case for free particles — in general there is no problem with normalising stationary states, as we will see in later sections. The above in fact teaches us an important new lesson about the free particle. We previously saw that stationary states of a free particle were states of definite **momentum**. We now realise that this is specific to free particles, and occurs **only** because a free particle only has kinetic energy (and no potential energy): For a free particle, having definite energy is **equivalent** to having definite momentum. More generally, when there are forces acting on the particle, the total energy is the sum of both kinetic and potential energies. In this case, stationary states remain states of definite energy, but fail to be states of definite momentum. 

### Conservation of Energy
Finally, the above leads us to another extremely important conclusion: **energy is conserved in quantum mechanics**. Indeed, we have just seen that stationary states, $\Psi(x,t) = Ae^{-iEt/\hbar}u(x)$, are eigenfunctions of the Hamiltonian operator and have energy $E$ **independent of time**. Thus if a particle has a definite energy at $t=0$, it will have the same definite energy for all time. 

Later on we will furthermore see that energy is conserved even when a particle does not have a definite energy, but has a superposition of energies. 

## Eigenfunctions of operators
We introduced the notion of an operator above in order to calculate average values more directly from the wavefunction. There are however numerous important reasons for introducing operators. We have already begun to see one of these when looking at the time-independent Schrödinger equation. One of the most important features of operators is that they allows us to understand **how definite physical properties arise in quantum mechanics**. 

The wavefunction $\Psi(x,t_0)$ is a complete specification of the physical state of a particle at time $t_0$. However, just knowing this isn't yet very satisfactory, since one would like to know what form $\Psi(x,t_0)$ has in order to have some physical property. We now have the ability to answer this question: **the eigenfunctions of an operator associated to a physical property correspond to states where that property is well defined/definite**. 

It is easiest to illustrate this with examples. First, in section \ref{e-stationary definite energy} we saw that the eigenfunctions of the Hamiltonian operator are wavefunctions which have definite energy $E$. Thus, if $\Psi(x,t_0) = u(x)$, an eigenfunction of the Hamiltonian operator with eigenvalue $E$, then the particle has definite energy equal to $E$. 

Consider now the momentum operator $\hat{P}$. We can consider the **momentum eigenvalue equation**
\begin{equation}
\hat{P} v(x) = p_0 v(x),
\end{equation}
That is, we can ask **what are the functions $v(x)$ that are eigenfunctions of the momentum operator, with eigenvalue $p_0$?** Given the definition of the momentum operator [](#e-p-op), they are solutions to the differential equation
\begin{equation}
-i\hbar \frac{\partial}{\partial x} v(x) = p_0 v(x).
\end{equation}
This equation is readily solved by inspection, the solutions are
\begin{equation}\label{e-momentum-eig}
v(x) = Ae^{ip_0x/\hbar}.
\end{equation}
This is  precisely as to be expected, given Sec. \ref{e-plane waves}. In particular, we saw that de Broglie told us that wavefunctions with definitive wavelengths $\lambda$ — i.e. plane waves, correspond to states of definite momentum $p = h/\lambda$. We have just  arrived at the same result in a completely independent manner. 

What is important is that this is **fully general**: although for momentum we already had some understanding of what form a wavefunction $\Psi(x)$ needed to have in order to have definite momentum, for other physical quantities, such as energy, this is no longer true. We now see how to answer this question, by solving the corresponding eigenvalue equation. 

More generally, this provides the general answer to the question of just **how** all the physical information is contained in the wavefunction $\Psi(x,t_0)$. It is precisely in the **form** of the complex function — how it varies in space. 

````{exercise} Eigenfunctions of position
In this exercise, we will try to gain some understanding of what the eigenfunctions of the position operator $\hat X$ are. Since eigenfunctions have definite properties, these should correspond to states of a particle where the particle has a definite position.
1.  Write down the eigenvalue equation for the position operator $\hat X = x$. That is, write down what it would mean for a function $v(x)$ to be an eigenfunction of the operator $\hat X$ with eigenvalue $x_0$. 
1. Show that this implies that $v(x)$ must vanish at all positions $x$ except $x = x_0$. 
1. (Tricky) Try to normalise this wavefunction. Is there a problem?
````