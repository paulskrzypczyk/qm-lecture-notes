---
title: "Chapter 11: The Quantum Harmonic Oscillator"
short_title: "Ch. 11: Q. Har. Osc."
numbering:
  enumerator: 11.%s
---

We now turn our attention to arguably the most important system in all of quantum mechanics — the quantum harmonic oscillator. Here we will study the quantum mechanics of a particle whose force is of the form $F(x) = - kx$. That is, a restorative force proportional to the displacement from the origin. We know that in classical mechanics systems with such forces lead to simple harmonic motion. Our goal now is to understand the quantum mechanics of such systems.  

Why is this one of the most important systems to study? The first reason is that it provides an approximation to the behaviour of **almost all** potential wells, as we outline briefly below. Second, you will see later in your degree that the quantum harmonic oscillator pops up in a huge range of situations, from describing light in quantum field theory, to describing phonons in condensed matter physics and far beyond. 

In this section we will also learn a couple of general lessons about solving physics problems. First, we will use **dimensionless co-ordinates**, which is a useful way of simplifying equations, and also helps to bring out their underlying structure. We will then study the behaviour of the quantum harmonic oscillator **far from the centre of force**, to see how a particle behaves approximately when the force has become very large. Finally, instead of solving head on, we will use a bit of **trial and error** and see that it can lead us to a complete solution. 

