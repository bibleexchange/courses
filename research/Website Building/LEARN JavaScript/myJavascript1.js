
function questBAs0()//Bible Atlas Study Questions 1
{
document.forms.test.elements.testname.value="Bible Atlas Study Questions 1";
document.test.quest0.value=quest[0][0][0][0];
document.test.quest1.value=quest[0][0][0][1];
document.test.quest2.value=quest[0][0][0][2];
document.test.quest3.value=quest[0][0][0][3];
document.test.quest4.value=quest[0][0][0][4];
document.test.quest5.value=quest[0][0][0][5];
document.test.quest6.value=quest[0][0][0][6];
document.test.quest7.value=quest[0][0][0][7];
document.test.quest8.value=quest[0][0][0][8];
document.test.quest9.value=quest[0][0][0][9];

//setTimeout('questBAs0()',1000);this line use to cause the info refresh every second. just incase someone deletes or types over the info it will automatically refresh itself. but because of the conflict involved I used the keyword 'disabled' in the from element itself.
}

function questBAs1()//Bible Atlas Study Questions 2
{
document.forms.test.elements.testname.value="Bible Atlas Study Questions 2";
document.test.quest0.value=quest[0][0][1][0];
document.test.quest1.value=quest[0][0][1][1];
document.test.quest2.value=quest[0][0][1][2];
document.test.quest3.value=quest[0][0][1][3];
document.test.quest4.value=quest[0][0][1][4];
document.test.quest5.value=quest[0][0][1][5];
document.test.quest6.value=quest[0][0][1][6];
document.test.quest7.value=quest[0][0][1][7];
document.test.quest8.value=quest[0][0][1][8];
document.test.quest9.value=quest[0][0][1][9];
}

function questBAs2()//Bible Atlas Study Questions 3
{
document.test.testname.value="Bible Atlas Study Questons 3";
document.test.quest0.value=quest[0][0][2][0];
document.test.quest1.value=quest[0][0][2][1];
document.test.quest2.value=quest[0][0][2][2];
document.test.quest3.value=quest[0][0][2][3];
document.test.quest4.value=quest[0][0][2][4];
document.test.quest5.value=quest[0][0][2][5];
document.test.quest6.value=quest[0][0][2][6];
document.test.quest7.value=quest[0][0][2][7];
document.test.quest8.value=quest[0][0][2][8];
document.test.quest9.value=quest[0][0][2][9];
}

function questDOs0()//Doctrine I Study Questions 1
{
document.test.testname.value="Doctrine I Study Questions 1";
document.test.quest0.value=quest[3][0][0][0];
document.test.quest1.value=quest[3][0][0][1];
document.test.quest2.value=quest[3][0][0][2];
document.test.quest3.value=quest[3][0][0][3];
document.test.quest4.value=quest[3][0][0][4];
document.test.quest5.value=quest[3][0][0][5];
document.test.quest6.value=quest[3][0][0][6];
document.test.quest7.value=quest[3][0][0][7];
document.test.quest8.value=quest[3][0][0][8];
document.test.quest9.value=quest[3][0][0][9];
}


