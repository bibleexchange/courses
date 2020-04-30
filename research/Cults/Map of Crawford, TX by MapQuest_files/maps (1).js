/**
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * MapQuest Maps JavaScript
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * - interactive map functionality
 * - requires global.js is loaded first
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=
 * TOC
 * - default values
 * - page init
 * - map init
 * - map event monitor
 * - get new map
 * - toggle revert
 * - revert map
 * - click map
 * - update map click cookie
 * - swap pan
 * - get pan direction
 * - pan map
 * - set zoom level
 * - swap zoom
 * - zoom map
 * - zoom map in
 * - zoom map out
 * - resize browser check
 * - resize map widget
 * - show map widget
 * - get xy
 *
 */
 
/**
 * DEFAULT VALUES
 */
var mapData = new function()
{   
    this.minWidth               = 463;//this.width;
    this.maxWidth               = 1400;
    this.paddingWidth           = 6;
    this.interactive            = (true) ? true : false;//pf pages are static
    this.optionsWidth           = (this.interactive == true) ? 41 : 0;
    this.drawerWidth            = 0; //(getElementById("map1-drawer")) ? browser.drawerWidth : 0;
    this.sideWidth              = (this.interactive == true) ? 28 : 0; //width of east + west rails
    this.gapWidth               = (this.interactive == true) ? 5 : 0; //width of gap between zoom and pan
    this.widgetMinWidth         = this.minWidth + this.optionsWidth + this.drawerWidth + this.paddingWidth+ this.sideWidth + this.gapWidth;
    this.widgetMaxWidth         = this.maxWidth + this.optionsWidth + this.drawerWidth + this.paddingWidth+ this.sideWidth + this.gapWidth;
    this.nsSpacerOffset         = 49 + 15 + 76 + 11 + 52 - this.sideWidth; //nw, nxnw, n, nxne, ne
    this.ewSpacerOffset         = 37 + 13 + 76 + 10 + 37; //ene, exne, e, exse, ese

    this.resize                 = new function()
    {   
        monitorDelay            = 250; // wait between checks for timer resizing
        sizeChanged             = false;
    }
    this.map                    = new Object(); // for individual map data
    this.dataUpdateUrl          = "/maps/refreshmap.adp?";
    
    //browser data
    this.browser                = getBrowserInfo();
    this.browser.flexMap        = (readCookie("mapFlex")) ? readCookie("mapFlex") : 1; //0 = fixed, 1=flex
    this.browser.resizeLock     = true; // false if resize in progress
    this.browser.drawerWidth    = 208;
    
    // try to match offers height with map widget
    this.browser.matchHeight    = true;
    if(
        ((this.browser.name == "msie") && (this.browser.version < 6)) ||
        ((this.browser.name == "netscape") && (this.browser.version <= 7.0))
      )
    {
        this.browser.matchHeight    = false;
    }
    
    this.browser.bodyMargin = 40;
    if((this.browser.name == "msie") && (this.browser.version >= 5))
    {
        this.browser.bodyMargin = 20;
    }
       
    this.art                = new function()
    {
        this.url            = "http://cdn.mapquest.com/mqmap/";
        this.data           = new function()
        {
            this.n          = new Array("nxnw", "na", "n", "nb", "nxne");
            this.e          = new Array("exne", "ea", "e", "eb", "exse");
            this.w          = new Array("wxnw", "wa", "w", "wb", "wxsw");
            this.s          = new Array("sxsw", "sa", "s", "sb", "sxse");
            this.nw         = new Array("nxnwc", "nw", "wnw", "wxnwc");
            this.ne         = new Array("nxnec", "ne", "ene", "exnec");
            this.sw         = new Array("sxswc", "sw", "wsw", "wxswc");
            this.se         = new Array("sxsec", "se", "ese", "exsec");
            this.imgList    = new Array(
                            "nxnw", "na", "n", "nb", "nxne", "exne", "ea", "e", "eb", 
                            "exse", "wxnw", "wa", "w", "wb", "wxsw", "sxsw", "sa", "s",
                            "sb", "sxse", "nw", "wnw", "ne", "ene", "sw", "wsw", "se", 
                            "ese", "zin", "zout", "z1", "z2", "z3", "z4", "z5", "z6", 
                            "z7", "z8", "z9", "z10"
                            );
        }
    }     
}   // mapData
mapData.art.img = new function()
{
    var fImg;
    for(var i = 0, n = mapData.art.data.imgList.length; i < n; i++)
    {
        fImg            = mapData.art.data.imgList[i];
        if(fImg.indexOf("x") > 0)
        {   // cross pieces have 3 states: side, corner, default; set corners
            eval("this." + fImg + "cOn          = new Image();"); 
            eval("this." + fImg + "cOn").src    = mapData.art.url + fImg + "c-on"; // rollover
            eval("this." + fImg + "c            = new Image();");
            eval("this." + fImg + "c").src      = mapData.art.url + fImg; // default
        }
        if((fImg.indexOf("a") > 0) || (fImg.indexOf("b") > 0))
        {   // spacer images
            eval("this." + fImg + "On           = new Image();");
            eval("this." + fImg + "On").src     = mapData.art.url + fImg.substring(0,1) + "sp-on"; // rollover
            eval("this." + fImg + "             = new Image();");
            eval("this." + fImg).src            = mapData.art.url + fImg.substring(0,1) + "sp"; // default
        }
        else 
        {   // zoom, side and corner pieces
            if((fImg == "zin") || (fImg == "zout")|| (fImg.substring(0,1) != "z")) 
            {
                eval("this." + fImg + "On           = new Image();");   
                eval("this." + fImg + "On").src     = mapData.art.url + fImg + "-on"; // rollover
                
            }
                eval("this." + fImg + "             = new Image();"); 
                eval("this." + fImg).src            = mapData.art.url + fImg; // default
            
        }

    }
    this.mapZoomOn      = new Image();
    this.mapZoomOn.src  = mapData.art.url + "z-on"; //zoom rollover
    this.mapRevertOff      = new Image();
    this.mapRevertOff.src  = mapData.art.url + "revert-off"; //revert rollover
    this.mapRevertOn      = new Image();
    this.mapRevertOn.src  = mapData.art.url + "revert-on"; //revert rollover
    this.mapRevert      = new Image();
    this.mapRevert.src  = mapData.art.url + "revert"; //revert rollover

}

