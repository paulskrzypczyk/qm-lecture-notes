%% -- complex-circ
%{
omega = 5;

xt = @(t) t;
yt = @(t) cos(omega*t);
zt = @(t) -sin(omega*t);

zerot = @(t) 0;

figure
hold

fplot3(xt,yt,zt,[0,2*pi])

%}

%% -- real and imag part of circ
%{
figure 
hold

fplot(xt,yt,[0,2*pi])
fplot(xt,zt,[0,2*pi])
%}

%% -- Gaussian plot c(k)
%{
figure
hold

fplot(@(k) exp(-k^2),[-5,5])
%}

%% -- gaussian wavefunction (3D)
%{
k = 10;

xv = @(x) x;
yv = @(x) cos(k*x)*exp(-x^2);
zv = @(x) -sin(k*x)*exp(-x^2);

figure
hold

fplot3(xv,yv,zv,[-3,3])
%}

%% -- gaussian wavefunction (2D)
%{
k = 10;

xv = @(x) x;
yv = @(x) cos(k*x)*exp(-x^2);
zv = @(x) -sin(k*x)*exp(-x^2);

figure
hold

fplot(xv,yv,[-3,3])
fplot(xv,zv,[-3,3])

%}

%% -- gaussian wavepacket (2D, abs, t> 0);
%{
k = 10;
a = 1/2;
gam = 1/50;

figure
hold

for t = [0 100 200 300]

sigt = 1/2*sqrt(1+gam^2*t^2);
xavt = gam*k*t/2

psiv = @(x) (1/sqrt(2*pi)/a/(1+1i*gam*t))^(1/2)*exp(-(x-k*gam*t/2).^2/4/a^2/(1+1i*gam*t))...
    .*exp(1i*k*(x-gam*k*t/4));
xv = @(x) x;
yv = @(x) real(psiv(x));
zv = @(x) imag(psiv(x));

psi2v = @(x) psiv(x).*psiv(x)';


fplot(xv,psi2v,[xavt-5*sigt,xavt+5*sigt])

end

%}

%% -- gaussian wavepacket (3D, t> 0);
%{
k = 10;
a = 1/2;
gam = 1/50;

figure
hold

for t = [0 100]

sigt = 1/2*sqrt(1+gam^2*t^2);
xavt = gam*k*t/2

psiv = @(x) (1/sqrt(2*pi)/a/(1+1i*gam*t))^(1/2)*exp(-(x-k*gam*t/2).^2/4/a^2/(1+1i*gam*t))...
    .*exp(1i*k*(x-gam*k*t/4));
xv = @(x) x;
yv = @(x) real(psiv(x));
zv = @(x) imag(psiv(x));

psi2v = @(x) psiv(x).*psiv(x)';

fplot(xv,yv,[xavt-5*sigt,xavt+5*sigt])
fplot(xv,zv,[xavt-5*sigt,xavt+5*sigt])

end
%}
%% -- gaussian wavepacket (3D, t> 0);
%{
k = 10;
a = 1/2;
gam = 1/50;

figure
hold

for t = [0 100]

sigt = 1/2*sqrt(1+gam^2*t^2);
xavt = gam*k*t/2

psiv = @(x) (1/sqrt(2*pi)/a/(1+1i*gam*t))^(1/2)*exp(-(x-k*gam*t/2).^2/4/a^2/(1+1i*gam*t))...
    .*exp(1i*k*(x-gam*k*t/4));
xv = @(x) x;
yv = @(x) real(psiv(x));
zv = @(x) imag(psiv(x));

psi2v = @(x) psiv(x).*psiv(x)';

fplot3(xv,yv,zv,[xavt-5*sigt,xavt+5*sigt])


end
%}

%% -- energy levels infinite square well
%{
n = 5; % number of levels to plot

figure 
hold

for i = 0:n
    
xv = @(x) x;
yv = @(x) i^2;

fplot(xv,yv,[0,10])

end
%}

