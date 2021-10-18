<?php
session_start();
//session_destroy();
include_once( "_includes/notes.class.php");
include_once( "_includes/user.php");
include_once( "_includes/enrollment.class.php");
include_once ("_includes/mysql.class.php");
include_once ("_includes/myForms.class.php");

$notes = new notes();
$user = new studentUser();
$enroll = new enrollment();
$sql = new my_mysql_queries();
$strClean = new string_clean_up();

if (isset($_GET['cid'])){$cid = $_GET['cid'];}
if (isset($_GET['sid'])){$sid = $_GET['sid'];}
if (isset($_GET['chid'])){$chid = $_GET['chid'];}

$notes->setCurrentSessionVars($cid,$sid,$chid);

if(in_array($_SESSION['course_id'], $notes->protected)){
	$user->authenticate();
}							

if (isset($_POST['langSubmit'])){$_SESSION['lang'] = $_POST['langSelect'];}
if (isset($_SESSION['userID'])){$userId = $_SESSION['userID'];}else{$userId = FALSE;}
if (isset($_POST['enrollStudentId'])){$enroll->enrollRequest($_POST['enrollStudentId'],$_POST['enrollCourseId']);}
if (isset($_POST['suspendEnrollId'])){$enroll->suspendCourse($_POST['suspendEnrollId']);}
if (isset($_POST['resumeCourse'])){$enroll->resumeCourse($_POST['resumeCourse']);}
if (isset($_POST['deletePendingId'])){$enroll->deletePending($_POST['deletePendingId']);}

$referringPage = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//print_r($_SESSION);
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $_SESSION['course_name']; ?></title>
	<?php include ("_includes/template/hd_main.php");?>
	<script src="/js/js-lib.js"></script>
	<link rel="icon" href="images/dbifavicon.ico" type="image/x-icon">
	<?php include ("_includes/template/smp-header-files.php");?>
	<style>
		<?php echo $notes->showLanguage($_SESSION["lang"]);	?>
		<?php echo $notes->showAnswers($_SESSION["sqa"]);	?>
	</style>
	
</head>
<body>
	<?php include ('_includes/template/navBar.php'); ?>

	<div id="main">

		<p><?php echo '('.$_SESSION['course_name'].' : '.$_SESSION['section_title'].')'; ?></p>
		
		<?php
		print "<div class= 'textbook main-notes' id='".$_SESSION['file_name']."'>";
		include ("../library/".$notes->str->prettyName($_SESSION['course_name'])."/".$notes->str->prettyName($_SESSION['file_name']).".".$_SESSION['file_type']); 
		print "</div>";
		
		$notes->displayStudentAnswers($_SESSION['file_name'],$_SESSION['course_id'],$userId,$chid,$referringPage);		
		?>
	</div>
	<div id="sideBar">
		<?php
		include ("table-of-contents.php");
		
		echo "<h2>POST</h2>";
		foreach($_POST AS $key => $value){
			echo '\''.$key.'\' = '.$value.'\'';
			echo '<br>';
		}
		
		echo "<h2>SESSION</h2>";
		foreach($_SESSION AS $key => $value){
			echo '\''.$key.'\' = '.$value.'\'';
			echo '<br>';
		}
		
		?>
		
		
	</div><!--sideBar END-->
	
	  <?php include ('_includes/template/inc_footer.php'); ?>
  </body>
</html>