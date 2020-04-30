function nowSchedule(){

var text="Today's schedule is: ";
var nowDate = new Date();
var currDay = nowDate.getDay();

var SundaySchedule="Prayer and Devotions 7am-8am" <br> "Sunday School 10am" <br> "Worship 11am" <br> "Street Meeting 5:30pm" <br>"Evangelistic Servivice 6:30pm";
var MondaySchedule="Prayer and Devotions 7am-8am" <br>"Prayer and Devotions 7pm-8pm" ;
var TuesdaySchedule="Prayer and Devotions 7am-8am"<br>"Deliverance Bible Instiute 8:45am-12:00pm"<br>"Special Bible Study 7pm";
var WednesdaySchedule="Prayer and Devotions 7am-8am"<br> "Worship 11am" <br> "Street Meeting 5:30pm" <br>"Regular Bible Study 7pm";
var ThursdaySchedule="Prayer and Devotions 7am-8am"<br> "Worship 11am" <br> "Street Meeting 5:30pm" <br>"Prayer and Devotions 7pm-8pm";
var FridaySchedule="Prayer and Devotions 7am-8am"<br> "Worship 11am" <br> "Street Meeting 5:30pm" <br>"Youth Meeting 6pm";
var SaturdaySchedule="Prayer and Devotions 7am-8am"<br> "Worship 11am" <br> "Street Meeting 5:30pm" <br>"Prayer and Devotions 7pm-8pm";

  if (currDay<1) {
    document.write(text + SundaySchedule);
  }
  else if (currDay==1) {
    document.write(text + MondaySchedule);
  }
  else if (currDay==2) {
    document.write(text + TuesdaySchedule);
  }
    else if (currDay==3) {
    document.write(text + WednesdaySchedule);
  }
  else if (currDay==4) {
    document.write(text + ThursdaySchedule);
  }
  else if (currDay==5) {
    document.write(text + FridaySchedule);
  }
  else {
    document.write(text + SaturdaySchedule);
  }


}