%% --- energy eigenstates infinite square well
%{
N = 6;

figure
hold

for n = 1:N
    
    xv = @(x) x;
    psin = @(x) sin(n*pi*x/2);
    zv = @(x) 0;
    
    fplot(xv,psin,[0,2])
    fplot(xv,zv,[-1,0])
    fplot(xv,zv,[2,3])
    
end
%}
%% --- probabilities infinite square well
%{
N = 6;

figure
hold

for n = 1:N
    
    xv = @(x) x;
    psin = @(x) sin(n*pi*x/2)^2;
    zv = @(x) 0;
    
    fplot(xv,psin,[0,2])
    fplot(xv,zv,[-1,0])
    fplot(xv,zv,[2,3])
    
end
%}
%% -- t = 0, superposition infinite sq well
%{
xv = @(x) x;
psis = @(x) (sin(1*pi*x/2) + sin(2*pi*x/2))/sqrt(2);
zv = @(x) 0;

figure
hold

fplot(xv,psis,[0,2])
fplot(xv,zv,[-1,0])
fplot(xv,zv,[2,3])
%}
%% -- t, superposition infinite sq well
%{
for t = 0:1/8:1
    
xv = @(x) x;
psis = @(x) 1/2*(sin(1*pi*x/2)^2 + sin(2*pi*x/2)^2 ...
    + 2*sin(1*pi*x/2)*sin(2*pi*x/2)*cos(2*pi*t));
zv = @(x) 0;

figure
hold

fplot(xv,psis,[0,2])
fplot(xv,zv,[-1,0])
fplot(xv,zv,[2,3])

end
%}

%% -- finite square well, graphical solution
%{
k0 = 18;

kv = @(k) k;

lhs = @(k) tan(k);
rhs = @(k) 2*k*sqrt(k0^2 - k^2)/(2*k^2-k0^2);

figure
hold
fplot(kv,lhs,[0,k0])
fplot(kv,rhs,[0,k0])
%}

%% -- finite square well, energy levels
%{
k0 = 18;

kv = @(k) k;
difflhsrhs = @(k) 2*k*sqrt(k0^2 - k^2)/(2*k^2-k0^2) - tan(k);

%fplot(kv,difflhsrhs,[0,18])

knv = zeros(1,6);
knv(1) = fzero(difflhsrhs,[2,4]);
knv(2) = fzero(difflhsrhs,[5,6]);
knv(3) = fzero(difflhsrhs,[8,9]);
knv(4) = fzero(difflhsrhs,[11,12]);
knv(5) = fzero(difflhsrhs,[13,14]);
knv(6) = fzero(difflhsrhs,[16,17]);
knv

k0 = 18;

kv = @(k) k;

lhs = @(k) tan(k);
rhs = @(k) 2*k*sqrt(k0^2 - k^2)/(2*k^2-k0^2);

figure
hold
fplot(kv,lhs,[0,k0])
fplot(kv,rhs,[0,k0])

for i = 1:6
    kv = @(k) knv(i);
    yv = @(k) k;
    
    fplot(kv,yv,[-5,20])
end



figure 
hold

for i = 0:6
    
xv = @(x) x;
yv = @(x) (i*pi)^2;

fplot(xv,yv,[0,10],'r')

end


for i = 1:6
    
yv = @(x) knv(i)^2;

fplot(xv,yv,[0,10],'b')

end

yv = @(x) k0^2;

fplot(xv,yv,[0,10],'g')
%}

