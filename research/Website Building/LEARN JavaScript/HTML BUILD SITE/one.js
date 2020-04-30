

//<![CDATA[

<!--




function Client(){
//if not a DOM browser, hopeless
	this.min = false; if (document.getElementById){this.min = true;};

	this.ua = navigator.userAgent;
	this.name = navigator.appName;
	this.ver = navigator.appVersion;  

//Get data about the browser
	this.mac = (this.ver.indexOf('Mac') != -1);
	this.win = (this.ver.indexOf('Windows') != -1);

//Look for Gecko
	this.gecko = (this.ua.indexOf('Gecko') > 1);
	if (this.gecko){
		this.geckoVer = parseInt(this.ua.substring(this.ua.indexOf('Gecko')+6, this.ua.length));
		if (this.geckoVer < 20020000){this.min = false;}
	}
	
//Look for Firebird
	this.firebird = (this.ua.indexOf('Firebird') > 1);
	
//Look for Safari
	this.safari = (this.ua.indexOf('Safari') > 1);
	if (this.safari){
		this.gecko = false;
	}
	
//Look for IE
	this.ie = (this.ua.indexOf('MSIE') > 0);
	if (this.ie){
		this.ieVer = parseFloat(this.ua.substring(this.ua.indexOf('MSIE')+5, this.ua.length));
		if (this.ieVer < 5.5){this.min = false;}
	}
	
//Look for Opera
	this.opera = (this.ua.indexOf('Opera') > 0);
	if (this.opera){
		this.operaVer = parseFloat(this.ua.substring(this.ua.indexOf('Opera')+6, this.ua.length));
		if (this.operaVer < 7.04){this.min = false;}
	}
	if (this.min == false){
		alert('Your browser may not be able to handle this page.');
	}
	
//Special case for the horrible ie5mac
	this.ie5mac = (this.ie&&this.mac&&(this.ieVer<6));
}

var C = new Client();

//for (prop in C){
//	alert(prop + ': ' + C[prop]);
//}



//CODE FOR HANDLING NAV BUTTONS AND FUNCTION BUTTONS

//[strNavBarJS]
function NavBtnOver(Btn){
	if (Btn.className != 'NavButtonDown'){Btn.className = 'NavButtonUp';}
}

function NavBtnOut(Btn){
	Btn.className = 'NavButton';
}

function NavBtnDown(Btn){
	Btn.className = 'NavButtonDown';
}
//[/strNavBarJS]

function FuncBtnOver(Btn){
	if (Btn.className != 'FuncButtonDown'){Btn.className = 'FuncButtonUp';}
}

function FuncBtnOut(Btn){
	Btn.className = 'FuncButton';
}

function FuncBtnDown(Btn){
	Btn.className = 'FuncButtonDown';
}

function FocusAButton(){
	if (document.getElementById('CheckButton1') != null){
		document.getElementById('CheckButton1').focus();
	}
	else{
		if (document.getElementById('CheckButton2') != null){
			document.getElementById('CheckButton2').focus();
		}
		else{
			document.getElementsByTagName('button')[0].focus();
		}
	}
}




//CODE FOR HANDLING DISPLAY OF POPUP FEEDBACK BOX

var topZ = 1000;

function ShowMessage(Feedback){
	var Output = Feedback + '<br /><br />';
	document.getElementById('FeedbackContent').innerHTML = Output;
	var FDiv = document.getElementById('FeedbackDiv');
	topZ++;
	FDiv.style.zIndex = topZ;
	FDiv.style.top = TopSettingWithScrollOffset(30) + 'px';

	FDiv.style.display = 'block';

	ShowElements(false, 'input');
	ShowElements(false, 'select');
	ShowElements(false, 'object');
	ShowElements(true, 'object', 'FeedbackContent');

//Focus the OK button
	setTimeout("document.getElementById('FeedbackOKButton').focus()", 50);
	
//
}

function ShowElements(Show, TagName, ContainerToReverse){
// added third argument to allow objects in the feedback box to appear
//IE bug -- hide all the form elements that will show through the popup
//FF on Mac bug : doesn't redisplay objects whose visibility is set to visible
//unless the object's display property is changed

	//get container object (by Id passed in, or use document otherwise)
	TopNode = document.getElementById(ContainerToReverse);
	var Els;
	if (TopNode != null) {
		Els = TopNode.getElementsByTagName(TagName);
	} else {
		Els = document.getElementsByTagName(TagName);
	}

	for (var i=0; i<Els.length; i++){
		if (TagName == "object") {
			//manipulate object elements in all browsers
			if (Show == true){
				Els[i].style.visibility = 'visible';
				//get Mac FireFox to manipulate display, to force screen redraw
				if (C.mac && C.gecko) {Els[i].style.display = '';}
			}
			else{
				Els[i].style.visibility = 'hidden';
				if (C.mac && C.gecko) {Els[i].style.display = 'none';}
			}
		} 
		else {
			// tagName is either input or select (that is, Form Elements)
			// ie6 has a problem with Form elements, so manipulate those
			if (C.ie) {
				if (C.ieVer < 7) {
					if (Show == true){
						Els[i].style.visibility = 'visible';
					}
					else{
						Els[i].style.visibility = 'hidden';
					}
				}
			}
		}
	}
}



function HideFeedback(){
	document.getElementById('FeedbackDiv').style.display = 'none';
	ShowElements(true, 'input');
	ShowElements(true, 'select');
	ShowElements(true, 'object');
	if (Finished == true){
		Finish();
	}
}


