<?php 
include ('../../../_includes/dirToArray.php');
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="../styles/dbio_style.css"/>
<style>
span:lang(swa) {display:none;}

</style>
</head>
<body>

<?php
$dir1 = "";
$dir2 = $_GET['dir'];
$dir = $dir1.$dir2."/";

$files = dirToArray($dir);

foreach ($files AS $file){

if (is_array($file)== false){
echo "<h3>".$file."</h3>";
}
}
?>
<hr>


</body>
</html>