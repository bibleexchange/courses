<?php
include ("courseVariables.php");
session_start();
$_SESSION['viewType']= 1;
$_SESSION['course'] = $courseName;
header('Location: ../default.php' );
?>