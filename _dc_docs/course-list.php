<?php
include_once ("../../../_includes/myFunctionsLib.php");

echo "<h2>First Year</h2><p>".count($dbiCourses[1])." Courses Available.</p>";
listCoursesByYear(1,1); //add second argument 0 or 1 show not available for available respectively

echo "<h2>Second Year</h2><p>".count($dbiCourses[2])." Courses Available.</p>";
listCoursesByYear(2,1);	

echo "<h2>Third Year</h2><p>".count($dbiCourses[3])." Courses Available.</p>";	
listCoursesByYear(3,1);

echo "<h2>Electives</h2><p>".count($dbiCourses[0])." Elective Courses Available.</p>";
listCoursesByYear(0,1);

?>