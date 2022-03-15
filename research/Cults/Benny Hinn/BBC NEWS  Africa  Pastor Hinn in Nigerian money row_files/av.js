function launchAVConsoleStory(storyid)
{
	if(bbcV2Tst())
	{
		consoleurl = "http://www.bbc.co.uk/mediaselector/check/nolavconsole/ifs_news/hi?redirect=fs.stm&news=1&bbram=1&bbwm=1&nbram=1&nbwm=1&nol_storyid=" + storyid;
		clickmain=window.open(consoleurl,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,width=681,height=487");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/1/hi/help/3662494.stm";
	}
}

function launchAVConsoleV3(section)
{
	if(bbcV2Tst())
	{	
		var url = "http://www.bbc.co.uk/mediaselector/check/nolavconsole/ifs_news/hi?redirect=fs.stm&bbram=1&bbwm=1&nbram=1&nbwm=1&news=1";	
		if (section)
		{
			url = url + "&nol_index=" + section;
		}
		clickmain=window.open(url,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,width=681,height=487");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/1/hi/help/3662494.stm";
	}
}

function launchAVConsoleV3Banner(section)
{
	if(bbcV2Tst())
	{	
		var url = "http://www.bbc.co.uk/go/newsbanner/int/ifs/avplayer/-/mediaselector/check/nolavconsole/ifs_news/hi?redirect=fs.stm&bbram=1&bbwm=1&nbram=1&nbwm=1&news=1";	
		if (section)
		{
			url = url + "&nol_index=" + section;
		}
		clickmain=window.open(url,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,width=681,height=487");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/go/newsbanner/int/ifs/noV2Tst/-/1/hi/help/3662494.stm";
	}
}