//QUESTIONS [class][kind of test][which test][question]
var quest = new Array(36)
	quest[0]=new Array(4) //class--Bible Atlas 
		quest[0][0]= new Array (7) //kind of test--Study Questions
			quest[0][0][0]= new Array (10) //which test Study Questions 1
			quest[0][0][0][0]="1. Who?" //Question 1
			quest[0][0][0][1]="2. What?" //Question 2, etc.
			quest[0][0][0][2]="3. When?"
			quest[0][0][0][3]="4. Where?"
			quest[0][0][0][4]="5. Where?"
			quest[0][0][0][5]="a" //Question 1
			quest[0][0][0][6]="a" //Question 2, etc.
			quest[0][0][0][7]="a"
			quest[0][0][0][8]="a"
			quest[0][0][0][9]="a"
			quest[0][0][1]= new Array (10) //which test Study Questions 2
			quest[0][0][1][0]="Jesus?"
			quest[0][0][1][1]="John?"
			quest[0][0][1][2]="Luke?"
			quest[0][0][1][3]="Paul?"
			quest[0][0][1][4]="Where?"
			quest[0][0][1][5]="Jesus?"
			quest[0][0][1][6]="John?"
			quest[0][0][1][7]="Luke?"
			quest[0][0][1][8]="Paul?"
			quest[0][0][1][9]="Where?"

			quest[0][0][2]= new Array (10) //which test Study Questions 3
			quest[0][0][2][0]="Peter"
			quest[0][0][2][1]="Zechariah"
			quest[0][0][2][2]="Kingdom?"
			quest[0][0][2][3]="True or False?"
			quest[0][0][2][4]="Where?"
			quest[0][0][2][5]="Peter"
			quest[0][0][2][6]="Zechariah"
			quest[0][0][2][7]="Kingdom?"
			quest[0][0][2][8]="True or False?"
			quest[0][0][2][9]="Where?"

			quest[0][0][3]= new Array (10)//which test Study Questions 4
			quest[0][0][3][0]="Who?"
			quest[0][0][3][1]="What?"
			quest[0][0][3][2]="When?"
			quest[0][0][3][3]="Where?"
			quest[0][0][3][4]="Where?"
			quest[0][0][3][5]="Who?"
			quest[0][0][3][6]="What?"
			quest[0][0][3][7]="When?"
			quest[0][0][3][8]="Where?"
			quest[0][0][3][9]="Where?"

			quest[0][0][4]= new Array (10)//which test Study Questions 5
			quest[0][0][4][0]="Who?"
			quest[0][0][4][1]="What?"
			quest[0][0][4][2]="When?"
			quest[0][0][4][3]="Where?"
			quest[0][0][4][4]="Where?"
			quest[0][0][5]= new Array (5)//which test Study Questions 6
			quest[0][0][5][0]="Who?"
			quest[0][0][5][1]="What?"
			quest[0][0][5][2]="When?"
			quest[0][0][5][3]="Where?"
			quest[0][0][5][4]="Where?"
			quest[0][0][6]= new Array (5)//which test Study Questions 7
			quest[0][0][6][0]="Who?"
			quest[0][0][6][1]="What?"
			quest[0][0][6][2]="When?"
			quest[0][0][6][3]="Where?"
			quest[0][0][6][4]="Where?"
		quest[0][1]= new Array (7)//Quizzes
		quest[0][2]= new Array (7)//Extra Tests, assignments
		quest[0][3]= new Array (1)//Final Exam
	quest[1]=new Array(4) //class--Bible Introduction
	quest[2]=new Array(4) //class--Church History
	quest[3]=new Array(4) //class--Doctrine I
		quest[3][0]= new Array (7) //kind of test--Study Questions
			quest[3][0][0]= new Array (10) //which test Study Questions 1
			quest[3][0][0][0]="1. What is the meaning of Doctrine?" //Question 1
			quest[3][0][0][1]="2. Why do we describe theology or doctrine as “a science”?" //Question 2, etc.
			quest[3][0][0][2]="3. What is the connection between theology and religion?"
			quest[3][0][0][3]="4. What is the difference between a doctrine and a dogma? "
			quest[3][0][0][4]="5. What connection does doctrine have with the truth found in the Word of God?"
			quest[3][0][0][5]="6. What connection does doctrine have with Salvation? Give a Scripture reference." 
			quest[3][0][0][6]="7. What connection does doctrine have with development of Christian character?"
			quest[3][0][0][7]="8. Give verbatim I Tim. 4:16."
			quest[3][0][0][8]="9. Give verbatim II Tim. 2:15."
			quest[3][0][0][9]="10.Give verbatim II Tim. 3:16."

			quest[3][0][1]= new Array (5) //which test Study Questions 2
			quest[3][0][1][0]="Jesus?"
			quest[3][0][1][1]="John?"
			quest[3][0][1][2]="Luke?"
			quest[3][0][1][3]="Paul?"
			quest[3][0][1][4]="Where?"
			quest[3][0][2]= new Array (5) //which test Study Questions 3
			quest[3][0][2][0]="Peter"
			quest[3][0][2][1]="Zechariah"
			quest[3][0][2][2]="Kingdom?"
			quest[3][0][2][3]="True or False?"
			quest[3][0][2][4]="Where?"
			quest[3][0][3]= new Array (5)//which test Study Questions 4
			quest[3][0][3][0]="Who?"
			quest[3][0][3][1]="What?"
			quest[3][0][3][2]="When?"
			quest[3][0][3][3]="Where?"
			quest[3][0][3][4]="Where?"
			quest[3][0][4]= new Array (5)//which test Study Questions 5
			quest[3][0][4][0]="Who?"
			quest[3][0][4][1]="What?"
			quest[3][0][4][2]="When?"
			quest[3][0][4][3]="Where?"
			quest[3][0][4][4]="Where?"
			quest[3][0][5]= new Array (5)//which test Study Questions 6
			quest[3][0][5][0]="Who?"
			quest[3][0][5][1]="What?"
			quest[3][0][5][2]="When?"
			quest[3][0][5][3]="Where?"
			quest[3][0][5][4]="Where?"
			quest[3][0][6]= new Array (5)//which test Study Questions 7
			quest[3][0][6][0]="Who?"
			quest[3][0][6][1]="What?"
			quest[3][0][6][2]="When?"
			quest[3][0][6][3]="Where?"
			quest[3][0][6][4]="Where?"
		quest[3][1]= new Array (7)//Quizzes
		quest[3][2]= new Array (7)//Extra Tests, assignments
		quest[3][3]= new Array (1)//Final Exam