/**
 * PAGE INIT
 * @set page defaults after page load
 */
function pageInit()
{   
    var mapCount = 1;
    if(!readCookie("mapArray"))
    {   // if cookies are disabled, use non-js controls
        return;
    }
    // check for rightcolumn and sizing
    var rightColObj                     = getElementById("rightcolumn");
    mapData.browser.rightColumnWidth    = (getElementById("rightcolumn")) ? rightColObj.offsetWidth : 0;
    mapData.browser.rightPaddingWidth   = (getElementById("rightpadding")) ? getElementById("rightpadding").offsetWidth : 0;
    
    adjustRightColumn(); 
    // tag page container
    mapData.pageObj                     = getElementById("page");
    
    while(getElementById("map" + mapCount))
    {
        mapInit("map" + mapCount);
        mapCount++;
    }

}//pageInit()
addEvent(window, "load", pageInit);

/**
 * MAP INIT
 * @set defaults, initialize event listeners and rollovers for maps
 */
function mapInit(fMapId)
{
    // set map specific values
    eval("mapData.map." + fMapId + "                    = new Object()"); // create map object
    eval("mapData.map." + fMapId).revert                = 0; // set map revert to 0 = false
    eval("mapData.map." + fMapId).firstMap              = 1; 
    eval("mapData.map." + fMapId).revertZoom            = parseInt(readCookie("origZoom")) + 1; // set map revert image zoom
    eval("mapData.map." + fMapId).zoomLevel             = parseInt(readCookie("zoom")) + 1; // get zoom level value from cookie. zoom is 0 based
    getElementById(fMapId + "-mapclick").className      = ""; // make 'click on map' form visible

    getElementById(fMapId + "-revert").style.display    = "block"; // make 'revert' visible     

    //set browser resize monitor
    if(mapData.browser.flexMap == 1)
    {   //flexmap setting, start resizing monitor for browsers with itchy window.resize event handling
        var resizeType =    ((mapData.browser.name == "msie" && mapData.browser.version >= 6) || 
                            (mapData.browser.name == "safari")) ? 1 : 0;// 1 = timer, 0 = resize
        resizeBrowserCheck(resizeType);
    }
    else
    {   //display fixed size map
        
        // need init map request to set best fit in standard mode
        newMapData      = new function()
        {
            this.action = "resize";
            this.width  = mapData.minWidth;
            this.height = Math.round((this.width / 4.63) * 3.53); //get new height
        }
        getNewMap(newMapData, fMapId);
                

        showMapWidget(fMapId);
    }
    for(var h = 0, m = mapData.art.data.imgList.length; h < m; h++)
    {
        var fIdName     = fMapId + "-" + mapData.art.data.imgList[h];
        var fElementId  = getElementById(fIdName);
        addEvent(fElementId, "mouseout", mapEventMonitor);
        addEvent(fElementId, "mouseover", mapEventMonitor);
        addEvent(fElementId, "click", mapEventMonitor); //assign click events
        fElementId.setAttribute("title", fElementId.getAttribute("alt")); //set map title attr to match alt for tooltips
    }
    
    fMapObj = getElementById(fMapId);
    addEvent(fMapObj, "click", clickMap);// activate map event listener
    // assign event to update cookie for 'click on map' events
    addEvent(getElementById(fMapId + "-clickrecenterzoom"), "click", updateMapClickCookie);
    addEvent(getElementById(fMapId + "-clickrecenter"), "click", updateMapClickCookie);
}//mapInit()

