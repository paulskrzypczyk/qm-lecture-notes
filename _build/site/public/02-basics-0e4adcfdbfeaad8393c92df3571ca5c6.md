---
title: Basics of Quantum Mechanics
short_title: Basics of QM
numbering:
  enumerator: 2.%s
---

````{important} Video: _Basics of QM I_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/b3f3ab4329e24590aa52a69fa8e82b741d
:width: 100%
```
````

In the previous section some of the shortcomings of classical physics were seen, along with the initial attempts for how to resolve them. These attempts collectively are now known as the _old quantum theory_, since they contained some of the right ideas, but did not constitute the complete theory that is now known as **quantum theory**. In reality, the necessary departure from classical physics is much larger, and it was only a couple of decades later that quantum theory proper was discovered, which allowed for all of the shortcoming of classical physics, and the old quantum theory, to be addressed.

In this section we introduce the basic aspects of quantum theory, as applied to the motion of single particles in space. This thus concerns the **mechanics** of particles, and hence why this branch of quantum theory is known as **quantum mechanics**. 

As the first part of the first formal course on quantum theory, this course is just an introduction, and there is much more to quantum theory than is taught here. As you will see in later courses, there is some powerful mathematical machinery in the background of quantum theory that we will not delve into at this introductory stage. In quantum theory the process of **measurement** also becomes much more fundamental compared to classical physics, but again we will largely skim over this subtle issue here, leaving it for Quantum Mechanics II.

The goal of this half of the course is to **introduce the basic concepts of quantum theory**, to gain some familiarity with the **picture of nature according to quantum theory**, and finally to gain practice in **solving problems** in quantum mechanics. 

### The mechanics of a particle
For the majority of this course we will consider the mechanics of a particle in one-dimension. All of the basic concepts of quantum mechanics can be introduced in this simple setting, without loss of generality. At the end of the course we will discuss the mechanics of a particle in three-dimensions, necessary for fully describing the physics of the world around us. 

The basic setting of interest is that of a particle of mass $M$ and co-ordinate $x$. The particle will be acted on by a force $F(x)$ which in general will change in space, for example, a particle attached to a spring, or a particle moving vertically in a gravitational field. We will restrict our attention here to **conservative forces**, ones to which we can associate a **potential energy** $V(x)$ such that 
```{math}
F(x) = -\frac{dV(x)}{dx}. 
```

In classical mechanics, a **complete description** of the **state** of a particle at a given time $t = t_0$ is to specify both the **position** $x(t_0) = x_0$ and **momentum** $p(t_0) = p_0$. If the position and momentum of the particle are known, then all other physical properties are also determined. For example, the velocity of the particle is
```{math}
v(t_0) =  \frac{p_0}{M},
```
and the kinetic energy is
```{math}
K(t_0) = \frac{p_0^2}{2M}= \frac{1}{2}M v_0^2.\vph
```

```{note} Remark
:class: dropdown
An alternative choice would be to specify the position $x(t_0) = x_0$ and the velocity $v(t_0) = v_0$. The reason for choosing to specify the momentum $p(t_0) = p_0$ over the velocity comes from other branches of physics, such as Electromagnetism and General Relativity, where momentum is found to play a more fundamental role than velocity. We will also see that momentum plays a fundamental role in quantum mechanics, whereas the velocity does not.
```


In general, we have a lot of **freedom** in specifying the state of the particle — we can consider a particle at an arbitrary position $x_0$ with an arbitrary momentum $p_0$. Of course, if the particle is meant to be confined to some region of space, then we must specify the particle to be in that region, and to avoid having to use special relativity, we should only consider momentum small enough so that the particle is not moving close to the speed of light. Apart from these reasonable requirements, we are otherwise free to specify the state of the particle arbitrarily.

The basic problem of classical mechanics is to determine the state of the particle at all times, given knowledge of the state at one instant of time, $t_0$. That is, the goal is to solve the **equation of motion**, given the initial conditions, which specify the state of the system. The equation of motion is Newton's second law, which states that
```{math}
:label: e-classical-EoM
\frac{dp}{dt} = F(x),\quad \frac{dx}{dt}  = \frac{p(t)}{M}.
```

Solving the equation of motion, subject to the initial conditions $x(t_0) = x_0$, $p(t_0) = p_0$, provides us with solutions $x(t)$ and $p(t)$ which then completely specify the state **at all times $t$**. 

```{note} Remark
:class: dropdown
Note that the more familiar form of Newton's second law, $M\frac{d^2 x(t)}{dt^2} = F(x)$, is obtained by combining these two equations together. This is not done here, as it is important to stress that the the equation of motion allows us to find the **state** of the system (i.e. both the position and the momentum) at later times, something which is not as explicit in the familiar form, which concerns only $x(t)$.
```

Quantum theory provides a completely new description of the mechanics of a particle, which we will now begin to explore. Nevertheless, the basic structure is the same as in classical mechanics: quantum mechanics provides a **complete description** of the **state** of a system, and an **equation of motion** that must be solved in order to determine how the state changes in time. 

### The wavefunction
In quantum mechanics, a **complete description** of the **state** of a particle **at time $t_0$** is specified by the quantum mechanical **wavefunction** $\Psi(x,t_0)$. This is the basic object of quantum mechanics. 

Mathematically, it is a **complex-valued** function of space (and time), meaning that $\Psi(x,t_0)$ is of the form $\Psi(x,t_0) = \Psi_\mathrm{R}(x,t_0) + i \Psi_\mathrm{I}(x,t_0)$, where $\Psi_\mathrm{R}(x,t_0)$ and $\Psi_\mathrm{I}(x,t_0)$ are real functions, which are respectively the real and imaginary parts of the wavefunction. 

Once the wavefunction is known at time $t = t_0$, it is possible to calculate all physical properties at $t_0$, such as position, momentum and kinetic energy at that time. Precisely **how** this is done for each physical property will take up a large part of this course, and will be the topic of many later sections. The simplest property, which we start with now, is the position of the particle.

#### The Statistical Interpretation
According to quantum mechanics, in general, particles **do not have well-defined properties such as position, momentum or energy**. 

Quantum mechanics says that if at time $t = t_0$ a particle has a wavefunction $\Psi(x,t_0)$ then the **probability** to find the particle between $x = x_a$ and $x = x_b$ is 
```{figure} ./Pictures/Pab.svg
:name: Pab
:width: 400px
:align: center

