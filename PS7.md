---
title: "Problem Sheet: Week 7"
short_title: "Prob. Sheet: Week 7"
numbering:
  enumerator: 7.%s
  heading_1: false
  heading_2: false
  heading_3: false
  heading_4: false
---
	
## Probability Density & Normalisation

1. Consider the following wavefunction,
   \begin{equation*} 
  \Psi(x,t_0) = \begin{cases} \frac{\sqrt{15}}{4}(1-x^2)&  \text{if } |x| \leq 1, \\ 0  &\text{otherwise. } \end{cases} 
  \end{equation*}
   1. Show that this is a normalised wavefunction. 
   1.  Sketch the wavefunction $\Psi(x,t_0)$ and the probability density $P(x,t_0)$.
   1. What is the probability amplitude at $x = \frac{1}{2}$. 
   1. Where is the probability density to find the particle largest? What is the probability density there? 

1. Consider the following wavefunction,
   \begin{equation*}
   \Psi(x,t_0) = \begin{cases}
   A\left(1+\frac{x}{2}\right)&  \text{if } -2 \leq x \leq 0, \\
   A\left(1-\frac{x}{2}\right)&  \text{if } 0 \leq x \leq 2, \\
   0  &\text{otherwise, }
   \end{cases}
   \end{equation*}
   where $A$ is a real constant. 
   1. Normalise the wavefunction. That is, find the value of $A$ such that the wavefunction is normalised. 
   1. Sketch the wavefunction $\Psi(x,t_0)$, and the probability density $P(x,t_0)$. 
   1. What is the probability to find the particle between $x = 1$ and $x = 2$. 

1. Consider the following wavefunction,
   \begin{equation*}
   \Psi(x,t_0) = \begin{cases}
   \frac{1}{\sqrt{a}}e^{2\pi x i /a} &  \text{if } 0 \leq x \leq a, \\
   0  &\text{otherwise. }
   \end{cases}
   \end{equation*}
   1. Sketch the wavefunction $\Psi(x,t_0)$, taking care to plot both the real and imaginary parts. 
   1. Show that this is a normalised wavefunction. 
   1. Sketch the probability density $P(x,t_0)$. 
   1. What is the expectation value of the position of the particle? 
   ```{note} Hint
   :class: dropdown
   Recall from Mathematical Physics 202 that for a probability density $P(x,t_0)$, the expectation (or expected) value is defined by
   $$  \langle x \rangle = \int_{-\infty}^{\infty} x P(x,t_0) dx,$$
   which is the average, or mean, position where the particle will be found.
   ```
## Probability current

4. Consider the wavefunction
   $$ \Psi(x,t_0) = \frac{1}{\pi^{1/4}} e^{-x^2/2}e^{ik_0 x},$$
   where $k_0$ is an arbitrary real constant. 
   1. Find the probability current $j(x,t_0)$ associated to this wavefunction.
   1. In most contexts where the continuity equation holds, the current can be viewed as being a density times  a velocity (for example in fluid dynamics, electromagnetism, thermodynamics, etc). \
   \
   We can take this view here and write $j(x,t_0) = u(x,t_0) P(x,t_0)$, where $u(x,t_0)$ is a **probability velocity**. What is the probability velocity for the above wavefunction?

4. Assume that we have a wavefunction $\Psi(x,t_0)$ with associated   probability current $j(x,t_0)$. Consider now a second wavefunction $\Psi'(x,t_0)$, related to $\Psi(x,t_0)$ via
$$ \Psi'(x,t_0) = \Psi(x,t_0)e^{ik_0 x}, $$
where $k_0$ is an arbitrary real constant.
   1. Find the probability density $P'(x,t_0)$ associated to $\Psi'(x,t_0)$. How does it relate to the probability density $P(x,t_0)$ associated to $\Psi(x,t_0)$?
   1. Show that the probability current $j'(x,t_0)$ associated to $\Psi'(x,t_0)$ is
	$$ j'(x,t_0) = j(x,t_0) + \frac{\hbar k_0}{M} P(x,t_0)$$
	where $P(x,t_0) = |\Psi(x,t_0)|^2$. 
   1. By considering how the probability velocity of $\Psi(x,t_0)$ and $\Psi'(x,t_0)$ are related, explain what changes about a particle when we multiply its wavefunction by $e^{ik_0x}$. 

## Factorising functions
6. Which of the following functions $f(x,y)$ factorise into $f(x,y) = g(x)h(y)$?
   1. $f(x,y) = xy^2$
   1. $f(x,y) = x^2 + 2y$
   1. $f(x,y) = xy^2 + 1$
   1. $f(x,y) = e^{x+y}$
   1. $f(x,y) = x^2\cos(y) + 2xe^{iy} + 2xe^{-iy}$
   1. $f(x,y) = \log(xy)$
