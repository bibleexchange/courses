<!--

function ylib_Browser()
{
	d=document;
	this.agt=navigator.userAgent.toLowerCase();
	this.major = parseInt(navigator.appVersion);
	this.dom=(d.getElementById)?1:0;
	this.ns=(d.layers);
	this.ns4up=(this.ns && this.major >=4);
	this.ns6=(this.dom&&navigator.appName=="Netscape");
	this.op=(window.opera? 1:0);
	this.ie=(d.all);
	this.ie4=(d.all&&!this.dom)?1:0;
	this.ie4up=(this.ie && this.major >= 4);
	this.ie5=(d.all&&this.dom);
	this.win=((this.agt.indexOf("win")!=-1) || (this.agt.indexOf("16bit")!=-1));
	this.mac=(this.agt.indexOf("mac")!=-1);
};

var oBw = new ylib_Browser();

function ylib_getObj(id,d)
{
	var i,x;  if(!d) d=document; 
	if(!(x=d[id])&&d.all) x=d.all[id]; 
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][id];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=ylib_getObj(id,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(id); 
	return x;
};

function ylib_getH(o) { return (oBw.ns)?((o.height)?o.height:o.clip.height):((oBw.op&&typeof o.style.pixelHeight!='undefined')?o.style.pixelHeight:o.offsetHeight); };
function ylib_setH(o,h) { if(o.clip) o.clip.height=h; else if(oBw.op && typeof o.style.pixelHeight != 'undefined') o.style.pixelHeight=h; else o.style.height=h; };
function ylib_getW(o) { return (oBw.ns)?((o.width)?o.width:o.clip.width):((oBw.op&&typeof o.style.pixelWidth!='undefined')?w=o.style.pixelWidth:o.offsetWidth); };
function ylib_setW(o,w) { if(o.clip) o.clip.width=w; else if(oBw.op && typeof o.style.pixelWidth != 'undefined') o.style.pixelWidth=w; else o.style.width=w; };
function ylib_getX(o) { return (oBw.ns)?o.left:((o.style.pixelLeft)?o.style.pixelLeft:o.offsetLeft); };
function ylib_setX(o,x) { if(oBw.ns) o.left=x; else if(typeof o.style.pixelLeft != 'undefined') o.style.pixelLeft=x; else o.style.left=x; };
function ylib_getY(o) { return (oBw.ns)?o.top:((o.style.pixelTop)?o.style.pixelTop:o.offsetTop); };
function ylib_setY(o,y) { if(oBw.ns) o.top=y; else if(typeof o.style.pixelTop != 'undefined') o.style.pixelTop=y; else o.style.top=y; };
function ylib_getPageX(o) { var x=0; if(oBw.ns) x=o.pageX; else { while(eval(o)) { x+=o.offsetLeft; o=o.offsetParent; } } return x; };
function ylib_getPageY(o) { var y=0; if(oBw.ns) y=o.pageY; else { while(eval(o)) { y+=o.offsetTop; o=o.offsetParent; } } return y; };
function ylib_getZ(o) { return (oBw.ns)?o.zIndex:o.style.zIndex; };
function ylib_moveTo(o,x,y) { ylib_setX(o,x);ylib_setY(o,y); };
function ylib_moveBy(o,x,y) { ylib_setX(o,ylib_getPageX(o)+x);ylib_setY(o,ylib_getPageY(o)+y); };
function ylib_setZ(o,z) { if(oBw.ns)o.zIndex=z;else o.style.zIndex=z; };
function ylib_show(o,disp) { (oBw.ns)? '':(!disp)? o.style.display="inline":o.style.display=disp; (oBw.ns)? o.visibility='show':o.style.visibility='visible'; };
function ylib_hide(o,disp) { (oBw.ns)? '':(arguments.length!=2)? o.style.display="none":o.style.display=disp; (oBw.ns)? o.visibility='hide':o.style.visibility='hidden'; };
function ylib_setStyle(o,s,v) { if(oBw.ie5||oBw.dom) eval("o.style."+s+" = '" + v +"'"); };
function ylib_getStyle(o,s) { if(oBw.ie5||oBw.dom) return eval("o.style."+s); };
function ylib_addEvt(o,e,f,c){ if(o.addEventListener)o.addEventListener(e,f,c);else if(o.attachEvent)o.attachEvent("on"+e,f);else eval("o.on"+e+"="+f) };
function ylib_writeHTML(o,h) { if(oBw.ns){var doc=o.document;doc.write(h);doc.close();return false;} if(o.innerHTML)o.innerHTML=h; };

