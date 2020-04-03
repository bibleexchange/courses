<?php
session_start();
$_SESSION['viewType']= 1;
$_SESSION['course'] = "The Bride of Christ";
header('Location: ../default.php' );
?>