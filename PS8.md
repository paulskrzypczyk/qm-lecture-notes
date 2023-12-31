---
title: "Problem Sheet: Week 8"
short_title: "Prob. Sheet: Week 8"
numbering:
  enumerator: 8.%s
  heading_1: false
  heading_2: false
  heading_3: false
  heading_4: false
---
	
## Wavepackets

1. In this question we will consider a wavepacket of a free particle. Assume the wavepacket has the form [](#e-wavepacket) from the notes, namely
	\begin{equation*} 
        \Psi(x,t) = \frac{1}{\sqrt{2\pi}}\infint c(k) e^{-i\hbar k^2 t/2M} e^{ikx} dk, 
    \end{equation*}
	where $c(k)$ is given by
	\begin{equation*}
     c(k) = \begin{cases}
	a&  \text{if } |k| \leq 1, \\
	0  &\text{otherwise. }
	\end{cases}
    \end{equation*}
	and where $a$ is a positive constant.
		
	1. Sketch the function $c(k)$. 
	1. Find $a$ such that $c(k)$ is normalised.
	1. By evaluating the above integral expression, show that the wavefunction at $t = 0$ is 
		\begin{equation*} \Psi(x,0) = \frac{1}{\sqrt{\pi}} \frac{\sin x}{x}. \end{equation*}
	1. Sketch the wavefunction $\Psi(x,0)$ and the probability density $P(x,0)$.
		
1. In this question we will derive the result [](#e-gaussian-example) from [](#example-gaussian-1) in the notes (Gaussian wavepackets). Assume again a wavepacket of the form [](#e-wavepacket) (given above), with $c(k)$ given by the Gaussian function 
	\begin{equation*} c(k) =  \left(\frac{2 a^2}{\pi}\right)^{1/4}e^{-a^2(k-k_0)^2},\end{equation*}
	where $a$ and $k_0$ are arbitrary real constants. 
    1.  By evaluating the above integral expression for $\Psi(x,t)$ when $t = 0$, show that 
	\begin{equation*}\Psi(x,0) = \left(\frac{1}{a\sqrt{2\pi}}\right)^{1/2} e^{-x^2/4a^2}e^{ik_0 x}.\end{equation*} 
	```{note} Hint
    You may use the following result for Gaussian integrals in order to carry out this calculation:
	
	\begin{equation*} \infint e^{-\alpha y^2 + \beta y}dy = \sqrt{\frac{\pi}{\alpha}}e^{\beta^2/4\alpha}\end{equation*}
	where $\alpha$ and $\beta$ are complex numbers, and the real part of $\alpha$ is positive, $\mathrm{Re}(\alpha) > 0$. 
    ```
    2.  Write down the probability density $P(x,0)$ for this wavefunction. 
    1.  Make a sketch of the probability density and use it (without calculation) to find the expectation value of the position of the particle $\langle x \rangle$.
    1.  Calculate the standard deviation of the probability density $P(x,0)$. That is, calculate $\Delta x = \sqrt{\langle x^2\rangle - \langle{x}\rangle^2}$, where 
$$  \langle x^2 \rangle = \int_{-\infty}^{\infty} x^2 P(x,0) dx.$$
    ```{note} Hint 
    You may use the following result for Gaussian integrals in order to carry out this calculation:
	
	\begin{equation*} \infint y^2 e^{-b y^2}dy = \frac{1}{2}\sqrt{\frac{\pi}{b^3}},\end{equation*}
	where $b$ is real and positive. 
    ```

## Momentum

3. Consider a particle with the same wavefunction at time $t_0$ as Problem 7.1 of [](PS7.md),
	\begin{equation*}
		\Psi(x,t_0) = \begin{cases}
			\frac{\sqrt{15}}{4}(1-x^2)&  \text{if } |x| \leq 1, \\
			0  &\text{otherwise. }
		\end{cases}
	\end{equation*}
	1. Show that the momentum wavefunction of the particle at time $t_0$ is 
		\begin{equation*} \tilde{\Psi}(p,t_0) = \sqrt{\frac{15 \hbar^3}{2\pi}}\left(\frac{\hbar \sin (p/\hbar)}{p^3} - \frac{\cos(p/\hbar)}{p^2}\right).\end{equation*}
		```{note} Hint 
        :class: dropdown
        You will need to integrate by parts twice in order to obtain this result.
        ```
	1. Sketch the wavefunction $\tilde{\Psi}(p,t_0)$ and the probability density $P(p,t_0)$. 
		```{tip}
        You may want to use a computer to help in this (i.e. Python, Matlab, Mathematica, desmos, etc.)
        ```
	1. What is the probability amplitude and probability density for the particle to have momentum $p = \pi \hbar$?
		

1. Consider two particles,  the first of which has wavefunction $\Psi(x,t_0)$, and the second of which has wavefunction $\Psi'(x,t_0)$, related to $\Psi(x,t_0)$ via
	\begin{equation*} \Psi'(x,t_0) = \Psi(x,t_0)e^{ik_0x}, \end{equation*}
	where $k_0$ is a real constant. This is the same situation considered in Problem 7.5.
	
	The momentum wavefunction of the first particle is 
	\begin{equation*} \tilde{\Psi}(p,t_0) = \frac{1}{\sqrt{2 \pi \hbar}}\infint \Psi(x,t_0) e^{-ipx/\hbar} dx. \end{equation*}
	1. Write down the momentum wavefunction of the second particle, i.e.~the momentum wavefunction associated to $\Psi'(x,t_0)$. 
	1. Show that the momentum wavefunctions of the two particles are related via
		\begin{equation*} \tilde{\Psi}'(p,t_0) = \tilde{\Psi}(p-\hbar k_0,t_0).\end{equation*}
		```{note} Hint 
        :class: dropdown
        It may be useful to introduce the new variable $p' = p-\hbar k_0$ in your answer to part 1. 
        ```
	1. In a single plot, make representative sketches of $|\tilde\Psi(p,t_0)|^2$ and $|\tilde\Psi'(p,t_0)|^2$.
	1. Use your answers to part 2 and 3 to explain how the state of a particle changes when we multiply the spatial wavefunction by $e^{ik_0x}$. How does this relate to your answer to Problem 7.5.3. 
	
1. Consider a particle with the following momentum wavefunction at time $t_0$,
	\begin{equation*}
		\tilde{\Psi}(p,t_0) = \begin{cases}
			\frac{1}{\sqrt{p_b - p_a}} &  \text{if } p_a \leq p \leq p_b, \\
			0  &\text{otherwise. }
		\end{cases}
	\end{equation*}
	where $p_a < p_b$. This wavefunction has the form of a ``box'', of width $\Delta = p_b - p_a$ and centre at $p_c = (p_a + p_b)/2$. 
	1. Show that the spatial wavefunction $\Psi(x,t_0)$ of the particle at time $t_0$ is 
    \begin{equation*} \Psi(x,t_0) = \sqrt{\frac{\hbar}{2\pi (p_b - p_a)}} \frac{(e^{ip_bx/\hbar} - e^{ip_ax/\hbar})}{ix}.\end{equation*}	
    2. By expressing $p_a$ and $p_b$ in terms of the centre $p_c$ and width $\Delta$, show that the wavefunction can alternatively be written as
	\begin{equation*} \Psi(x,t_0) = \sqrt{\frac{\Delta}{2\pi\hbar}} e^{ip_c x/\hbar}\mathrm{sinc}(x\Delta/2\hbar),\end{equation*} 
    where $\mathrm{sinc}(y) = \sin(y)/y$.

	3. *(Tricky)* Consider now a particle with a spatial wavefunction 
	\begin{equation*} \Psi'(x,t_0) = \sqrt{\frac{\Delta}{2\pi\hbar}}\mathrm{sinc}(x\Delta /2\hbar).\end{equation*}
    
    Use Problem 8.4 to write down (i.e. without calculating explicitly) the momentum wavefunction $\tilde{\Psi}'(p,t_0)$ of the particle at $t_0$. What is the centre and width of this wavefunction?