/**
 * MAP EVENT MONITOR
 * @monitor events on map images and fire appropriate function
 */
function mapEventMonitor(evt)
{
    // get event data
    fEventData          = getEventData(evt);
    var eventId         = fEventData.id;
    var eventType       = fEventData.type;
    var eventMapId      = eventId.split('-')[0];    
    var eventMapTrigger = eventId.split('-')[1];

    if(eventMapTrigger.indexOf("z") >= 0)
    {   // zoom control
        var zLevel = (eventMapTrigger == ("zin" || "zout")) ? eventMapTrigger.substring(1,eventMapTrigger.length) : eventMapTrigger.substring(1);
        switch(eventType)
        {
            case "mouseover":
                switch(zLevel)
                {
                    case "out":
                    case "in":
                        swapZoomInOut(1, eventId);
                    break;
                    default:
                        swapZoom(zLevel, 1, eventId);               
                 }
            break;
            case "mouseout":
                switch(zLevel)
                {
                    case "out":
                    case "in":
                        swapZoomInOut(0, eventId);
                    break;
                    default:
                        swapZoom(zLevel, 0, eventId);               
                 }
            break;
            case "click":
                switch(zLevel)
                {
                    case "out":
                        zoomMapOut(eventMapId);
                    break;
                    case "in":
                        zoomMapIn(eventMapId);
                    break;
                    default:
                        zoomMap(zLevel, eventMapId);
                } 
                //hidePoiRollovers();
            break;
        }
    }
    else if(eventMapTrigger.indexOf("r") >= 0)
    {   //revert control
        switch(eventType)
        {
            case "mouseover":
                swapRevert(1, eventId);
            break;
            case "mouseout":
                swapRevert(0, eventId);
            break;
        }
    }
    else 
    {   //pan control
        switch(eventType)
        {
            case "mouseover":
                swapPan(eventMapTrigger, 1, eventMapId);
            break;
            case "mouseout":
                swapPan(eventMapTrigger, 0, eventMapId);
            break;
            case "click":
                panMap(eventMapTrigger,eventMapId);
                //hidePoiRollovers();
            break;
        }
    }
}//mapEventMonitor()

/**
 * GET NEW MAP
 * @retrieve map data via remote scripting callback or direct image replacement
 */
