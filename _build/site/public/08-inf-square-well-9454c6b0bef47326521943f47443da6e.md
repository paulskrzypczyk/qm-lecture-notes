---
title: "The Infinite Square Well: Energy Eigenstates"
short_title: Inf. Sq. Well Eigenstates
numbering:
  enumerator: 8.%s
---

In this section we now move onto how quantum mechanics describes the behaviour of particles that are acted on by forces. Previously in [](./04-free-particle.md) we analysed the case of a free particle – one where there are no forces acting. Now we would like to begin our study of situations with a non-vanishing potential energy term $V(x)$ in the Schrödinger equation, signifying that there are external forces acting on the particle.

We will be interested in situations where there is a **potential well** of some type, i.e. such that in order for the particle to leave a certain region of space it would need to have a significant amount of energy. That is, there is some kind of **attractive force** between the particle and its surroundings. Such situations occur almost universally in physics – from planets in orbit around stars, to electrons inside atoms, to masses on springs and pendulums. In all of these cases, and many many more, the potential energy associated to the (conservative) force forms a potential well. Our general goal is therefore to understand how quantum mechanics describes particles trapped in potential wells, which will then explain a vast range of physical situations. 

Crucially, we will see that when studying potential wells, one of the most distinctive features of quantum mechanics arises – **quantisation of energies**, also known as **discrete energy levels**. 

Our general approach, as will be the case in almost all problems, will be to start off by solving the time-independent Schrödinger equation, to find the stationary states. We now know that the stationary states are also states of definite energy. It is customary to refer to them as **energy eigenstates** – which is just a fancy way of signalling that they are states of definite energy, and reminds us that the time-independent Schrödinger equation is an eigenvalue equation for the Hamiltonian $\hat{H}$.

 We will analyse the properties of energy eigenstates in detail in this section. In the next section we will move on to studying the **dynamics** of a particle trapped inside the infinite square well. 

(s-gen-properties-of-TISE)=
## General properties of energy eigenstates 
Recall that the time-independent Schrödinger equation is
\begin{equation}
E u(x) = -\frac{\hbar^2}{2M}\frac{d^2u}{dx^2} + V(x)u(x).
\end{equation}

We now know that this is also the eigenvalue equation for the Hamiltonian operator $\hat{H}$, with $E$ being the energy eigenvalue. 

This shows that physically **$E$ must be a real number**, since the energy of a particle is real, physical and measurable quantity. Before this realisation, in principle $E$ was an arbitrary constant, which could well have been a complex number. Now we see that this is not the case. 

This has an important implication: **we can always find _real_ solutions $u(x)$ to the TISE**. This is proven in the next exercise-
````{exercise} Real solutions to the TISE
In this exercise we will show we can always find real solutions to the TISE.

1. Assume first that $u(x)$ is a general, complex function that satisfies the time-independent Schrödinger equation. By taking the complex conjugate of each term in the TISE, show that $u^*(x)$ is also a solution, with the same energy $E$. 
1. Consider the function $u'(x) = (u(x) + u^*(x))/2$. Show that it too is a solution to the TISE. 
1. Confirm that $u'(x)$ is a real function.
1. Consider also the function $u''(x) = (u(x) - u^*(x))/2i$. Show that it too is a solution of the TISE
1. Confirm that $u''(x)$ is a real function. \newline

```{note} Lesson
:class: dropdown
This shows that as soon as we find any (complex) solution $u(x)$ to the TISE, we can always find two real solutions $u'(x)$ and $u''(x)$, which are just the real and imaginary parts of the complex solution.
```
````