%% -- energy eigenstates finite square well
%{
k0 = 18;

kv = @(k) k;
difflhsrhs = @(k) 2*k*sqrt(k0^2 - k^2)/(2*k^2-k0^2) - tan(k);

knv = zeros(1,6);
knv(1) = fzero(difflhsrhs,[2,4]);
knv(2) = fzero(difflhsrhs,[5,6]);
knv(3) = fzero(difflhsrhs,[8,9]);
knv(4) = fzero(difflhsrhs,[11,12]);
knv(5) = fzero(difflhsrhs,[13,14]);
knv(6) = fzero(difflhsrhs,[16,17]);

    figure
    hold

for n = 1:6

    k = knv(n);
    xv = @(x) x;
    psiI = @(x) exp(sqrt(k0^2-k^2)*x);
    psiII = @(x) cos(k*x) + sqrt(k0^2/k^2-1)*sin(k*x);
    psiIII = @(x) (cos(k) + sqrt(k0^2/k^2-1)*sin(k))*exp(sqrt(k0^2-k^2)*(1-x));
    
    m = 3000;
    l = -1;
    u = 2;
    xi = linspace(l,u,m);
    dx = (u-l)/m
    
    sum = 0;
    cnt = 0;
    for i = 1:m
        x = xi(i);
        if x < 0
            sum = sum + psiI(x)^2;
            cnt = cnt + 1;
        elseif 0 <= x & x <= 1
            sum = sum + psiII(x)^2;
            cnt = cnt + 1;
        elseif x> 1
            sum = sum+psiIII(x)^2;
            cnt = cnt + 1;
        end
    end
    N = sqrt(sum*dx)
    
    psiI = @(x) exp(sqrt(k0^2-k^2)*x)/N;
    psiII = @(x) (cos(k*x) + sqrt(k0^2/k^2-1)*sin(k*x))/N;
    psiIII = @(x) (cos(k) + sqrt(k0^2/k^2-1)*sin(k))*exp(sqrt(k0^2-k^2)*(1-x))/N;
    
    sum = 0;
    for i = 1:m
        x = xi(i);
        if x < 0
            sum = sum + psiI(x)^2;
            cnt = cnt + 1;
        elseif 0 <= x <= 1
            sum = sum + psiII(x)^2;
            cnt = cnt + 1;
        elseif x> 1
            sum = sum+psiIII(x)^2;
            cnt = cnt + 1;
        end
    end
    M = sqrt(sum*dx)
    
    fplot(xv,psiI,[-1/2,0]);
    fplot(xv,psiII,[0,1]);
    fplot(xv,psiIII,[1,3/2]);
    
end

psin = @(x) sin(pi*x);
sum = 0;
xi = linspace(0,1,m);
dx = 1/m;

for i = 1:m
    x = xi(i);
    sum = sum + psin(x)^2;
end

N = sqrt(sum*dx)

psin = @(x) sin(pi*x)/N;

fplot(xv,psin,[0,1])

%}

