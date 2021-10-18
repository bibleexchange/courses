<?php
//oLD table of contents
//if (!isset($_SESSION)){session_start();}
//$_SESSION['course'] = "Revelation";
//include_once ("table-of-contents.php" );
//oLD table of contents

if (!isset($_SESSION)){session_start();}

$course = $_SESSION['course'];
include_once ("../../../_includes/notes.class.php");

$notes = new notes();

$notes->createTocFromDb($_SESSION['courseId']);
?>