function getNewMap(fData, fMapId)
{        
    // update map image
    var fUpdateMap      = new function()
    {
        var mapDataUrl  = mapData.dataUpdateUrl;
        if(typeof(fData) == "object")
        {   //update existing map
            if(eval("mapData.map." + fMapId).firstMap == 1)
            {   //mapware needs init request when initial map
                mapDataUrl                              += "click=init&";
                mapDataUrl += "rh=" + fData.height + "&rw=" + fData.width;
            }else{
                switch(fData.action)
                {
                    case "pan":
                        mapDataUrl += "pan=" + fData.change;
                    break;
                    case "zoom":
                        mapDataUrl += "z=" + (parseInt(fData.change) - 1);//mapware zoom calls are 0 based
                    break;
                    case "center":
                        mapDataUrl += "click=" + fData.action;
                        mapDataUrl += (fData.change) ? "&zi=" + fData.change : ""; // recenter and zoom or just recenter
                        mapDataUrl += "&mqmap.x=" + fData.x + "&mqmap.y=" + fData.y;
                    break;
                    case "resize":
                        mapDataUrl += "rh=" + fData.height + "&rw=" + fData.width;
                    break;
                    case "revert":
                        mapDataUrl += "click=rev";
                    break;
                    default:
                        return;
                }
            }
            if((fData.action != "resize") && (fData.action != "revert"))
            {   // enable revert
                toggleRevert(fMapId, 1);
            }
        }
        else
        { 
          return;              
        }
        mapDataUrl += "&mapid=" + fMapId + "&rand=" + (Math.round((Math.random() * 10000)));
        if(xmlHttp == null)
        {   // browser doesn't support xmlhttp, try loadJS
            loadJS(mapDataUrl, "mapdata", "body");
        }
        else
        {
            xmlHttp.open("GET", mapDataUrl, true);
            xmlHttp.onreadystatechange  = function()
            {               
                if (xmlHttp.readyState == 4)
                {
                    if (xmlHttp.status == 200)
                    {
                        eval(xmlHttp.responseText);
                        
                    }
                    else
                    {   //request failed, try fallback
                        loadJS(mapDataUrl, "mapdata", "body");
                    }
                }
            }
            xmlHttp.send(null);
        }
    }
} //getNewMap()

/**
 * FIRST MAP LOADED
 * @toggles the first map loaded flag to 0
 */
function firstMapLoaded(fMapId){
    if(eval("mapData.map." + fMapId).firstMap == 1){
        eval("mapData.map." + fMapId).firstMap   = 0;
    }
}

/**
 * TOGGLE REVERT
 * @activate/deactivate revert map option
 */
function toggleRevert(fMapId, fAction)
{    
    if((eval("mapData.map." + fMapId + ".revert") == 1) && (fAction == 1))
    {   // revert is already enabled
        return;  
    }
    fRevertObj  = getElementById(fMapId + "-revert");
    switch(fAction)
    {
        case 0: //disable  
            var fImage  = mapData.art.url + "revert-off";
            var fAlt    = "";
            removeEvent(fRevertObj, "click", revertMap);// remove eventhandlers
            removeEvent(fRevertObj, "mouseout", swapRevert);
            removeEvent(fRevertObj, "mouseover", swapRevert);
        break;
        default: //enable
            var fImage  = mapData.art.url + "revert";
            var fAlt    = "Revert map to initial result.";
            addEvent(fRevertObj, "click", revertMap); // add eventhandlers
            addEvent(fRevertObj, "mouseout", swapRevert);
            addEvent(fRevertObj, "mouseover", swapRevert);
   }
    eval("mapData.map." + fMapId).revert    = fAction;
    var swap                                = swapImage(fImage, fMapId + "-revert");// find image and replace
    fRevertObj.setAttribute("alt", fAlt);
    fRevertObj.setAttribute("title", fAlt);
} //toggleRevert()

/**
 * REVERT MAP
 * @revert map to initial state
 */
function revertMap(evt)
{
    fEventData      = getEventData(evt);
    var fMapId      = fEventData.id.split('-')[0];
    newMapData      = new function()
    {
        this.action = "revert";
    }
    var newMap      = getNewMap(newMapData, fMapId);
    var toggle      = toggleRevert(fMapId, 0);
} //revertMap()

/**
 * CLICK MAP
 * @get xy coords of mouse click on image and update map
 */
function clickMap(evt)
{
    var fUrl;
    var xyData      = getXY(evt);  
    var formObj     = getElementById(xyData.elementId + "-mapclick");
    //get recenter data
    newMapData      = new function()
    {
        this.action = "center";
        this.x      = xyData.elementX;
        this.y      = xyData.elementY;
    }
    var zoomLevel   = parseInt(eval("mapData.map." + xyData.elementId).zoomLevel);
    if((formObj.clickaction[0].checked) && (zoomLevel < 10))
    {   //recenter and zoom
        newMapData.change     = 1;
    }
    getNewMap(newMapData, xyData.elementId);   
    //hidePoiRollovers();
 } //clickMap()

/**
 * UPDATE MAP CLICK COOKIE
 * @update setting that sets default behavior for clicking on map
 */