%% -- probability densities finite square well
%{
k0 = 18;

kv = @(k) k;
difflhsrhs = @(k) 2*k*sqrt(k0^2 - k^2)/(2*k^2-k0^2) - tan(k);

knv = zeros(1,6);
knv(1) = fzero(difflhsrhs,[2,4]);
knv(2) = fzero(difflhsrhs,[5,6]);
knv(3) = fzero(difflhsrhs,[8,9]);
knv(4) = fzero(difflhsrhs,[11,12]);
knv(5) = fzero(difflhsrhs,[13,14]);
knv(6) = fzero(difflhsrhs,[16,17]);

    figure
    hold

for n = 1:6

    k = knv(n);
    xv = @(x) x;
    psiI = @(x) exp(sqrt(k0^2-k^2)*x);
    psiII = @(x) cos(k*x) + sqrt(k0^2/k^2-1)*sin(k*x);
    psiIII = @(x) (cos(k) + sqrt(k0^2/k^2-1)*sin(k))*exp(sqrt(k0^2-k^2)*(1-x));
    
    m = 3000;
    l = -1;
    u = 2;
    xi = linspace(l,u,m);
    dx = (u-l)/m
    
    sum = 0;
    cnt = 0;
    for i = 1:m
        x = xi(i);
        if x < 0
            sum = sum + psiI(x)^2;
            cnt = cnt + 1;
        elseif 0 <= x & x <= 1
            sum = sum + psiII(x)^2;
            cnt = cnt + 1;
        elseif x> 1
            sum = sum+psiIII(x)^2;
            cnt = cnt + 1;
        end
    end
    N = sqrt(sum*dx)
    
    psiI = @(x) exp(sqrt(k0^2-k^2)*x)/N;
    psiII = @(x) (cos(k*x) + sqrt(k0^2/k^2-1)*sin(k*x))/N;
    psiIII = @(x) (cos(k) + sqrt(k0^2/k^2-1)*sin(k))*exp(sqrt(k0^2-k^2)*(1-x))/N;
    
    sum = 0;
    for i = 1:m
        x = xi(i);
        if x < 0
            sum = sum + psiI(x)^2;
            cnt = cnt + 1;
        elseif 0 <= x <= 1
            sum = sum + psiII(x)^2;
            cnt = cnt + 1;
        elseif x> 1
            sum = sum+psiIII(x)^2;
            cnt = cnt + 1;
        end
    end
    M = sqrt(sum*dx)
    
    fplot(xv,@(x) psiI(x).^2,[-1/2,0]);
    fplot(xv,@(x) psiII(x).^2,[0,1]);
    fplot(xv,@(x) psiIII(x).^2,[1,3/2]);
    
end

psin = @(x) sin(pi*x);
sum = 0;
xi = linspace(0,1,m);
dx = 1/m;

for i = 1:m
    x = xi(i);
    sum = sum + psin(x)^2;
end

N = sqrt(sum*dx)

psin = @(x) sin(pi*x)/N;

fplot(xv,@(x) psin(x).^2,[0,1])

%}

%% -- harmonic oscillator potential
%{
xv = @(x) x;
V = @(x) x^2;

fplot(xv,V,[-2,2])

%}

%% -- harmonic oscillator wavefunctions
%{
herm = [1 0 0 0 0 0; ...
        0 2 0 0 0 0; ...
       -2 0 4 0 0 0; ...
       0 -12 0 8 0 0; ...
       12 0 -48 0 16 0; ...
       0 120 0 -160 0 32];
   
xv = @(x) x;

figure
hold

for n = 0:5
    
    unv = @(x) (1/pi^(1/4)*1/sqrt((2^n)*factorial(n))*herm(n+1,:)*[1;x;x^2;x^3;x^4;x^5]*exp(-x^2/2)) 
    fplot(xv,unv,[-5,5])
    
    xcp = @(x) sqrt(2*n+1);
    xcm = @(x) -sqrt(2*n+1);
    
    fplot(xcp,xv,[-1,1])
    fplot(xcm,xv,[-1,1])
    
end

a = 4;
psin = @(x) (sqrt(2/a)*sin(pi*(x+a/2)/a));

fplot(xv,psin,[-a/2,a/2])
%}
%% -- harmonic oscillator wavefunctions
%{
herm = [1 0 0 0 0 0; ...
        0 2 0 0 0 0; ...
       -2 0 4 0 0 0; ...
       0 -12 0 8 0 0; ...
       12 0 -48 0 16 0; ...
       0 120 0 -160 0 32];
   
xv = @(x) x;

figure
hold

for n = 0:5
    
    unv = @(x) (1/pi^(1/4)*1/sqrt((2^n)*factorial(n))*herm(n+1,:)*[1;x;x^2;x^3;x^4;x^5]*exp(-x^2/2))^2 
    fplot(xv,unv,[-5,5])
    
    xcp = @(x) sqrt(2*n+1);
    xcm = @(x) -sqrt(2*n+1);
    
    fplot(xcp,xv,[-1,1])
    fplot(xcm,xv,[-1,1])
    
end

a = 4;
psin = @(x) (sqrt(2/a)*sin(pi*(x+a/2)/a))^2;

fplot(xv,psin,[-a/2,a/2])
%}