function ylib_insertHTML(o,h,w)
{
	if(oBw.op) return;
	if(o.insertAdjacentHTML)
	{ 
		o.insertAdjacentHTML(w,h);
		return;
	}
	if(oBw.ns)
	{
		ylib_writeHTML(o,h);
		return;
	}
	var r = o.ownerDocument.createRange();
	r.setStartBefore(o);
	var frag = r.createContextualFragment(h);
	ylib_insertObj(o,w,frag);
};

function ylib_insertObj(o,w,node)
{
	switch(w)
	{
		case 'beforeBegin':
			o.parentNode.insertBefore(node,o);
		break;

		case 'afterBegin':
			o.insertBefore(node,o.firstChild);
		break;

		case 'beforeEnd':
			o.appendChild(node);
		break;

		case 'afterEnd':
			if (o.nextSibling) o.parentNode.insertBefore(node,o.nextSibling);
			else o.parentNode.appendChild(node);
		break;
	}
};

var YLIB_SHIFT_KEYCODE = 16;
var YLIB_CTRL_KEYCODE = 17;
var YLIB_ALT_KEYCODE = 18;
var YLIB_SHIFT = "shift";
var YLIB_CTRL = "ctrl";
var YLIB_ALT = "alt";

ylib_keyevt.count=0;

function ylib_keyevt(elm)
{
	this.id = "keyevt"+ylib_keyevt.count++;
	eval(this.id + "=this");
	this.keys = new Array();
	this.shift=0;
	this.ctrl=0;
	this.alt=0;
	this.addKey = ylib_addKey;
	this.keyevent = ylib_keyevent;
	this.checkModKeys = ylib_checkModKeys;
};

function ylib_addKey(cdom,cns4,a,m)
{
	if(oBw.ie||oBw.dom) this.keys[cdom] = [a,m];
	else this.keys[cns4] = [a,m];
};

var YLIB_COUNT=0;

function ylib_keyevent(evt)
{
	if(oBw.ie||oBw.op) evt=event;
	var k = (oBw.ie||oBw.op||oBw.ns6)? evt.keyCode:evt.which;
	this.checkModKeys(evt,k);
	if(this.keys[k]==null) return false;
	var m = this.keys[k][1];
	if((this.shift && (m.indexOf(YLIB_SHIFT) != -1) || !this.shift && (m.indexOf(YLIB_SHIFT) == -1)) && (this.ctrl && (m.indexOf(YLIB_CTRL) != -1) || !this.ctrl && (m.indexOf(YLIB_CTRL) == -1)) && (this.alt && (m.indexOf("alt") != -1) || !this.alt && (m.indexOf("alt") == -1)))
	{
		var a = this.keys[k][0];
		a = eval(a); 
		if(typeof a == "function") a();
	}
};

function ylib_checkModKeys(e,k)
{
	if(oBw.dom)
	{ 
		this.shift = e.shiftKey;
		this.ctrl = e.ctrlKey;
		this.alt = e.altKey;
	}
	else
	{
		// for opera
		this.shift = (k==YLIB_SHIFT_KEYCODE) ? 1:0;
		this.ctrl = (k==YLIB_CTRL_KEYCODE) ? 1:0;
		this.alt = (k==YLIB_ALT_KEYCODE) ? 1:0;
	}
};

var oKey = new ylib_keyevt();

/* Buttons */

