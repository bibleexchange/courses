
// Fill in the Blanks Quiz
// copyright Stephen Chapman, 7th August 2005
// you may copy this code but please keep the copyright notice as well

function test() {var cor = 0;
var el = document.getElementsByTagName('select');
var tot = el.length; 
for (var i = 0; 
i < tot; 
i++) {if (el[i].form != quiz || el[i][el[i].selectedIndex].value == '1') cor++;
}if (cor != tot) alert('Try Again');
return (cor == tot);}
                    