%% -- potential step scattering - wavefunctions
%{
tic

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-10).^2).*exp(10*1i*k);
k0 = 8.5;

psinegt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + (k-sqrt(k.^2-k0^2))./(k+sqrt(k.^2-k0^2)).*exp(-1i*k*x));
psipost = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(2*k./(k + sqrt(k.^2 - k0^2)).*exp(1i*sqrt(k.^2 - k0^2)*x));

v = VideoWriter('test-potential-step.avi','Uncompressed AVI');

open(v);

x = linspace(-20,20,40/0.005);

fig1 = figure;
hold

ax = gca;

fig1.Position = [0 0 16/9*960 960];
ax.Position = [0.05 0.05 0.9 0.9];

V = 0.4*[x>=0];

for t = 0:2.5/150:2.5;
    
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psinegt(k,x(i),t),8,12);
        elseif x(i) >= 0
            psixt(i) = integral(@(k) psipost(k,x(i),t),8,12);
        end
    end

    plot(x,real(psixt))
    plot(x,imag(psixt))
    plot(x,V)

    ax.XLim = [-20 20];
    ax.YLim = [-0.6,0.6];

   frame = getframe(fig1);
   writeVideo(v,frame);
   
   cla
   
end

close(v);

toc
%}
%% -- potential step scattering - prob density
%{
tic

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-10).^2).*exp(10*1i*k);
k0 = 8.5;

psinegt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + (k-sqrt(k.^2-k0^2))./(k+sqrt(k.^2-k0^2)).*exp(-1i*k*x));
psipost = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(2*k./(k + sqrt(k.^2 - k0^2)).*exp(1i*sqrt(k.^2 - k0^2)*x));

v = VideoWriter('potential-step-probs.avi','Uncompressed AVI');

open(v);

x = linspace(-20,20,40/0.005);

fig1 = figure;
hold

ax = gca;

fig1.Position = [0 0 16/9*960 960];
ax.Position = [0.05 0.05 0.9 0.9];

V = 0.2*[x>=0];

for t = 0:2.5/150:2.5;
    
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psinegt(k,x(i),t),8,12);
        elseif x(i) >= 0
            psixt(i) = integral(@(k) psipost(k,x(i),t),8,12);
        end
    end
    
    plot(x,abs(psixt).^2,'color',[0.6350, 0.0780, 0.1840])
    plot(x,V,'color',[0.9290, 0.6940, 0.1250])

    ax.XLim = [-20 20];
    ax.YLim = [0,0.35];

   frame = getframe(fig1);
   writeVideo(v,frame);
   
   cla
   
end

%figure


close(v);

toc
%}

%% -- potential step scattering - plots

%{
tic

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-10).^2).*exp(10*1i*k);
k0 = 8.5;

psinegt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + (k-sqrt(k.^2-k0^2))./(k+sqrt(k.^2-k0^2)).*exp(-1i*k*x));
psipost = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(2*k./(k + sqrt(k.^2 - k0^2)).*exp(1i*sqrt(k.^2 - k0^2)*x));

Vwf = 0.4*[x>=0];
Vpd = 0.2*[x>=0];

for t = 0:2.5/5:2.5;
    
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psinegt(k,x(i),t),8,12);
        elseif x(i) >= 0
            psixt(i) = integral(@(k) psipost(k,x(i),t),8,12);
        end
    end
    
    f = figure;
    f.Position = [0 0 2.5*360 360];
    ylim([0,0.35])
    hold
    plot(x,abs(psixt).^2,'color',[0.6350, 0.0780, 0.1840])
    plot(x,Vpd,'color',[0.9290, 0.6940, 0.1250])
    
    f = figure;
    f.Position = [0 0 2.5*360 360];
    ylim([-0.6,0.6])
    hold
    plot(x,real(psixt))
    plot(x,imag(psixt))
    plot(x,Vwf)
   
