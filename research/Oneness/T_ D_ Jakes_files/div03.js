// JavaScript Document

var day = new Date();
var id = ''+day.getFullYear()+day.getDate()+'';
var ie4 = document.all;
var ie5 = document.all && document.getElementById;
var ns4 = document.layers;
var ns6 = document.getElementById && !document.all; 
var auWritten=false;
function noFrameAu()
{
	try { if (top.location.hostname){ throw "ok"; } else { throw "accesser"; } }
	catch(er) { if (er=="ok") {yfrau = (top.location.href.indexOf(id)>0) ? true : false;} else {yfrau=true;} }
	return yfrau;
}
function writeAu()
{
	cnt='<iframe width=175 height=440 border=0 marginwidth=0 marginheight=0 hspace=10 vspace=0 frameborder=0 scrolling=no src=\"' + thGetOv + '?curl=' + thCanURL + '&sp=' + thSpaceId + '&IP=' + thIP + '&t=' + thTs + '&c=' + thCs + '\"></iframe>';
	document.write("<div id=y_gc_div_adcntr class=y_gcss_ovrtr_cntr><div id=y_gc_div_mast class=y_gcss_ovrtr_msthd><a href=\"http://geocities.yahoo.com\"><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/b/geo_mast_small2.gif alt=\"Yahoo! GeoCities\" width=141 height=15 hspace=4 vspace=4 border=0></a><img src=http://us.i1.yimg.com/us.yimg.com/i/space.gif width=7 height=1><a href=\"javascript:;\" onMouseDown=\"maximizeAu('y_gc_div_au1')\";><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/el/geo_ad_dwn_widg2.gif width=14 height=13 hspace=2 vspace=6 border=0></a><a href=\"javascript:;\" onClick=\"closeAu('y_gc_div_adcntr')\";><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/el/geo_ad_close_widg2.gif width=14 height=13 hspace=2 vspace=6 border=0></a></div><div id=y_gc_div_au1 class=y_gcss_ovrtr_au><a href=\"http://geocities.yahoo.com\"><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/b/geo_mast_small2.gif alt=\"Yahoo! GeoCities\" width=141 height=15 hspace=4 vspace=4 border=0></a><img src=http://us.i1.yimg.com/us.yimg.com/i/space.gif width=7 height=1><a href=\"javascript:;\" onMouseDown=\"minimizeAu('y_gc_div_au1')\";><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/el/geo_ad_up_widg2.gif width=14 height=13 hspace=2 vspace=6 border=0></a><a href=\"javascript:;\" onClick=\"closeAu('y_gc_div_adcntr')\";><img src=http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/el/geo_ad_close_widg2.gif width=14 height=13 hspace=2 vspace=6 border=0></a><div class=y_gcss_ovrtr_au_cbox>"+cnt+"</div></div></div>");
	auPos('y_gc_div_adcntr');
	auPos('y_gc_div_au1');
	auPos('y_gc_div_mast');
}
function minimizeAu(divId) {
    if (ns4) {
        document.layers[divId].visibility = "hide";
	} else if (ns6 || ie5) {
        document.getElementById(divId).style.visibility = "hidden";
	} else if (ns6) {
        document.all[divId].style.visibility = "hidden";
	}
}
function maximizeAu(divId) {
        if (ns4) {
        document.layers[divId].visibility = "show";
        } else if (ns6 || ie5) {
        document.getElementById(divId).style.visibility = "visible";
        } else if (ns6) {
        document.all[divId].style.visibility = "visible";
	}
}
function closeAu(divId) {
	minimizeAu('y_gc_div_au1');
	minimizeAu('y_gc_div_mast');
	if (ie4) {
	document.all[divId].style.visibility = "hidden";
	} else if (ns4) {
	document.layers[divId].visibility = "hide";
	} else if (ns6) {
	document.getElementById(divId).style.visibility = "hidden";
	}
}
function mmAction(divId) {
	if (ie4) {
		auVis = (document.all[divId].style.visibility == "visible") ? true : false;
	} else if(ns4) {
		auVis = (document.layers[divId].visibility == "show") ? true : false;
	} else {
		auVis = (document.getElementById(divId).style.visibility == "visible") ? true : false;
	}
	if (auVis){minimizeAu(divId);}
	else {maximizeAu(divId);}
}
function auPos(divId)
{
	posL = findX()-197;
	if (ns4) {
	posL='1';
	document.layers[divId].visibility = "show";
	document.layers[divId].left = posL;
	} else if (ie5 || ns6) {
	document.getElementById(divId).style.visibility = "visible";
	document.getElementById(divId).style.left = posL;
	} else if (ie4) {
	document.all[divId].style.visibility = "visible";
	document.all[divId].style.left = posL;
	}
}
function isFrameset()
{
	var numFr=0;
	numFr=frames.length;
	numFr=numFr-document.getElementsByTagName("iframe").length;
	isFr=(numFr>0) ? true : false;
	return isFr; 
}
function divAu()
{
	if (noFrameAu()) {
		if (!isFrameset()) {
			if (inFrame()) {
				if (checkFrame()) {
					writeAu();
					auWritten=true;
					rlPg(true);
				}
			} else {
				writeAu();
				auWritten=true;
				rlPg(true);
			}
		}
	}
}
function inFrame() {
	inFr=(parent.frames.length != 0) ? true : false;
	return inFr;
}
function findX()
{
	var x=0;
	if (self.innerWidth){x = self.innerWidth;} // ns
	else if (document.documentElement && document.documentElement.clientHeight){x = document.documentElement.clientWidth;} // ie6 strict
	else if (document.body){x = document.body.clientWidth;} // other ie
	return x;
}
function findY()
{
	var y=0;
	if (self.innerHeight){y=self.innerHeight;} // ns
	else if (document.documentElement && document.documentElement.clientHeight){y = document.documentElement.clientHeight;} // ie6 strict
	else if (document.body){y = document.body.clientHeight;} // other ie
	return y;
}
function checkFrame() {
	chFr=(findX() > 400 && findY() > 300) ? true : false;
	return chFr;
}
divAu();
function rlPg(init) {
 	if (init==true) {
		document.pgW = findX();
		onresize=rlPg;
	} else if (window.innerWidth!=document.pgW || document.body.offsetWidth!=document.pgW) {
  	auPos('y_gc_div_adcntr');
	auPos('y_gc_div_au1');
	auPos('y_gc_div_mast');
  }
}
if (auWritten){ setTimeout ("minimizeAu('y_gc_div_au1')", 30000); }