//ANSWERS [class][kind of test][which test][Answer #][Answer variations]
	ans[0]=new Array(4) //class--Doctrine I
		ans[0][0]= new Array (7) //kind of test--Study Questions
		ans[0][0][0]= new Array (4) //which test Study Questions 1
			ans[0][0][0][0]= new Array (5) //Answer 1 followed by its variations
			ans[0][0][0][0][0]="Jesus"
			ans[0][0][0][0][1]="Christ"
			ans[0][0][0][0][2]="Jesus Christ"
			ans[0][0][0][0][3]="Christ Jesus"
			ans[0][0][0][0][4]="Christ Jesus"
			ans[0][0][0][1]= new Array (5) //Answer 2 followed by its variations
			ans[0][0][0][1][0]="Jesus" 
			ans[0][0][0][1][1]="Christ"
			ans[0][0][0][1][2]="Jesus Christ"
			ans[0][0][0][1][3]="Christ Jesus"
			ans[0][0][0][1][4]="the Christ"
			ans[0][0][0][2]= new Array (5) //Answer 3 followed by its variations
			ans[0][0][0][2][0]="Jesus" 
			ans[0][0][0][2][1]="Christ"
			ans[0][0][0][2][2]="Jesus Christ"
			ans[0][0][0][2][3]="Christ Jesus"
			ans[0][0][0][2][4]="the Christ"
			ans[0][0][0][2][4]="the Christ"
			ans[0][0][0][3]= new Array (5) //Answer 4 followed by its variations
			ans[0][0][0][3][0]="Jesus"
			ans[0][0][0][3][1]="Christ"
			ans[0][0][0][3][2]="Jesus Christ"
			ans[0][0][0][3][3]="Christ Jesus"
			ans[0][0][0][3][4]="the Christ"
			ans[0][0][0][4]= new Array (5) //Answer 5 followed by its variations
			ans[0][0][0][4][0]="Jesus"
			ans[0][0][0][4][1]="Christ"
			ans[0][0][0][4][2]="Jesus Christ"
			ans[0][0][0][4][3]="Christ Jesus"
			ans[0][0][0][4][4]="the Christ"

