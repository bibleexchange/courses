function YADopenWindow(x){
if (yad_target=="_top"){top.location=yad_URL[x];}
else {window.open(yad_URL[x]);}
}

var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
	plugin = parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= 6;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && navigator.userAgent.indexOf("Windows")>=0) {
	document.write('<SCRIPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6")))\n');
	document.write('</SCRIPT\> \n');
}
if ( plugin ) {
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
	document.write(' ID=flash5clickTAG WIDTH='+yad_width+' HEIGHT='+yad_height+'>');
	document.write('<PARAM NAME=movie VALUE="'+ yad_flashfile +'"><param name=wmode value=opaque><PARAM NAME=loop VALUE=false><PARAM NAME=quality VALUE=high>  ');
	document.write('<EMBED src="'+ yad_flashfile +'" loop=false wmode=opaque quality=high ');
	document.write(' swLiveConnect=FALSE WIDTH='+yad_width+' HEIGHT='+yad_height+'');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
	document.write('</EMBED>');
	document.write('</OBJECT>');
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
	document.write('<A HREF="'+ yad_altURL +'" target="'+yad_target+'"><IMG SRC="'+ yad_altimg +'" WIDTH='+yad_width+' HEIGHT='+yad_height+' BORDER=0></A>');
}