function ClickButton(p_sButtonId, p_sHiddenFieldId, p_oClickHandler)
{
	var oButton = document.getElementById(p_sButtonId);

	if(oButton && oButton.form)
	{
		var oHiddenField = document.getElementById(p_sHiddenFieldId);

		if(oHiddenField)
		{
			oButton.HiddenField = oHiddenField;
			oButton.HiddenField.value = "";
			oButton.onclick = function () {
				if(typeof p_oClickHandler != 'undefined' && p_oClickHandler) p_oClickHandler();
				this.HiddenField.value = this.value;
				this.form.submit();
			};
			
			return oButton;
		}
		else return false;
	}
	else return false;
};

function Menu_Click(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	var oSender = p_oEvent ? oEvent.target : oEvent.srcElement;

	if(p_oEvent) oEvent.stopPropagation();
	else oEvent.cancelBubble = true;
	
	this.Sender = oSender;
	this.Event = oEvent;
	
	if(typeof this.ClickHandler != 'undefined') this.ClickHandler();
};

function Menu_MouseOver(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	var oSender = p_oEvent ? oEvent.target : oEvent.srcElement;
	
	if(oSender.tagName == 'LI') oSender.className = 'hover';
	else if(oSender.tagName == 'A') oSender.parentNode.className = 'hover';
	else return false;
};

function Menu_MouseOut(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	var oSender = p_oEvent ? oEvent.target : oEvent.srcElement;
	
	if(oSender.tagName == 'LI') oSender.className = '';
	else if(oSender.tagName == 'A') oSender.parentNode.className = '';
	else return false;	
};

function Button_Click(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	var oSender = p_oEvent ? oEvent.target : oEvent.srcElement;

	if(p_oEvent) oEvent.stopPropagation();
	else oEvent.cancelBubble = true;

	this.Event = oEvent;
	this.Sender = oSender;

	HideMenu();
	this.Menu.Button = this;
	g_oMenu = this.Menu;

	if(typeof this.ClickHandler != 'undefined') this.ClickHandler();
	else g_oMenu.Show();
	
	document.onclick = Document_Click;
};

function ButtonMenu(p_sMenuId, p_oClickHandler)
{
	var oMenu = document.getElementById(p_sMenuId);

	if(oMenu)
	{
		if(typeof p_oClickHandler != 'undefined') oMenu.ClickHandler = p_oClickHandler;
			
		oMenu.Show = function () { 

			if(document.all) this.style.width = this.offsetWidth+'px';

			var nTop = ylib_getPageY(this.Button) + this.Button.offsetHeight;
			var nLeft = ylib_getPageX(this.Button);
			
			if(oBw.ie && oBw.mac)
			{
				nTop -= 4;
				nLeft -= 6;	
			}

			this.style.top = nTop+'px';
			this.style.left = nLeft+'px';
			this.style.visibility = 'visible'; 

		};
			
		oMenu.onclick = Menu_Click;
		
		if(document.all)
		{
			oMenu.onmouseover = Menu_MouseOver;
			oMenu.onmouseout = Menu_MouseOut;
		}

		return oMenu;
	}
	else return false;
};

function Button(p_sButtonId)
{
	var oButton = document.getElementById(p_sButtonId);
	
	if(oButton)
	{
		oButton.onclick = Button_Click;
		return oButton;
	}
	else return false;
};

function MenuButton()
{
	var nArguments = arguments.length;
	
	function __MenuButton_TwoArguments(p_sButtonId, p_sMenuId)
	{
		var oButton = new Button(p_sButtonId);
	
		if(oButton)
		{
			oButton.Menu = new ButtonMenu(p_sMenuId);
			return oButton;
		}
		else return false;	
	};
	
	function __MenuButton_ThreeArguments(p_sButtonId, p_sMenuId, p_oMenuClickHandler)
	{
		var oButton = new Button(p_sButtonId);
			
		if(oButton)
		{
			oButton.Menu = new ButtonMenu(p_sMenuId, p_oMenuClickHandler);
			return oButton;
		}
		else return false;
	};
	
	function __MenuButton_FourArguments(p_sButtonId, p_oButtonClickHandler, p_sMenuId, p_oMenuClickHandler)
	{
		var oButton = new Button(p_sButtonId);
			
		if(oButton && typeof p_oButtonClickHandler != 'undefined')
		{
			oButton.ClickHandler = p_oButtonClickHandler;
			oButton.Menu = new ButtonMenu(p_sMenuId, p_oMenuClickHandler);
			return oButton;
		}
		else return false;
	};

	if(nArguments == 2) return __MenuButton_TwoArguments(arguments[0],arguments[1]);
	else if(nArguments == 3) return __MenuButton_ThreeArguments(arguments[0],arguments[1],arguments[2]);
	else if(nArguments == 4) return __MenuButton_FourArguments(arguments[0],arguments[1],arguments[2],arguments[3]);
	else return false;
};