end

toc
%}


%% -- scattering wavefunctions
%{
xl = linspace(-5,0,5/0.005);
xr = linspace(0,5,5/0.005);

k = 8.5;
k0 = 8;
kp = sqrt(k^2-k0^2);


ul = exp(1i*k*xl) + (k-kp)/(k+kp)*exp(-1i*k*xl);
ur = 2*k/(k+kp)*exp(1i*kp*xr);

figure
hold
plot(xl,real(ul))
plot(xl,imag(ul))

plot(xr,real(ur))
plot(xr,imag(ur))

ylim([-2,2])

V = 2*[[xl xr]>=0];
plot([xl xr],V)
%}

%% -- complex scattering - not used but keeping code
%{
xl = linspace(-5,0,5/0.005);
xr = linspace(0,5,5/0.005);

k = 8.5;
k0 = 8;
kp = sqrt(k^2-k0^2);


ul = exp(1i*k*xl) + (k-kp)/(k+kp)*exp(-1i*k*xl);
ur = 2*k/(k+kp)*exp(1i*kp*xr);

figure
hold
plot3(xl,real(ul),imag(ul))
plot3(xr,real(ur),imag(ur))
%}

%% Reflection and transmission coefficient
%{
k0 = 8;

k = linspace(k0,k0+10,100)
kp = sqrt(k.^2-k0^2);
R = (k-kp).^2./(k+kp).^2;
T = 1-R;

figure
hold
plot(k,R)
plot(k,T)
%}
%% -- check normalisation numerically
%{
tic

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-10).^2).*exp(10*1i*k);
k0 = 8.5;

psinegt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + (k-sqrt(k.^2-k0^2))./(k+sqrt(k.^2-k0^2)).*exp(-1i*k*x));
psipost = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(2*k./(k + sqrt(k.^2 - k0^2)).*exp(1i*sqrt(k.^2 - k0^2)*x));

dx = 0.005;
x = linspace(-20,20,40/dx);


for t = 0:2.5/5:2.5;
    
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psinegt(k,x(i),t),8,12);
        elseif x(i) >= 0
            psixt(i) = integral(@(k) psipost(k,x(i),t),8,12);
        end
    end
    
sum(abs(psixt).^2)*dx
   
end

toc
%}

%% -- potential step scattering - plots
%{
tic

k0 = 4;
a = 20;
kmin = 0;
kmax = 4;
xl = -40;
xh = a-xl;
Dx = xh-xl;
dx = 0.005;

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-2).^2).*exp(10*1i*k);

%figure
%fplot(@(k) real(ck(k)),[kmin,kmax])

kp = @(k) sqrt(k.^2+k0^2);

F = @(k) 4*k.*kp(k).*exp(-1i*k*a)./((k+kp(k)).^2.*exp(-1i*kp(k)*a) - (k-kp(k)).^2.*exp(1i*kp(k)*a));
C = @(k) F(k).*exp(-1i*(kp(k)-k)*a).*(kp(k)+k)./kp(k)/2;
D = @(k) F(k).*exp(1i*(kp(k)+k)*a).*(kp(k)-k)./kp(k)/2;
B = @(k) C(k) + D(k) - 1;

psiIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + B(k).*exp(-1i*k*x));
psiIIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(C(k).*exp(1i*kp(k)*x) + D(k).*exp(-1i*kp(k)*x));
psiIIIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(F(k).*exp(1i*k*x));


x = linspace(xl,xh,Dx/dx);

Vwf = 0.2*[x<=0|x>=a];
Vpd = 0.1*[x<=0|x>=a];

%for t = 0:2.5/1:2.5;

