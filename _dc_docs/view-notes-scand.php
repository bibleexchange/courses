<?php 
function dirToArray($dir) { 
   
   $result = array(); 

   $cdir = scandir($dir); 
   foreach ($cdir as $key => $value) 
   { 
      if (!in_array($value,array(".",".."))) 
      { 
         if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
         { 
            $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value); 
         } 
         else 
         { 
            $result[] = $value; 
         } 
      } 
   } 
   
   return $result; 
} 
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="../styles/dbio_style.css"/>
<style>
span:lang(swa) {display:none;}

</style>
</head>
<body>
<form method='get'>

<select name='file'>
<?php
$dir1 = "";
$dir2 = $_GET['dir'];
$dir = $dir1.$dir2."/";

$files = dirToArray($dir);

foreach ($files AS $file){

if (is_array($file)== false){
echo "<option>".$file."</option>";
}
}
?>
</select>
<input type='hidden' name='dir' value='<?php echo $dir; ?>'>
<input type='submit'>
</form>
<hr>
<?php
$doc = $_GET['file'];
?>
<div class='textbook'>

<?php include ($dir1.$dir2."/".$doc);?>

</div>


</body>
</html>