/* Mail + PIM Tabs */

function Tab_MouseOver()
{
	if(!this.Selected) this.className = "hover";
	return false;
};

function Tab_MouseOut()
{
	if(!this.Selected) this.className = "";
	return false;	
};

function PIMMenu_Click(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	if(p_oEvent) oEvent.stopPropagation();
	else oEvent.cancelBubble = true;
	if(oEvent && oEvent.target && oEvent.target.parentNode && oEvent.target.parentNode.tagName == "A") window.location = oEvent.target.parentNode.href;
};

function Arrow_Click(p_oEvent)
{
	document.Selects = document.getElementsByTagName('select');

	if(document.Selects[0])
	{
		var nSelects = document.Selects.length-1;
		for(var i=nSelects;i>=0;i--) document.Selects[i].style.visibility = 'hidden';
	}
	
	var oEvent = p_oEvent ? p_oEvent : window.event;
	
	if(p_oEvent) oEvent.stopPropagation();
	else oEvent.cancelBubble = true;
	
	HideMenu();
	
	var oTab = this.parentNode.parentNode;
	var nTop = (oTab.offsetTop+oTab.parentNode.offsetHeight);
	var sTop = ((oTab.Selected) ? (nTop+2) : (nTop-1)) + "px";

	g_oMenu = document.getElementById(this.href.split('#')[1]);
	g_oMenu.style.top = sTop;
	g_oMenu.style.left = oTab.offsetLeft+"px";

	g_oMenu.onclick = PIMMenu_Click;
	g_oMenu.style.visibility = "visible";

	document.onclick = Document_Click;	

	return false;
};

function Tabs_Init()
{
	var oMailTab = document.getElementById('mailtab');
	var oAddressBookTab = document.getElementById('addressbooktab');
	var oCalendarTab = document.getElementById('calendartab');
	var oNotepadTab = document.getElementById('notepadtab');		
	
	if(oMailTab)
	{
		oMailTab.getElementsByTagName("a")[1].onclick = Arrow_Click;
		oMailTab.onmouseover = Tab_MouseOver;
		oMailTab.onmouseout = Tab_MouseOut;
		oMailTab.Selected = (oMailTab.className == 'selected' || oMailTab.className == 'first selected') ? true : false;
	}

	if(oAddressBookTab)
	{
		oAddressBookTab.getElementsByTagName("a")[1].onclick = Arrow_Click;
		oAddressBookTab.onmouseover = Tab_MouseOver;
		oAddressBookTab.onmouseout = Tab_MouseOut;
		oAddressBookTab.Selected = (oAddressBookTab.className == 'selected' || oAddressBookTab.className == 'first selected') ? true : false;
	}

	if(oCalendarTab)
	{
		oCalendarTab.getElementsByTagName("a")[1].onclick = Arrow_Click;
		oCalendarTab.onmouseover = Tab_MouseOver;
		oCalendarTab.onmouseout = Tab_MouseOut;
		oCalendarTab.Selected = (oCalendarTab.className == 'selected' || oCalendarTab.className == 'first selected') ? true : false;
	}

	if(oNotepadTab)
	{
		oNotepadTab.getElementsByTagName("a")[1].onclick = Arrow_Click;
		oNotepadTab.onmouseover = Tab_MouseOver;
		oNotepadTab.onmouseout = Tab_MouseOut;
		oNotepadTab.Selected = (oNotepadTab.className == 'selected' || oNotepadTab.className == 'first selected') ? true : false;
	}

	return false;
};

