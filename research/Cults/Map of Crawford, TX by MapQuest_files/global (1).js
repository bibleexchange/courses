/**
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * MapQuest Global JavaScript
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * common js for site
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * TOC
 * - default variables
 * - get element by id
 * - swap image
 * - add event
 * - remove event
 * - get event data
 * - set cookie
 * - read cookie
 * - delete cookie
 * - get browser info
 * - get browser size
 * - http xml request
 * - load js
 * - set focus
 * - param exists
 * - autofill
 * - clear settings
 * - new window pop-up
 * - default text
 * - maxlength
 * - initialization
 * - depreciated js
 *   - state pop-up
 *
 */

/**
 * DEFAULT VARIABLES
 */
	
document.cookie = "JSEnabled=1"; //needed to make sure browser has JS on
var artUrl      = "http://cdn.mapquest.com/mqsite/"; //default for non-map art assets

/**
 * GET ELEMENT BY ID
 */
function getElementById(fId)
{
    if(document.getElementById(fId))
    {
        return document.getElementById(fId);
    }
    return null;
} //getElementById(fId)

/**
 * SWAP IMAGE
 * @replace image
 */
function swapImage(fUrl, fId)
{
	var element = getElementById(fId);
	if(element)
	{
		element.src = fUrl;
	}
}//swapImage()

/**
 * ADD EVENT
 * @attach event listener
 */
function addEvent(fObj, fEvent, fn)
{
    if(window.opera)
    {   // opera has bad dynamic event handling
        eval("fObj.on" + fEvent + " = fn");
    }
	if (fObj.addEventListener)
	{	// moz, w3c
        ((window.opera) && (getBrowserInfo().version >= 8))?fObj.addEventListener(fEvent, fn, false):fObj.addEventListener(fEvent, fn, true);
		return true;
	}
	else if (fObj.attachEvent)
	{	// IE
		var r = fObj.attachEvent("on"+fEvent, fn);
		return r;
	}
    else
    {   //other
        fObj["on" + fEvent] = fn;
    }
}//addEvent()

/**
 * REMOVE EVENT
 * @detach event listener
 */
function removeEvent(fObj, fEvent, fn)
{
    if(window.opera)
    {   // opera has bad dynamic event handling
        eval("fObj.on" + fEvent + " = null");
    }
    if(fObj.removeEventListener)
    {   //w3c
        ((window.opera) && (getBrowserInfo().version >= 8))?fObj.removeEventListener(fEvent, fn, false):fObj.removeEventListener(fEvent, fn, true);
    }
    else if(fObj.detachEvent)
    {   //ie
        fObj.detachEvent("on" + fEvent, fn);
    }
    else
    {   //opera and other
        fObj["on" + fEvent] = null;
    }
} //removeEvent()

/**
 * GET EVENT DATA
 * @return the id that event is attached to
 */
function getEventData(evt)
{
    fEventData = new Object();
    if(document.addEventListener)
    {
        fEventData.id   = evt.target.id;
        fEventData.type = evt.type;
        fEventData.element = evt.target;
    }
    else if(window.event)
    {
        fEventData.id   = window.event.srcElement.id;
        fEventData.type = window.event.type;
        fEventData.element = window.event.srcElement;
    }
    else
    {
        return null;
    }
    return fEventData;
} //getEventData()

/**
 * SET COOKIE
 * @set fValue of cookie
 */
function setCookie(fName, fValue, fTime)
{
    var fExp    = "";
    var fDomain = (mqDomain) ? mqDomain : "";
	if (fTime)
	{
		var fDate   = new Date();
		fDate.setTime((fTime * 60 * 60 * 24 * 1000) + fDate.getTime());// # of days
        fExp        = fDate.toGMTString();
		
	}
	document.cookie = fName + "=" + fValue + ";domain="  + fDomain + ";path=/;expires=" + fExp;
}

/**
 * READ COOKIE
 * @read value of cookie
 */