function updateMapClickCookie(evt)
{
    fEventData  = getEventData(evt);
    var fValue  = (fEventData.element.parentNode.clickaction[0].checked) ? 0 : 1;
    setCookie("mapClick", fValue, 365); //update cookie value (cookie name, value, # of days)
} //updateMapClickCookie()
 
/**
 * SWAP PAN 
 * @directional pan rollover
 */
function swapPan(d, s, fMapId)
{
    var fDir    = eval("mapData.art.data." + getPanDirection(d));
    var fState  = (s == 1) ? "On" : "";
    for (var i = 0, n = fDir.length; i < n; i++)
    {
        var fImg                                    = fDir[i];
        // XxXX pieces need adjustment
        var fImgId                                  = (fImg.indexOf("c") > 0) ? fImg.substring(0, fImg.length - 1) : fImg;
        getElementById(fMapId + "-" + fImgId).src   = eval("mapData.art.img." + fImg + fState + ".src");
    }
}//swapPan()

/**
 * GET PAN DIRECTION 
 * @returns correct map direction to pan to based on image id
 */ 
function getPanDirection(d)
{
    if((d.indexOf("a") > 0) || (d.indexOf("b") > 0))
    {   //spacer piece for side dir
        return d.substring(0,1); // sa -> s
    }
    else if(d.indexOf("x") > 0)
    {   //spacer piece for corner dir
        return d.substring(2,4); // wxsw -> sw
    }
    else if(d.length == 3)
    {   // upright leg for corner
        return d.substring(1,3); // wnw -> nw
    }   
    return d;
} //getPanDirection()

/**
 * PAN MAP
 * @request panned map
 */
function panMap(d, fMapId)
{
    d           = getPanDirection(d);
    newMapData  = new function()
    {
        this.action = "pan";
        this.change =  d;
    }
    getNewMap(newMapData, fMapId);
}//panMap()

/**
 * SET ZOOM LEVEL
 * @set or reset current notch
 */
function setZoomLevel(l, fMapId)
{   
    eval("mapData.map." + fMapId).zoomLevel = l;
    for (var i = 1; i <= 10; ++i)
    {
        var s = 0;
        switch(i)
        {
            case parseInt(l):
                s = 2;
            break;
            default:
                s = 3;
        }
        swapZoom(i, s, fMapId + "-z" + i);
    }
}//setZoomLevel()

/**
 * SWAP REVERT
 * @Revert rollovers
 */
function swapRevert(evt) {

    fEventData          = getEventData(evt);
    var eventId         = fEventData.id;
    var eventType       = fEventData.type;
    var eventMapId      = eventId.split('-')[0];    
    var eventMapTrigger = eventId.split('-')[1];

    var fElementId  = getElementById(eventId);
    switch(eventType)
    {
        case "mouseover": // mouse over
            fElementId.src  = mapData.art.img.mapRevertOn.src;
        break;
        default:
            fElementId.src  = mapData.art.img.mapRevert.src;;
        break;
    }


}

/**
 * SWAP ZOOM
 * @zoom notch rollovers
 */
function swapZoom(l, s, fZoomId)
{
    var fElementId  = getElementById(fZoomId);
    var curZoomId   = fZoomId.split('-')[0] + "-z" + parseInt(eval("mapData.map." + fZoomId.split('-')[0]).zoomLevel);
    switch(s)
    {
        case 1: // mouse over
        case 2: // set new current notch
            fElementId.src  = mapData.art.img.mapZoomOn.src;
        break;
        default:
            if(fZoomId != curZoomId)
            {
                fElementId.src  = eval("mapData.art.img.z" + l + ".src");
            }
    }
}//swapZoom()


/**
 * SWAP ZOOM IN/OUT
 * @zoom in/out notch rollovers
 */
function swapZoomInOut(s, fZoomId)
{
    var fElementId  = getElementById(fZoomId);
    var curZoomId   = fZoomId.split('-')[0] + "-z" + parseInt(eval("mapData.map." + fZoomId.split('-')[0]).zoomLevel);
    switch(s)
    {
        case 1: // mouse over
            fElementId.src = (fZoomId.split('-')[1] == "zin") ? eval("mapData.art.img.zinOn.src") : eval("mapData.art.img.zoutOn.src");
        break;
        default:
            if(fZoomId != curZoomId)
            {
                fElementId.src  = (fZoomId.split('-')[1] == "zin")  ? eval("mapData.art.img.zin.src") : eval("mapData.art.img.zout.src");
            }
    }
}//swapZoom()