function HideMenu()
{
	if(typeof g_oMenu != 'undefined' && g_oMenu)
	{
		if(g_oMenu.Hide) g_oMenu.Hide();
		else g_oMenu.style.visibility = 'hidden';
		
		g_oMenu = null;
		document.onclick = null;
		window.onresize = null;
	}
	else return;
};

function Document_Click()
{
	if(document.Selects)
	{
		var nSelects = document.Selects.length-1;
		for(var i=nSelects;i>=0;i--) document.Selects[i].style.visibility = 'visible';
	}

	HideMenu();
};

/* Left navigation */

function LeftNav_Click(p_oEvent)
{
	var oEvent = p_oEvent ? p_oEvent : window.event;
	var oSender = p_oEvent ? oEvent.target : oEvent.srcElement;
    var oAnchor = oSender.getElementsByTagName('a')[0];

	if(oSender.tagName == 'LI' && oAnchor)
    {
        var oWindow = (oAnchor.target == "_top") ? window.parent : window;
        oWindow.document.location = oAnchor.href;
    }
};

function LeftNav_MouseOver(p_oEvent)
{
    var oEvent = p_oEvent ? p_oEvent : window.event;
    var oTarget = oEvent.target ? oEvent.target : oEvent.srcElement;
    oTarget = oTarget.nodeType != 1 ? oTarget.parentNode : oTarget;

	var oLI;
	
	if(oTarget.tagName == "LI") oLI = oTarget;
	else if(oTarget.parentNode.tagName == "LI") oLI = oTarget.parentNode;
	else if(oTarget.parentNode.parentNode.tagName == "LI") oLI = oTarget.parentNode.parentNode;

    if(oLI) {

        var bEmptyLink = false;
    
        if(oTarget.tagName == "A")
        {
            if(oTarget.parentNode.tagName == "SPAN")
            {
                oTarget.style.textDecoration = 'underline';
                bEmptyLink = true;
            }
        }
    
    	if(oLI.className != 'selected')
    	{
    		oLI.previousClassName = oLI.className;
    		oLI.className = (oLI.previousClassName.length > 0) ? oLI.previousClassName+' hover' : 'hover';
            oLI.firstChild.style.textDecoration = bEmptyLink ? 'none' : 'underline';
    	}
    
    }
};

function LeftNav_MouseOut(p_oEvent)
{
    var oEvent = p_oEvent ? p_oEvent : window.event;
    var oTarget = oEvent.target ? oEvent.target : oEvent.srcElement;
    oTarget = oTarget.nodeType != 1 ? oTarget.parentNode : oTarget;

	var oLI;
	
	if(oTarget.tagName == "LI") oLI = oTarget;
	else if(oTarget.parentNode.tagName == "LI") oLI = oTarget.parentNode;
	else if(oTarget.parentNode.parentNode.tagName == "LI") oLI = oTarget.parentNode.parentNode;

    if(oLI) {
    
        var bEmptyLink = false;
    
        if(oTarget.tagName == "A")
        {
            if(oTarget.parentNode.tagName == "SPAN")
            {
                oTarget.style.textDecoration = 'none';
                bEmptyLink = true;
            }
        }
    		
    	if(oLI.className != 'selected')
    	{
    		var bPreviousClassName = ((typeof oLI.previousClassName != 'undefined') && (oLI.previousClassName.length > 0)) ? true : false;
    		var sClassName = (bPreviousClassName) ? oLI.previousClassName+' hover':'hover';
    		if(oLI.className == sClassName) oLI.className = (bPreviousClassName) ? oLI.previousClassName:'';
            oLI.firstChild.style.textDecoration = 'none';
    	}
        
    }
};