## Approximation of an arbitrary potential well
Imagine a situation where a particle is acted on by a conservative force $F(x)$, with associated potential energy $V(x)$. Let us assume that this force wants to push the particle back to a position $x_0$. An example is depicted in [](#arbitrary-well). 

````{figure} ./Pictures/arbitrary-potential.svg
:name: arbitrary-well
:width: 400px
:align: center

**Harmonic approximation for the bottom of an arbitrary potential well.** The solid curve depicts the potential energy of an arbitrary potential well. The dotted curve depicts the leading approximation to the well, which is seen to be accurate for small displacements about the bottom (i.e. for $x$ close to $x_0)$. This leading approximation is a harmonic oscillator, of the form $V(x) \approx \frac{1}{2}kx^2$.
````


We would like to look at **the form of the potential when the particle is close to the bottom of the well**. In order to do so, we can **expand** the potential energy around the bottom, to obtain
\begin{equation}\vph
V(x) \approx V_0 +  \frac{dV}{dx}\bigg|_{x_0}(x-x_0) + \frac{1}{2}  \frac{d^2V}{dx^2}\bigg|_{x_0}(x-x_0)^2
\end{equation}
where $V_0 = V(x_0)$.

At $x = x_0$, the bottom of the well, the first derivative of the potential vanishes, $\frac{dV}{dx}\big|_{x_0} = 0$, since the bottom is, by definition, a **turning point**. Thus, to leading order, the potential will be approximately
\begin{equation}\vph
V(x) \approx V_0 + \frac{1}{2} \frac{d^2V}{dx^2}\bigg|_{x_0}(x-x_0)^2.
\end{equation}
We can finally make two simplifications without loss of generality: First, we can **redefine the zero of the energy scale**, so that $V_0 = V(x_0) = 0$. Second, we can change our co-ordinate so that the bottom of the well corresponds to $x_0 = 0$. With these two simplications, we arrive at
\begin{equation}
V(x) \approx \frac{1}{2}\frac{d^2V}{dx^2}\bigg|_{0}x^2 
\end{equation}
If we call $k = \frac{d^2V(x)}{dx^2}\bigg|_{0}$, then we arrive precisely at the potential energy $V(x) = \frac{1}{2}kx^2$ associated to the force $F(x) = -kx$, through $F(x) = -dV/dx$. 

This shows that the harmonic oscillator is the leading-order approximation to any potential well in the vicinity of the bottom of the well. It means that if the particle is not too far from $x_0 = 0$, then the force it experiences (and the potential energy it will have) will be essentially indistinguishable from the linear force of simple harmonic motion. 

This region of small $x$ is precisely the region that is explored classically by a particle with low energy. It is thus reasonable to assume that for low energies, all systems behave roughly like the harmonic oscillator, and that this is also true in quantum mechanics. Hence, by solving the quantum mechanics of a harmonic oscillator, we hope to obtain an approximation to the quantum mechanics of any particle trapped in a potential well.

```{attention} Remark
:class: dropdown
The only caveat to the above is when $d^2V/dx^2$ vanishes. In this case, we need to go to higher-order derivatives in order to find the leading-order approximation to the potential well, and the behaviour will not be well approximated by the harmonic oscillator. The square well is precisely a potential of this kind — at the bottom of the well **all derivatives $d^nV/dx^n$ vanish**. However, this indicates that there is no force on the particle whatsoever, which is a very special situation. In general, it will be the case that $d^2 V/dx^2$ does not vanish, and that the leading-order behaviour is well approximated by the harmonic oscillator.  
```

## The quantum harmonic oscillator potential
For the classical harmonic oscillator, the relation between the **spring-constant** $k$, the **mass** $M$ and **angular frequency** $\omega$ is $\omega = \sqrt{k/M}$. For this reason, it is customary to write $k = M \omega^2$ and take the definition of the harmonic oscillator potential to be
````{card}
\begin{equation}
V(x) = \frac{1}{2} M \omega^2x^2.
\end{equation}
````
This is depicted below in [](#HO-potential).

````{figure} ./Pictures/harmonic-oscillator.svg
:name: harmonic-oscillator
:width: 400px
:align: center

**Harmonic oscillator potential.** The potential energy of the harmonic oscillator.
````

## Dimensionless co-ordinates
The time-independent Schr\"odinger equation for the quantum harmonic oscillator is
\begin{equation}\vph
Eu(x) = -\frac{\hbar^2}{2M} \frac{d^2u}{dx^2} + \frac{1}{2}M\omega^2 x^2 u(x).
\end{equation}
There are a lot of constants floating around in this equation, which can easily get confused, and to some extent obscure the form of the equation. A general method to deal with this is to **define new dimensionless co-ordinates}, which generally help to `clean-up' the equation. 

We would therefore like to find a new co-ordinate $y$, that is dimensionless. In order to do so, we need to find a combination of physical quantities that together have the units of length, which we will call $a$. If we can do so, then $a$ will define a **natural length scale** for the system, and we can measure the physical distance $x$ in multiples of this length scale $a$. 

The dimensionful quantities that we have, and their dimensions, are
\begin{subequations}
\begin{align}
&\text{mass of the particle}: M &&[M] = \mathsf{M},\\
&\text{angular frequency}: \omega && [\omega] = \mathsf{T}^{-1},\\
&\text{Reduced Planck constant}: \hbar && [\hbar] = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-1}.
\end{align}
\end{subequations}
In the problem sheet, you will show that
\begin{boxedeq}
\begin{equation}
a = \sqrt{\frac{\hbar}{M\omega}} \,\text{  has the units of length, i.e. } [a] = \mathsf{L}.
\end{equation}
\end{boxedeq}
Therefore, we will introduce a dimensionless co-ordinate
\begin{equation}
y = \frac{x}{a} = \sqrt{\frac{M \omega}{\hbar}}x.
\end{equation}
Re can then re-write the time-independent Schr\"odinger equation in the variable $y$ instead of $x$, which gives
\begin{equation}\label{e:QHO simple form}
\frac{d^2u}{dy^2} = (y^2 - \mathcal{E})u(y),
\end{equation}
where
\begin{equation}
\mathcal{E} = \frac{2E}{\hbar \omega}
\end{equation}
is a dimensionless energy, measuring energy in multiples of $\hbar \omega / 2$, which has units of energy, as does $E$. All of the above is carried out as an exercise in the Problem sheet 3. 

## Behaviour far from the force centre
The time-independent Schr\"odinger equation for the harmonic oscillator potential is not as straightforward to solve as in the previous examples. Whereas for the finite square well solutions in the three regions could be readily written down, we are going to have to work a little harder to get to a position where we can find solutions now.

In order to make progress, the first step we can take is to **try and find a solution which is valid for large values of $y$**. That is, we are going to try and find the form of the energy eigenstates **far from the bottom of the well**. Classically, if the total energy of the particle is fixed at $E$, then there is a maximum distance that the particle can be from the origin: It can only make it to the point where all of its energy is potential energy, and therefore its kinetic energy becomes zero. Such as points are known as the **classical turning-points**.

We saw in the previous section that in quantum mechanics particles can **tunnel** into this forbidden region. Therefore, if we go far enough away from the centre of force for a fixed energy $E$, then we expect that the wavefunction should decay towards zero, just like the decay in the forbidden region of the finite square well.

Mathematically, when $y \gg 1$, we see that an **approximate} form of the time-independent Schr\"odinger equation is
\begin{equation}\label{e:TISE large y}
\frac{d^2u}{dy^2} = y^2 u(y).
\end{equation}
That is, we neglect $\mathcal{E}$ compared to $y^2$, since the latter is very large, while $\mathcal{E}$ is constant. On the right-hand side, if the $y^2$ that multiples $u(y)$ would have been a constant $c^2$ (and not the dimensionless position), then this equation would have been easy to solve: the solutions would have been $e^{cy}$ and $e^{-cy}$. Maybe we can try to get some intuition, and set $c = y$ in these solutions, and guess that a solution could be of the form $e^{y^2}$ or $e^{-y^2}$. Let us tentatively proceed, and calculate the derivatives:
\begin{align}
\frac{d}{dy} e^{y^2} &= 2y e^{y^2},& \frac{d}{dy} e^{- y^2} &= - 2y e^{ y^2},\nonumber \\
\frac{d^2}{dy^2} e^{y^2} &= 2e^{y^2} + 4y^2 e^{y^2},& \frac{d^2}{dy^2} e^{- y^2} &= - 2e^{- y^2} + 4y^2 e^{- y^2}.
\end{align}
Remember that we are interested in solutions **for large values of $y$**. Therefore, just as we approximated the time-independent Schr\"odinger equation, we should also approximate the second derivatives of $e^{y^2}$ and $e^{-y^2}$. In particular,
\begin{align}
\frac{d^2}{dy^2} e^{y^2} &\approx 4y^2 e^{y^2},& \frac{d^2}{dy^2} e^{- y^2} &\approx 4y^2 e^{- y^2}.
\end{align}
We are very close to obtaining what we want: for this to be an approximate solution, we need that $\frac{d^2u}{dy^2} \approx y^2 u(y)$, however what we have obtained is $\frac{d^2u}{dy^2} \approx 4 y^2 u(y)$. We can however easily take care of this unwanted factor of 4, by considering instead $e^{\frac{1}{2}y^2}$ and $e^{-\frac{1}{2}y^2}$. Then we find
\begin{align}
\frac{d^2}{dy^2}e^{ \frac{1}{2}y^2} &\approx y^2 e^{\frac{1}{2}y^2},& \frac{d^2}{dy^2}e^{- \frac{1}{2}y^2} &\approx y^2 e^{- \frac{1}{2}y^2},
\end{align}
just as we want. Therefore, what we have shown is that the two functions $e^{\frac{1}{2}y^2}$ and $e^{-\frac{1}{2}y^2}$ are **approximate solutions** to the time-independent Schr\"odinger equation when $y \gg 1$. 

Since physically permissible solutions must decay towards zero as $y \to \infty$, we see that $e^{\frac{1}{2}y^2}$ is impermissible, and thus the form of the wavefunction of energy eigenstates for large values of $y$ must be 
\begin{equation}
u(y) = Ae^{-\frac{1}{2}y^2}.
\end{equation}
This is precisely a **Gaussian}-type decay. Whereas for the infinite square well, where the potential energy was constant and equal to $V_0$ outside the well, and where the wavefunctions of the energy eigenstates decayed exponentially as $e^{-\zeta x}$, now for the harmonic oscillator, where the potential energy increases as we move further away from the origin, the decay is even faster, now like $e^{-\frac{1}{2}y^2}$. 

What have we learnt: We now know that no matter the energy $E$, and no matter the form of the wavefunction close to the origin, for large values of $y$, the wavefunction must be like a Gaussian function. This means that we are going to search for wavefunctions of the form
\begin{equation}\label{e:QHO form}
u(y) = v(y)e^{-\frac{1}{2}y^2},
\end{equation}
where $v(y)$ is some function which we don't know much about. All we know is that for large values of $y$ we want it not to vary quickly compared to $e^{-\frac{1}{2}y^2}$, such that altogether $u(x)$ has the correct behaviour.


## The ground state
After solving the infinite square well, we covered some of the general properties of energy eigenstates in Section~\ref{s:general properties}. One of these properties was that the **number of nodes increases as the energy increases** and that **the ground state wavefunction has no nodes**. 

Although in the above we were only looking for the form of the wavefunction at large $y$, since it has no nodes, it is advantageous to check whether it might in fact solve the time-independent Schr\"odinger equation **for all $y$**, and not just for large $y$. We see that if $u(y) = Ae^{-\frac{1}{2}y^2}$, then
\begin{equation}
\frac{d^2u}{dy^2} = (y^2 - 1)u(y),
\end{equation}
and so it indeed solves the time-independent Schr\"odinger equation \eqref{e:QHO simple form} with
\begin{equation}
\mathcal{E} = 1.
\end{equation}
Since this is a solution, and since it has no nodes, we know immediately that **we have just found the ground-state of the quantum harmonic oscillator**. If we go back to the physical co-ordinate $x = a y$ and energy $E = \hbar \omega \mathcal{E}/2$, we see that the ground state wavefunction, which we will denote by $u_0(x)$ is
\begin{equation}
u_0(x) = Ae^{-x^2/2a^2} = A e^{-M\omega x^2/2\hbar},
\end{equation}
with energy eigenvalue
\begin{boxedeq}
\begin{equation}
E_0 = \frac{1}{2}\hbar\omega.
\end{equation}
\end{boxedeq}
```{attention} Remark
:class: dropdown
Somewhat confusingly, for the harmonic oscillator we are going to count the energy levels starting from $n = 0$ instead of from $n = 1$. I am not making this choice in order to confuse you — I am making this choice since it is in line with all of the major textbooks, just as all of the major textbooks take $n = 1$ for the ground state of the infinite and finite square wells. I can only apologise for this strange inconsistency, which is used solely so that the formulas in each case are `nice'. 
```

The constant $A$ is the normalisation constant, fixed as always by requiring that the total probability to find the particle somewhere is one. In the problem sheet you will show that the normalised wavefunction is 
\begin{boxedeq}
\begin{equation}
u_0(x) = \left(\frac{1}{a\sqrt{\pi}}\right)^{1/2} e^{-x^2/2a^2}.
\end{equation}
\end{boxedeq}

## The first excited state
We just saw that the Gaussian solves the time-independent Schr\"odinger equation, and was a good **guess** for a solution. Looking at the form \eqref{e:QHO form}, we see that the Gaussian corresponds to $v(y) = 1$, i.e. the constant function. This is arguably the **simplest** function we could have thought of for $v(y)$. 

We are therefore going to try and make further progress by asking ourself what is the **next simplest** choice of function $v(y)$. Before doing so, we are going to recall one further general property of energy eigenstates that we saw in Section~\ref{s:general properties}: The wavefunctions of the energy eigenstates are **alternatively odd and even about the centre of the well whenever the potential is symmetric**. In our case, the centre of the well is at $x = 0$, and indeed it is symmetric about the line $x = 0$. The ground state $u_0(x)$ is an even function (around the centre), as expected, and so for the first excited state we are now looking to form an **odd** function.

If we remember that the product of an odd function and an even function is odd, this shows that we are looking for **the simplest odd function $v(y)$** that we can multiple the Gaussian by, in order to create an overall odd wavefunction $u(y) = v(y)e^{-\frac{1}{2}y^2}$. The simplest choice we can take is $v(y) = Ay$. Let us see if this could indeed form a solution:

\begin{subequations}
\begin{align}
\frac{d}{dy}\left( Ay e^{-\frac{1}{2}y^2} \right) &= Ae^{-\frac{1}{2}y^2} - Ay^2 e^{-\frac{1}{2}y^2}, \\
\frac{d^2}{dy^2}\left( Ay e^{-\frac{1}{2}y^2} \right) &= -Aye^{-\frac{1}{2}y^2} -2Aye^{-\frac{1}{2}y^2} + Ay^3 e^{-\frac{1}{2}y^2}, \nonumber \\
&= (y^2 - 3)Aye^{-\frac{1}{2}y^2}.
\end{align}
\end{subequations}
Looking at the time-independent Schr\"odinger equations \eqref{e:QHO simple form}, we see that we have again obtained a solution, now with $\mathcal{E} = 3$. Moreover, this function has exactly one node at $y = 0$. This shows that it **must be the first excited state**. After normalising the wavefunction (i.e. finding $A$), which you will do as an exercise in the problem sheet, and expressed in terms of the physical co-ordinate $x$, we have just shown that the first excited state of the harmonic oscillator is
\begin{boxedeq}
\begin{equation}
u_1(x) =  \left(\frac{2}{a\sqrt{\pi}}\right)^{1/2} \left(\frac{x}{a}\right)e^{-x^2/2a^2}.
\end{equation}
\end{boxedeq}
with energy
\begin{boxedeq}
\begin{equation}
E_1 = \frac{3}{2}\hbar \omega.
\end{equation}
\end{boxedeq}

## The second excited state
We will consider one more case explicitly, before drawing some general conclusions. Let us now see if we can find the second excited state. Just as previously, we would like to make an educated guess for a function $v(y)$. We now need this to be an **even** function, so that the wavefunction $u(y) = v(y)e^{-\frac{1}{2}y^2}$ is even. We also need it to have precisely two nodes to be the second excited state. 

In order to be even, and have only two nodes, a guess at a function would be  
\begin{align}
v(y) &= A(y-b)(y+b),\nonumber \\
&= A(y^2 - b^2),
\end{align}
where $A$ and $b$ are unknown constants. This function has nodes at $y = b$ and $y = -b$, and is even. Let us see if this may also give us a solution:
\begin{subequations}
\begin{align}
\frac{d}{dy}\left( A(y^2-b^2)e^{-\frac{1}{2}y^2} \right) &= 2Aye^{-\frac{1}{2}y^2} - Ay(y^2 - b^2) e^{-\frac{1}{2}y^2}, \nonumber \\
&= A\left[(2+b^2)y -y^3\right]e^{-\frac{1}{2}y^2}\\
\frac{d^2}{dy^2}\left( A(y^2-b^2) e^{-\frac{1}{2}y^2} \right) &= A\left[(2+b^2) -3y^2\right]e^{-\frac{1}{2}y^2} -A\left[(2+b^2)y -y^3\right]ye^{-\frac{1}{2}y^2}
\nonumber \\
&= A\left[(2+b^2) -(5+b^2)y^2 + y^4\right]e^{-\frac{1}{2}y^2}.
\end{align}
\end{subequations}
In order for this to be a solution, we need it to be equal to 
\begin{equation}
(y^2 - \mathcal{E})A(y^2 - b^2)e^{-\frac{1}{2}y^2}
\end{equation}
for some constants $\mathcal{E}$, $A$, and $b$. We see that both sides are again proportional to $A$, as we should expect by now, since $A$ will again be the normalisation constant, and that both sides are proportional to $e^{-\frac{1}{2}y^2}$. Therefore, cancelling these terms on both sides, we need to try and see if we can solve the equation
\begin{equation}
(2+b^2) -(5+b^2)y^2 + y^4 = (y^2 - \mathcal{E})(y^2 - b^2)
\end{equation}
Expanding out the right-hand side, we have
\begin{equation}
(2+b^2) -(5+b^2)y^2 + y^4 = y^4 - (\mathcal{E} + b^2)y^2 + \mathcal{E}b^2
\end{equation}
Since we want this equation to hold **for all values of $y$**, we can equate the coefficients of the different powers of $y$. We therefore obtain the equations
\begin{subequations}
\begin{align}
2+ b^2 &= \mathcal{E}b^2, \\
5 + b^2 &= \mathcal{E} + b^2,
\end{align}
\end{subequations}
The second equation shows immediately that 
$$\mathcal{E} = 5,$$ and substituting this into the first, that
$$ b^2 = \frac{1}{2}. $$

Therefore, once again we have found a solution to the time-independent Schr\"odinger equation. This solution has 2 nodes, and thus corresponds to the second excited state (third energy level). After normalising the wavefunction, and writing it in terms of the physical co-ordinate, the second excited state is 
\begin{boxedeq}
\begin{equation}
u_2(x) = \left(\frac{2}{a\sqrt{\pi}}\right)^{1/2}\left(\frac{x^2}{a^2} - \frac{1}{2}\right)e^{-x^2/2a^2},
\end{equation}
\end{boxedeq}
corresponding to energy
\begin{boxedeq}
\begin{equation}
E_2 = \frac{5}{2}\hbar \omega.
\end{equation}
\end{boxedeq}
The procedure for the second excited state was a little more involved than for the first excited state, since now we had an unknown parameter $b$ that we needed to find. Nevertheless, we saw that we were able to do so, and find a solution. 

As a final exercise, in Problem Sheet 3 you will find $u_3(x)$, the third excited state, which will follow the same procedure as for the second excited state. In particular, you will show that a sensible guess is $v(y) = Ay(y-c)(y+c)$, which is an odd function with 3 nodes. You will solve for $c$, to obtain the third excited state, and show that the corresponding energy eigenvalue is $E_3 = \frac{7}{2} \hbar \omega$. 

## General energy eigenstates and eigenvalues
The above construction can be carried on indefinitely, and in fact leads to **all energy eigenstates of the quantum harmonic oscillator**. The wavefunctions of all energy eigenstates take the form
\begin{boxedeq}
\begin{equation}
u_n(x) = A_n v_n\left(\tfrac{x}{a}\right)e^{-x^2/2a^2},
\end{equation}
\end{boxedeq}
where $A_n$ is the normalisation constant, which ensures that the total probability density to find the particle somewhere is one, and $v_n(y)$ is a **degree-$n$ polynomial** which are alternatively **even** and **odd**, meaning that they only contain even powers of $y$ or odd powers of $y$. 

These polynomials are known as the **Hermite polynomials} and were in fact discovered long before quantum mechanics. You can find a complete treatment of Hermite polynomials in almost all textbooks on quantum mechanics, and in almost all textbooks on mathematical methods for physicists. As far as this course is concerned, it is useful for you to know that these polynomials have a name, so that you recognise them when you see them in other contexts, however we will not delve further into their properties. 