**Probability.** The probability to find the particle between $x_a$ and $x_b$ is the integral of the modulus square of the wavefunction between these two values. This is the shaded area under the curve in the above figure.
```

````{card}
```{math}
P(x_a \leq x \leq x_b,t_0) = \int_{x_a}^{x_b}  |\Psi(x,t_0)|^2 dx .
```
````
That is, the **modulus square** of the wavefunction specifies, in the form of probabilities, where the particle is at time $t_0$. We will return later to related questions, about the momentum and energy of the particle, and how these too are specified by the wavefunction.

Recall that for a complex number $c = a + ib$ (where $i = \sqrt{-1}$), the complex conjugate is denoted $c^*$ and is equal to $c^* = a - ib$ and the modulus square is $|c|^2 = c^*c = a^2 + b^2$, which  is a real, positive number. Thus
```{math}
|\Psi(x,t_0)|^2 = |\Psi_\mathrm{R}(x,t_0)|^2 + |\Psi_\mathrm{I}(x,t_0)|^2
```
is always real and positive. 
 
```{figure} ./Pictures/complex.svg
:name: complex
:width: 300px
:align: center

**Complex numbers.** A diagram of the complex plane, with the real and imaginary parts of a complex number plotted along the $x$ and $y$ axes respectively. Here, we plot the real and imaginary parts of the complex number $c = a + ib$, and its complex conjugate $c^* = a - ib$, which is seen to be mirrored in the $x$-axis compared to $c$. The absolute value $|c|$ is geometrically  the length of the line connecting the origin to either the point $c$ or $c^*$ in the complex plane.
```

We can interpret $|\Psi(x,t_0)|^2$ as the **probability density $P(x,t_0)$** to find the particle at position $x$ at time $t = t_0$. That is,
````{card}
```{math}
P(x,t_0)dx = |\Psi(x,t_0)|^2 dx
```
````
is the probability to find the particle between $x$ and $x + dx$ at time $t_0$, for $dx$ infinitesimally small. We can think of this as being the probability to find the particle **in the vicinity** of $x$ at time $t_0$. 

It is important to note that probabilities enter quantum mechanics in a **fundamental** way: Even if the most careful and ideal experiment were to be carried out in order to measure the position of a particle, then it would still be found in different places in different runs of the experiment. This means that in quantum mechanics, identical experiments lead to non-identical outcomes. 

The probabilities that arise in quantum mechanics have nothing to do with **imperfections** or **experimental limitations**. This is contrary to classical mechanics, where in principle all experiments can be made perfectly repeatable, such that identical experiments lead to identical outcomes if sufficient care is taken (this is true even for chaotic systems, which are very sensitive to changes in conditions).

The probabilistic nature of quantum mechanics is arguably the **biggest departure** from classical mechanics, from which many of its counter-intuitive predictions arise.

#### Probability amplitudes and superposition
With the above statistical interpretation in place, it is useful to introduce some terminology. 

We will say that $\Psi(x,t_0)$ is the **probability amplitude** for the particle to be at position $x$ at time $t_0$. When there is no loss of confusion, we will also simply use **amplitude** in place of probability amplitude. Probability amplitudes are thus complex numbers, whose modulus squares are probabilities. 
 
We also say that the particle is in a **superposition** of different locations, with the probability amplitude to be at $x$ at time $t_0$ given by the value of the wavefunction $\Psi(x,t_0)$. 

(s-normalisation)=
### Normalisation

````{important} Video: _Basics of QM II_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/5e526f21f38445109d3c8b3a1a7c83451d
:width: 100%
```
````

