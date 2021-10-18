<?php 
session_start();
$tocSectionId = $_GET["section"];

include_once ("docList.php");
include_once ("../../../../../_includes/myFunctionsLib.php");

createToc ($tocSectionId,$docs);
?>