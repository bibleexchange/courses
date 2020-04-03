<?php

if (!isset($_SESSION)){session_start();}

$course = $_SESSION['course'];
include_once ("../../_includes/myFunctionsLib.php");
include_once ("study/".prettyName($course)."/docList.php");

$sectionArrayId = $_SESSION['sectionArrayId'];
createToc ($sectionArrayId,$docs);
?>