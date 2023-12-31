---
title: "Chapter 3: Separation of Variables & the Time-Independent Schrödinger Equation"
short_title: "Ch. 3: Sep. of Var. & the TISE"
numbering:
  enumerator: 3.%s
---

````{important} Video: _Separtion of Variables & TISE I_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/4ca72e736fef4e9e92a6234338ae8f521d
:width: 100%
```
````

The equation of motion of a quantum particle is the Schrödinger equation. Much of this course will be concerned with solving the Schrödinger equation, in order to study how quantum particles evolve in time, starting from some initial wavefunction $\Psi(x,t_0)$.

The main technique that will be used is a standard technique used to solve many partial differential equations. It is known as **separation of variables**. This will lead to two **ordinary** differential equations, one involving only time, which can be solved easily, and the second involving only the position of the particle, known as the **Time-Independent Schrödinger Equation (TISE)**. The latter, although still challenging to solve in general, is more tractable than the Schrödinger equation itself, and thus this method gives us a simpler method for solving the Schrödinger equation. 

In this section, we will carry out separation of variables for the Schrödinger equation. We will see that the solutions we obtain are very special solutions, known as **stationary states**, since all of their physical properties are constant in time. 

## Separation of Variables
The starting point of the technique of separation of variables is to **make an assumption** about the form of the wavefunction $\Psi(x,t)$: we assume that it **factorises** into two functions, $f(t)$ and $u(x)$, one depending only upon time, and the other only upon position,
```{math}
:label: e-sep-form-1
\Psi(x,t) = f(t)u(x).
```
It must be emphasised that this is a **strong assumption** — most functions definitely do not factorise in this way. Nevertheless, for reasons that will only become clear later, we will make this assumption, and study its consequences. Using the facts that
\begin{equation}
\frac{\partial}{\partial t}\big(f(t)u(x)\big) = \frac{df}{dt}u(x),\quad \frac{\partial^2}{\partial x^2}\big(f(t) u(x)\big) = f(t)\frac{d^2u}{dx^2},
\end{equation}
i.e. the fact that partial derivatives equal ordinary derivatives for functions of a single variable, substituting [](#e-sep-form-1) into the Schrödinger equation [](#e-SE) leads to
\begin{equation}
i\hbar \frac{df}{dt} u(x) = -\frac{\hbar^2}{2M} f(t) \frac{d^2 u}{dx^2} + V(x) f(t) u(x).
\end{equation}
Dividing both sides by $f(t)u(x)$ leads to
\begin{equation}
i\hbar \frac{1}{f(t)}\frac{d f}{dt} = -\frac{\hbar^2}{2M} \frac{1}{u(x)} \frac{d^2 u}{dx^2} + V(x).
\end{equation}
This equation has an important form. The left-hand side is a function **only** of $t$ and is independent of $x$. On the other hand, the right-hand side is a function **only** of $x$ and is independent of $t$. The only way that this equation can be true for all values of $x$ and $t$ is if **both sides are in fact constant and independent of $x$ and $t$**. 

This is a central point of the argument and important to stop and think about. Consider two times $t_0$ and $t_1$, and a single point $x_0$. In general, the left-hand side will be different at $t_0$ and $t_1$. But, if we only consider the single point $x_0$, the right-hand-side is constant. Thus the left-hand side must be the same at $t_0$ and $t_1$. Playing around with this type of reasoning, it should become clear that both sides indeed must be constant. 

The standard choice is to call the constant which both sides must necessarily equal $E$. That is, we arrive at the **pair** of equations
```{math}
:label: e-time-eq
 i\hbar \frac{1}{f(t)}\frac{d f}{dt} = E,
 ```
 ```{math}
:label: e-TISE-1
-\frac{\hbar^2}{2M} \frac{1}{u(x)} \frac{d^2 u}{dx^2} + V(x) = E.
```
These equations are completely equivalent to the Schrödinger equation under the assumption that the wavefunction factorises as $\Psi(x,t) = f(t)u(x)$.

The reason for calling the constant that appears in these equations $E$ will become clear later in the course. We will see that it has an important physical meaning as the **energy** of the particle.
(s-time-eq)=
### Time equation 
The first of the above two equations, [](#e-time-eq), which involves only the time, is straightforward to solve. Multiplying both sides by $-if(t)/\hbar$ the equation becomes
\begin{equation}
\frac{df}{dt} = -\frac{iE}{\hbar} f(t).
\end{equation}
By inspection, it can be seen that the solution of this equation will be of exponential form (since the derivative of the function is proportional to the function itself) and given by
````{card}
```{math}
:label: e-time-soln
f(t) = A e^{-iEt/\hbar},
```
````
where A is an integration constant. This is a particularly simple function, which amounts to **circular motion** in the complex plane. 
```{figure} ./Pictures/complex-circ.svg
:name: complex-circ
:width: 500px
:align: center