In order for the statistical interpretation of the wavefunction to be possible, $\Psi(x,t_0)$ is required to satisfy a **normalisation condition** which ensures that the total probability for the particle to be found somewhere is one. Mathematically, because $|\Psi(x,t_0)|^2$ is the probability density $P(x,t_0)$, this condition is given by
````{card}
```{math}
:label: e-norm
\infint |\Psi(x,t_0)|^2  dx = 1.
```
````

```{figure} ./Pictures/norm.svg
:name: norm
:width: 400px
:align: center

**Normalisation**. The total probability to find the particle somewhere must be one. This means that the total area shaded under the curve must be unity.
```

Normalisation is not a very restrictive property, since we can **normalise** functions to turn them into valid wavefunctions. In particular, if we have some unnormalised function $\Psi(x,t_0)$ that satisfies
```{math}
:label: e:sq-integrable
\infint  |\Psi(x,t_0)|^2  dx = N,
```
where **$N < \infty$**, that is, if this integral is **finite**, then 
```{math}
\Psi'(x,t_0) = \frac{1}{\sqrt{N}}\Psi(x,t_0)
```
will be a normalised wavefunction, since
```{math}
\infint |\Psi'(x,t_0)|^2  dx = \frac{1}{N} \infint |\Psi(x,t_0)|^2 dx  = \frac{1}{N}\times N = 1,
```
If $N$ would have been infinite then it would not have been possible to divide by $\sqrt{N}$ in order to obtain a normalised wavefunction, as dividing by infinity would have left us with a wavefunction that vanishes everywhere, which doesn't make sense physically. 