/**
 * ZOOM MAP
 * @zoom in or out 
 */
function zoomMap(l,fMapId)
{
    newMapData  = new function()
    {
        this.action = "zoom";
        this.change =  l;
    }
    getNewMap(newMapData, fMapId);
}//zoomMap()

/**
 * ZOOM MAP IN
 */
function zoomMapIn(fMapId)
{
    var thisZoom = parseInt(eval("mapData.map." + fMapId).zoomLevel);
    if(thisZoom < 10)
    {
        thisZoom++;
        zoomMap(thisZoom, fMapId);
    }
}//zoomMapIn()

/**
 * ZOOM MAP OUT
 */
function zoomMapOut(fMapId)
{
    var thisZoom = parseInt(eval("mapData.map." + fMapId).zoomLevel);
    if(thisZoom > 1)
    {
        thisZoom = thisZoom - 1;
        zoomMap(thisZoom, fMapId);
    }
}//zoomMapOut()

/**
 * RESIZE BROWSER CHECK
 * @checks for changes in browser size. ie and safari keep firing during window.resize
 */
function resizeBrowserCheck(fType)
{    
    
    var browserSize = getBrowserSize();
    if((mapData.browser.previousHeight != browserSize.height) || (mapData.browser.previousWidth != browserSize.width))
    {   //set flag that size changed
        mapData.browser.previousHeight  = browserSize.height;
        mapData.browser.previousWidth   = browserSize.width;
        mapData.resize.sizeChanged      = true;
    }
    else if(mapData.resize.sizeChanged  == true)
    {   // values didn't match on previous lap, resize
        mapData.resize.sizeChanged  = false;
        resizeMapWidget();
    }
    
    if(fType == 1)
    {   // safari and ie have to loop this fn
        mapData.loop = setTimeout("resizeBrowserCheck(1)", mapData.resize.monitorDelay);
    }
    else if(fType == 0)
    {   //smart browsers get the resize event handler
         addEvent(window, "resize", resizeMapWidget);
         resizeMapWidget();
    }
} //resizeBrowserCheck()

/**
 * RESIZE MAP WIDGET
 * @dynamically adjust map control graphics to remain bound to map when resizing
 * @make request for new map image
 */
function resizeMapWidget()
{
    var wrapperWidth;
    var browserSize     = getBrowserSize();
    var mapWellWidth    = browserSize.width - mapData.browser.bodyMargin - mapData.browser.rightPaddingWidth - mapData.browser.rightColumnWidth;
    for (var nv in mapData.map)
    {
        var mapId   = nv;
        mapIdObj    = getElementById(mapId); 
        if((mapWellWidth < mapData.widgetMinWidth) || (mapData.browser.flexMap == 0))
        {   //too small or fixed setting, lock page and map at min
            wrapperWidth        = mapData.widgetMinWidth;
            mapData.pageObj.style.width = mapData.browser.rightPaddingWidth + mapData.browser.rightColumnWidth + wrapperWidth + "px";// lock page width           
        }
        else if(mapWellWidth > mapData.widgetMaxWidth)
        {   //too big, lock at max
            wrapperWidth        = mapData.widgetMaxWidth;
            mapData.pageObj.style.width = mapData.browser.rightPaddingWidth + mapData.browser.rightColumnWidth + wrapperWidth + "px";// lock page width
        }
        else
        {   // flex
            wrapperWidth = mapWellWidth;
            mapData.pageObj.style.width = "auto";
        }
        var newMapWidth = wrapperWidth - mapData.drawerWidth - mapData.optionsWidth - mapData.paddingWidth - mapData.sideWidth - mapData.gapWidth;

        if(mapIdObj.width == newMapWidth)
        {   //nothing changed so do nothing
            if(eval("mapData.map." + mapId).revert == 0)
            {   //refreshmap not called and first map: need to display
                showMapWidget(mapId);
            }
            else
            {
                return;
            }
        }      
        
        // request new map
        newMapData      = new function()
        {
            this.action = "resize";
            this.width  = Math.round(newMapWidth);
            this.height = Math.round((this.width / 4.63) * 3.53); //get new height
        }
        getNewMap(newMapData, mapId);
             
        // lock mapwidget
        widgetObj = getElementById(mapId + "-widget");
        widgetObj.style.width = eval(wrapperWidth) + "px";   
        // lock mapcontrols container
        getElementById(mapId + "-controls").style.width = eval(newMapData.width + mapData.sideWidth) + "px"; 
        // change H&W attrs for map image
        mapIdObj.setAttribute("width", newMapData.width);
        mapIdObj.setAttribute("height", newMapData.height);
        
        // adjust control spacer size
        var nsSpacerWidth                       = (newMapData.width - mapData.nsSpacerOffset) / 2;
        var d                                   = (nsSpacerWidth == Math.round(nsSpacerWidth)) ? 0 : 1;
        nsSpacerWidth                           = Math.round(nsSpacerWidth);
        getElementById(mapId + "-na").width     = getElementById(mapId + "-sa").width = nsSpacerWidth;
        getElementById(mapId + "-nb").width     = getElementById(mapId + "-sb").width = nsSpacerWidth - d;
        var ewSpacerHeight                      = (newMapData.height - mapData.ewSpacerOffset) / 2;
        d                                       = (ewSpacerHeight == Math.round(ewSpacerHeight))? 0 : 1;
        getElementById(mapId + "-ea").height    = getElementById(mapId + "-wa").height = ewSpacerHeight + d;
        getElementById(mapId + "-eb").height    = getElementById(mapId + "-wb").height = ewSpacerHeight;
                
          
        // space zoom controls to remain centered on map
        getElementById(mapId + "-zoom").style.marginTop = eval(Math.round((newMapData.height + 32 - 259) / 2)) + "px"; // height + ns rails - height of zoom controls / 2
    }// for
    
    
    adjustRightColumn();
} //resizeMapWidget()


