<?php
session_start();
$_SESSION['viewType']= 1;
$_SESSION['lang']= $_GET['lang'];

if(isset($_SESSION['course']))
{}
else {
$_SESSION['course'] = "Revelation";
}

$course = "Doctrine 3";//$_SESSION['course'];
$title = $course;

include_once ("_includes/notes.class.php");
$notes = new notes();   
?>
<html>
<head>
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="../styles/dbio_style.css"/>
	<style>
		<?php echo $notes->showLanguage($_SESSION["lang"]);	?>
	</style>
	
</head>
<body>
<div class="textbook">
<?php
$notes = new notes();

$notes->createFullText($_GET['id'],'include');

?>
</div>

<aside></aside>

</body>
</html>