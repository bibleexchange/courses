<?php
session_start();
$_SESSION['viewType']= 1;
$_SESSION['course'] = "Hebrews";
header('Location: ../default.php' );
?>