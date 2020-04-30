var d=document,w=window,h=location.hostname,fC=false,fO=false,day=new Date();
var id=''+day.getFullYear()+day.getDate()+'';var tF='http://' + h + '/js_source/tab04.html';var aF='http://' + h + '/js_source/adframe06.html';
var mP=location.href,cP=mP;var tW="16",oW="184",cW="0",aW=oW;var ts=(new Date()).getTime();var mFr="m"+ts,tFr="t"+ts,sFr="s"+ts;
var oFR = '<frameset id="FR" cols="*,'+tW+','+aW+'" frameborder="NO" border="0" framespacing="0">';
var oMF = '<frame id="'+mFr+'" name="'+mFr+'" noresize="noresize" frameborder="0" src="';
var cMF = '">';
var oTF = '<frame id="'+tFr+'" name="'+tFr+'" noresize="noresize" frameborder="0" src="' + tF + ' ">';
var oAF = '<frame id="'+sFr+'" name="'+sFr+'" noresize="noresize" frameborder="0" src="' + aF +'">';
var cFR = '</frameset>';
function wt(){top.d.title = eval('top.'+mFr+'.document.title');}
function ssF(){if(d.getElementById==null){d.getElementById=d.all};if(fO==false){eval('top.d.getElementById("FR").setAttribute("cols","*,'+tW+','+aW+'");');
fO=true;}else{aW=cW;eval('top.d.getElementById("FR").setAttribute("cols","*,'+tW+','+aW+'");'); fO = false; aW=oW;}
wt();} if ((self==top)){if(cP.indexOf(id)<0){w.onload=function(){ssF();} 
if (cP.indexOf("#")>-1){sg=cP.split("#");mP=sg[0]+'?'+id+'#'+sg[1];}else{mP+='?'+id;}
d.write(oFR+oMF+mP+cMF+oTF+oAF+cFR);}else{fC=true;}}
function isBase(){ var numB=0; numB=document.getElementsByTagName("BASE").length; isB=(numB>0) ? true : false; return isB; }
function cH(e){e=e||window.event;var tgt=e.target||e.srcElement;
if((e.shiftKey)||(e.ctrlKey)||(e.button>=2)){return e;}
if ((tgt)&&(tgt.nodeName=="A")){ var uPath=tgt.pathname;var uHash=tgt.hash;var uHref=tgt.href;var uHostname=tgt.hostname;
var uTarget=tgt.target;var uNodename=tgt.nodeName;var uProt=tgt.protocol; }else if ((tgt.parentNode)&&(tgt.parentNode.nodeName=="A")) {
var uPath=tgt.parentNode.pathname;var uHash=tgt.parentNode.hash;var uHref=tgt.parentNode.href;var uHostname=tgt.parentNode.hostname;
var uTarget=tgt.parentNode.target; var uNodename=tgt.parentNode.nodeName; var uProt=tgt.parentNode.protocol; 
}else if ((tgt.parentNode.parentNode)&&(tgt.parentNode.parentNode.nodeName=="A")) { var uPath=tgt.parentNode.parentNode.pathname;
var uHash=tgt.parentNode.parentNode.hash; var uHref=tgt.parentNode.parentNode.href; var uHostname=tgt.parentNode.parentNode.hostname;
var uTarget=tgt.parentNode.parentNode.target; var uNodename=tgt.parentNode.parentNode.nodeName; var uProt=tgt.parentNode.parentNode.protocol;
}else if ((tgt.parentNode.parentNode.parentNode)&&(tgt.parentNode.parentNode.parentNode.nodeName=="A")) {
var uPath=tgt.parentNode.parentNode.parentNode.pathname; var uHash=tgt.parentNode.parentNode.parentNode.hash;
var uHref=tgt.parentNode.parentNode.parentNode.href; var uHostname=tgt.parentNode.parentNode.parentNode.hostname;
var uTarget=tgt.parentNode.parentNode.parentNode.target; var uNodename=tgt.parentNode.parentNode.parentNode.nodeName;
var uProt=tgt.parentNode.parentNode.parentNode.protocol; }else{return e;}	
if (uProt!="http:") return;
if (d.getElementsByTagName("IFRAME").length>0){
var foundOne=false; var nI=d.getElementsByTagName("IFRAME").length;
for (i=0; i<nI; i++){if((d.getElementsByTagName("IFRAME")[i].name!="")&&((d.getElementsByTagName("IFRAME")[i].name)==(uTarget))){
foundOne=true;break;}}if(foundOne==true){return;}foundOne=false;}
if((top.w.frames[0].length<=0)){
if (uHref.indexOf(id)>-1){ tHref = uHref.split("?"); uHref=tHref[0]+uHash; eval("location.href=uHref;");
}else if(uHref.indexOf('#')>-1){ eval("location.href=uHref;"); } }
var ytg = uTarget; ytg=ytg.toLowerCase();
if ((ytg.indexOf("new")>-1)||(ytg.indexOf("blank")>-1)){ return; }
if ((ytg.indexOf("self")>-1)&&(top.w.frames[0].length>0)){ return; }
if((uHref)&&(top.w.frames[0].length!=0)&&(uHref.indexOf("#")>-1)){ return; }
if ((tgt)&&(!fC)) { if (uNodename=="A") { if ((uHostname.indexOf("geocities.com"))>-1)
{ if((uHref.indexOf("#")<=-1)&&(frames.name==mFr)){fO=false;ssF();top.location.href=uHref;
}else if(((top.w.frames[0].length)-(d.getElementsByTagName("IFRAME").length)!=0)&&(uHref.indexOf("#")<=-1))
{ if ((uTarget)&&(uTarget!=sFr)&&(uTarget!=tFr)) { }else{ if(isBase()) {
uTarget=document.getElementsByTagName("BASE")[0].target; return; } location.href=uHref; }
}else{ top.location.href=uHref; return false; }	}else{ top.d.location.href=uHref; } }else{ return e;}}}d.onclick=cH;