//GENERAL UTILITY FUNCTIONS AND VARIABLES

//PAGE DIMENSION FUNCTIONS
function PageDim(){
//Get the page width and height
	this.W = 600;
	this.H = 400;
	this.W = document.getElementsByTagName('body')[0].clientWidth;
	this.H = document.getElementsByTagName('body')[0].clientHeight;
}

var pg = null;

function GetPageXY(El) {
	var XY = {x: 0, y: 0};
	while(El){
		XY.x += El.offsetLeft;
		XY.y += El.offsetTop;
		El = El.offsetParent;
	}
	return XY;
}

function GetScrollTop(){
	if (typeof(window.pageYOffset) == 'number'){
		return window.pageYOffset;
	}
	else{
		if ((document.body)&&(document.body.scrollTop)){
			return document.body.scrollTop;
		}
		else{
			if ((document.documentElement)&&(document.documentElement.scrollTop)){
				return document.documentElement.scrollTop;
			}
			else{
				return 0;
			}
		}
	}
}

function GetViewportHeight(){
	if (typeof window.innerHeight != 'undefined'){
		return window.innerHeight;
	}
	else{
		if (((typeof document.documentElement != 'undefined')&&(typeof document.documentElement.clientHeight !=
     'undefined'))&&(document.documentElement.clientHeight != 0)){
			return document.documentElement.clientHeight;
		}
		else{
			return document.getElementsByTagName('body')[0].clientHeight;
		}
	}
}

function TopSettingWithScrollOffset(TopPercent){
	var T = Math.floor(GetViewportHeight() * (TopPercent/100));
	return GetScrollTop() + T; 
}

//CODE FOR AVOIDING LOSS OF DATA WHEN BACKSPACE KEY INVOKES history.back()
var InTextBox = false;

function SuppressBackspace(e){ 
	if (InTextBox == true){return;}
	if (C.ie) {
		thisKey = window.event.keyCode;
	}
	else {
		thisKey = e.keyCode;
	}

	var Suppress = false;

	if (thisKey == 8) {
		Suppress = true;
	}

	if (Suppress == true){
		if (C.ie){
			window.event.returnValue = false;	
			window.event.cancelBubble = true;
		}
		else{
			e.preventDefault();
		}
	}
}

if (C.ie){
	document.attachEvent('onkeydown',SuppressBackspace);
	window.attachEvent('onkeydown',SuppressBackspace);
}
else{
	if (window.addEventListener){
		window.addEventListener('keypress',SuppressBackspace,false);
	}
}

function ReduceItems(InArray, ReduceToSize){
	var ItemToDump=0;
	var j=0;
	while (InArray.length > ReduceToSize){
		ItemToDump = Math.floor(InArray.length*Math.random());
		InArray.splice(ItemToDump, 1);
	}
}

function Shuffle(InArray){
	var Num;
	var Temp = new Array();
	var Len = InArray.length;

	var j = Len;

	for (var i=0; i<Len; i++){
		Temp[i] = InArray[i];
	}

	for (i=0; i<Len; i++){
		Num = Math.floor(j  *  Math.random());
		InArray[i] = Temp[Num];

		for (var k=Num; k < (j-1); k++) {
			Temp[k] = Temp[k+1];
		}
		j--;
	}
	return InArray;
}

function WriteToInstructions(Feedback) {
	document.getElementById('InstructionsDiv').innerHTML = Feedback;

}