function LeftNav(p_sNavId)
{
	var oLeftNav = document.getElementById(p_sNavId);
	if(oLeftNav)
	{
	    var aULs = oLeftNav.getElementsByTagName('ul');

		if(aULs[0])
		{
			aULs[0].onclick = LeftNav_Click;
			aULs[0].onmouseover = LeftNav_MouseOver;
			aULs[0].onmouseout = LeftNav_MouseOut;
		}
		else return;

		if(aULs[1])
		{
			aULs[1].onclick = LeftNav_Click;
			aULs[1].onmouseover = LeftNav_MouseOver;
			aULs[1].onmouseout = LeftNav_MouseOut;
		}
	}
	else return false;
};

function DestinationFolder_Click()
{
	var oSender = this.Sender;
	var oLI = false;

	if(!oSender.tagName) oLI = oSender.parentNode;
	else if(oSender.tagName == 'LI') oLI = oSender;
	else if(oSender.parentNode.tagName == 'LI') oLI = oSender.parentNode;

	if(oLI)
	{
		var sFolderName = oLI.getAttribute( "iname" );
		var oForm = this.Button.form;
		var bNewFolder = parseInt(oLI.value) == 0 ? true : false;

		if(bNewFolder)
		{
			var sNewFolderName = window.prompt(oForm.newfoldermessage.value,'');
			
			if(sNewFolderName) sNewFolderName = sNewFolderName;
			else return false;

			if(sNewFolderName != null && sNewFolderName != 'null' && sNewFolderName.length != 0)
			{
				oForm.NewFol.value = sNewFolderName;
				oForm.destBox.value = '@NEW';
				oForm.MOV.value = '1';
				oForm.submit();
			}
			else return false;
		}
		else
		{
			oForm.destBox.value = sFolderName;
			oForm.MOV.value = '1';
			oForm.submit();
		}
	}
	else {
		return false;
	}
};

function Window_Resize()
{
	g_oMenu.style.left = ((ylib_getPageX(g_oMenu.Button)+g_oMenu.Button.offsetWidth)-g_oMenu.Button.Menu.offsetWidth)+'px';
}

function Move_Click()
{
	g_oMenu.style.visibility = 'visible';

	if(!this.Configured)
	{
		if(g_oMenu.offsetHeight > 250)
		{
			g_oMenu.style.width = g_oMenu.offsetWidth+20+"px";
			g_oMenu.className += ' overflow';

			if(document.all && !window.showModelessDialog)
			{
				g_oMenu.style.top = '-1000px';
				g_oMenu.style.left = '-1000px';
			}
		}
		else g_oMenu.style.width = g_oMenu.offsetWidth+"px";

		document.onclick = Document_Click;
		window.onresize = Window_Resize;
		this.Configured = true;
	}

	var nTop = (ylib_getPageY(this) + this.offsetHeight);
	var nLeft = ylib_getPageX(this);
	
	if(oBw.ie && oBw.mac)
	{
		nTop -= 4;
		nLeft -= 6;	
	}
	
	g_oMenu.style.top = nTop+'px';
	g_oMenu.style.left = nLeft+'px';
};

function PersonalFoldersDisplayToggle_Click()
{
	var sDoneURL = (g_oDoneURL) ? g_sDoneURL : document.URL;
	window.open("/" + g_sYMURI + "/Welcome?pers=1&.done=" + escape(sDoneURL) + "&" + g_sURLExtras, '_self');
};

function MySearchesDisplayToggle_Click()
{
	var sDoneURL = (g_oDoneURL) ? g_sDoneURL : document.URL;
	window.open("/" + g_sYMURI + "/Welcome?searches=1&.done=" + escape(sDoneURL) + "&" + g_sURLExtras, '_self');
};

function AddFolderControl_Click()
{
	var nn = window.prompt(g_sNewFolderMessage,'');

	if(nn != null && nn != 'null' && nn != '')
	{
		var nn_escaped = '';
		var nn_len = nn.length;

		for(i=0;i<nn_len;i++)
		{
			var nn_asc = nn.charCodeAt(i);
			if (nn_asc == 43) nn_escaped += '%2b';
			else if(nn_asc>128) nn_escaped += nn.charAt(i);
			else nn_escaped += escape(nn.charAt(i));
		}
	
		var sURL = '/'+g_sYMURI+'/Folders?ADD=1&Name=' + nn_escaped + '&.crumb='+g_sFoldersCrumb+'&.done=' + g_sAddFolderDoneURL + '&' + g_sURLExtras;
		window.open(sURL, '_self');
	}
};