In Table \ref{t:Hermite} we list the first few Hermite polynomials for reference, and the associated wavefunctions.

\begin{table}[ht]
	\centering
	% To place a caption above a table
\begin{tabular}[t]{ccc}
	\hline
	$n$ &Hermite polynomial $v_n(y)$ &  Wavefunction $u_n(x)$ \\
	\hline
	0&1&$\left(\frac{1}{a\sqrt{\pi}}\right)^{1/2} e^{-x^2/2a^2}$\\
	1&$2y$&$\left(\frac{2}{a\sqrt{\pi}}\right)^{1/2} \left(\frac{x}{a}\right)e^{-x^2/2a^2}$\\
	2&$4y^2 - 2$&$\left(\frac{2}{a\sqrt{\pi}}\right)^{1/2}\left(\frac{x^2}{a^2} - \frac{1}{2}\right)e^{-x^2/2a^2}$\\
	3& $8y^3 - 12y$ & $2\left(\frac{1}{3a\sqrt{\pi}}\right)^{1/2} \frac{x}{a}\left(\frac{x^2}{a^2}-\frac{3}{2}\right)e^{-x^2/2a^2}$\\
	\hline
	\end{tabular}
	% Or to place a caption below a table
	\caption{**Hermite polynomials and normalised energy eigenstates of the harmonic oscillator}. We give here the first 4 Hermite polynomials, and the corresponding normalised wavefunctions of the energy eigenstates of the quantum harmonic oscillator.}
	\label{t:Hermite}