function timestart()
{
var thetime=new Date();

var nmonth=thetime.getMonth();
var ntoday=thetime.getDate();
var nyear=thetime.getYear();
var nday=thetime.getDay();
var nhours=thetime.getHours();
var nminutes=thetime.getMinutes();
var nseconds=thetime.getSeconds();
document.test.timestart.value=nhours+":"+nminutes+":"+nseconds+","+AorP;nmonth+", "+ntoday+", "+nyear+", "+nday;
}
	
function startclock()
{
var thetime=new Date();

var nmonth=thetime.getMonth();
var ntoday=thetime.getDate();
var nyear=thetime.getFullYear();
var nday=thetime.getDay();
var nhours=thetime.getHours();
var nminutes=thetime.getMinutes();
var nseconds=thetime.getSeconds();
var AorP="";

if (nhours>=12)
	AorP="P.M.";
else
	AorP="A.M.";
if(nhours>=13)
	nhours-=12;
if(nhours==0)
	nhours=12;
if(nseconds<10)
	nseconds="0"+nseconds;
if(nminutes<10)
	nminutes="0"+nminutes;
if(nmonth==0)
	nmonth="January"
if(nmonth==1)
	nmonth="February"
if(nmonth==2)
	nmonth="March"
if(nmonth==3)
	nmonth="April"
if(nmonth==4)
	nmonth="May"
if(nmonth==5)
	nmonth="June"
if(nmonth==6)
	nmonth="July"
if(nmonth==7)
	nmonth="August"
if(nmonth==8)
	nmonth="September"
if(nmonth==9)
	nmonth="October"
if(nmonth==10)
	nmonth="November"
if(nmonth==11)
	nmonth="December"
//if(nyear>=100)
	//nyear+=1900
if(nday==0)
	nday="Sunday"
if(nday==1)
	nday="Monday"
if(nday==2)
	nday="Tuesday"
if(nday==3)
	nday="Wednesday"
if(nday==4)
	nday="Thursday"
if(nday==5)
	nday="Friday"
if(nday==6)
	nday="Saturday"
document.test.date.value=nmonth+" "+ntoday+", "+nyear+", "+nday;
document.test.time.value=nhours+":"+nminutes+":"+nseconds+" "+AorP;

setTimeout('startclock()',1000);
}
/*
function validateForm()
{
	var testform_object = document.forms.test;
	if(testform_object.elements.stname.value == ''){
		alert('You forgot your name!');
		return false;
	}else if (testform_object.elements.guess0.value == ''){
		alert ("You skipped question 1!");
		return false;
	}else if (testform_object.elements.guess1.value == ''){
		alert ("You skipped question 2!");
		return false;
	}else if (testform_object.elements.guess2.value == ''){
		alert ("You skipped question 3!");
		return false;
	}else if (testform_object.elements.guess3.value == ''){
		alert ("You skipped question 4!");
		return false;
	}else if (testform_object.elements.guess4.value == ''){
		alert ("You skipped question 5!");
		return false;
	}
	return true;
}
*/
function validateForm()
{
	//var ans[0][0][0][0] array = 10;
	
	var testform_object = document.forms.test;
	if(testform_object.elements.stname.value == ''){
		alert('You forgot your name!');
		return false;
	}else if (testform_object.elements.guess0.value == ''){ //ans[0][0][0][0])
		alert ("RIGHT!");
		return false;
	}else if (testform_object.elements.guess1.value == ''){
		alert ("You skipped question 2!");
		return false;
	}else if (testform_object.elements.guess2.value == ''){
		alert ("You skipped question 3!");
		return false;
	}else if (testform_object.elements.guess3.value == ''){
		alert ("You skipped question 4!");
		return false;
	}else if (testform_object.elements.guess4.value == ''){
		alert ("You skipped question 5!");
		return false;
	}
	return true;
}