/**
 * SHOW MAP WIDGET
 * @manually display the map widget
 */
function showMapWidget(fMapId)
{
    getElementById(fMapId + "-widget").style.visibility = "visible";
}// showMapWidget()


function adjustRightColumn()
{
    if((mapData.browser.name == "netscape") && (mapData.browser.version <= 7.1))
    {   // ns <7.1 likes to blow out the right side
        getElementById("rightcolumn").getElementsByTagName("div")[0].style.width = mapData.browser.rightColumnWidth - 13 + "px";
    } 
}

/**
 * GET XY
 * @get the XY coordinates
 * @returns an array containing the event target id, and xy data for page and target
 */
function getXY(evt)
{
    xyData = new Object();
    if(!document.createElement || !document.getElementsByTagName) return;
    if(!document.createElementNS)
    {   // to work in html and xml namespaces
        document.createElementNS = function(ns,elt)
        {
            return document.createElement(elt);
        }
    }  
    if(document.addEventListener && typeof evt.pageX == "number")
    {   // Moz and Opera
        var Element                     = evt.target;
        var CalculatedTotalOffsetLeft   = CalculatedTotalOffsetTop = 0;
        while(Element.offsetParent)
        {
            CalculatedTotalOffsetLeft   += Element.offsetLeft;
            CalculatedTotalOffsetTop    += Element.offsetTop;
            Element                      = Element.offsetParent;
        }
        var OffsetXForNS6   = evt.pageX - CalculatedTotalOffsetLeft;
        var OffsetYForNS6   = evt.pageY - CalculatedTotalOffsetTop;
        xyData.elementId    = evt.target.id;
        xyData.elementX     = OffsetXForNS6;
        xyData.elementY     = OffsetYForNS6;
        xyData.pageX        = evt.pageX;
        xyData.pageY        = evt.pageY;
    }
    else if(window.event && typeof window.event.offsetX == "number")
    {   //ie
        xyData.elementId    = window.event.srcElement.id;
        xyData.elementX     = event.offsetX;
        xyData.elementY     = event.offsetY;
        xyData.pageX        = 0; 
        xyData.pageY        = 0;
        var element         = getElementById(xyData.elementId);
        while(element)
        {
            xyData.pageX += element.offsetLeft;
            xyData.pageY += element.offsetTop;
            element = element.offsetParent;
        }
        xyData.pageX += xyData.elementX;
        xyData.pageY += xyData.elementY;
    }
    return xyData;
}//getXY()


