<?php

$s = simplexml_load_file('dbiCourses.xml');

/*print $s->recording[3]->stitle . "\n";*/

foreach ($s->course as $course) {
    print "<li><a href='".$course->fileName."'>" . $course->cName . "</a></li>";
}

?>