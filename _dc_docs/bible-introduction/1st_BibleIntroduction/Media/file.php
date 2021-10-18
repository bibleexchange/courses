<?php
if (file_exists ("file1.txt")){
	//Method 1 for displaying example
	$myData = file_get_contents( "file1.txt");
}
echo $myData;
?>