t = 20;
    
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psiIt(k,x(i),t),kmin,kmax);
        elseif x(i) >= 0 && x(i) <= a
            psixt(i) = integral(@(k) psiIIt(k,x(i),t),kmin,kmax);
        elseif x(i) > a
            psixt(i) = integral(@(k) psiIIIt(k,x(i),t),kmin,kmax);
        end
    end
    
    f = figure;
    f.Position = [0 0 2.5*360 360];
    ylim([0,0.2])
    xlim([xl,xh])
    hold
    plot(x,abs(psixt).^2,'color',[0.6350, 0.0780, 0.1840])
    plot(x,Vpd,'color',[0.9290, 0.6940, 0.1250])
    
    f = figure;
    f.Position = [0 0 2.5*360 360];
    ylim([-0.5,0.5])
    xlim([xl,xh])
    hold
    plot(x,real(psixt))
    plot(x,imag(psixt))
    plot(x,Vwf)
   
%end 

sum(abs(psixt).^2)*dx

toc

%}
%% -- potential step scattering - video
%{
clear

tic

v = VideoWriter('finite-well-scattering-prob.avi','Uncompressed AVI');
open(v);

fig1 = figure;
hold

ax = gca;

fig1.Position = [0 0 16/9*960 960];
ax.Position = [0.05 0.05 0.9 0.9];


k0 = 4;
a = 20;
kmin = 0;
kmax = 4;
xl = -40;
xh = a-xl;
Dx = xh-xl;
dx = 0.05;

ck = @(k) 1/sqrt(2*pi)*(2*4/pi)^(1/4)*exp(-4*(k-2).^2).*exp(10*1i*k);

%figure
%fplot(@(k) real(ck(k)),[kmin,kmax])

kp = @(k) sqrt(k.^2+k0^2);

F = @(k) 4*k.*kp(k).*exp(-1i*k*a)./((k+kp(k)).^2.*exp(-1i*kp(k)*a) - (k-kp(k)).^2.*exp(1i*kp(k)*a));
C = @(k) F(k).*exp(-1i*(kp(k)-k)*a).*(kp(k)+k)./kp(k)/2;
D = @(k) F(k).*exp(1i*(kp(k)+k)*a).*(kp(k)-k)./kp(k)/2;
B = @(k) C(k) + D(k) - 1;

psiIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(exp(1i*k*x) + B(k).*exp(-1i*k*x));
psiIIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(C(k).*exp(1i*kp(k)*x) + D(k).*exp(-1i*kp(k)*x));
psiIIIt = @(k,x,t) ck(k).*exp(-1i*k.^2*t/2).*(F(k).*exp(1i*k*x));


x = linspace(xl,xh,Dx/dx);

%Vwf = 0.2*[x<=0|x>=a];
Vpd = 0.1*[x<=0|x>=a];

T = 25;
nframe = 300;

for t = 0:T/nframe:T

  
    for i = 1:length(x)
        if x(i) < 0
            psixt(i) = integral(@(k) psiIt(k,x(i),t),kmin,kmax);
        elseif x(i) >= 0 && x(i) <= a
            psixt(i) = integral(@(k) psiIIt(k,x(i),t),kmin,kmax);
        elseif x(i) > a
            psixt(i) = integral(@(k) psiIIIt(k,x(i),t),kmin,kmax);
        end
    end
    
    plot(x,abs(psixt).^2,'color',[0.6350, 0.0780, 0.1840])
    plot(x,Vpd,'color',[0.9290, 0.6940, 0.1250])

    ax.XLim = [xl,xh];
    ax.YLim = [0,0.25];

    frame = getframe(fig1);
    writeVideo(v,frame);
   
    cla

end 

close(v);

toc
%}

%% -- transmission coefficient finite well

k0 = 0.5;
a = 5;
kp = @(k) sqrt(k.^2-k0^2);

T = @(k) 16*k.^2.*kp(k).^2./(16*k.^2.*kp(k).^2 + 4*(k.^2 + kp(k).^2).*sin(k*a).^2);

figure
hold
fplot(T,[k0,6*k0])
