function EscapeDoubleQuotes(InString){
	return InString.replace(/"/g, '&quot;')
}

function TrimString(InString){
        var x = 0;

        if (InString.length != 0) {
                while ((InString.charAt(InString.length - 1) == '\u0020') || (InString.charAt(InString.length - 1) == '\u000A') || (InString.charAt(InString.length - 1) == '\u000D')){
                        InString = InString.substring(0, InString.length - 1)
                }

                while ((InString.charAt(0) == '\u0020') || (InString.charAt(0) == '\u000A') || (InString.charAt(0) == '\u000D')){
                        InString = InString.substring(1, InString.length)
                }

                while (InString.indexOf('  ') != -1) {
                        x = InString.indexOf('  ')
                        InString = InString.substring(0, x) + InString.substring(x+1, InString.length)
                 }

                return InString;
        }

        else {
                return '';
        }
}

function FindLongest(InArray){
	if (InArray.length < 1){return -1;}

	var Longest = 0;
	for (var i=1; i<InArray.length; i++){
		if (InArray[i].length > InArray[Longest].length){
			Longest = i;
		}
	}
	return Longest;
}

//UNICODE CHARACTER FUNCTIONS
function IsCombiningDiacritic(CharNum){
	var Result = (((CharNum >= 0x0300)&&(CharNum <= 0x370))||((CharNum >= 0x20d0)&&(CharNum <= 0x20ff)));
	Result = Result || (((CharNum >= 0x3099)&&(CharNum <= 0x309a))||((CharNum >= 0xfe20)&&(CharNum <= 0xfe23)));
	return Result;
}

function IsCJK(CharNum){
	return ((CharNum >= 0x3000)&&(CharNum < 0xd800));
}

//SETUP FUNCTIONS
//BROWSER WILL REFILL TEXT BOXES FROM CACHE IF NOT PREVENTED
function ClearTextBoxes(){
	var NList = document.getElementsByTagName('input');
	for (var i=0; i<NList.length; i++){
		if ((NList[i].id.indexOf('Guess') > -1)||(NList[i].id.indexOf('Gap') > -1)){
			NList[i].value = '';
		}
		if (NList[i].id.indexOf('Chk') > -1){
			NList[i].checked = '';
		}
	}
}

//EXTENSION TO ARRAY OBJECT
function Array_IndexOf(Input){
	var Result = -1;
	for (var i=0; i<this.length; i++){
		if (this[i] == Input){
			Result = i;
		}
	}
	return Result;
}
Array.prototype.indexOf = Array_IndexOf;

//IE HAS RENDERING BUG WITH BOTTOM NAVBAR
function RemoveBottomNavBarForIE(){
	if ((C.ie)&&(document.getElementById('Reading') != null)){
		if (document.getElementById('BottomNavBar') != null){
			document.getElementById('TheBody').removeChild(document.getElementById('BottomNavBar'));
		}
	}
}




//HOTPOTNET-RELATED CODE

var HPNStartTime = (new Date()).getTime();
var SubmissionTimeout = 30000;
var Detail = ''; //Global that is used to submit tracking data

function Finish(){
//If there's a form, fill it out and submit it
	if (document.store != null){
		Frm = document.store;
		Frm.starttime.value = HPNStartTime;
		Frm.endtime.value = (new Date()).getTime();
		Frm.mark.value = Score;
		Frm.detail.value = Detail;
		Frm.submit();
	}
}





//JQUIZ CORE JAVASCRIPT CODE

var CurrQNum = 0;
var CorrectIndicator = ':-)';
var IncorrectIndicator = 'X';
var YourScoreIs = 'Your score is ';

//New for 6.2.2.0
var CompletedSoFar = 'Questions completed so far: ';
var ExerciseCompleted = 'You have completed the exercise.';
var ShowCompletedSoFar = true;

var ContinuousScoring = true;
var CorrectFirstTime = 'Questions answered correctly first time: ';
var ShowCorrectFirstTime = true;
var ShuffleQs = false;
var ShuffleAs = true;
var DefaultRight = 'Correct!';
var DefaultWrong = 'Sorry! Try again.';
var QsToShow = 3;
var Score = 0;
var Finished = false;
var Qs = null;
var QArray = new Array();
var ShowingAllQuestions = false;
var ShowAllQuestionsCaption = 'Show all questions';
var ShowOneByOneCaption = 'Show questions one by one';
var State = new Array();
var Feedback = '';
var TimeOver = false;
var strInstructions = '';
var Locked = false;

//The following variable can be used to add a message explaining that
//the question is finished, so no further marking will take place.
var strQuestionFinished = '';

function CompleteEmptyFeedback(){
	var QNum, ANum;
	for (QNum=0; QNum<I.length; QNum++){
//Only do this if not multi-select
		if (I[QNum][2] != '3'){
  		for (ANum = 0; ANum<I[QNum][3].length; ANum++){
  			if (I[QNum][3][ANum][1].length < 1){
  				if (I[QNum][3][ANum][2] > 0){
  					I[QNum][3][ANum][1] = DefaultRight;
  				}
  				else{
  					I[QNum][3][ANum][1] = DefaultWrong;
  				}
  			}
  		}
		}
	}
}

function SetUpQuestions(){
	var AList = new Array(); 
	var QList = new Array();
	var i, j;
	Qs = document.getElementById('Questions');
	while (Qs.getElementsByTagName('li').length > 0){
		QList.push(Qs.removeChild(Qs.getElementsByTagName('li')[0]));
	}
	var DumpItem = 0;
	if (QsToShow > QList.length){
		QsToShow = QList.length;
	}
	while (QsToShow < QList.length){
		DumpItem = Math.floor(QList.length*Math.random());
		for (j=DumpItem; j<(QList.length-1); j++){
			QList[j] = QList[j+1];
		}
		QList.length = QList.length-1;
	}
	if (ShuffleQs == true){
		QList = Shuffle(QList);
	}
	if (ShuffleAs == true){
		var As;
		for (var i=0; i<QList.length; i++){
			As = QList[i].getElementsByTagName('ol')[0];
			if (As != null){
  			AList.length = 0;
				while (As.getElementsByTagName('li').length > 0){
					AList.push(As.removeChild(As.getElementsByTagName('li')[0]));
				}
				AList = Shuffle(AList);
				for (j=0; j<AList.length; j++){
					As.appendChild(AList[j]);
				}
			}
		}
	}
	
	for (i=0; i<QList.length; i++){
		Qs.appendChild(QList[i]);
		QArray[QArray.length] = QList[i];
	}

//Show the first item
	QArray[0].style.display = '';
	
//Now hide all except the first item
	for (i=1; i<QArray.length; i++){
		QArray[i].style.display = 'none';
	}		
	SetQNumReadout();
	
	SetFocusToTextbox();
}

function SetFocusToTextbox(){
//if there's a textbox, set the focus in it
	if (QArray[CurrQNum].getElementsByTagName('input')[0] != null){
		QArray[CurrQNum].getElementsByTagName('input')[0].focus();
//and show a keypad if there is one
		if (document.getElementById('CharacterKeypad') != null){
			document.getElementById('CharacterKeypad').style.display = 'block';
		}
	}
	else{
  	if (QArray[CurrQNum].getElementsByTagName('textarea')[0] != null){
  		QArray[CurrQNum].getElementsByTagName('textarea')[0].focus();	
//and show a keypad if there is one
			if (document.getElementById('CharacterKeypad') != null){
				document.getElementById('CharacterKeypad').style.display = 'block';
			}
		}
//This added for 6.0.4.11: hide accented character buttons if no textbox
		else{
			if (document.getElementById('CharacterKeypad') != null){
				document.getElementById('CharacterKeypad').style.display = 'none';
			}
		}
	}
}

function ChangeQ(ChangeBy){
//The following line prevents moving to another question until the current
//question is answered correctly. Uncomment it to enable this behaviour. 
//	if (State[CurrQNum][0] == -1){return;}
	if (((CurrQNum + ChangeBy) < 0)||((CurrQNum + ChangeBy) >= QArray.length)){return;}
	QArray[CurrQNum].style.display = 'none';
	CurrQNum += ChangeBy;
	QArray[CurrQNum].style.display = '';
//Undocumented function added 10/12/2004
	ShowSpecialReadingForQuestion();
	SetQNumReadout();
	SetFocusToTextbox();
}

var HiddenReadingShown = false;
function ShowSpecialReadingForQuestion(){
//Undocumented function for showing specific reading text elements which change with each question
//Added on 10/12/2004
	if (document.getElementById('ReadingDiv') != null){
		if (HiddenReadingShown == true){
			document.getElementById('ReadingDiv').innerHTML = '';
		}
		if (QArray[CurrQNum] != null){
//Fix for 6.0.4.25
			var Children = QArray[CurrQNum].getElementsByTagName('div');
			for (var i=0; i<Children.length; i++){
			if (Children[i].className=="HiddenReading"){
					document.getElementById('ReadingDiv').innerHTML = Children[i].innerHTML;
					HiddenReadingShown = true;
//Hide the ShowAllQuestions button to avoid confusion
					if (document.getElementById('ShowMethodButton') != null){
						document.getElementById('ShowMethodButton').style.display = 'none';
					}
				}
			}	
		}
	}
}

function SetQNumReadout(){
	document.getElementById('QNumReadout').innerHTML = (CurrQNum+1) + ' / ' + QArray.length;
	if ((CurrQNum+1) >= QArray.length){
		if (document.getElementById('NextQButton') != null){
			document.getElementById('NextQButton').style.visibility = 'hidden';
		}
	}
	else{
		if (document.getElementById('NextQButton') != null){
			document.getElementById('NextQButton').style.visibility = 'visible';
		}
	}
	if (CurrQNum <= 0){
		if (document.getElementById('PrevQButton') != null){
			document.getElementById('PrevQButton').style.visibility = 'hidden';
		}
	}
	else{
		if (document.getElementById('PrevQButton') != null){
			document.getElementById('PrevQButton').style.visibility = 'visible';
		}
	}
}

var I=new Array();
I[0]=new Array();I[0][0]=100;
I[0][1]='';
I[0][2]='1';
I[0][3]=new Array();
I[0][3][0]=new Array('prophetic','',1,100,1);
I[1]=new Array();I[1][0]=100;
I[1][1]='';
I[1][2]='1';
I[1][3]=new Array();
I[1][3][0]=new Array('a lot tons a bunch most of it most','',1,100,1);
I[2]=new Array();I[2][0]=100;
I[2][1]='';
I[2][2]='1';
I[2][3]=new Array();
I[2][3][0]=new Array('Telling the future in advance.','',1,100,1);


function StartUp(){
	RemoveBottomNavBarForIE();

//If there's only one question, no need for question navigation controls
	if (QsToShow < 2){
		document.getElementById('QNav').style.display = 'none';
	}
	
//Stash the instructions so they can be redisplayed
	strInstructions = document.getElementById('InstructionsDiv').innerHTML;
	

	

	GetUserName();

	

	
	CompleteEmptyFeedback();

	SetUpQuestions();
	ClearTextBoxes();
	CreateStatusArray();
	

	setTimeout('StartTimer()', 50);

	
//Check search string for q parameter
	if (document.location.search.length > 0){
		if (ShuffleQs == false){
			var JumpTo = parseInt(document.location.search.substring(1,document.location.search.length))-1;
			if (JumpTo <= QsToShow){
				ChangeQ(JumpTo);
			}
		}
	}
//Undocumented function added 10/12/2004
	ShowSpecialReadingForQuestion();
}

function ShowHideQuestions(){
	FuncBtnOut(document.getElementById('ShowMethodButton'));
	document.getElementById('ShowMethodButton').style.display = 'none';
	if (ShowingAllQuestions == false){
		for (var i=0; i<QArray.length; i++){
				QArray[i].style.display = '';
			}
		document.getElementById('Questions').style.listStyleType = 'decimal';
		document.getElementById('OneByOneReadout').style.display = 'none';
		document.getElementById('ShowMethodButton').innerHTML = ShowOneByOneCaption;
		ShowingAllQuestions = true;
	}
	else{
		for (var i=0; i<QArray.length; i++){
				if (i != CurrQNum){
					QArray[i].style.display = 'none';
				}
			}
		document.getElementById('Questions').style.listStyleType = 'none';
		document.getElementById('OneByOneReadout').style.display = '';
		document.getElementById('ShowMethodButton').innerHTML = ShowAllQuestionsCaption;
		ShowingAllQuestions = false;	
	}
	document.getElementById('ShowMethodButton').style.display = 'inline';
}

function CreateStatusArray(){
	var QNum, ANum;
//For each item in the item array
	for (QNum=0; QNum<I.length; QNum++){
//Check if the question still exists (hasn't been nuked by showing a random selection)
		if (document.getElementById('Q_' + QNum) != null){
			State[QNum] = new Array();
			State[QNum][0] = -1; //Score for this q; -1 shows question not done yet
			State[QNum][1] = new Array(); //answers
			for (ANum = 0; ANum<I[QNum][3].length; ANum++){
				State[QNum][1][ANum] = 0; //answer not chosen yet; when chosen, will store its position in the series of choices
			}
			State[QNum][2] = 0; //tries at this q so far
			State[QNum][3] = 0; //incrementing percent-correct values of selected answers
			State[QNum][4] = 0; //penalties incurred for hints
			State[QNum][5] = ''; //Sequence of answers chosen by number
		}
		else{
			State[QNum] = null;
		}
	}
}





function CalculateOverallScore(){
	var TotalWeighting = 0;
	var TotalScore = 0;
	
	for (var QNum=0; QNum<State.length; QNum++){
		if (State[QNum] != null){
			if (State[QNum][0] > -1){
				TotalWeighting += I[QNum][0];
				TotalScore += (I[QNum][0] * State[QNum][0]);
			}
		}
	}
	if (TotalWeighting > 0){
		Score = Math.floor((TotalScore/TotalWeighting)*100);
	}
	else{
//if TotalWeighting is 0, no questions so far have any value, so 
//no penalty should be shown.
		Score = 100; 
	}
}

//New for 6.2.2.0
function CheckQuestionsCompleted(){
	if (ShowCompletedSoFar == false){return '';}
	var QsCompleted = 0;
	for (var QNum=0; QNum<State.length; QNum++){
		if (State[QNum] != null){
			if (State[QNum][0] >= 0){
				QsCompleted++;
			}
		}
	}
//Fixes for 6.2.2.2
	if (QsCompleted >= QArray.length){
		return ExerciseCompleted;
	}
	else{
		return CompletedSoFar + ' ' + QsCompleted + '/' + QArray.length + '.';
	}
}

function CheckFinished(){
	var FB = '';
	var AllDone = true;
	for (var QNum=0; QNum<State.length; QNum++){
		if (State[QNum] != null){
			if (State[QNum][0] < 0){
				AllDone = false;
			}
		}
	}
	if (AllDone == true){
	
//Report final score and submit if necessary
		CalculateOverallScore();
		FB = YourScoreIs + ' ' + Score + '%.';
		if (ShowCorrectFirstTime == true){
			var CFT = 0;
			for (QNum=0; QNum<State.length; QNum++){
				if (State[QNum] != null){
					if (State[QNum][0] >= 1){
						CFT++;
					}
				}
			}
			FB += '<br />' + CorrectFirstTime + ' ' + CFT + '/' + QsToShow;
		}
		
//New for 6.2.2.0
		FB += '<br />' + ExerciseCompleted;
		
		WriteToInstructions(FB);
		
		Finished == true;

		window.clearInterval(Interval);




		TimeOver = true;
		Locked = true;
		

		setTimeout('SendResults(' + Score + ')', 50);


		Finished = true;
		Detail = '<?xml version="1.0"?><hpnetresult><fields>';
		for (QNum=0; QNum<State.length; QNum++){
			if (State[QNum] != null){
				if (State[QNum][5].length > 0){
					Detail += '<field><fieldname>Question #' + (QNum+1) + '</fieldname><fieldtype>question-tracking</fieldtype><fieldlabel>Q ' + (QNum+1) + '</fieldlabel><fieldlabelid>QuestionTrackingField</fieldlabelid><fielddata>' + State[QNum][5] + '</fielddata></field>';
				}
			}
		}
		Detail += '</fields></hpnetresult>';
		setTimeout('Finish()', SubmissionTimeout);
	}

}


function TimesUp(){
	document.getElementById('Timer').innerHTML = 'Your time is over!';

	TimeOver = true;
	Finished = true;
	ShowMessage('Your time is over!');
	
//Set all remaining scores to 0
	for (var QNum=0; QNum<State.length; QNum++){
		if (State[QNum] != null){
			if (State[QNum][0] < 0){
				State[QNum][0] = 0;
			}
		}
	}
	CheckFinished();
}




//CORE CODE FOR CHECKING SHORT ANSWER GUESSES AGAINST ANSWER ARRAYS

var CaseSensitive = false;
var ShowAlsoCorrect = true;
var PleaseEnter = 'Please enter a guess.';
var HybridTries = 2;
var PartlyIncorrect = 'Your answer is partly wrong: ';
var CorrectList = 'Correct answers: ';
var NextCorrect = 'Next correct letter in the answer: ';
var CurrBox = null;

function TrackFocus(BoxID){
	InTextBox = true;
	CurrBox = document.getElementById(BoxID);
}

function LeaveGap(){
	InTextBox = false;
}

function TypeChars(Chars){
	if (CurrBox != null){
//Following check added for 6.0.4.4 to avoid error message in IE6
		if (CurrBox.style.display != 'none'){
			CurrBox.value += Chars;
			CurrBox.focus();
		}
	}
}

function CheckGuess(Guess, Answer, CaseSensitive, PercentCorrect, Feedback){
	this.Guess = Guess;
	this.Answer = Answer;
	this.PercentCorrect = PercentCorrect;
	this.Feedback = Feedback;
	if (CaseSensitive == false){
		this.WorkingGuess = Guess.toLowerCase();
		this.WorkingAnswer = Answer.toLowerCase();
	}
	else{
		this.WorkingGuess = Guess;
		this.WorkingAnswer = Answer;				
	}
	this.Hint = '';
	this.HintPenalty = 1/Answer.length;
	this.CorrectStart = '';
	this.WrongMiddle = '';
	this.CorrectEnd = '';
	this.PercentMatch = 0;
	this.DoCheck();
}

function CheckGuess_DoCheck(){
//Check if it's an exact match
	if (this.WorkingAnswer == this.WorkingGuess){
		this.PercentMatch = 100;
		this.CorrectStart = this.Guess;
	return;
	}
//Figure out how much of the beginning is correct
	var i = 0;
	var CorrectChars = 0;
	while (this.WorkingAnswer.charAt(i) == this.WorkingGuess.charAt(i)){
		i++;
		CorrectChars++;
	}
//Stash the hint
	this.Hint = this.Answer.charAt(i);
	
	this.CorrectStart = this.Guess.substring(0, i);
	
//If there's more to the answer, look at the rest of it
	if (i<this.Guess.length){
	
//Figure out how much of the end is correct
		var j = this.WorkingGuess.length-1;
		var k = this.WorkingAnswer.length-1;
		while ((j>=i)&&((this.WorkingAnswer.charAt(k) == this.WorkingGuess.charAt(j))&&(CorrectChars < this.Answer.length))){
			CorrectChars++;
			j--;
			k--;
		}
		this.CorrectEnd = this.Guess.substring(j+1, this.Guess.length);
		this.WrongMiddle = this.Guess.substring(i, j+1);
	}
	if (TrimString(this.WrongMiddle).length < 1){this.WrongMiddle = '_';}
//Calculate match score based on how much of the guess is correct
	if (CorrectChars < this.Answer.length){
		this.PercentMatch = Math.floor(100*CorrectChars)/this.Answer.length;
	}
	else{
		this.PercentMatch = Math.floor((100 * CorrectChars)/this.Guess.length);
	}	
}

CheckGuess.prototype.DoCheck = CheckGuess_DoCheck;

function CheckAnswerArray(CaseSensitive){
	this.CaseSensitive = CaseSensitive;
	this.Answers = new Array();
	this.Score = 0;
	this.Feedback = '';
	this.Hint = '';
	this.HintPenalty = 0;
	this.MatchedAnswerLength = 1;
	this.CompleteMatch = false;
	this.MatchNum = -1;
}

function CheckAnswerArray_AddAnswer(Guess, Answer, PercentCorrect, Feedback){
	this.Answers.push(new CheckGuess(Guess, Answer, this.CaseSensitive, PercentCorrect, Feedback));
}

CheckAnswerArray.prototype.AddAnswer = CheckAnswerArray_AddAnswer;

function CheckAnswerArray_ClearAll(){
	this.Answers.length = 0;
}

CheckAnswerArray.prototype.ClearAll = CheckAnswerArray_ClearAll;

function CheckAnswerArray_GetBestMatch(){
//First check for a 100% match
	for (var i=0; i<this.Answers.length; i++){
		if (this.Answers[i].PercentMatch == 100){
			this.Feedback = this.Answers[i].Feedback;
			this.Score = this.Answers[i].PercentCorrect;
			this.CompleteMatch = true;
			this.MatchNum = i;
			return;
		}
	}
//Now check for the best alternative match
	var PercentMatch = 0;
	var BestMatch = -1;
	for (i=0; i<this.Answers.length; i++){
		if ((this.Answers[i].PercentMatch > PercentMatch)&&(this.Answers[i].PercentCorrect == 100)){
			BestMatch = i;
			PercentMatch = this.Answers[i].PercentMatch;
		}
	}
	if (BestMatch > -1){
		this.Score = this.Answers[BestMatch].PercentMatch;
		this.Feedback = PartlyIncorrect + ' ';
		this.Feedback += '<span class="PartialAnswer">' + this.Answers[BestMatch].CorrectStart;
		this.Feedback += '<span class="Highlight">' + this.Answers[BestMatch].WrongMiddle + '</span>';
		this.Feedback += this.Answers[BestMatch].CorrectEnd + '</span>';
		this.Hint = '<span class="PartialAnswer">' + this.Answers[BestMatch].CorrectStart;
		this.Hint += '<span class="Highlight">' + this.Answers[BestMatch].Hint + '</span></span>';
		this.HintPenalty = this.Answers[BestMatch].HintPenalty;
	}
	else{
		this.Score = 0;
		this.Feedback = '';
	}
}

CheckAnswerArray.prototype.GetBestMatch = CheckAnswerArray_GetBestMatch;

function CheckShortAnswer(QNum){
//bail if question doesn't exist or exercise finished
	if ((State[QNum].length < 1)||(Finished == true)){return;}
	
//bail if question already complete
	if (State[QNum][0] > -1){return;}

//Get the guess (TrimString added to fix bug for 6.0.4.3)
	var G = TrimString(document.getElementById('Q_' + QNum + '_Guess').value);
	
//If no guess, bail with message; no penalty
	if (G.length < 1){
		ShowMessage(PleaseEnter);
		return;
	}

//Increment tries
	State[QNum][2]++;
	
//Create a check object
	var CA = new CheckAnswerArray(CaseSensitive);

	CA.ClearAll();
	for (var ANum=0; ANum<I[QNum][3].length; ANum++){
		CA.AddAnswer(G, I[QNum][3][ANum][0], I[QNum][3][ANum][3], I[QNum][3][ANum][1]);
	}
	CA.GetBestMatch();
	
//Store any match in the state tracking field
	if (State[QNum][5].length > 0){State[QNum][5] += ' | ';}
	if (CA.MatchNum > -1){
		State[QNum][5] += String.fromCharCode(65+CA.MatchNum);
	}
//Else store the student's answer
	else{
		State[QNum][5] += G;
	}

//Add the percent correct value for this answer to the Q State (works for all
//situations, wrong or right)
	State[QNum][3] += CA.Score;
	
//Now branch, based on the nature of the match
//Is it a complete match?
	if (CA.CompleteMatch == true){
		
//Is it with a wrong answer, or a right answer?
		if (CA.Score == 100){
//It's right
			CalculateShortAnsQuestionScore(QNum);
			
//New for 6.2.2.0
			var QsDone = CheckQuestionsCompleted();
			
//Get correct answer list if required, assuming there are any other correct alternatives
			if (ShowAlsoCorrect == true){
				var AlsoCorrectList = GetCorrectList(QNum, G, false);
				if (AlsoCorrectList.length > 0){
					CA.Feedback += '<br />' + CorrectList + '<br />' + AlsoCorrectList;
				}
			}	
		
//Get the overall score and add it to the feedback
			if (ContinuousScoring == true){
				CalculateOverallScore();
				CA.Feedback += '<br />' + YourScoreIs + ' ' + Score + '%.' + '<br />' + QsDone;
				WriteToInstructions(YourScoreIs + ' ' + Score + '%.' + '<br />' + QsDone);
			}
			else{
				WriteToInstructions(QsDone);
			}
			ShowMessage(CA.Feedback);
//Put the answer in
			ReplaceGuessBox(QNum, G);
			CheckFinished();
			return;
		}
	}
	
//Otherwise, it's a match to a predicted wrong/partially correct, or a partial
//match to a right answer
	if (CA.Feedback.length < 1){CA.Feedback = DefaultWrong;}
//Remove any previous score unless exercise is finished (6.0.3.8+)
	if (Finished == false){
		WriteToInstructions(strInstructions);
	}	
	ShowMessage(CA.Feedback);

//If necessary, switch a hybrid question to m/c
	if (State[QNum][2] >= HybridTries){
		SwitchHybridDisplay(QNum);
	}
}

function CalculateShortAnsQuestionScore(QNum){
	var Tries = State[QNum][2] + State[QNum][4]; //include tries and hint penalties;
	var PercentCorrect = State[QNum][3];
	var HintPenalties = State[QNum][4];

//Make sure it's not already complete
	if (State[QNum][0] < 0){
		if (HintPenalties >= 1){
			State[QNum][0] = 0;
		}
		else{
			State[QNum][0] = (PercentCorrect/(100*Tries));
		}
		if (State[QNum][0] < 0){
			State[QNum][0] = 0;
		}
	}
}

function SwitchHybridDisplay(QNum){
	if (document.getElementById('Q_' + QNum + '_Hybrid_MC') != null){
		document.getElementById('Q_' + QNum + '_Hybrid_MC').style.display = '';
		if (document.getElementById('Q_' + QNum + '_SA') != null){
			document.getElementById('Q_' + QNum + '_SA').style.display = 'none';
		}
	}
}

function GetCorrectArray(QNum){
	var Result = new Array();
	for (var ANum=0; ANum<I[QNum][3].length; ANum++){
		if (I[QNum][3][ANum][2] == 1){ //This is an acceptable correct answer
			Result.push(I[QNum][3][ANum][0]);
		}
	}	
	return Result;
}

function GetCorrectList(QNum, Answer, IncludeAnswer){
	var As = GetCorrectArray(QNum);
	var Result = '';
	for (var ANum=0; ANum<As.length; ANum++){
		if ((IncludeAnswer == true)||(As[ANum] != Answer)){
			Result += As[ANum] + '<br />';
		}
	}
	return Result;
}

function GetFirstCorrectAnswer(QNum){
	var As = GetCorrectArray(QNum);
	if (As.length > 0){
		return As[0];
	}
	else{
		return '';
	}
}

function ReplaceGuessBox(QNum, Ans){
	if (document.getElementById('Q_' + QNum + '_SA') != null){
		var El = document.getElementById('Q_' + QNum + '_SA');
		while (El.childNodes.length > 0){
			El.removeChild(El.childNodes[0]);
		}
		var A = document.createElement('span');
		A.setAttribute('class', 'Answer');
		var T = document.createTextNode(Ans);
		A.appendChild(T);
		El.appendChild(A);
	}
}



function ShowAnswers(QNum){
//bail if question doesn't exist or exercise finished
	if ((State[QNum].length < 1)||(Finished == true)){return;}
	
//Get the answer list to display
	var Ans = GetCorrectList(QNum, '', false);
	Ans = CorrectList + '<br />' + Ans;
	
//Display feedback
	ShowMessage(Ans);
	
//Set the score for this question to 0 if no score yet 
	if (State[QNum][0] < 1){
		State[QNum][0] = 0;
	}

//Get the first correct answer
	var FirstAns = GetFirstCorrectAnswer(QNum);
	
//Replace the textbox
	ReplaceGuessBox(QNum, FirstAns);
	
//New for 6.2.2.0: Get scores and feedback
	var QsDone = CheckQuestionsCompleted();
	
	if (ContinuousScoring == true){
		CalculateOverallScore();
		WriteToInstructions(YourScoreIs + ' ' + Score + '%.' + '<br />' + QsDone);
	}
	
//This may be the last, so check finished status
	CheckFinished();
}





function ShowHint(QNum){
//bail if question doesn't exist or exercise finished
	if ((State[QNum].length < 1)||(Finished == true)){return;}
	
//bail if question already complete
	if (State[QNum][0] > -1){return;}

//Get the guess
	var G = document.getElementById('Q_' + QNum + '_Guess').value;
	
//If no guess, give the first correct bit
	if (G.length < 1){
		var Ans = GetFirstCorrectAnswer(QNum);
		var Hint = Ans.charAt(0);
		ShowMessage(NextCorrect + '<br />' + Hint);
//Penalty for hint
		State[QNum][4] += (1/Ans.length);
		return;
	}

//Increment tries
	State[QNum][2]++;
	
//Create a check object
	var CA = new CheckAnswerArray(CaseSensitive);

	CA.ClearAll();
	for (var ANum=0; ANum<I[QNum][3].length; ANum++){
//Use only correct answers
		if (I[QNum][3][ANum][2] == 1){
			CA.AddAnswer(G, I[QNum][3][ANum][0], I[QNum][3][ANum][3], I[QNum][3][ANum][1]);
		}
	}
	CA.GetBestMatch();
	if (CA.CompleteMatch == true){
//It's right!
		CheckShortAnswer(QNum);
		return;
	}
	else{
		if (CA.Hint.length > 0){
			ShowMessage(NextCorrect + '<br />' + CA.Hint);
			State[QNum][4] += CA.HintPenalty;
		}
		else{
			ShowMessage(DefaultWrong + '<br />' + NextCorrect + '<br />' + GetFirstCorrectAnswer(QNum).charAt(0));
		}
	}
}








//CODE FOR HANDLING TIMER
//Timer code
var Seconds = 900;
var Interval = null;

function StartTimer(){
	Interval = window.setInterval('DownTime()',1000);
	document.getElementById('TimerText').style.display = 'inline';
}

function DownTime(){
	var ss = Seconds % 60;
	if (ss<10){
		ss='0' + ss + '';
	}

	var mm = Math.floor(Seconds / 60);

	if (document.getElementById('Timer') == null){
		return;
	}

	document.getElementById('TimerText').innerHTML = mm + ':' + ss;
	if (Seconds < 1){
		window.clearInterval(Interval);
		TimeOver = true;
		TimesUp();
	}
	Seconds--;
}







//CODE FOR HANDLING SENDING OF RESULTS

var UserName = '';
var StartTime = (new Date()).toLocaleString();

var ResultForm = '<html><body><form name="Results" action="http://www.thedeliverancecenter.com/cgi-bin/FormMail.pl" method="post" enctype="x-www-form-encoded">';
ResultForm += '<input type="hidden" name="recipient" value="info@thedeliverancecenter.com"></input>';
ResultForm += '<input type="hidden" name="subject" value="Prophecy Final Exam"></input>';
ResultForm += '<input type="hidden" name="Exercise" value="Prophecy Final Exam"></input>';
ResultForm += '<input type="hidden" name="realname" value=""></input>';
ResultForm += '<input type="hidden" name="Score" value=""></input>';
ResultForm += '<input type="hidden" name="Start_Time" value=""></input>';
ResultForm += '<input type="hidden" name="End_Time" value=""></input>';
ResultForm += '<input type="hidden" name="title" value="Thanks!"></input>';
ResultForm += '<input type="hidden" name="bgcolor" value="#C0C0C0"></input>';
ResultForm += '<input type="hidden" name="text_color" value="#000000"></input>';
ResultForm += '<input type="hidden" name="sort" value="order:realname,Exercise,Score,Start_Time,End_Time"></input>';
ResultForm += '</form></body></html>';

function GetUserName(){
	UserName = prompt('Please enter your name:','');
	UserName += '';
	if ((UserName.substring(0,4) == 'null')||(UserName.length < 1)){
		UserName = prompt('Please enter your name:','');
		UserName += '';
		if ((UserName.substring(0,4) == 'null')||(UserName.length < 1)){
			history.back();
		}
	}
}

function SendResults(Score){
	var today = new Date;
	var NewName = '' + today.getTime();
      var NewWin = window.open('', NewName, 'toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=yes,resizable=no,,width=400,height=300');

//If user has prevented popups, no way to proceed -- exit
	if (NewWin == null){
		return;
	}

	NewWin.document.clear();
	NewWin.document.open();
	NewWin.document.write(ResultForm);
	NewWin.document.close();
	NewWin.document.Results.Score.value = Score + '%';
	NewWin.document.Results.realname.value = UserName;
	NewWin.document.Results.End_Time.value = (new Date()).toLocaleString();
	NewWin.document.Results.Start_Time.value = StartTime;
	NewWin.document.Results.submit();
}



//-->

//]]>