The condition [](#e:sq-integrable) is known as being **square-integrable**. It simply says that the integral of the modulus squared of the function should be a finite number, i.e. that the total area under the curve is not infinite. 

```{exercise-start} Arbitrary phase factor
```
Show that $\Psi''(x,t) = \frac{e^{i\theta}}{\sqrt{N}}\Psi(x,t_0) $ will be a normalised wavefunction for all $\theta$ whenever $\infint  |\Psi(x,t_0)|^2  dx = N$, and that $|\Psi''(x,t_0)|^2$ is independent of $\theta$.  

```{note} Lesson
:class: dropdown
This shows that there is **freedom** in choosing how to normalise a wavefunction, since no matter how we normalise it we end up with the **same** probability density.  A standard choice is to pick $\theta = 0$, such that $e^{i\theta} = 1$. That is, the standard choice is to normalise by a real and positive number (even though a negative, or complex number would also be an equally valid choice).
```	
```{exercise-end}
```
(s-decay)=
#### Behaviour at infinity
The requirement that the wavefunction be normalised imposes constraints on the behaviour of particles at $x = \pm \infty$. Physically, the integral [](#e-norm) says that the probability to find the particle \emph{somewhere} must be one. If there is a non-zero probability to find the particle at infinity, then such a wavefunction necessarily cannot be normalised, as the area under the curve will be infinite.

```{figure} ./Pictures/norm-infty.svg
:name: norm-infty
:width: 500px
:align: center
	
**Normalised vs. unnormalisable wavefunctions**. Left: Example of a wavefunction that is normalised, since it has the correct behaviour for large positive and negative $x$. Right: Example of a wavefunction that is not normalised: the wavefunction grows as $x \to -\infty$, leading to infinite area on this side. Also, the wavefunction does not decay rapidly enough for $x \to \infty$, again leading to infinite area.
```

This statement can be made more precise, as we can show that the wavefunction **must decay to zero sufficiently fast** in order to be normalised. In particular, in [](#ex-norm) it is shown that $\Psi(x,t_0)$ must decay **faster than**
```{math}
\frac{1}{\sqrt{|x|}}
```
in order that the probability to find the particle at large $x$ does not diverge.

````{exercise} Decay of wavefunctions at infinity
:label: ex-norm

In this exercise we will see why the wavefunction must decay sufficiently fast for large values of $x$ in order for it to be normalised. 
	
Assume that for $x \geq x_0$, the wavefunction has the form $\Psi(x,t_0) = \frac{a}{\sqrt{x}}$, where $a$ is a constant. Show that the total area under the curve of $|\Psi(x,t_0)|^2$ in the region $x \geq x_0$ is infinite. 

```{note} Lesson
:class: dropdown
This shows that this function is not square integrable, and we cannot form a valid wavefunction from it.
```

Assume now that for $x \geq x_0$, the wavefunction has the form $\Psi'(x,t_0) = \frac{b}{x^{(1/2 + \alpha)}}$, where $b$ is another constant, and $\alpha > 0$. Show now that the total area under the curve of $|\Psi'(x,t_0)|^2$ in the region $x \geq x_0$ is finite. 

```{note} Lesson
:class: dropdown
This shows that this function is potentially square integrable (it is only potentially so since we don't know how it behaves in other regions).
```
````
(s-freedom)=
### Freedom in specifying the initial state of a particle
As we discussed briefly above, in classical mechanics we have a lot of freedom in specifying the state of the particle at some time $t_0$. In quantum mechanics, we have **even more freedom**. In general, within reason, **any normalised wavefunction $\Psi(x,t_0)$ is a valid state for a particle**. This is rather remarkable, as the wavefunction specifies a complex number at every point in space. There is thus significantly more freedom than just specifying the initial position $x_0$ and initial momentum $p_0$ in classical mechanics. Understanding this additional freedom, what it means, and how it specifies physical properties such as momentum and energy will be a large part of this course. 

### The equation of motion: the Schrödinger Equation
````{important} Video: _Basics of QM: III_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/390b9cbe47a645aeb28aedb0fa46eda31d
:width: 100%
```
````

In order to determine how the state of a particle changes in time from some initial time $t_0$ to later times $t$, we need an **equation of motion.** In quantum mechanics the equation of motion for a particle is given by the **Schrödinger equation**,  
````{card}
```{math}
:label: e-SE
	i\hbar \frac{\partial\Psi}{\partial t} = -\frac{\hbar^2}{2M} \frac{\partial^2\Psi}{\partial x^2} + V(x)\Psi(x,t),
```
````
	
where $V(x)$ is the potential, which encodes the forces acting on the particle, $M$ is the mass, and $\hbar$ is the ''**h-bar**'' (i.e. the **reduced Planck constant**) from [](#e-hbar).

The Schrödinger equation  is a complex, second-order linear partial differential equation. It replaces Newton's second law as the basic equation governing the **dynamics** in quantum mechanics. 

By solving the Schrödinger equation, given the **initial condition** $\Psi(x,t_0)$, (i.e. a complete specification of the **state** of the particle at time $t_0$), we find the state of the system for all times $t$, $\Psi(x,t)$.

(s-superposition)=
#### The Superposition Principle
Because of the fact that the Schrödinger equation is **linear**, it has an extremely important property known as the **superposition principle**: If $\Psi_1(x,t)$ and $\Psi_2(x,t)$ are both solutions of the Schrödinger equation, then 
```{math}
:label: e-psiprime
\Psi'(x,t) = \alpha \Psi_1(x,t) + \beta\Psi_2(x,t)
``` 
is also a solution of the Schrödinger equation for all complex numbers $\alpha$ and $\beta$. 

````{seealso} Derivation
:class: dropdown
To show this, we start by writing out explicitly what it means for $\Psi_1(x,t)$ and $\Psi_2(x,t)$ to be solutions to the Schrödinger equation [](#e-se). It means that they satisfy 

```{math}
:label: e-psi1
i\hbar \frac{\partial\Psi_1}{\partial t} = -\frac{\hbar^2}{2M} \frac{\partial^2\Psi_1}{\partial x^2} + V(x)\Psi_1(x,t), 
```

```{math}
:label: e-psi2
i\hbar \frac{\partial\Psi_2}{\partial t}= -\frac{\hbar^2}{2M} \frac{\partial^2\Psi_2}{\partial x^2} + V(x)\Psi_2(x,t),
```
Multiplying [](#e-psi1) by $\alpha$ and [](#e-psi2) by $\beta$, and adding together, the following equation is satisfied:
```{math}
 i\alpha \hbar \frac{\partial\Psi_1}{\partial t} &+i\beta\hbar \frac{\partial\Psi_2}{\partial t} = -\frac{\alpha\hbar^2}{2M} \frac{\partial^2\Psi_1}{\partial x^2} \\ &+ \alpha V(x)\Psi_1(x,t)-\frac{\beta\hbar^2}{2M} \frac{\partial^2\Psi_2}{\partial x^2} + \beta V(x)\Psi_2(x,t).
```

Since $\alpha$ and $\beta$ are constants, meaning that they do not depend upon $x$ or $t$, we can move them through the derivatives, and factorise the above, to arrive at
```{math}
 i\hbar \frac{\partial}{\partial t}\big(\alpha\Psi_1(x,t) &+\beta\Psi_2(x,t)\big)\\ = &-\frac{\hbar^2}{2M} \frac{\partial^2}{\partial x^2}\big(\alpha\Psi_1(x,t) +\beta\Psi_2(x,t)\big) \\ &+  V(x)\big(\alpha\Psi_1(x,t)+ \beta\Psi_2(x,t)\big).
```
Finally, given the definition of $\Psi'(x,t)$ in [](#e-psiprime), this is equivalent to
```{math}
	i\hbar \frac{\partial\Psi'}{\partial t} = -\frac{\hbar^2}{2M} \frac{\partial^2\Psi'}{\partial x^2} + V(x)\Psi'(x,t).
```
This is  precisely the Schrödinger equation [](#e-SE) for $\Psi'(x,t)$. Thus $\alpha \Psi_1(x,t) + \beta \Psi_2(x,t)$ satisfies the Schrödinger equation whenever $\Psi_1(x,t)$ and $\Psi_2(x,t)$ do. 
````

The above shows that knowing two solutions to the Schrödinger equation, infinitely many more solutions can be found, by simply adding together the known solutions with arbitrary complex factors. 

The fact that the Schrödinger equation satisfies the superposition principle will play a central role in all of quantum mechanics. It shows, in particular, that **the evolution of a superposition of wavefunctions is equal to the superposition of the evolutions**. This is **conceptually** important, but will also provide us with our general **strategy** for solving the Schrödinger equation: We will look for **special** wavefunctions whose evolution is **simple**. Once we have found these, we will then figure out how to write a general wavefunction as a superposition of these special wavefunctions. Remarkably, we will then be able to simply **write down** the evolution of a particle.

It is useful to again introduce some terminology. We say that solutions of the Schrödinger equation can be **superposed** in order to obtain new solutions. %In the calculation above, we say that **$\Psi'(x,t)$ is a superposition** of $\Psi_1(x,t)$ and $\Psi_2(x,t)$}, and that the **amplitude** for $\Psi_1(x,t)$ is $\alpha$, and the **amplitude** for $\Psi_2(x,t)$ is $\beta$.

In the previous subsection we also introduced the terminology of superposition for wavefunctions and amplitudes, stating that when a particle has a wavefunction $\Psi(x,t)$, the particle is in a superposition of locations, and that $\Psi(x,t)$ is the probability amplitude to be at $x$ at time $t$.

 We use the **same terminology** here as it leads to the same phenomena: By superposing the wavefunctions $\Psi_1(x,t)$ and $\Psi_2(x,t)$ we alter the probability amplitude at $x$ to be $\alpha \Psi_1(x,t) + \beta \Psi_2(x,t)$. Nevertheless, the particle is still in superposition of different positions, just now the probability amplitudes are given by $\Psi'(x,t)$.  


(s-cons-of-norm)=
#### Conservation of normalisation 
````{important} Video: _Basics of QM IV_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/3a03675476384159bcd695e2a8d389e11d
:width: 100%
```
````
A second important physical property of the Schrödinger equation is that **the wavefunction remains normalised in time}. That is, if $\Psi(x,t_0)$ is normalised at $t_0$, then after solving the Schrödinger equation for $\Psi(x,t)$, we also find that $\Psi(x,t)$ is normalised, for all time,
````{card}
```{math}
:label: e-norm-t
	\infint |\Psi(x,t)|^2  dx = 1 \quad \text{ for all }t.
```
````
	
As such, the probability to find the particle _somewhere_ is always one.

Mathematically, one way to show that the normalisation of the wavefunction is constant in time is to show that
```{math}
\frac{\partial}{\partial t} \infint |\Psi(x,t)|^2 dx = 0.
```
Therefore, if we understand the behaviour of $ \frac{\partial}{\partial t}|\Psi(x,t)|^2$, we will be able to compute the above integral, and check that the normalisation is constant. We will therefore try to understand how the probability density $P(x,t) = |\Psi(x,t)|^2$ changes in time, given that the wavefunction $\Psi(x,t)$ satisfies the Schrödinger equation.

```{figure} ./Pictures/current.svg
:name: current
:width: 500px
:align: center

**Visualising the current.** At $t_0$ the probability to find the particle between $x_0$ and $x_0 + dx$ is $P(x_0,t_0)dx$. During a time $dt$ the probability current that flows into this region from the left is $j(x_0,t_0)dt$. During the same time, a probability current $j(x_0 + dx,t_0)dt$ flows out from the right. The continuity equation says that the change in probability in the vicinity of $x_0$ during the time $dt$ must be equal to the net current flowing into that region. 
```

In the derivation below (which you are encouraged to work through yourself, but can be skipped over and will not be presented in the lectures), we show that the following equation holds:
````{card}
```{math}
:label: e-continuity-eq
	\frac{\partial P}{\partial t} + \frac{\partial j}{\partial x} = 0,
```
````
where
````{card}
```{math}
j(x,t) = \frac{i\hbar}{2M}\left(\frac{\partial \Psi^*}{\partial x}\Psi(x,t) -\Psi^*(x,t)\frac{\partial \Psi}{\partial x}\right),
```
````
You have encountered equations of the form [](#e-continuity-eq) before, for example in Electromagnetism. It is in the form of a **continuity equation**. It says that the rate of change of probability at a location $x$ at time $t$ is equal to the net **probability current** flowing into that point. That is, **$j(x,t)$ can be seen as the probability _current_ associated to the wavefunction $\Psi(x,t)$**. In quantum mechanics, it thus appears that probability is much like other physical 'substances', such as water, or electrical charge: probabilities **flow** in and out of regions. The continuity equation captures the idea of a **local conservation**: Changes in the probability density at $x$ are completely determined by the probability current that is flowing in to or out of it. 


````{seealso} Derivation
:class: dropdown
By applying the product rule it is seen that
```{math}
\frac{\partial}{\partial t} |\Psi(x,t)|^2 &= \frac{\partial}{\partial t}\Big(\Psi^*(x,t)\Psi(x,t)\Big) \\ 
&= \frac{\partial \Psi^*}{\partial t}\Psi(x,t) +\Psi^*(x,t)\frac{\partial \Psi}{\partial t}.
```
The Schrödinger equation can now be used to substitute for $\partial \Psi/\partial t$, and by taking the complex conjugate, for $\partial \Psi^*/\partial t$. Namely, by taking the complex conjugate of the Schrödinger equation, we have
```{math}
	-i\hbar \frac{\partial\Psi^*}{\partial t} = -\frac{\hbar^2}{2M} \frac{\partial^2 \Psi^*}{\partial x^2} + V(x)\Psi^*(x,t),
```
Substituting both the Schrödinger equation and its conjugate, it is found that
```{math}
\frac{\partial}{\partial t} |\Psi(x,t)|^2 =  \left(-\frac{i\hbar}{2M} \frac{\partial^2\Psi^*}{\partial x^2} +\frac{i}{\hbar} V(x)\Psi^*(x,t)\right)\Psi(x,t) \\ +\Psi^*(x,t)\left(\frac{i\hbar}{2M} \frac{\partial^2\Psi}{\partial x^2} -\frac{i}{\hbar} V(x)\Psi(x,t)\right).
```
The second terms in each bracket cancel each other out, and it can be noticed furthermore that
```{math}
\frac{\partial}{\partial x}\left(\frac{\partial \Psi^*}{\partial x}\Psi(x,t) -\Psi^*(x,t)\frac{\partial \Psi}{\partial x}\right) = \frac{\partial^2 \Psi^*}{\partial x^2}\Psi(x,t) -\Psi^*(x,t)\frac{\partial^2 \Psi}{\partial x^2}
``` 
to arrive at
```{math}
:label: e-cons-before-j
\frac{\partial}{\partial t} |\Psi(x,t)|^2 = -\frac{\partial}{\partial x}\bigg[\frac{i\hbar}{2M}\left(\frac{\partial \Psi^*}{\partial x}\Psi(x,t) -\Psi^*(x,t)\frac{\partial \Psi}{\partial x}\right)\bigg].
```
If we now define 
```{math}
j(x,t) = \frac{i\hbar}{2M}\left(\frac{\partial \Psi^*}{\partial x}\Psi(x,t) -\Psi^*(x,t)\frac{\partial \Psi}{\partial x}\right),
```
then, recalling that $P(x,t) = |\Psi(x,t)|^2$, [](#e-cons-before-j) can be re-expressed as
```{math}
\frac{\partial P}{\partial t} + \frac{\partial j}{\partial x} = 0,
```
which is what we wanted to show.
````

Returning to the problem we started with, the conservation of normalisation, we now see that, by integrating [](#e-continuity-eq),
```{math}
\frac{\partial}{\partial t}\infint |\Psi(x,t)|^2 dx &= -\infint \frac{\partial j}{\partial x}dx, \\
&= -\left[ j(x,t) \right]_{-\infty}^{\infty},  \\
&= j(-\infty,t) - j(\infty,t).
```
This says that the change in total probability is equal to the difference between the probability current flowing at $x = +\infty$ and $x = -\infty$. Physically, we see that the probability to find the particle somewhere will remain unity if there is no probability current at infinity,
```{math}
j(+\infty,t) = j(-\infty,t) = 0.
``` 
Physically, we are interested in situations where the particle is somewhere at time $t_0$, (i.e. it is **not** infinitely far away),  and we already saw that we need the wavefunction to vanish at infinity. It is then natural that it will not be able to reach infinity in finite time either, since in order to do so it would have to travel infinitely fast. This intuitive idea is captured by saying that there is no probability current at $x = \pm \infty$. 

This intuition can be shown to be correct, and in fact normalised wavefunctions have the property that 
```{math}
j(+\infty, t) = j(-\infty,t) = 0
```
This shows that probability is conserved, and the particle is always somewhere (with probability one) at all times.

The point of the above, from a practical perspective, is that **if we have a proper, normalised wavefunction at $t_0$, then it will remain normalised thereafter** — we don't have to worry about the normalisation changing in time. 