function LHCol_Init()
{
	g_oAddFolderDoneURL = document.getElementById('addfolderdoneurl');
	g_sAddFolderDoneURL = (g_oAddFolderDoneURL) ? g_oAddFolderDoneURL.value : escape(document.URL);

	g_oDoneURL = document.getElementById('doneurl');
	if(g_oDoneURL) g_sDoneURL = g_oDoneURL.value;

	g_oYMURI = document.getElementById('ymuri');
	if(g_oYMURI) g_sYMURI = g_oYMURI.value;
	
	g_oURLExtras = document.getElementById('urlextras');
	if(g_oURLExtras) g_sURLExtras = g_oURLExtras.value;

	g_oNewFolderMessage = document.getElementById('newfoldermessage');
	if(g_oNewFolderMessage) g_sNewFolderMessage = g_oNewFolderMessage.value;
	
	g_oFoldersCrumb = document.getElementById('folderscrumb');
	if(g_oFoldersCrumb) g_sFoldersCrumb = g_oFoldersCrumb.value;

	var oPersonalFoldersDisplayToggle = document.getElementById('personalfoldersdisplaytoggle');
	if(oPersonalFoldersDisplayToggle)
	{
		oPersonalFoldersDisplayToggle.onclick = PersonalFoldersDisplayToggle_Click;
		oPersonalFoldersDisplayToggle.onmouseover = function () { this.className = 'hover'; };
		oPersonalFoldersDisplayToggle.onmouseout = function () { this.className = ''; };	
	}

	var oMSDisplayToggle = document.getElementById('mysearchesdisplaytoggle');
	if(oMSDisplayToggle)
	{
		oMSDisplayToggle.onclick = MySearchesDisplayToggle_Click;
		oMSDisplayToggle.onmouseover = function () { this.className = 'hover'; };
		oMSDisplayToggle.onmouseout = function () { this.className = ''; };	
	}
	
	var oAddFolderControl = document.getElementById('addfoldercontrol');
	
	if(oAddFolderControl)
	{
		oAddFolderControl.onclick = AddFolderControl_Click;
		oAddFolderControl.onmouseover = function () { this.className = 'hover'; };
		oAddFolderControl.onmouseout = function () { this.className = ''; };
	}
};

//-->
var gICCookieName = "ym.IC2";
var gFramesetCookieName = "ym.FR2";
var gReloadCookieName = "ym.RL2";
var ymDomain = "mail.yahoo.com";

function setICCookie(val)
{
	document.cookie = gICCookieName + "=" + escape(val) + ";domain=" + ymDomain ;
}

function getICCookie()
{
	return getCookie(gICCookieName);
}
  
function getFramesetCookie()
{
      return getCookie(gFramesetCookieName);
}

function setFramesetCookie()
{

	var val = window.location.pathname + window.location.search;
          
	document.cookie = gFramesetCookieName + "=" + escape(val) + ";domain=" + ymDomain ;
}

function removeCookie(name)
{
	document.cookie = name + "=" + "" 
					+ ";expires=" +  new Date(70,0,1) 
					+ ";domain=" + ymDomain;
}
 
function getCookie(cookiename)
{
    var i = document.cookie.indexOf(cookiename + "=");
    if( i == -1 ) return null;

    i+= cookiename.length; i++;
	var len = i+cookiename.length+1;

    var f = document.cookie.indexOf(";",i);
    if( f == -1) 
        f = document.cookie.length;

	return unescape( document.cookie.substring(i,f) );
}

function setCookie(name, val)
{
	document.cookie = name + "=" + escape(val) + ";domain=" + ymDomain ;
}

