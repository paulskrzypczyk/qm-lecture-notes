---
title: "Problem Sheet: Week 9"
short_title: "Prob. Sheet: Week 9"
numbering:
  enumerator: 9.%s
  heading_1: false
  heading_2: false
  heading_3: false
  heading_4: false
---

## Operators

1. Consider a particle whose wavefunction is the Gaussian wavepacket from [](#example-gaussian-1) in the lecture notes, 
    \begin{equation*} \Psi(x) = \left(\frac{1}{a\sqrt{2\pi}}\right)^{1/2} e^{-x^2/4a^2}e^{ip_0 x/\hbar}, 
    \end{equation*} 
    where $a$ and $p_0$ are arbitrary real constants.  
    1. Write down the quantum mechanical prediction for the average momentum, $\langle p \rangle$, in terms of the momentum operator $\hat{P}$. 
    1. Evaluate this expression for the Gaussian wavepacket $\Psi(x)$. 
        ```{note} Hint
        You may want to use the following results for Gaussian integrals in order to help carry out this calculation:
        \begin{equation*}
	        \infint e^{-b y^2}dy &= \sqrt{\frac{\pi}{b}}, & \infint y e^{-b y^2}dy &= 0.
	    \end{equation*}
        ```

    In Example 5.1 we showed that the associated momentum wavefunction of the particle is
    \begin{equation*} 	
    \tilde{\Psi}(p) = \left(\frac{2a^2}{\pi \hbar^2}\right)^{1/4} e^{-a^2(p-p_0)^2/\hbar^2},
    \end{equation*}


	3. Write down the definition of the average momentum $\langle p \rangle$ in terms of $P(p)$, the probability density for the particle to have momentum $p$. 
	4. Evaluate this expression for the probability density $P(p) = |\tilde{\Psi}(p)|^2$ associated to the Gaussian wavepacket.  
        ```{note} Hint
		You may again want to make use of the above results for Gaussian integrals.
        ```

	5. Do your answers to part 2. and 4. agree with each other?
	

2. Consider a particle whose wavefunction is the Gaussian wavepacket $\Psi(x)$ from Problem 9.1. 
    1. Calculate the action of the momentum operator followed by the position operator acting on this wavefunction, that is, calculate $\hat{X}\hat{P}\Psi(x)$. 

    1. Calculate the action of the position operator followed by the momentum operator acting on this wavefunction, that is, calculate $\hat{P}\hat{X}\Psi(x)$. 

	1. Write down the difference between applying the operators in the two different orders, that is, write down $\hat{X}\hat{P}\Psi(x) - \hat{P}\hat{X}\Psi(x)$.

	1. Does your result to part (c) confirm the **canonical commutation relation**?

## The Uncertainty Principle

3. Consider a particle with spatial wavefunction $\Psi(x,t_0)$ and momentum wavefunction $\tilde{\Psi}(p,t_0)$ from Problem 8.3:
	\begin{equation*}
		\Psi(x,t_0) &= \begin{cases}
			\frac{\sqrt{15}}{4}(1-x^2)&  \text{if } |x| \leq 1, \\
			0  &\text{otherwise, }
		\end{cases}\\ \tilde{\Psi}(p,t_0) &= \sqrt{\frac{15 \hbar^3}{2\pi}}\left(\frac{\hbar \sin (p/\hbar)}{p^3} - \frac{\cos(p/\hbar)}{p^2}\right).
	\end{equation*}
	1. Show that both $\Psi(x,t_0)$ and $\tilde{\Psi}(p,t_0)$ are even functions. 
		```{note} Hint
            Recall that an even function is one such that $f(-y) = f(y)$.
        ```
	1. Explain why this implies that both the average position and average momentum are zero,
		\begin{equation*}
		\langle x \rangle &= 0,& \langle p \rangle &= 0.
		\end{equation*}
	1. Calculate the average square position of the particle, $\langle x^2 \rangle$, and the standard deviation, $\Delta x~=~\sqrt{\langle x^2\rangle - \langle x \rangle^2}$.


    It can be shown that the average square momentum of the particle is 
    \begin{equation*} 
        \langle p^2 \rangle = \frac{5\hbar^2}{2}.
    \end{equation*}
	4. Calculate the standard deviation in the momentum of the particle, $\Delta p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2}$.

	5. Show that the particle satisfies the **Uncertainty Principle**. How close is the particle to saturating the bound of the uncertainty principle?