**Circular motion.** The function $f(t) = Ae^{-iEt/\hbar}$ represents circular motion in the complex plane.  (a) 2D plot: The real and imaginary parts plotted on the same pair of axes. Each part oscillates sinusoidally. (b) 3-D plot: The $y$-axis and $z$-axis are the real and imaginary parts of $f(t)$. In this representation, the function looks like a corkscrew. (c) Colour plot: The $y$-axis is the absolute value $|f(t)|$, which is constant, $|f(t)| = 1$. The colour of the line represents the phase of $f(t)$. This is the angle on the corkscrew in (b). The legend shows how the colour varies with phase as you move around in a circle.    
```

It is instructive to look at the **angular frequency** $\omega$ of this circular motion. Recall that the angular frequency is defined as $\omega = 2\pi/T$, where $T$ is the period.  For []](#e-time-soln) the period is seen to be $T = 2\pi \hbar/E$, since
\begin{equation}
f(t + T) = Ae^{-i E(t + 2\pi \hbar/E)/\hbar} = Ae^{-iEt/\hbar - 2\pi i} = Ae^{-iEt/\hbar} = f(t).
\end{equation}
Therefore, we find that
\begin{equation}
\omega = \frac{E}{\hbar},
\end{equation}
i.e. $E = \hbar \omega$. This is very suggestive, as a little thought shows that it is in fact of exactly the same form as the relation Einstein used in the photoelectric effect, [](#e-Einstein-relation), if $E$ is indeed the energy. In particular, we should recall that  $\hbar = h/2\pi$, and the frequency $f$ of an oscillation is related to the angular frequency $\omega$ via $\omega = 2\pi f$.  Putting this together, we see that
\begin{equation}
E = \hbar \omega = \frac{h}{2\pi} 2\pi f = h f,
\end{equation}
which is now exactly the Einstein relation [](#e-Einstein-relation). This is a first indication for why $E$ is related to the energy. We will make this connection much stronger later. 

## The Time-Independent Schrödinger Equation
````{important} Video: _Separation of Variables & TISE II_ 
:class: dropdown
```{iframe} https://mediasite.bris.ac.uk/Mediasite/Play/691ac122b16a4140a78b9d73549233c81d
:width: 100%
```
````
The second equation from above, [](#e-TISE-1), that only depends upon the position $x$ is known as the **Time-Independent Schrödinger Equation** (TISE). It is customary to write it in a form where both sides have been multiplied by $u(x)$, namely
````{card}
```{math}
:label: e-TISE
-\frac{\hbar^2}{2M} \frac{d^2u}{dx^2} + V(x) u(x) = E u(x).
````
Unlike the time equation [](#e-time-eq), it is not so straightforward to solve the TISE. In particular, whereas the time equation was **independent of the forces acting on the particle**, the TISE depends upon them, through the potential energy $V(x)$. Thus, depending upon the situation of interest, the equation that needs to be solved changes. We will explicitly solve this equation in a number of simple instances in this course, starting in the next section. 

## Separable solutions to the Schrödinger equation
Putting the above results together, it is seen that all **separable** solutions (i.e. those that factorise) of the Schrödinger Equation have the form 
```{math}
:label: e-sep-form
\Psi(x,t) = Ae^{-iEt/\hbar}u(x)
```
where $E$ and $A$ are constants, and $u(x)$ satisfies the TISE [](#e-TISE) with the same constant $E$ as appearing in the exponential. 
```{exercise}
By substituting a wavefunction of the form $\Psi(x,t) = Ae^{-iEt/\hbar}u(x)$ into the Schrödinger equation [](#e-SE), confirm that it is a solution as long as $u(x)$ satisfies the TISE [](#e-TISE).
```

(s-stationary-states)=
### Stationary States 
Separable solutions have a number of interesting and important properties. First, note that the time evolution of separable solutions is particularly simple. Whatever the function $u(x)$ is, then in time this whole function **undergoes circular motion** in the complex plane, at the angular frequency $\omega = E/\hbar$. 

Furthermore, **the probability to find the particle somewhere is constant in time**. In particular, looking at the probability density we see that
\begin{equation}
P(x,t) = |\Psi(x,t)|^2 = |A|^2 |u(x)|^2, 
\end{equation}
which is manifestly independent of time. 

We will also show later on, when we consider other physical properties of the particle, such as momentum and energy, that they too are **constant in time for separable solutions**. 

For this reason, separable solutions are known as **stationary states**. We use this terminology since all physical properties are constant in time for stationary states. However, it is very important that the **wavefunction itself is definitely _not_ stationary**. As we noted above, it has a non-trivial time-dependence, which corresponds to circular motion in the complex plane. What is constant is the spatial **form** of the wavefunction, i.e. the 'shape', which merely rotates without changing form. 