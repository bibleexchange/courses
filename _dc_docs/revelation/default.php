<?php
session_start();
$_SESSION['viewType']= 1;
$_SESSION['course'] = "Revelation";
header('Location: ../default.php' );
?>