The next important property is that  **$u(x)$ and $du/dx$ are _continuous_ functions**. That is, there are no '**jumps**' (or discontinuities) in either $u(x)$ or $du/dx$. Examples of functions 'bad' functions are shown in [](#jump-kinks). This is again proven in [](#ex-u-cont) below.  

```{figure} ./Pictures/jumps-kinks.svg
:name: jump-kinks
:width: 500px
:align: center

**Examples of 'bad' functions.** (a) An example of a function which has a discontinuity, i.e. a jump, at $x = x_a$. (b) An example of a function which has a discontinuous first derivative, i.e. a kink, at $x = x_b$. If we were to plot the function $du/dx$, then this would be a discontinuous function at $x=x_b$, similar to (a). Energy eigenstates cannot have jumps, and can only have kinks at locations where the potential energy $V(x)$ is infinite. 
```

Like every good rule, there is an **exception** to the previous one, that occurs when **the potential energy is infinite**. Although this is a rather unphysical situation, it is one we will encounter as an idealisation in this section. 

At points where the potential is infinite, $V(x) = \infty$, then **the first derivative $du/dx$ can be discontinuous**. At these points $u(x)$ however must remain continuous. We will not prove these conditions in the course, but we see how they arise later when we look at a particle trapped in a finite potential well. 

With these general considerations in place, we are now ready to study our first example in full.

````{exercise} $u(x)$ must be a continuous function 
:label: ex-u-cont
In this exercise we will outline an argument showing that $u(x)$ must be a continuous function. A similar argument works to show that $du/dx$ must also be continuous. 

We want to show that if $u(x)$ has a discontinuity, then it cannot be a solution to the TISE. That is, we want to assume that $u(x)$ changes abruptly from some value $a$ to some other value $b$ at a point $x_0$, and to show that such a function cannot satisfy the TISE. It is difficult to work with such a discontinuity directly, but we can understand it by considering it as the **limit** of something nicer. 

1. Consider the function $v(x)$ defined as follows:
$$ v(x) = \frac{a+b}{2} + \frac{b-a}{2}\tanh(c (x-x_0)),$$
where $c$ is a positive constant. Make sketches of this function for various values of $c$, to demonstrate that when $c$ becomes large, it approaches a function that changes abruptly from $a$ to $b$ at $x_0$. 

1. Find $\frac{dv}{dx}$ and $\frac{d^2v}{dx^2}$. By making sketches, demonstrate that when $c$ becomes large, $\frac{dv}{dx}$ and $\frac{d^2v}{dx^2}$ both become large in the vicinity of $x_0$. 

1. Rearrange the TISE to show that it can be written as
$$ \frac{1}{u(x)}\frac{d^2u}{dx^2} = \frac{2M(V(x) - E)}{\hbar^2}.$$

Physically, we want to consider only finite energies, $E < \infty$. Furthermore, let us consider that $V(x) \neq \infty$, i.e. that the potential energy is finite. This means that the right-hand side of the TISE above is a finite number for all $x$.  

4. Assume that $u(x)$ is approximated by $v(x)$ in the vicinity of $x_0$. Using part (2), argue that for large values of $c$ the left-hand side of the TISE becomes large for values of $x$ close to $x_0$. 

```{note} Lesson
:class: dropdown
Since the right-hand side of the TISE in the above doesn't depend upon $c$, while the left does, we can always find a $c$ large enough such that the left-hand side is bigger than the right-hand side, and hence the equation is not satisfied. Hence, solutions to the TISE cannot change arbitrarily abruptly at a point. Note that this argument fails at any point where the potential energy $V(x)$ is infinite.
``` 
````

## The infinite square well potential
We are going to consider a situation where a particle is trapped inside an **infinite square well**. That is, we are going to take the potential energy of the particle to be

\begin{equation}
V(x) = \begin{cases}
		0 & \text{if } 0 \leq x \leq a, \\
		\infty & \text{if } x < 0 \text{ or } x > a.
		\end{cases}
\end{equation}
which is depicted in [](#f-infinite-square-well).


This models a situation where a particle is confined to the region $0 \leq x \leq a$, as it would need to have infinite potential energy to be outside this region. We can think that there are infinitely rigid and perfectly impenetrable walls at $x = 0$ and $x = a$, and that the particle is bouncing between them. Inside the well, there are no forces acting on the particle, and the potential energy is constant, here taken to be $V(x) = 0$. In reality there is no such thing as an infinite square well, as there are no perfectly rigid walls, however this is an idealisation similar to a 'light inextensible string', that is very useful to study.

```{figure} ./Pictures/inf-square-well.svg
:name- f-infinite-square-well
:width: 400px
:align: center

**Infinite square well.** The potential energy of the infinite square well. The potential vanishes for $0 \leq x \leq a$, and is infinite otherwise. This well is an idealisation for a situation where a particle is trapped between two perfectly impenetrable walls.
````

(s-inf-well-eigenstates)=
## Energy eigenstates
Our first goal is to solve the time-independent Schrödinger equation to find the stationary states of infinite square well – i.e. the energy eigenstates. 

To do so, we will need to consider the 3 regions – to the left of the well, $x < 0$, inside the well $0 \leq x \leq a$ and to the right of the well, $x > a$ – separately. We will call these regions $\mathrm{I}$, $\mathrm{II}$ and $\mathrm{III}$ respectively, and denote the solution in these regions by $u_\mathrm{I}(x)$, $u_\mathrm{II}(x)$, and $u_\mathrm{III}(x)$ respectively.

In the region to the left of the well, where $V(x) = \infty$, we do not expect to find the particle. We thus should expect that $u_\mathrm{I}(x) = 0$ in this region. This is indeed a solution to the TISE, and it is also the **only** solution. 

To see this, we can consider each term in the TISE separately. If $u_\mathrm{I}(x)$ would not vanish at some point or in some subregion, then the potential energy term $V(x)u_\mathrm{I}(x)$ would be infinite at those points or subregions.  However the energy term $Eu_\mathrm{I}(x)$ is not infinite, as we only want to consider particles with finite energy $E$, and $d^2 u_\mathrm{I}/dx^2$ cannot be infinite either, hence there is no way to 'compensate' for the infinite potential energy term. Thus, we must have that $u_\mathrm{I}(x) = 0$ everywhere in this region.

Similarly, in region III to the right of the well, where the potential is again infinite, we must have $u_\mathrm{III}(x) = 0$ everywhere.

Finally, inside the well we have $V(x) = 0$, and thus the TISE becomes
\begin{equation}
Eu_\mathrm{II}(x) = -\frac{\hbar^2}{2M}\frac{d^2 u_\mathrm{II}}{dx^2}. 
\end{equation}
This is the same equation that we had to solve for the **free particle** in [](./04-free-particle.md). We found previously that the solutions were of the form
\begin{equation}
u_\mathrm{II}(x) = Ae^{ikx} + Be^{-ikx},
\end{equation}
where
\begin{equation}\label{e-k-vs-E-inf-well}
k = \frac{\sqrt{2ME}}{\hbar}.
\end{equation}
This is a complex solution, but as we saw above, we can always find real solutions. We can arrive at these rather quickly by recalling the Euler identity $e^{i\theta} = \cos \theta + i \sin \theta$, from which we see that a real solution is of the form
\begin{equation}\label{e-soln-inside-well}
u_\mathrm{II}(x) = C \cos kx + D \sin k x
\end{equation}
where $C$ and $D$ are real constants. 

It is at this point that we must make use of the continuity conditions from above. In particular, we must now ensure that **$u(x)$ is continuous**, and therefore must '**stitch**' together the solutions found in the 3 regions to make one continuous function for all $x$. Note that the places where we need to stitch together the solutions, at $x = 0$ and $x = a$, have $V(x) = \infty$, and therefore fall into the 'exceptional' case. As such, we **do not** require $du/dx$ to be continuous at these points. 

Starting at $x = 0$, from the left we have $u_\mathrm{I}(0) = 0$, while on the right we have $u_\mathrm{II}(0) = C$. Thus, in order to obtain a continuous solution at $x = 0$ we **must set $C = 0$**. Inside the well the solutions therefore must be of the form
\begin{equation}
u_\mathrm{II}(x) = D\sin kx.
\end{equation}
If we consider now the right-hand wall of the potential at $x = a$, we again have $x_\mathrm{III}(a) = 0$, while $u_\mathrm{II}(a) = D\sin ka$. We therefore must have 
\begin{equation}
D\sin ka = 0
\end{equation}
in order to have a continuous solution at $x=a$. 

One potential possibility is to choose $D = 0$. However, then $u_\mathrm{II}(x) = 0$. This means that the wavefunction vanishes **everywhere**, which is **not a normalisable solution** since the particle is nowhere to be found. Thus we have to discount $D = 0$. 

On the other hand, we know that $\sin \theta = 0$ whenever $\theta$ is a multiple of $\pi$, that is if $\theta = n\pi$, for $n$ an integer. Thus, we will have a continuous solution at $x = a$ if we choose the wavenumber $k$ such that
\begin{equation}
ka = n\pi,
\end{equation}
which is to say that 
\begin{equation}\label{e-k-quant}
k = \frac{n\pi}{a}.
\end{equation}
Recalling that $k$ is positive, since the energy $E$ must be positive, we therefore see that $n$ is a positive integer. This shows that the solutions in region II are given by
\begin{equation}
u_\mathrm{II}(x) = D \sin \frac{n\pi x}{a}.
\end{equation}

### Discrete energy levels
In the above we have just seen one of the most important and iconic aspects of quantum mechanics, namely **quantisation** or **discrete energy levels**.

In order to find a solution to the time-independent Schrödinger equation that is continuous everywhere, including at the walls of the potential, we have just seen that only certain **special** values of the wavenumber $k$ are allowed. For any other value of $k$ the solution would not be continuous at $x = a$. 

The significance of this is that **the allowed energies for a particle in the infinite square well are quantised**. In particular, from [](#e-k-vs-E-inf-well) and [](#e-k-quant),
```{math}
E &= \frac{\hbar^2 k^2}{2M},  \\
&= \frac{\hbar^2\pi^2 n^2}{2 M a^2}.
``` 
Thus, the particle cannot have any energy, but must have one of the **quantised** or **discrete** energies 
````{card}
\begin{equation}\label{e-En-inf-sq-well}
E_n = \frac{\hbar^2\pi^2n^2}{2Ma^2},
\end{equation}
````
where we use the notation $E_n$ to distinguish between the different allowed energies. It is common to refer to these as the **energy levels** of the infinite square well, and $n$ as a **quantum number**. A particle in the infinite square well can have a superposition of **only these energies**. 


````{figure} ./Pictures/energy-levels-inf-sq-well.svg
:name- jump-kinks
:width: 400px
:align: center

**Energy levels of the infinite square well.** The allowed energies of the infinite square well are quantised. The allowed energies are denoted by $E_n$, and they increase quadratically, proportional to $n^2$.
````

This is in fact the **origin** of discrete energy levels in quantum mechanics: it is precisely the requirement that solutions to the time-independent Schrödinger equation (and in general their first derivative) must be continuous, normalisable functions. These requirements **can only be met for certain special values of energy**. 

### Normalisation
The above shows that for the infinite square well there are an infinite number of energy eigenstates, labelled by the quantum number $n$, given by
\begin{equation}
u_n(x) = D_n\sin \left(\frac{n\pi x}{a}\right)
\end{equation}
for $0 \leq x \leq a$ and $u_n(x) = 0$ otherwise (outside the well), with the energy eigenvalues $E_n$ given by [](#e-En-inf-sq-well). The constant $D_n$ must be fixed by demanding that the wavefunction is **normalised**, i.e. by requiring that for every energy eigenstate the probability to find the particle somewhere  is one-
```{math}
\infint |u_n(x)|^2 dx &= |D_n|^2 \int_0^a \sin^2 \left(\frac{n\pi x}{a}\right) dx,  \\
&= \frac{|D_n|^2}{2} \int_0^a 1 - \cos \left(\frac{2n\pi x}{a} \right) dx,  \\
&= \frac{|D_n|^2}{2}\left[ x - \frac{a}{2 n \pi} \sin \left(\frac{2n\pi x}{a} \right)\right]_0^a,  \\
&= \frac{|D_n|^2}{2} \left[ a - \frac{a}{2 n \pi} \sin (2n\pi) - 0 + \frac{a}{2 n \pi} \sin (0)\right],  \\
&= \frac{|D_n|^2 a}{2},
```
where in the first line we used the fact that $u(x) = 0$ for $x < 0$ and $x > a$ to restrict the limits of integration to $0$ and $a$ and in the second line we used the trigonometric identity $\sin^2 \theta = \frac{1}{2}(1-\cos 2\theta)$. Thus the wavefunction will be normalised if
\begin{equation}
|D_n|^2 = \frac{2}{a}.
\end{equation}
The simplest solution to this equation that we can take (i.e. making $D_n$ real and positive), is to choose 
\begin{equation}
D_n = \sqrt{\frac{2}{a}}.
\end{equation}
Notably this has a very special property – it is in fact independent of $n$. Thus, we finally arrive at the **normalised energy eignstates**
````{card}
\begin{equation}
u_n(x) = \sqrt{\frac{2}{a}}\sin \left(\frac{n\pi x}{a}\right),
\end{equation}
````
for $0 \leq x \leq a$, and $u_n(x) = 0$ otherwise.

The first few energy eigenstates are depicted in [](#f-inf-sq-well-states). Note that the wavefunctions are continuous everywhere (i.e. have no jumps) but do not have continuous derivatives at the walls (i.e. have kinks there). 

````{figure} ./Pictures/eigenstates-inf-sq-well.svg
:name- f-inf-sq-well-states
:width: 500px
:align: center

**Wavefunctions of energy eigenstates of the infinite square well.** The first six energy eigenstates $u_n(x)$ of the infinite square well. The number of nodes (places where the wavefunction vanishes, except at the boundaries) is equal to $n-1$.

````

````{figure} ./Pictures/probs-inf-sq-well.svg
:name- f-inf-sq-well-probs
:width: 500px
:align: center

**Probability densities of the infinite square well.** The probability densities for finding the particle at $x$ for the first six energy eigenstates of the infinite square well. 
````

(s-general-properties)=
### Further properties of energy eigenstates
We will now outline some of the important properties of energy eigenstates. **All of the properties we discuss below are true for the energy eigenstates of any potential well $V(x)$**, and not just the infinite square well.  That is, although we are highlighting them here, in the context of the infinite square well, everything below is generic, and we will come back to these properties later in the course when we study other potential wells.  

#### Zero-point energy
The first important property is that the lowest energy that the particle can have is **greater than the minimal potential energy**. The state of lowest energy of a particle is typically called the **ground state**. In this case the ground state is
\begin{equation}
u_1(x) = \sqrt{\frac{2}{a}}\sin \left(\frac{\pi x}{a}\right).
\end{equation}
and the **ground state energy** is
\begin{equation}
E_1 = \frac{\hbar^2 \pi^2}{2 M a^2}
\end{equation}
which is greater than the minimal potential energy, which is zero. Thus the particle **must have some energy in quantum mechanics** inside a potential well.

The reason for this is the **uncertainty principle**. Because the particle is completely confined inside the well, its standard deviation is definitely not larger than the width of the well, $\Delta x \leq a$. This implies that the uncertainty in momentum cannot be too small, in fact 
\begin{equation}
\Delta p \geq \frac{\hbar}{2\Delta x} \geq \frac{\hbar}{2 a}.
\end{equation}
This means that the particle does not have zero momentum with certainty, but rather **must have a range of momenta**, and so is in fact **not at rest** in even in the ground state. As such, its kinetic energy also cannot vanish, but the particle has a range of kinetic energies. This is precisely the **zero-point energy** of the particle. 

#### Higher energies for more tightly confined particles
In the same direction as above, it is also generally true that **the more tightly confined the particle is, the larger all the allowed energies become**. 

For the infinite square well we confine the particle more tightly by making $a$ smaller. In this instance, we see that all of the energy eigenvalues increase, since $E_n \propto 1/a^2$. 

The reason for this, just as in the above, is the uncertainty principle. If the particle is more tightly constrained in position it must have a larger uncertainty in momentum – i.e. must be in a superposition of a larger range of momenta – and therefore a larger uncertainty in kinetic energy. This leads to higher energy levels. 

#### Lower energies for more massive particles
In the opposite direction, we also see that **the allowed energies decrease** for particles that are more massive, i.e. have a larger mass $M$. 

For the infinite square well we see that the energies scale as $E_n \propto 1/M$, and therefore as the mass increases the energies all become lower. 

This is also general, and makes sense due to the fact that the kinetic energy is $p^2/2M$, hence for a given momentum, if the mass increases, the kinetic energy decreases. 

#### Number of nodes increase as the energy increases
The next general property is a geometrical property of the wavefunctions of energy eigenstates. Looking at [](#f-inf-sq-well-states) we see that apart from at the walls, the ground states has no '**nodes**' – points where the wavefunction vanishes, $u(x) = 0$. The next wavefunction, the so-called **first excited state**, has exactly one node, in the centre of the well. The next state has two nodes, at $x = a/3$ and $x = 2a/3$. As we increase the energy we find that **the $n$th energy eigenstate has $n-1$ nodes**. 

This is also a general feature for all potential wells. Although the form of the wavefunction for the energy eigenstates will change as the potential changes, the fact that the $n$th energy eigenstate has $n-1$ nodes remains completely general. This provides a very quick way to identify energy eigenstates, or more generally to 'see' if a wavefunction corresponds to a state of high or low energy. 

#### Even/odd about the centre of the well
Related to the above, if the potential energy has a **symmetry**, then the eigenstates also inherit symmetries of their own. In particular, if the potential well is **symmetric** around a point, then the eigenstates are either **symmetric or anti-symmetric** about that point. 

For the infinite square well, the well is symmetric around the point $x = a/2$, i.e. **the middle of the well**: if we mirror the left-half of the well in the line $x = a/2$, we reproduce the right-half. The energy eigenstates have the property that the right-half is either the mirror of the left half, when $n$ is odd, or is equal to minus the mirror of the right-half, when $n$ is even (it is really best to spend some time looking at [](#f-inf-sq-well-states) to convince yourself of this fact). That is to say, they are alternatively **even or odd about the \emph{centre} of the well**. This is a general property of energy eigenstates, which will always be alternatively even and odd about the centre of the well whenever the potential energy is symmetric about the centre, as can often be the case. 

#### Orthogonality
The next property is an extremely important one that is known as **orthogonality**. In Mathematical Physics 202 you saw that for functions we can define a notion of a **scalar product** and as a consequence the notion of orthonormal functions **as those for which the scalar product is zero**:

\begin{definition}[Scalar Products, Orthogonality and Orthonormal functions]
	The **scalar product** between two functions $f(x)$ and $g(x)$, which we denote here by $\langle f , g\rangle$, is defined by
	\begin{equation}
		\langle f, g \rangle = \infint f^*(x) g(x) dx.
	\end{equation}
	Two functions are **orthogonal** if the scalar product between them is zero, i.e.
	\begin{equation}
		f(x) \text{ and } g(x)\text{ are orthogonal} \leftrightarrow \langle f,g\rangle = 0.
	\end{equation}
	Finally, a set of functions $f_i(x)$, for $i = 1, 2,\ldots $, forms an **orthonormal set of functions** if
	\begin{equation}
		\langle f_i,f_j \rangle = \delta_{i,j}
	\end{equation}
	where $\delta_{ij}$ is the **Kronecker delta function}, such that
	\begin{equation}
		\delta_{i,j} = \begin{cases} 1 & \text{if } i = j, \\
		0 & \text{if } i \neq j.
		\end{cases}	
	\end{equation}
	Note that the condition of orthonormality also contains within it a **normalisation** condition for the functions $f_i(x)$. In particular, setting $i = j$, it says that
	\begin{equation}
		\langle f_i, f_i \rangle = \infint |f_i(x)|^2 dx = 1.
	\end{equation}
	
\end{definition}
%\begin{remark}
%	Note that we use a **different notation} here compared to Mathematical Physics 202. There, you use the notation $\langle f,g\rangle$ for the scalar product, while here, we are using $\langle f|g\rangle$ for the same thing. The reason for this is that whereas the notation $\langle f,g\rangle$ is common in many contexts, you will only ever see the notation $\langle f | g \rangle$ in the context of quantum mechanics, and the reason for choosing this notation will become absolutely clear next year, when you take Quantum Physics 301, where you will be introduced to something called ''Dirac notation", which is ultimately where this comes from. The difference in notation is similar to how some people represent vectors as $\vec{u}$, while others use $\mathbf{u}$ and others use $\underline{u}$. 
%\end{remark}

We can apply this notion to energy eigenstates to show that they constitute an orthonormal set of functions. In particular, 
````{card}
	\begin{equation}\label{e-orthonomal}
	\vph \langle u_m, u_n \rangle = \infint u_m^*(x) u_n(x) dx = \delta_{n,m}
	\end{equation}
````

\begin{derivation}
	We will prove [](#e-orthonomal) explicitly for the eigenstates of the infinite square well below. When $m = n$, we have already carried out this integral, which corresponds to the normalisation of the wavefunction, and we already fixed the constant $D_n$ such that $\infint |u_n(x)|^2 dx = 1$. This shows that the functions are correctly normalised. 
	
	Let us consider therefore the case $m \neq n$. Substituting the explicit form of $u_n(x)$, and using the trigonometric identity
	\begin{equation}
	\sin \theta \sin \phi = \frac{1}{2}\left( \cos(\theta - \phi) - \cos(\theta + \phi)\right),
	\end{equation}
	we see that
	```{math}
	\langle u_m,u_n\rangle &=\infint u_m^*(x) u_n(x) dx, \\
	 &= \int_0^a \sin \left(\frac{m\pi x}{a}\right)\sin \left(\frac{n\pi x}{a}\right)dx  \\
	&= \frac{1}{2}\int_0^a \cos \left(\frac{(n-m)\pi x}{a}\right) - \cos \left(\frac{(n+m)\pi x}{a}\right)dx,  \\
	&= \frac{1}{2}\left[\frac{a}{(n-m)\pi}\sin\left(\frac{(n-m)\pi x}{a}\right)-\frac{a}{(n+m)\pi}\sin\left(\frac{(n+m)\pi x}{a}\right)\right]_0^a, \\
	&= \frac{1}{2}\left[\frac{a}{(n-m)\pi}\sin\left((n-m)\pi \right)-\frac{a}{(n+m)\pi}\sin\left((n+m)\pi\right)\right], \\
	&= 0
	```
	where we used the fact that $\sin(0) = 0$ for the lower limit in the second to last line, and the fact that $\sin(\ell \pi) = 0$ for $\ell$ an integer, in the last line. This shows that when $m = n$ the energy eigenstates are orthogonal.
\end{derivation}


The meaning of **orthogonality**, as you will see in more detail later on in your quantum mechanics education, is that these are states of a particle that can be **perfectly distinguished**. In particular, if you knew (somehow) that the particle was in an energy eigenstate, but not which one, then since each one corresponds to a state of different energy, by measuring the energy of the particle, it is possible to figure out which state you really have. If two quantum states are not orthogonal, then it turns out that there is no way to perfectly distinguish them. 

#### Completeness
Finally, energy eigenstates have a second extremely important property known as **completeness**. This says that **any valid wavefunction can be expressed as a superposition of energy eigenstates**. In particular, **any** valid, normalised wavefunction can be written as
````{card}
```{math}
:label: e-superposition-energy
\Psi(x) &= \sum_{n=1}^{\infty} c_n \sqrt{\frac{2}{a}} \sin \left(\frac{n \pi x}{a}\right), \nonumber \\
&= \sum_{n=1}^{\infty} c_n u_n(x).
```
````
Note that here 'valid' depends upon **the particular context** – for the infinite square we know the particle cannot be found outside the well. Therefore any wavefunction where the particle is confined inside the well, which are the only permissible ones, can be written as a superposition of energy eigenstates. If we were to try to decompose a wavefunction where the particle is **not** confined to the well into energy eigenstates, we would not be able to do so. However, this is a physically impermissible situation, and hence there is no problem or lack of generality here. 

Completeness is in many respects **rather natural**: As we will discuss further below, it says that the most general state of a particle is to have a superposition of energies. This is completely in line with what we saw previously – that the most general state of a particle is to be in a superposition of locations, and to have a superposition of momenta. Here we are seeing exactly the same thing once again, but now for the energy of the particle. 

### Determining $c_n$
Given that every wavefunction can be expressed as a superposition of energy eigenstates, it is also important to be able to determine the coefficients $c_n$ for a given wavefunction $\Psi(x)$. In order to do this we assume that the wavefunction $\Psi(x)$ can be written as in [](#e-superposition-energy), and consider multiplying both sides by $u_m^*(x)$ and integrating over $x$, to obtain
```{math}
\infint u_m^*(x)\Psi(x) dx &= \infint u_m^*(x)\sum_{n=1}^{\infty} c_n u_n(x) dx,\nonumber \\
&= \sum_{n=1}^{\infty} c_n \infint u_m^*(x)u_n(x) dx, \nonumber \\
&= \sum_{n=1}^{\infty} c_n \delta_{n,m},\nonumber \\
&= c_m,
```
where to obtain the third line we use the orthonormality of the energy eigenstates. We thus have the nice result that
````{card}
\begin{equation}
c_m = \infint u^*_m(x) \Psi(x) dx,
\end{equation}
````
We can also write this using the notation of the scalar product, in which case it takes the form 
````{card}
	\begin{equation}
		c_m = \langle u_m, \Psi\rangle.
	\end{equation}
````

### The energy representation
In [](#s-momentum-wavefunction) we saw that we can define a **momentum wavefunction** as an **alternative representation** of the state of a particle in quantum mechanics. We saw that we have a function $\tilde{\Psi}(p)$ that gives the **probability amplitude** for a particle to have momentum $p$, and that knowledge of the probability amplitude for all momenta was a complete description of the state of a particle. Finally, the probability density $P(p)$ for the particle to have momentum $p$ was given by $P(p) = |\tilde{\psi}(p)|^2$. 

With this in mind, we now will do exactly the same for energy. In particular, **$c_n$ is the probability amplitude for a particle to have energy $E_n$, and $|c_n|^2$ is the probability $P(E_n)$ for the particle to have energy $E_n$**.  

Note that since the energy is **quantised**, there are only **discrete** energies that the particle can have. This is in contrast to position or momentum, which are not quantised, and both can vary continuously. This leads to two significant changes for the energy representation compared to the position and momentum representations. 

First of all, due to the fact that position and momentum vary continuously, we have to specify probability amplitudes continuously, which is to say as **functions**, $\Psi(x)$ and $\tilde\Psi(p)$. In contrast, since the allowed energies are **discrete**, we no longer need to use functions, but just need to specify a probability amplitude for each value of the energy. That is to say, we now just have **coefficients** $c_n$, one for each allowed energy $E_n$. We have thus replaced $x$ and $p$ by the quantum number $n$. We write it as a subscript in order to help emphasise that it only takes on integer values, and does not change continuously. 

Second, for position and momentum the wavefunctions specify **probability densities**, since again $x$ and $p$ vary continuously. For example, we know that the **probability** to find the particle between $x_0$ and $x_0 + dx$ is $|\Psi(x_0)|^2dx$. For energy, since the allowed energies are discrete, we do not have to deal with probability densities at all, but have directly **probabilities**. For example, the probability for the particle to have energy $E_1$ is $P(E_1) = |c_1|^2$. 

It is good to check that $P(E_n) = |c_n|^2$ is indeed a valid probability distribution. In order for this to be the case, we require that the **total probability** for the particle to have an energy is one. This is indeed the case for a normalised wavefunction, as we can easily show:
```{math}
1 &= \infint |\Psi(x)|^2 dx, \\
&= \infint \sum_{m=1}^{\infty} c_m^*  u_m(x) \sum_{n=1}^{\infty} c_n u_n(x) dx,  \\
&= \sum_{m=1}^{\infty} \sum_{n=1}^{\infty}c_m^* c_n\infint u_m(x) u_n(x) dx,  \\ 
&= \sum_{n=1}^{\infty} \sum_{m=1}^{\infty}c_m^* c_n\delta_{n,m}, \\ 
&= \sum_{n=1}^{\infty} |c_n|^2
```
where we used [](#e-superposition-energy) to write the wavefunction $\Psi(x)$ as a superposition of energy eigenstates $u_n(x)$ in the second line, and in order to arrive at the fourth line we use the orthonormality of the energy eigenstates [](#e-orthonomal).
This shows that the energy amplitudes $c_n$ are **square-normalised**, meaning that the sum of the modulus squared amplitudes is one. This is consistent with the intepretation of them as the probabilities for the particle to have energy $E_n$.

Finally, it is useful to realise that the energy amplitudes $c_n$ constitute a third **complete specification** of the state of a particle. In particular, we see from [](#e-superposition-energy) that if we know all of the amplitudes $c_n$ then we can recover the wavefunction $\Psi(x)$. We call this representation of the state of a particle the **energy representation**.
 
Just like the momentum wavefunction $\tilde{\Psi}(p)$ can be the most useful representation of the state of the particle in certain circumstances, so too can the energy representation be a particularly useful representation of the state of a particle. As we will see in the next section in more detail, **whenever** we wish to look at the **dynamics} of a particle, it turns out that the energy representation is absolutely indispensable. 











\chapter{The Infinite Square Well: Dynamics}
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

\begin{example}[Simple bouncing particle]
It is instructive to consider a very simple example, of a particle bouncing back and forth, in order to see how simple superpositions of energy eigenstates evolve in time, and lead to interesting, and in some respects recognisable, dynamics.

Consider the following wavefunction at time $t = 0$,
```{math}
\Psi(x,0) &= \frac{1}{\sqrt{2}}\left(u_1(x) + u_2(x)\right), \\
&=\sqrt{\frac{1}{a}} \sin\left(\frac{\pi x}{a}\right)+\sqrt{ \frac{1}{a}} \sin \left(\frac{2\pi x}{a}\right),
```
for $0 \leq x \leq a$, and $\Psi(x,0) = 0$ otherwise (i.e. the particle as inside the well, as expected). This wavefunction is a **superposition} of the ground state $u_1(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{\pi x}{a}\right)$ and the first excited state $u_2(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{2\pi x}{a}\right)$ with equal **real} amplitudes $c_1 = c_2 = \frac{1}{\sqrt{2}}$. The form of the wavefunction is the following:
\begin{center}
	\includegraphics[]{evolution-t0-inf-sq-well.pdf}
\end{center}

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

\begin{center}
	\includegraphics[]{evolution-t-inf-sq-well.pdf}
\end{center}

We see that the particle roughly '**bounces**' back and forth between the two walls of the well. Remarkably, this is all generated by the simple interference term. 

More general initial states, which are superpositions of more than two energy eigenstates will in general have more intricate dynamics. However, the underlying **mechanism** is the same- there is interference between the different energy eigenstates, and this is what leads to the probability density evolving in time.

\end{example}