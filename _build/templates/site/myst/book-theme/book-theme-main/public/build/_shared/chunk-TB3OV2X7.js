import{c as q,d as te,e as De}from"/myst_assets_folder/_shared/chunk-2R55K7EN.js";import{e as C,f as ae,g as le,h as re,i as ne,l as Ne}from"/myst_assets_folder/_shared/chunk-TDILKTRN.js";import{A as j,B as S,C as Be,H as U,I as _,K as L,N as F,S as H,U as K,V as We,X as V,Y as J,Z as ee,_ as ze,c as $,k as Re,n as G,p as Ee,x as I,y as Ze}from"/myst_assets_folder/_shared/chunk-UCQCRCSK.js";import{b as N}from"/myst_assets_folder/_shared/chunk-RAQ24GF6.js";function pt(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function xe(e){return e==9||e==10||e==13||e==32}function M(e,a){let r=e.pos+a;if(ce==r&&Oe==e)return ie;let l=e.peek(a);for(;xe(l);)l=e.peek(++a);let t="";for(;pt(l);)t+=String.fromCharCode(l),l=e.peek(++a);return Oe=e,ce=r,ie=t?t.toLowerCase():l==mt||l==ft?void 0:null}function de(e,a){this.name=e,this.parent=a,this.hash=a?a.hash:0;for(let r=0;r<e.length;r++)this.hash+=(this.hash<<4)+e.charCodeAt(r)+(e.charCodeAt(r)<<8)}function xt(e){for(;e;e=e.parent)if(e.name=="svg"||e.name=="math")return!0;return!1}function E(e,a,r){let l=2+e.length;return new V(t=>{for(let s=0,u=0,o=0;;o++){if(t.next<0){o&&t.acceptToken(a);break}if(s==0&&t.next==Te||s==1&&t.next==R||s>=2&&s<l&&t.next==e.charCodeAt(s-2))s++,u++;else if((s==2||s==l)&&xe(t.next))u++;else if(s==l&&t.next==X){o>u?t.acceptToken(a,-u):t.acceptToken(r,-(u-2));break}else if((t.next==10||t.next==13)&&o){t.acceptToken(a,1);break}else s=u=0;t.advance()}})}function ye(e,a){let r=Object.create(null);for(let l of e.getChildren(be)){let t=l.getChild(lt),s=l.getChild(Y)||l.getChild(Pe);t&&(r[a.read(t.from,t.to)]=s?s.type.id==Y?a.read(s.from+1,s.to-1):a.read(s.from,s.to):"")}return r}function pe(e,a){let r=e.getChild(at);return r?a.read(r.from,r.to):" "}function Q(e,a,r){let l;for(let t of r)if(!t.attrs||t.attrs(l||(l=ye(e.node.parent.firstChild,a))))return{parser:t.parser};return null}function Z(e=[],a=[]){let r=[],l=[],t=[],s=[];for(let o of e)(o.tag=="script"?r:o.tag=="style"?l:o.tag=="textarea"?t:s).push(o);let u=a.length?Object.create(null):null;for(let o of a)(u[o.name]||(u[o.name]=[])).push(o);return I((o,O)=>{let f=o.type.id;if(f==rt)return Q(o,O,r);if(f==nt)return Q(o,O,l);if(f==st)return Q(o,O,t);if(f==he&&s.length){let c=o.node,i=c.firstChild,d=i&&pe(i,O),m;if(d){for(let p of s)if(p.tag==d&&(!p.attrs||p.attrs(m||(m=ye(c,O))))){let h=c.lastChild;return{parser:p.parser,overlay:[{from:i.to,to:h.type.id==ut?h.from:c.to}]}}}}if(u&&f==be){let c=o.node,i;if(i=c.firstChild){let d=u[O.read(i.from,i.to)];if(d)for(let m of d){if(m.tagName&&m.tagName!=pe(c.parent,O))continue;let p=c.lastChild;if(p.type.id==Y){let h=p.from+1,T=p.lastChild,w=p.to-(T&&T.isError?0:1);if(w>h)return{parser:m.parser,overlay:[{from:h,to:w}]}}else if(p.type.id==Pe)return{parser:m.parser,overlay:[{from:p.from,to:p.to}]}}}}return null})}var Ge,Ie,je,Ue,Le,Fe,se,He,v,me,fe,Se,ge,Ke,Je,et,A,tt,oe,he,at,be,lt,Y,Pe,rt,nt,st,ot,ut,it,Ot,ct,dt,ue,ie,Oe,ce,Te,X,R,mt,ft,St,gt,ht,bt,Pt,Tt,Vt,yt,wt,vt,Ve,we=N(()=>{ze();Be();Ze();Ge=54,Ie=1,je=55,Ue=2,Le=56,Fe=3,se=4,He=5,v=6,me=7,fe=8,Se=9,ge=10,Ke=11,Je=12,et=13,A=57,tt=14,oe=58,he=20,at=22,be=23,lt=24,Y=26,Pe=27,rt=28,nt=31,st=34,ot=36,ut=37,it=0,Ot=1,ct={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},dt={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},ue={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};ie=null,Oe=null,ce=0;Te=60,X=62,R=47,mt=63,ft=33,St=45;gt=[v,ge,me,fe,Se],ht=new J({start:null,shift(e,a,r,l){return gt.indexOf(a)>-1?new de(M(l,1)||"",e):e},reduce(e,a){return a==he&&e?e.parent:e},reuse(e,a,r,l){let t=a.type.id;return t==v||t==ot?new de(M(l,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),bt=new V((e,a)=>{if(e.next!=Te){e.next<0&&a.context&&e.acceptToken(A);return}e.advance();let r=e.next==R;r&&e.advance();let l=M(e,0);if(l===void 0)return;if(!l)return e.acceptToken(r?tt:v);let t=a.context?a.context.name:null;if(r){if(l==t)return e.acceptToken(Ke);if(t&&dt[t])return e.acceptToken(A,-2);if(a.dialectEnabled(it))return e.acceptToken(Je);for(let s=a.context;s;s=s.parent)if(s.name==l)return;e.acceptToken(et)}else{if(l=="script")return e.acceptToken(me);if(l=="style")return e.acceptToken(fe);if(l=="textarea")return e.acceptToken(Se);if(ct.hasOwnProperty(l))return e.acceptToken(ge);t&&ue[t]&&ue[t][l]?e.acceptToken(A,-1):e.acceptToken(v)}},{contextual:!0}),Pt=new V(e=>{for(let a=0,r=0;;r++){if(e.next<0){r&&e.acceptToken(oe);break}if(e.next==St)a++;else if(e.next==X&&a>=2){r>3&&e.acceptToken(oe,-2);break}else a=0;e.advance()}});Tt=new V((e,a)=>{if(e.next==R&&e.peek(1)==X){let r=a.dialectEnabled(Ot)||xt(a.context);e.acceptToken(r?He:se,2)}else e.next==X&&e.acceptToken(se,1)});Vt=E("script",Ge,Ie),yt=E("style",je,Ue),wt=E("textarea",Le,Fe),vt=j({"Text RawText":S.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":S.angleBracket,TagName:S.tagName,"MismatchedCloseTag/TagName":[S.tagName,S.invalid],AttributeName:S.attributeName,"AttributeValue UnquotedAttributeValue":S.attributeValue,Is:S.definitionOperator,"EntityReference CharacterReference":S.character,Comment:S.blockComment,ProcessingInst:S.processingInstruction,DoctypeDecl:S.documentMeta}),Ve=ee.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:"+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"\u26A0 StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:ht,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"]],propSources:[vt],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[Vt,yt,wt,Tt,bt,Pt,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:485},tokenPrec:487})});function P(e,a,r=e.length){if(!a)return"";let l=a.firstChild,t=l&&l.getChild("TagName");return t?e.sliceString(t.from,Math.min(t.to,r)):""}function x(e,a=!1){for(;e;e=e.parent)if(e.name=="Element")if(a)a=!1;else return e;return null}function qe(e,a,r){let l=r.tags[P(e,x(a))];return l?.children||r.allTags}function D(e,a){let r=[];for(let l=x(a);l&&!l.type.isTop;l=x(l.parent)){let t=P(e,l);if(t&&l.lastChild.name=="CloseTag")break;t&&r.indexOf(t)<0&&(a.name=="EndTag"||a.from>=l.firstChild.to)&&r.push(t)}return r}function ve(e,a,r,l,t){let s=/\s*>/.test(e.sliceDoc(t,t+5))?"":">",u=x(r,!0);return{from:l,to:t,options:qe(e.doc,u,a).map(o=>({label:o,type:"type"})).concat(D(e.doc,r).map((o,O)=>({label:"/"+o,apply:"/"+o+s,type:"type",boost:99-O}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function Xe(e,a,r,l){let t=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:r,to:l,options:D(e.doc,a).map((s,u)=>({label:s,apply:s+t,type:"type",boost:99-u})),validFor:Ce}}function kt(e,a,r,l){let t=[],s=0;for(let u of qe(e.doc,r,a))t.push({label:"<"+u,type:"type"});for(let u of D(e.doc,r))t.push({label:"</"+u+">",type:"type",boost:99-s++});return{from:l,to:l,options:t,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function $t(e,a,r,l,t){let s=x(r),u=s?a.tags[P(e.doc,s)]:null,o=u&&u.attrs?Object.keys(u.attrs):[],O=u&&u.globalAttrs===!1?o:o.length?o.concat(a.globalAttrNames):a.globalAttrNames;return{from:l,to:t,options:O.map(f=>({label:f,type:"property"})),validFor:Ce}}function _t(e,a,r,l,t){var s;let u=(s=r.parent)===null||s===void 0?void 0:s.getChild("AttributeName"),o=[],O;if(u){let f=e.sliceDoc(u.from,u.to),c=a.globalAttrs[f];if(!c){let i=x(r),d=i?a.tags[P(e.doc,i)]:null;c=d?.attrs&&d.attrs[f]}if(c){let i=e.sliceDoc(l,t).toLowerCase(),d='"',m='"';/^['"]/.test(i)?(O=i[0]=='"'?/^[^"]*$/:/^[^']*$/,d="",m=e.sliceDoc(t,t+1)==i[0]?"":i[0],i=i.slice(1),l++):O=/^[^\s<>='"]*$/;for(let p of c)o.push({label:p,apply:d+p+m,type:"constant"})}}return{from:l,to:t,options:o,validFor:O}}function Ae(e,a){let{state:r,pos:l}=a,t=_(r).resolveInner(l,-1),s=t.resolve(l);for(let u=l,o;s==t&&(o=t.childBefore(u));){let O=o.lastChild;if(!O||!O.type.isError||O.from<O.to)break;s=t=o,u=O.from}return t.name=="TagName"?t.parent&&/CloseTag$/.test(t.parent.name)?Xe(r,t,t.from,l):ve(r,e,t,t.from,l):t.name=="StartTag"?ve(r,e,t,l,l):t.name=="StartCloseTag"||t.name=="IncompleteCloseTag"?Xe(r,t,l,l):a.explicit&&(t.name=="OpenTag"||t.name=="SelfClosingTag")||t.name=="AttributeName"?$t(r,e,t,t.name=="AttributeName"?t.from:l,l):t.name=="Is"||t.name=="AttributeValue"||t.name=="UnquotedAttributeValue"?_t(r,e,t,t.name=="Is"?l:t.from,l):a.explicit&&(s.name=="Element"||s.name=="Text"||s.name=="Document")?kt(r,e,t,l):null}function Nt(e){return Ae(b.default,e)}function qt(e){let{extraTags:a,extraGlobalAttributes:r}=e,l=r||a?new b(a,r):b.default;return t=>Ae(l,t)}function Gt(e={}){let a="",r;e.matchClosingTags===!1&&(a="noMatch"),e.selfClosingTags===!0&&(a=(a?a+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(r=Z((e.nestedLanguages||[]).concat(Qe),(e.nestedAttributes||[]).concat(Ye)));let l=r?Me.configure({wrap:r,dialect:a}):a?k.configure({dialect:a}):k;return new L(l,[k.data.of({autocomplete:qt(e)}),e.autoCloseTags!==!1?Ct:[],ne().support,te().support])}var y,B,W,z,g,n,Xt,$e,_e,b,Ce,Qe,Ye,Me,k,ke,Ct,At=N(()=>{we();De();Ne();Ee();Re();We();y=["_blank","_self","_top","_parent"],B=["ascii","utf-8","utf-16","latin1","latin1"],W=["get","post","put","delete"],z=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],g=["true","false"],n={},Xt={a:{attrs:{href:null,ping:null,type:null,media:null,target:y,hreflang:null}},abbr:n,address:n,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:n,aside:n,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:n,base:{attrs:{href:null,target:y}},bdi:n,bdo:n,blockquote:{attrs:{cite:null}},body:n,br:n,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:z,formmethod:W,formnovalidate:["novalidate"],formtarget:y,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:n,center:n,cite:n,code:n,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:n,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:n,div:n,dl:n,dt:n,em:n,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:n,figure:n,footer:n,form:{attrs:{action:null,name:null,"accept-charset":B,autocomplete:["on","off"],enctype:z,method:W,novalidate:["novalidate"],target:y}},h1:n,h2:n,h3:n,h4:n,h5:n,h6:n,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:n,hgroup:n,hr:n,html:{attrs:{manifest:null}},i:n,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:z,formmethod:W,formnovalidate:["novalidate"],formtarget:y,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:n,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:n,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:n,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:B,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:n,noscript:n,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:n,param:{attrs:{name:null,value:null}},pre:n,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:n,rt:n,ruby:n,samp:n,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:B}},section:n,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:n,source:{attrs:{src:null,type:null,media:null}},span:n,strong:n,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:n,summary:n,sup:n,table:n,tbody:n,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:n,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:n,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:n,time:{attrs:{datetime:null}},title:n,tr:n,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:n,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:n},$e={accesskey:null,class:null,contenteditable:g,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:g,autocorrect:g,autocapitalize:g,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":g,"aria-autocomplete":["inline","list","both","none"],"aria-busy":g,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":g,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":g,"aria-hidden":g,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":g,"aria-multiselectable":g,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":g,"aria-relevant":null,"aria-required":g,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},_e="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e=>"on"+e);for(let e of _e)$e[e]=null;b=class{constructor(a,r){this.tags=Object.assign(Object.assign({},Xt),a),this.globalAttrs=Object.assign(Object.assign({},$e),r),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}};b.default=new b;Ce=/^[:\-\.\w\u00b7-\uffff]*$/;Qe=[{tag:"script",attrs:e=>e.type=="text/typescript"||e.lang=="ts",parser:ae.parser},{tag:"script",attrs:e=>e.type=="text/babel"||e.type=="text/jsx",parser:le.parser},{tag:"script",attrs:e=>e.type=="text/typescript-jsx",parser:re.parser},{tag:"script",attrs(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:C.parser},{tag:"style",attrs(e){return(!e.lang||e.lang=="css")&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:q.parser}],Ye=[{name:"style",parser:q.parser.configure({top:"Styles"})}].concat(_e.map(e=>({name:e,parser:C.parser}))),Me=U.define({name:"html",parser:Ve.configure({props:[F.add({Element(e){let a=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+a[0].length?e.continue():e.lineIndent(e.node.from)+(a[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit},Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let a=null,r;for(let l=e.node;;){let t=l.lastChild;if(!t||t.name!="Element"||t.to!=l.to)break;a=l=t}return a&&!((r=a.lastChild)&&(r.name=="CloseTag"||r.name=="SelfClosingTag"))?e.lineIndent(a.from)+e.unit:null}}),H.add({Element(e){let a=e.firstChild,r=e.lastChild;return!a||a.name!="OpenTag"?null:{from:a.to,to:r.name=="CloseTag"?r.from:e.to}}}),K.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),k=Me.configure({wrap:Z(Qe,Ye)});ke=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),Ct=G.inputHandler.of((e,a,r,l)=>{if(e.composing||e.state.readOnly||a!=r||l!=">"&&l!="/"||!k.isActiveAt(e.state,a,-1))return!1;let{state:t}=e,s=t.changeByRange(u=>{var o,O,f;let{head:c}=u,i=_(t).resolveInner(c,-1),d;if((i.name=="TagName"||i.name=="StartTag")&&(i=i.parent),l==">"&&i.name=="OpenTag"){if(((O=(o=i.parent)===null||o===void 0?void 0:o.lastChild)===null||O===void 0?void 0:O.name)!="CloseTag"&&(d=P(t.doc,i.parent,c))&&!ke.has(d)){let m=e.state.doc.sliceString(c,c+1)===">",p=`${m?"":">"}</${d}>`;return{range:$.cursor(c+1),changes:{from:c+(m?1:0),insert:p}}}}else if(l=="/"&&i.name=="OpenTag"){let m=i.parent,p=m?.parent;if(m.from==c-1&&((f=p.lastChild)===null||f===void 0?void 0:f.name)!="CloseTag"&&(d=P(t.doc,p,c))&&!ke.has(d)){let h=e.state.doc.sliceString(c,c+1)===">",T=`/${d}${h?"":">"}`,w=c+T.length+(h?1:0);return{range:$.cursor(w),changes:{from:c,insert:T}}}}return{range:u}});return s.changes.empty?!1:(e.dispatch(s,{userEvent:"input.type",scrollIntoView:!0}),!0)})});export{Nt as a,qt as b,Me as c,k as d,Gt as e,Ct as f,At as g};
