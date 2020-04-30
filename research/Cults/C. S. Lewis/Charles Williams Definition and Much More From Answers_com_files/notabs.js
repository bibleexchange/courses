var gnurl = 'http://www.answers.com/';
var oldOMM;

function submitHandler(f_el,target,ts,p){
var val=f_el.s? f_el.s.value : f_el.value;
if (val && val.search(/\S/)!=-1) {
	if (location.pathname.indexOf("/answers/")==0 || val.search(/\+/)>=0) return true;
    if (val=="robots.txt"||val=="favicon.ico") val = '"'+val+'"';
	var func = typeof(encodeURIComponent) != "undefined" ? encodeURIComponent : escape;
	if(location.search.indexOf("gwp=13")>-1 || location.search.indexOf("ff=1")>-1){
		if (p) p+="&ff=1";
		else p="ff=1";
	}
	var url = location.protocol + "//" + (ts?ts:location.host) + "/" + func(val) + (p?"?"+p:"");
	if (target){window.open(url,target);}
	else location.href = url;
}
return false;
}
function submitHandlerIncr(fid,suffix)
{
	if (typeof enter != "undefined" && enter) {
		enter = false;
		return;
	}
	if (typeof submitHandlerIncr1 != "undefined")
		submitHandlerIncr1(fid,suffix)
	else
		return submitHandler(document.getElementById(fid).s,null,null,suffix);
}

function setFocus() {
	if (document.getElementById)
		document.getElementById("s").focus();
	return 1;
}
// google websearch page functions
function setStatus(url){window.status = url; return true;}
function clearStatus(){window.status = '';}
function gotoURL(url){window.location = url; return true;}

function addLinkTextToHref(f_el) {
var href=f_el.href;
if (href.indexOf("?") > 0)
	href += "&";
else
	href += "?";
f_el.href = href + "linktext=" + encodeURIComponent(f_el.innerHTML);
}
function showHide_TellMeAbout2(hide){
	searchBox = document.getElementById("s");
	var val=searchBox.value;
	searchBox.style.backgroundImage = ((hide || val && val.search(/\S/)!=-1) ? "url(/main/images/empty_box.gif)" : "url(/main/images/tell_me_about.gif)");
}
function prepImgs(up,su) {
answersD = new Image(); answersD.src=up+su+"/images/lookup_answers_d.gif";
answersU = new Image(); answersU.src = up+su+"/images/lookup_answers.gif";
webD = new Image(); webD.src=up+su+"/images/lookup_web_d.gif";
webU = new Image(); webU.src=up+su+"/images/lookup_web.gif";
shopD = new Image(); shopD.src=up+su+"/images/lookup_shop_d.gif";
shopU = new Image(); shopU.src=up+su+"/images/lookup_shop.gif";
return true;
}
function changeImg(obj,img,ud){obj.src=img.src}