var m_names = new Array("Jan.", "Feb.", "Mar.",
"Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.",
"Oct.", "Nov.", "Dec.");

var d = new Date();
var curr_day = d.getDay();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();

document.write(curr_date + " " + m_names[curr_month] + " " + curr_year);
