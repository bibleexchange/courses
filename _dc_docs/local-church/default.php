<?php
session_start();
$_SESSION['viewType']= 1;
$_SESSION['course'] = "Local Church";
header('Location: ../default.php' );
?>