// if you've made it this deep,
// then send me a note.
// form validation by
// andrew relkin
// andrew@relkin.com

// movie trivia:
// what is nicolas cage's first movie???
// write me if you know.


function centered(whatPrize, windowSize) 
	{
	var w = 640, h = 480;
	if (document.all || document.layers)
		{
		w = screen.availWidth;
		h = screen.availHeight;
		}
	var popW = 400, popH = 500;
	var windowName="centered";
	var otherFeatures = "";
	if (windowSize)
		{
		popW = 640;
		popH = 460;
		otherFeatures = ",resizable,status,directories,menubar,location,toolbar";
		windowName="pop";
		}
	var topPos = ((h-popH)/2)-80, leftPos = ((w-popW)/2-15);
	window.open( (whatPrize),(windowName),"width="+popW+",height="+popH+",top="+topPos+",left="+leftPos+",scrollbars"+otherFeatures);
	}



function openParent(url)
	{ window.opener.location = url; }