\end{table}%

The wavefunctions and corresponding probability densities of the first few energy eigenstates are plotted in Fig.~\ref{f:wf ho} and Fig.~\ref{f:pd ho} respectively.

\begin{figure}[h!]
	\centering
	\includegraphics{eigenstates-ho.pdf}
	\caption{\label{f:wf ho}**Wavefunctions of energy eigenstates of the harmonic oscillator.** The first six energy eigenstates $u_n(x)$ of the harmonic oscillator. The two markers on the $x$ axis show where tunnelling starts: he classically-allowed region is between the markers, where the total energy of the particle is more than the potential.}
\end{figure}

\begin{figure}[h!]
	\centering
	\includegraphics{probs-ho.pdf}
	\caption{\label{f:pd ho}**Probability densities of the eigenstates of the harmonic oscillator.** The probability densities for finding the particle at $x$ for the first six energy eigenstates of the harmonic oscillator. The markers again indicate where tunnelling starts.}
\end{figure}

The energy levels of the quantum harmonic oscillator are 
\begin{boxedeq}
\begin{equation}
E_n = \left(n + \tfrac{1}{2}\right)\hbar \omega.
\end{equation}
\end{boxedeq}
That is, the ground state energy is $E_0 = \tfrac{1}{2}\hbar \omega$, and this is the **zero-point energy**, which we encountered for the infinite square well in Sec.~\ref{s:general properties}. As in all cases, it arises due to the uncertainty principle, since the particle cannot simultaneously be stationary and at the bottom of the well.

Interestingly, we see that the energy levels of the quantum harmonic oscillator are **much denser** than the energy levels of the infinite and finite square well. For the infinite square well we saw that the energy levels are proportional to $n^2$, and for the finite square well we saw that this behaviour is basically unchanged towards the bottom of the well. This means that **the spacing between energy levels increases with energy**.


For the harmonic oscillator, the energies are proportional to $n$, and hence **the spacing between the levels is constant**, and always equal to $\hbar \omega$. 