var gTargetsFixed = false;
if( typeof icjsdis == "undefined" || typeof icjsdis == "unknown" )
{
	icjsdis = false;
}

if( self.name == "ymailmain" && !icjsdis )
{
	document.onkeydown = fixTargets;
	document.onmousedown = fixTargets;
}

function fixTargets(evt) 
{ 
    try
    {
	if( !document.body ) return;

	//citation: "Dynamic HTML: the Definitive Reference, by Goodman, Publ O'Reilly, 2nd ed)
	evt = (evt) ? evt : ( (event) ? event : null );
	if(evt)
	{
		var elem = ((evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null));
		if(elem)
		{
	 		if( isLogout(elem) )
				removeAllFramesetCookies();
			if( document.location.href.indexOf( "/instacompose" ) > -1 )
				fixupMailAnchorByTag( elem );
		}
	}

	if ( gTargetsFixed ) return;

	gTargetsFixed = true;
	
	fixupTargetByTag( document.body, "A", adTestAnchor )
	fixupTargetByTag( document.body, "FORM", adTestForm )
    }
    catch(err) {}
}

function isLogout(srcElement)
{
	//logout links
	if(srcElement.tagName == "A" || srcElement.tagName == "a" )
	{	
		if( srcElement.href )
		{
			var theLcHref = srcElement.href.toLocaleLowerCase();
			//ad-served
			if( srcElement.href.indexOf( "S=1505" ) > -1 )
			{
				if( theLcHref.indexOf("login?logout=1") > -1 ) 
					return true;
			}
			else if( theLcHref.indexOf("yahoo.com/ym") > -1 
				&& theLcHref.indexOf("logout") > -1 
				&& theLcHref.indexOf("yahoo.com/ym") < theLcHref.indexOf("logout") )
				return true; 
		}
	
	}
	return false;
}

function removeAllFramesetCookies()
{
	removeCookie(gICCookieName);
	removeCookie(gFramesetCookieName);
	removeCookie(gReloadCookieName);
}

function adTestAnchor(theTag)
{
	if( theTag.href )
		if( theTag.href.indexOf( "S=1505" )>0 )
			return true;

	return false;
}

function adTestForm(theTag)
{
	if( theTag.action )
		if( theTag.action.indexOf( "S=1505" )>0 )
			return true;

	return false;
}

function fixupMailAnchorByTag( srcElem )
{
	if(srcElem.tagName == "A" || srcElem.tagName == "a" )
	{
		if( srcElem.href )
		{
			var theHref = srcElem.href.toLocaleLowerCase();

			if( (srcElem.href.indexOf( "YY=" ) > -1) &&
			    (srcElem.href.indexOf( "javascript:" ) == -1) )
			{
				var newDate = new Date();
				var r = newDate.getTime();
				srcElem.href = srcElem.href + "&rand=" + r;
				return true;
			}
		}
	}
	return false;
}

function fixupTargetByTag( scope, tagtype, testFn )
{
	var tags = scope.getElementsByTagName(tagtype);
	for(var i = 0; i < tags.length ; i++)
	{
		if( testFn( tags[i] ) )
		{
			//don't mess up things that want a new window
			if( tags[i].target && tags[i].target == "_blank" )
				continue;

			tags[i].target= "_top";
		}
	}
}

function safePutInFrameset( frameName, toploc )
{
	if(frameName != "ymailmain" && frameName != "ymailcompose")
	{
        	var prevCookieVal = getFramesetCookie();
        	if( prevCookieVal && prevCookieVal != "" )
		{
			removeCookie(gFramesetCookieName);
        		return;
		}

		if(frameName != "top")
        		setFramesetCookie();

        	top.location.href = toploc;
	}
}

function safeReloadFrameset(toploc)
{
	removeCookie(gFramesetCookieName);

	var secondTrip = getCookie(gReloadCookieName);
	if( secondTrip != null && secondTrip != "" )
	{
		removeCookie(gReloadCookieName);
		return;
	}

	setCookie(gReloadCookieName,"true");
	top.location.href = toploc; 
}