function readCookie(fName)
{
    var cookieName  = fName + "=";
    var cookieArray = document.cookie.split(';');
    for(var i = 0, n = cookieArray.length; i < n; i++)
    {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ')
        {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(cookieName) == 0)
        {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
} //readCookie()

/**
 * DELETE COOKIE
 * @remove value of cookie
 */
function deleteCookie(fName)
{
    setCookie(fName, "", -1)
} //deleteCookie()

/**
 * GET BROWSER INFO
 */
function getBrowserInfo()
{
    browser                 = new Object();
    browser.name            = browser.version = browser.os = "unknown";
    var userAgent           = navigator.userAgent.toLowerCase();
    var browserListArray    = new Array("firefox", "msie", "netscape", "opera", "safari");
    var osListArray         = new Array("linux", "mac", "windows", "x11");
    for(var i = 0, n = browserListArray.length; i < n; i++)
    {   // get browser name and version
        var strPosition = userAgent.indexOf(browserListArray[i]) + 1;
        if(strPosition > 0)
        {
            browser.name = browserListArray[i]; // browser name
            
            var versionPosition = strPosition + browser.name.length;
            var incr = ((browser.name == "safari") || (userAgent.charAt(versionPosition + 4) > 0 && userAgent.charAt(versionPosition + 4) < 9)) ? 5 : 3;

            browser.version     = userAgent.substring(versionPosition, versionPosition + incr); // browser version                  
        }
    }
    for(var i = 0, n = osListArray.length; i < n; i++)
    {
        var strPosition = userAgent.indexOf(osListArray[i]) + 1;
        if(strPosition > 0)
        {
            browser.os  = osListArray[i];
        }
    }
    
    return browser;
    
} //getBrowserInfo()

/**
 * GET BROWSER SIZE
 * @get height and width of browser canvas
 */
function getBrowserSize()
{
    size = new Object();
    if (document.body.scrollHeight > document.body.offsetHeight)
    { 
	    size.width  = document.body.scrollWidth;
	    size.height = document.body.scrollHeight;
    }
    else 
    {
	    size.width  = document.body.offsetWidth;
    	size.height = document.body.offsetHeight;
    }
    if (document.body.clientWidth)
    {
        size.width  = document.body.clientWidth;
        size.height = document.body.clientHeight;
    }
    else
    {
        size.width  = document.body.offsetWidth;
    	size.height = document.body.offsetHeight;
    }
    if (document.documentElement.clientWidth)
    {	// IE6, safari, opera
        size.width  = document.documentElement.clientWidth;
        size.height = document.documentElement.clientHeight;
    }
    if(self.innerWidth)
    {
        size.width  = self.innerWidth;
        size.height = self.innerHeight;
    }
    return size;
} //getBrowserSize()


/**
 * HTTP XML REQUEST
 * @makes a XMLHttpRequest standardized for supported browsers
 */
function mqXMLHttpRequest()
{
    var request = null;
    if(window.XMLHttpRequest)
    {   //moz, safari1.2+, opera8
        try
        {
            request = new XMLHttpRequest();
            //request.overrideMimeType('text/xml');
        }
        catch(e)
        {
            request = null;
        }
    }
    else if(window.ActiveXObject)
    {   //ie5.5+
        try
        {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e)
            {
                request = null;
            }
        }
    }
    return request;
} //mqXMLHttpRequest()
var xmlHttp = mqXMLHttpRequest();


/**
 * load JS
 * @loads or reloads a .js file
 * @usage: loadJS(file name, id name, parent element)
 */
function loadJS(fFile, fId, fParent)
{	
	var parent		= document.getElementsByTagName(fParent).item(0);
	var scriptTag	= document.getElementById(fId);
	if(scriptTag)
    {
        parent.removeChild(scriptTag);
    }
	script			= document.createElement("script");
	script.src		= fFile;
	script.type		= "text/javascript";
	script.id		= fId;
	parent.appendChild(script);
}//loadJS()

/**
 * SET FOCUS
 * @set focus to element with accesskey="x"
 */
function setFocus()
{
	if (!document.getElementsByTagName) return;
	var e = document.getElementsByTagName("*");
	for (var i=0; i<e.length; i++)
	{
		var clsName = e[i];
		if(clsName.getAttribute("accesskey") == "x")
		{
			clsName.focus();
		}
	}
}//setFocus()

/**
 * PARAM EXISTS
 * @validate variables
 */
function paramExists(varname)
{
	if (typeof varname != 'undefined')
	{
		return true;
	}
	return false;
}// paramExists()

/**
 * AUTOFILL
 * @auto fill-in form field
 */
function autoFill(fId, fNextId)
{
	if (document.getElementById("r" + fId))
	{
		var idArray		= new Array("a", "csz", "c", "s", "z");
		var rId			= document.getElementById("r" + fId)
		var addr		= rId.value.split("|");
		var a 			= 0;
		for (var i = 0; i < idArray.length; i++)
		{
			if((i == 0) && (addr[i].substring(0,5) == "clear") && (addr.length < 2))
			{	//value of "clearXXX" means to clear some kind of cookie data
   				clearSettings(addr[i]);
				return;
			}
			if(document.getElementById(idArray[i] + fId))
			{
				document.getElementById(idArray[i] + fId).value = (paramExists(addr[a])) ? addr[a] : "";
				a++;
			}
		}
		if(document.getElementById(fNextId) && (addr.length > 1))
		{
			rId.options.selectedIndex = 0;
			document.getElementById(fNextId).focus();
		}
	}
	else if ((fId == 0) && document.getElementById(fNextId))
	{
		document.getElementById(fNextId).focus();
	}
}//autoFill()

/**
 * CLEAR SETTINGS
 * @remove cookies
 */
function clearSettings(fInput, fLoc)
{
	var cookieArray = new Array();
    var fText;
	switch (fInput)
	{
		case "clearAll":
			cookieArray[0]  = "locationhistory";
			cookieArray[1]  = "locationhistoryHome";
			cookieArray[2]  = "locationhistoryWork";
            fText           = "Home, Work, and Recent Search Locations";
		break;
		case "clearRecent":
			cookieArray[0]  = "locationhistory";
            fText           = "Recent Searches";
		break;
		case "clearHome":
			cookieArray[0]  = "locationhistoryHome";
            fText           = "Home Location";
		break;
		case "clearWork":
			cookieArray[0]  = "locationhistoryWork";
            fText           = "Work Location";
		break;
		default:
			return;
	}
    if(confirm("Are you sure you want to clear your " + fText + "?"))
    {
    	for (var i = 0; i < cookieArray.length; i++)
    	{
    		document.cookie = cookieArray[i] + "=;domain=" + mqDomain + ";path=/;expires=Thu,01-Jan-70 00:00:01 GMT";
    	}
        if(paramExists(fLoc))
        {
        	window.location = fLoc;
        }
        else
        {
        	window.location.reload();
        }
    }
}//clearSettings()


/**
 * NEW WINDOW POP-UP
 * @usage: URL is only required param
 * @url, window name, width, height, scrollbars (yes,no), center (true,false)
 * @<a href="http://mapquest.com" onclick="newWin(this.href,'name','400','400','no', true);return false;">link</a>
 * @<a href="javascript: newWin('http://mapquest.com','name','400','400','no', true);">link</a>
 */
function newWin(fPage, fName, fWidth, fHeight, fScroll, fCenter)
{
	if(paramExists(fPage) == false)
	{	// no url to open
		return;
	}
	if(paramExists(fName) == false)
	{	// if no name, create one
		var fName = "newWin"+ Math.random();
	}
	if(paramExists(fScroll) == false)
	{	// scrollbar defaults to 'yes'
		var fScroll = "yes";
	}
	if((paramExists(fCenter) == false) || (fCenter == false))
	{	// auto-center defaults to "false"
		var winl = wint = 10;
	}
	else if (fCenter == true)
	{
		var winl = (screen.width - fWidth) / 2;
		var wint = (screen.height - fHeight) / 2;
	}
	if(paramExists(fWidth) == false)
	{	// default width
		var fWidth = 250;
	}
	if(paramExists(fHeight) == false)
	{	// default height
		var fHeight = 600;
	}
	var winprops = 'height='+fHeight+',width='+fWidth+',top='+wint+',left='+winl+',scrollbars='+fScroll+',directories=no,resizable=yes';
	win = window.open(fPage, fName, winprops);
	if (parseInt(navigator.appVersion) >= 4)
	{
		win.window.focus();
	}
}// newWin()

/**
 * DEFAULT TEXT
 * @removes default input value on selection
 */
function defaultText(fId)
{
	var fValue = document.getElementById(fId)
	if (fValue.value == fValue.defaultValue)
	(fValue.value="")
}//defaultText()

/**
 * MAXLENGTH
 * @character count and limit
 */
function maxLength(fId, fCount)
{
    var element = document.getElementById(fId);
    if (element.value.length  >= fCount-1)
    {
        element.value = element.value.substring(0, fCount-1);
    }
}//maxLength()


/**
 * INITIALIZATION
 * @load and fire events
 */
function mqInit()
{
	setFocus();
}//mqInit()
addEvent(window, "load", mqInit);

/**
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * DEPRECIATED JS
 * may still be in use on some older sections
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 */

/**
 * STATE POP-UP
 */
function openAbbrev (idField, skipFlag) {
    var fUrl = "/maps/abbrev.adp?idfield=" + idField;
    if(skipFlag)
    {
        fUrl = fUrl + "&skip=" + skipFlag;
    }
    newWin(fUrl,'abbrevs');
}