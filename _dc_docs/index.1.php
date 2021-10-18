<?php
session_start();
include_once( "_includes/notes.class.php");
include_once( "_includes/student_user.php");
include_once( "_includes/enrollment.class.php");

$notes = new notes();
$user = new studentUser();
$enroll = new enrollment();

$_SESSION['course_id'] = $_GET['cid'];
$_SESSION['section_id'] = $_GET['sid'];
$_SESSION['chapter_id'] = $_GET['chid'];
$_SESSION['viewType'] = 3;
$_SESSION['lang']= "eng";

if ($_SESSION['viewType'] = 3){
$_SESSION["sqa"] = false;
}

$cid = $_SESSION['course_id'];
$sid = $_SESSION['section_id'];
$chapterId = $_SESSION['chapter_id'];

$notes->setCurrentSessionVars($cid,$sid,$chapterId);

$title = $_SESSION['course_name'];
$course_name = $_SESSION['course_name'];
$section_title = $_SESSION['section_title'];
$file_name =  $_SESSION['file_name'];
$file_type =  $_SESSION['file_type'];

if (isset($_SESSION['userID'])){$userId = $_SESSION['userID'];}else{$userId = FALSE;}
if (isset($_POST['enrollStudentId'])){$enroll->enrollRequest($_POST['enrollStudentId'],$_POST['enrollCourseId']);}
if (isset($_POST['suspendEnrollId'])){$enroll->suspendCourse($_POST['suspendEnrollId']);}
if (isset($_POST['resumeCourse'])){$enroll->resumeCourse($_POST['resumeCourse']);}
if (isset($_POST['deletePendingId'])){$enroll->deletePending($_POST['deletePendingId']);}

$referringPage = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title; ?></title>
	<?php include ("_includes/template/hd_main.php");?>
	<script src="/js/js-lib.js"></script>
	<link rel="icon" href="images/dbifavicon.ico" type="image/x-icon">
	<?php include ("_includes/template/smp-header-files.php");?>
	<style>
		<?php echo $notes->showLanguage($_SESSION["lang"]);	?>
		<?php echo $notes->showAnswers($_SESSION["sqa"]);	?>
	</style>
	
</head>
<body class='textbook'>
	<?php include ('_includes/template/navBar.php'); ?>

	<div id="main">

		<?php 
		//print_r($_SESSION);
		print "<div class= 'main-notes' id='".$file_name."'>";
		include ("../library/".$notes->str->prettyName($course_name)."/".$notes->str->prettyName($file_name).".".$file_type); 
		print "</div>";
		
		//$notes->displayQuestions($file_name,$chapterId,$userId,$referringPage);
		$notes->displayStudentAnswers($file_name,$cid,$userId,$chapterId,$referringPage);		
		?>
	</div>
	<div id="sideBar">
		<?php
		include ("table-of-contents.php");
		?>

	</div><!--sideBar END-->
	
      <!--<div id="pageTop">
		<a href="#top" class="btn btn-primary btn-lg" role="button">Top</a> 
	<a href="#" class="btn btn-primary btn-lg" role="button">Show Answers</a>
		<a href="#" class="btn btn-primary btn-lg" role="button">Language</a></div>
		-->
		<!-- BEGIN TOGGLE MENU --><!-- 
		<nav id="navChapter" class="mC">
			<ul class="mH" onclick="toggleMenu('chMenu')">
				<li><span id="onOff">+</span> Options</li>
				<ul id="chMenu" class="mL">
					<a href="#"  class="mO"><li>^ Top</li></a>
					<a href="#chSummary"  class="mO"><li>Study Questions</li></a>
					<a href="#chNotes"  class="mO"><li>Language</li></a>
					<a href="#chStudy" class="mO"><li>Answers</li></a>
				</ul>
			</ul>
		</nav>-->
		<!-- END TOGGLE MENU -->
	  <?php include ('_includes/template/inc_footer.php'); ?>
  </body>
</html>