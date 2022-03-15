/*Generic pop up code - please use this only unless you really need something different*/
function popUpPage(url, parameters, name)
{
	var day = new Date();
	var pageName = name ? name : day.getTime()

	eval("bbc"+pageName+" = window.open('"+url+"','"+pageName+"','"+parameters+"')");

	if (eval("bbc"+pageName) && window.focus) eval("bbc"+pageName).focus();
}

/* Radio Player tag for PodCasting */
window.name="main";
function aodpopup(URL){
window.open(URL,'aod','width=693,height=525,toolbar=no,personalbar=no,location=no,directories=no,statusbar=no,menubar=no,status=no,resizable=yes,left=60,screenX=60,top=100,screenY=100');
}
if(location.search.substring(1)=="focuswin"){
	window.focus();
}


/* launch code for avconsole */
function launch_main_player(site)
{
	
	if (site == null) //no site name passed in - have to leave this check in
	{
		clickmain=window.open("http://news.bbc.co.uk/broadband/news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");
	}
	else
	{
		if (site == 'ukfs')
		{
			clickmain=window.open("http://news.bbc.co.uk/broadband/news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");

		}
		else if (site == 'ifs')
		{
			clickmain=window.open("/narrowband/static/audio_video/avconsole/ifs/f_news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");
		}
	}
}


function launchAVConsoleStory(storyid)
{
	if(bbcV2Tst())
	{

		consoleurl = "http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs.stm&nbram=1&bbram=1&nbwm=1&bbwm=1&news=1&nol_storyid=" + storyid;
		clickmain=window.open(consoleurl,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=487");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/sport2/hi/3791877.stm";
	}
}

function launchAVConsoleV3()
{
	if(bbcV2Tst())
	{
		clickmain=window.open("http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs.stm&nbram=1&bbram=1&nbwm=1&bbwm=1&news=1","console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=487");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/sport2/hi/3791877.stm";
	}
}

function bbcV2Tst(){

	var type = getBrowserType();
	
	return (type  != "other" &&(type == "ie5" || type == "nav6" || type == "domCompliant"));
}

function getPlatform()
{
	var myUserAgent;
	myUserAgent = navigator.userAgent.toLowerCase();

	if ((myUserAgent.indexOf("win") != -1) ||  (myUserAgent.indexOf("16bit") != -1))
	{
		return "win";
	}
	
	if (myUserAgent.indexOf("mac") != -1)
	{
		return "mac";
	}  
	
	if (myUserAgent.indexOf("x11") != -1)
	{
		return "unx";
	}  
	
	return "other";
}

function getBrowserType()
{
	var myUserAgent;

	var myMajor;
	myUserAgent= navigator.userAgent.toLowerCase();
	myMajor= parseInt(navigator.appVersion);
	if( (myUserAgent.indexOf('mozilla')!= -1) &&(myUserAgent.indexOf('spoofer')== -1) &&(myUserAgent.indexOf('compatible') == -1) &&(myUserAgent.indexOf('opera') == -1) &&(myUserAgent.indexOf('webtv')  == -1) )
	{  
		if (myMajor > 4 )
			{
				return "nav6";
			} 
		else if ((myMajor == 4 ) || (myMajor == 5 ))
			{
				return "nav4";
			}
	}
	
	if (myUserAgent.indexOf("msie") == 4)
		{
			return "ie4";
			
	}
	else if (myUserAgent.indexOf("msie") == 5)
		{
			return "ie5";
		}	
// dom compliant browsers are allowed
	if(document.body.firstChild) 
	return "domCompliant";
	return "other";
}


function getBrowserVersion() //this is for the ticker to identify between mac IE4 and IE5
{
	var s = navigator.appVersion;
	s = s.substr(s.indexOf("("),s.length);
	while (isNaN(parseInt(s)))
	{
		s = s.substr(1,s.length);
	}
	return parseInt(s);
}

function request_launch(site)
{
	if (getPlatform() != "other" &&(getBrowserType() == "ie4" || getBrowserType() == "nav4" || getBrowserType() == "nav6" || getBrowserType() == "domCompliant"))
	{
		launch_main_player(site);
	} 
	else 
	{
		self.location.href="/1/shared/bsp/hi/services/help/html/av_console_browsers.stm";
	}
	
	return;
}



function openWindow(){
	var mywin = null;var unLoad;
	var surl = "http://news.bbc.co.uk/hi/english/static/business/data_desktop/mardata/ftse.stm";
	if (!mywin){mywin = window.open(surl,'BBCNewsOnline','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=292');
		mywin.location = surl;
		if (mywin.opener == null) mywin.opener = window; 
		mywin.opener.name = "opener";
	}else{
		if (mywin.closed){	
			mywin = null;openWindow();
		}
		if (mywin.focus) mywin.focus();
		mywin.location.href = surl;
	}
}



function popup(url) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(url, '" + id + "', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=220');");
} 


function popUp(pageurl,width,height,scroll){
	day = new Date();
	id = day.getTime();
	if (window.screen) {  
		lpos = (screen.width/2)-(width/2);  
		hpos = (screen.height/2)-(height/2);
	}else	{
		lpos = 1;
		hpos = 1;		
	}		 		
	eval("bbcnews"+id+" = window.open('"+pageurl+"','"+id+"','toolbar=0,scrollbars="+scroll+",location=0,status=0,menubar=0,resizable=0,width="+width+",height="+height+",left="+lpos+",top="+hpos+"')");
}

//RSS
function getArgs() { 
	var Args = new Object(); 
	var query = location.search.substring(1); 
	var pairs = query.split("&"); 
	for (var i = 0; i < pairs.length; i++) 
	{ 
		var pos = pairs[i].indexOf('='); 
		if (pos == -1) continue; 
		var argname = pairs[i].substring(0,pos); 
		var value = pairs[i].substring(pos+1); 
		Args[argname] = unescape(value); 
	} 
	return Args;
}

function getRssUrl() { 
if (document.getElementsByTagName)
{
	var url = "http://news.bbc.co.uk/1/hi/help/3223484.stm";
	var linkTags = document.getElementsByTagName("link");
	var rssURI;
	for (var i = 0; i < linkTags.length; i++) {if (linkTags[i].getAttribute('title') == "rss") {rssURI = linkTags[i].getAttribute('href');}}
	if (rssURI){document.write('<div class="rsslink" style="padding:0 0px 0 0;margin:4px 6px 0 0;"><a href="'+rssURI+'"><img height="15" hspace="0" vspace="0" border="0" width="32" alt="RSS Feed" src="http://newsimg.bbc.co.uk/shared/img/v3/rss_feed.gif" title="Really Simple Syndication" /></a></div><div class="rsslink" style="padding:0 0px 0 0;margin:4px 6px 5px 0;"><a href="'+url+'" title="What is RSS?">What is RSS?</a></div>')}
}
}

function getRssUrlStory(rssURI) { 

if (document.getElementsByTagName)
{
	var url = "http://news.bbc.co.uk/1/hi/help/3223484.stm";
	if (rssURI){document.write('<span class="rsslink"><a href="'+rssURI+'"><img height="15" hspace="8" vspace="0" border="0" width="32" alt="RSS Feed" src="http://newsimg.bbc.co.uk/shared/img/v3/rss_feed.gif" title="Really Simple Syndication" align="left" /></a> | <a href="'+url+'?rss='+rssURI+'" title="What is RSS?">What is RSS?</a></span><br clear="all"/>')}
}
}



