set(groot,'defaulttextinterpreter','latex');  
set(groot, 'defaultAxesTickLabelInterpreter','latex');  
set(groot, 'defaultLegendInterpreter','latex');
set(groot,'DefaultTextFontSize',30)

res = 300;
theta = linspace(0,pi,res);
phi = linspace(0,2*pi,res);
[Theta,Phi] = meshgrid(theta,phi);

ticks = [-1,-0.5,0,0.5,1];
colmap = gray(res);

X = sin(Theta).*cos(Phi);
Y = sin(Theta).*sin(Phi);
Z = cos(Theta);

Y00 = 1/2*sqrt(1/pi)*ones(size(Theta));

Y1m1 = 1/2*sqrt(3/2/pi).*exp(-1i*Phi).*sin(Theta);
Y10 = 1/2*sqrt(3/pi)*cos(Theta);
Y1p1 = -1/2*sqrt(3/2/pi).*exp(1i*Phi).*sin(Theta);

Y2m2 = 1/4*sqrt(15/2/pi)*exp(-2*1i*Phi).*sin(Theta).^2;
Y2m1 = 1/2*sqrt(15/2/pi)*exp(-1i*Phi).*sin(Theta).*cos(Theta);
Y20 = 1/4*sqrt(5/pi)*(3*cos(Theta).^2-1);
Y2p1 = 1/2*sqrt(15/2/pi)*exp(1i*Phi).*sin(Theta).*cos(Theta);
Y2p2 = 1/4*sqrt(15/2/pi)*exp(2*1i*Phi).*sin(Theta).^2;

Ymax = max([max(max(abs(Y00))) max(max(abs(Y1m1))) max(max(abs(Y10))) ...
    max(max(abs(Y2m2))) max(max(abs(Y2m1))) max(max(abs(Y20)))]);



sc = @(x) sqrt(x)
%sc = @(x) x

image(reshape(sqrt(colmap),[1,res,3]))

caxislims = [0 sc(Ymax^2)];

%% -- |Y_00|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y00).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
title('$|Y_{0,0}|^2$')
daspect([1,1,1])
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
view(-37.5,15)
axis tight

%% -- |Y_1,-1| & |Y_1,1|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y1m1).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
caxis(caxislims)
title('$|Y_{1,-1}|^2 = |Y_{1,1}|^2$')
daspect([1,1,1])
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
view(-37.5,15)
axis tight

%% -- |Y_10|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y10).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
caxis(caxislims)
title('$|Y_{1,0}|^2$')
daspect([1,1,1])
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
view(-37.5,15)
axis tight

%% -- |Y_2,-2| = |Y_2,2|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y2m2).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
caxis(caxislims)
title('$|Y_{2,-2}|^2 = |Y_{2,2}|^2$')
daspect([1,1,1])
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
view(-37.5,15)
axis tight

%% -- |Y_2,-1| = |Y_2,1|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y2m1).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
caxis(caxislims)
title('$|Y_{2,-1}|^2 = |Y_{2,1}|^2$')
daspect([1,1,1])
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
view(-37.5,15)
axis tight

%% -- |Y_2,0|

figure('DefaultAxesFontSize',24)
f = surf(X,Y,Z,sc(abs(Y20).^2),'EdgeColor','None','FaceColor','Interp');
colormap(colmap)
caxis(caxislims)
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$|Y_{2,0}|^2$')
daspect([1,1,1])
view(-37.5,15)
axis tight

%{
%% -- Y22

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y2p2),real(Y2p2))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y2p2)/max(max(abs(Y2p2)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{2,2}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y21

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y2p1),real(Y2p1))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y2p1)/max(max(abs(Y2p1)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{2,1}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y20

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y20),real(Y20))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y20)/max(max(abs(Y20)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{2,0}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y2m1

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y2m1),real(Y2m1))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y2m1)/max(max(abs(Y2m1)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{2,-1}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y2m2

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y2m2),real(Y2m2))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y2m2)/max(max(abs(Y2m2)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{2,-2}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y1p1

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y1p1),real(Y1p1))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y1p1)/max(max(abs(Y1p1)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{1,1}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y10

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y10),real(Y10))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y10)/max(max(abs(Y10)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{1,0}$')
daspect([1,1,1])
axis tight
view(-37.5,15)


%% -- Y1m1

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y1m1),real(Y1m1))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y1m1)/max(max(abs(Y1m1)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{1,-1}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

%% -- Y00

figure('DefaultAxesFontSize',24)
HSV = zeros(res,res,3);
HSV(:,:,1) = mod(atan2(imag(Y00),real(Y00))/pi/2,1);
HSV(:,:,2) = 1*ones(res);
HSV(:,:,3) = abs(Y00)/max(max(abs(Y00)));

f = surf(X,Y,Z,hsv2rgb(HSV),'EdgeColor','None','FaceColor','Interp');
set(gca,'xticklabel',{'','','$x$','',''},'yticklabel',{'','','$y$','',''},'zticklabel',{'','','$z$','',''})
xticks(ticks); yticks(ticks); zticks(ticks);
title('$Y_{0,0}$')
daspect([1,1,1])
axis tight
view(-37.5,15)

colline = ones(10,1)*linspace(0,2*pi,50);

%}
