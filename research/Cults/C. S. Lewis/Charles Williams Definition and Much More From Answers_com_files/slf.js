// 2005/11/16 12:57:39
var ANV='3.1.0.26a';
var ANSID='11855';
var ANID='TID';
var ANP=2;
var ANEU="http://anrtx.tacoda.net/e/e.js?";
var ANT3=1;
var ANDPF;
var ANDPU="http://anrtx.tacoda.net/rtx/r.js?";
var ANCU="http://anrtx.tacoda.net/cbd/cbd?";
var ANURL=0;
var ANRDF=1;
var ANCC=1;
var ANDCC='';
var ANVPC=ANDCC;
var ANSCC="unescape(ANVSC).toLowerCase()";
var AN2CC=new Array();
var ANAS="http://anad.tacoda.net";
var ANDD="";
var ANDN=new Array();
var AMSTEP="";
var AMSTES="tte/blank.gif";
var AMSDPF;
var AMSLGC=0;
var AMSC=new Array(ANID);
var ANCB=0;
var ANDSZ=2;
var ANVAC='a';
var ANVSZ=ANDSZ;
var ANVAD=0;
var ANADS=new Array();
ANADS=["468x60a","728x90a","300x250a","120x600a","160x600a","468x60a|728x90a","120x600a|160x600a"];
var ANRD='';
var ANVDT=0;
var ANOO=0;
var ANVSC='';
var ANVDA=0;
var AMSK=new Array();
var AMSVL=new Array();
var AMSN=0;
function ANRC(n) {
var cn=n + "=";
var dc=document.cookie;
if (dc.length > 0) {
for(var b=dc.indexOf(cn); b!=-1; b=dc.indexOf(cn,b)) {
if((b!=0) && (dc.charAt(b-1) !=' ')) {
b++;
continue;
}
b+=cn.length;
var e=dc.indexOf(";",b);
if (e==-1) e=dc.length;
return unescape(dc.substring(b,e));
}
}
return null;
}
function ANSC(n,v,ex,p) {
var e=document.domain.split (".");
e.reverse();
var m=e[1] + '.' + e[0];
var cc=n+"="+escape(v);
if (ex) {
var exp=new Date;
exp.setTime(exp.getTime()+ex);
cc +=";expires="+exp.toGMTString();
}
if (p) {
cc +=";path="+p;
}
if (m) {
cc +=";domain="+m;
}
document.cookie=cc;
}
function ANGRD() {
if (top !=self || ANRD !='') {
return ANRD;
}
var rf=top.location.href;
var i=j=0;
i=rf.indexOf('/');
i=rf.indexOf('/',++i);
j=rf.indexOf('/',++i);
if (j==-1) {
j=rf.length;
}
r=rf.substring(i,j);
return r;
}
function ANTR(s) {
if (!s) {
return '';
}
s=s.replace(/^\s*/g,'');
s=s.replace(/\s*$/g,'');
return s;
}
function ANEH(m,u,l) {
var s=ANEU+'m='+escape(m)+'&u='+escape(u)+'&l='+l;
document.write('<SCR'+'IPT SRC="'+s+'" LANGUAGE="JavaScript"></SCR'+'IPT>');
return true;
}
function ANPF () {
if (ANT3==1) {
return;
}
var now=new Date;
var c=ANRC('T3CK');
if (c!=null) {
var f=c.split("|");
var r=q=j=0;
for (var i=0; i<f.length; i++) {
j=f[i].indexOf('TANO=');
if (j>=0) {
ANOO=f[i].substring(j+5);
continue;
}
j=f[i].indexOf('TANE=');
if (j>=0) {
r=1;
var e=f[i].substring(j+5);
if ((Date.parse(now)/1000) - e > 86400) {
q=1;
f[i]="";
}
continue;
}
j=f[i].indexOf('TANC=');
if (j>=0) {
ANCB=f[i].substring(j+5);
if (q==1) {
f[i]="";
}
continue;
}
}
if (r==0 || q==1) {
c=f.join("|");
ANSC("T3CK",c,4*365*24*60*60*1000,"/");
AN3CB();
}
} else {
AN3CB();
}
}
function ANDCB() {
ANSC('TCT',1, 60*1000, '/');
return ANRC('TCT')==null;
}
function AN3CB() {
document.write('<SCR'+'IPT SRC="'+ANCU+'"></SCR'+'IPT>');
return;
}
function TCDA(ps) {
if (!ps || ps=='') {
return;
}
var pa=ps.split(";");
for (p in pa) {
kv=pa[p].split("=");
k=kv[0];
v=kv[1];
if (k!=null) {
k=ANTR(k);
}
if (v!=null) {
v=ANTR(v);
}
var m=k.toUpperCase();
switch (m) {
case ("SA"):
v=v.toUpperCase();
if (v!=null&&v!=''&&v.match(/[a-z]{1,2}/)) {
ANVAC=v;
}
break;
case ("SZ"):
v=v.toUpperCase();
if (v!=null&&v!='') {
ANVSZ=v;
}
break;
case ("CC"):
v=v.toUpperCase();
if (v!=null&&v!='') {
ANVPC=v;
}
break;
case ("SC"):
if (v!=null&&v!='') {
if (v.length > 256) {v=v.substring(0,256);}
ANVSC=v;
}
break;
case ("RD"):
if (v!=null&&v!='') {
if (v.length > 128) {v=v.substring(0,128);}
ANRD=v.toLowerCase();
}
break;
case ("DT"):
ANVDT=1;
break;
case ("DA"):
ANVDA=1;
break;
case ("AD"):
ANVAD=1;
break;
default:
if (v!=null&&v!='') {
ANCV(k,v);
}
}
}
if (ANVDT==1 && ANOO==0) {
ANDP(ANVPC);
ANVDT=0;
}
if (ANVAD==1) {
ANAP(ANVAC,ANVSZ);
ANVAD=0;
}
if (ANVDA==1) {
ANDA(ANSID,ANVPC,ANVSC);
ANVDA=0;
}
return;
}
ANPF();
if (typeof(tcdacmd) !='undefined' && tcdacmd !="") {
var f=tcdacmd;
tcdacmd='';
TCDA(f);
}
function Tacoda_AMS_DDC_addPair(k, v) {
ANCV(k,v);
}
function ANCV(k,v){
AMSK[AMSN]=k;
AMSVL[AMSN]=v;
AMSN++;
}
function ANTCV() {
var TVS="";
for(var i=0; i<AMSN; i++) {
if (!AMSK[i]) {
continue;
}
if (!AMSVL[i]) {
AMSVL[i]='';
}
TVS +="&v_" + escape( AMSK[i].toLowerCase() ) + "=" + escape( AMSVL[i].toLowerCase() ) ;
}
return TVS;
}
function Tacoda_AMS_DDC(tiu, tjv) {
ANDDC(tiu,tjv);
}
function ANDA() {
var t='';
var e=ANGRD().split(".");
e.reverse();
t=e[1] + '.' + e[0];
if (typeof(ANDN[t])!='undefined') {
t=ANDN[t];
}
else {
t=ANDD;
}
var tiu='http://'+AMSTEP+'.'+t+'/'+AMSTES;
ANDDC(tiu,"0.0");
}
function ANDDC(tiu, tjv) {
if ((ANP&1)==0) {
return;
}
if (AMSDPF==1) {
return;
} else {
AMSDPF=1;
}
var ckblk=ANDCB();
var ta="?"+Math.random()+"&v="+ANV+"&r="+escape(document.referrer)+"&p="+ANVPC+":"+escape(ANVSC);
if (AMSLGC==1) {
ta +="&page="+escape(window.location.href);
}
ta +="&tz="+(new Date()).getTimezoneOffset()+"&s="+ANSID;
if (ckblk) {
ta +="&ckblk1";
} else {
if (ANCB==1) {
ta+="&ckblk3";
}
for(var i=0; i<AMSC.length; i++) {
var cl=AMSC[i];
var clv=ANRC(cl);
if(cl !=null) {
ta +="&c_"+escape(cl)+"="+escape(clv);
}
}
}
ta +=ANTCV();
document.write('<IMG'+' SRC="' + tiu + ta + '" STYLE="display: none" height="1" width="1" border="0">');
}
function ANDP(pc) {
if ((ANP&2)==0) {
return;
}
if (ANDPF==1) {
return;
} else {
ANDPF=1;
}
ANVPC=pc;
if (ANCC==0) {
ANVPC=ANS2CC(eval(ANSCC));
}
if (!ANVPC.match(/\w{3}$/)) {ANVPC=ANDCC;}
var ANU="";
var ckblk="";
if (ANDCB()) {
ckblk="&ckblk1";
}
if (ANCB==1) {
ckblk="&ckblk3";
}
if (ANURL==1) {
ANU="&page="+escape(window.location.href);
}
if (ANRDF==1) {
ANU +="&r=" + ANGRD();
}
if (ANVPC!='') {
document.write('<SCR'+'IPT SRC="'+ANDPU+"cmd="+ANVPC+'&si='+ANSID+ANU+'&v='+ANV+ckblk+'&cb='+Math.random()+'" LANGUAGE="JavaScript"></SCR'+'IPT>');
}
}
function ANS2CC (s) {
if (!s) {
return ANDCC;
}
for (i=0; i<AN2CC.length; i++) {
if (!AN2CC[i][0] || !AN2CC[i][1]) {
continue;
}
switch (AN2CC[i][0]) {
case 'e':
if ((s.indexOf(AN2CC[i][1])==0) && (s.length==AN2CC[i][1].length)) {
return AN2CC[i][2];
}
break;
case 'c':
if (s.indexOf(AN2CC[i][1]) !=-1) {
return AN2CC[i][2];
}
break;
case 'p':
if (s.indexOf(AN2CC[i][1])==0) {
return AN2CC[i][2];
}
break;
case 's':
if (s.lastIndexOf(AN2CC[i][1])==(s.length - AN2CC[i][1].length)) {
return AN2CC[i][2];
}
break;
case 'r':
if (s.search(AN2CC[i][1]) !=-1) {
return AN2CC[i][2];
}
break;
}
}
return ANDCC;
}
function ANAP(ac,sz,pc) {
if (sz <=ANADS.length) {
ANVAC=ac.toLowerCase();
var au='<SCR'+'IPT SRC="'+ANAS+'/cgi-bin/ads/';
if (sz==4||sz==5||sz==7) {
au+='sk';
}
else {
au+='ad';
}
au+=ANSID+ANVAC+'.cgi/v=2.0S/sz='+ANADS[sz-1]+'/'+Math.round(Math.random()*100000)+'/RETURN-CODE/JS/" LANGUAGE="JavaScript"></SCR'+'IPT>';
document.write(au);
}
ANVSZ=ANDSZ;
}
