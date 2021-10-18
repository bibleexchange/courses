<?php
session_start();
//session_destroy();
include_once( "_includes/notes.class.php");
include_once( "_includes/user.class.php");
include_once( "_includes/enrollment.class.php");
include_once("_includes/mysql.class.php");
include_once("_includes/myForms.class.php");

$notes = new notes();
$user = new user();
$enroll = new enrollment();
$sql = new my_mysql_queries();
$strClean = new string_clean_up();
$page = array();

if (!isset($_GET['chid'])){
	$url = $_SERVER['REQUEST_URI'];
	$tokens1 = explode('_', $url);
	$tokens = explode('?', $tokens1[1]);
	
	$page['chid'] = $tokens[0];
	$notes->setIds($sql->set_ids($page['chid']));
	$page['cid'] = $notes->pageIdsArray['cid'];
	$page['sid'] = $notes->pageIdsArray['sid'];	
	}else {
	$page['chid'] = $_GET['chid'];
	}

$notes->setCurrentSessionVars($page['chid'],$sql->set_ids($page['chid']));

	$page['sqa'] = FALSE;
	$page['cid'] = $notes->cid;
	$page['sid'] = $notes->sid;
	
if (!isset($_SESSION['lang'])){$_SESSION['lang'] = 'en';}
	
if(in_array($_SESSION['course_id'], $notes->protected)){
	$user->authenticate();
}							

if (isset($_POST['langSubmit'])){$_SESSION['lang'] = $_POST['langSelect'];}
if (isset($_SESSION['userID'])){$userId = $_SESSION['userID'];}else{$userId = FALSE;}
if (isset($_POST['enrollStudentId'])){$enroll->enrollRequest($_POST['enrollStudentId'],$_POST['enrollCourseId']);}
if (isset($_POST['suspendEnrollId'])){$enroll->suspendCourse($_POST['suspendEnrollId']);}
if (isset($_POST['resumeCourse'])){$enroll->resumeCourse($_POST['resumeCourse']);}
if (isset($_POST['deletePendingId'])){$enroll->deletePending($_POST['deletePendingId']);}

if ($_SESSION['authenticate'] === TRUE){
	$inOrOut = '<li>LogOut</li>';
	}else {
		$inOrOut = '';
	}
if ($_SESSION['authenticate'] === TRUE){
	$stFNameLName = '<li>'.$_SESSION['userFirstName'].' '.$_SESSION['userLastName'].'</li>';
	}else {
		$stFNameLName = '';
	}

$referringPage = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$mainFileUrl = $notes->str->prettyName($_SESSION['course_name']).'/'.$notes->str->prettyName($_SESSION['file_name']).".".$_SESSION['file_type'];

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
		<?php echo $notes->showAnswers($_SESSION["sqa"]);	?>
	</style>
	
</head>
<body>
	<?php include ('_includes/template/navBar.php'); ?>

	<div id="main">

		<p><?php echo '('.$_SESSION['course_name'].' : '.$_SESSION['section_title'].')'; ?></p>
		<div class= 'textbook main-notes' id='<?php echo $_SESSION['file_name']; ?>'>
		
		<?php
		if ($_SESSION['course_name']=='Admin' || $_SESSION['file_type']=='php'){
			include($mainFileUrl);
		}else{
			$notes->parseHTML($mainFileUrl,$_SESSION['lang']);
		}
		$notes->displayStudentAnswers($userId,$page['chid'],'http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]');
		?>
		</div>
	</div>
	<div id="sideBar">
		<?php
		include ("table-of-contents.php");
IF (isset($_SESSION['authenticateAdmin']) && $_SESSION['authenticateAdmin'] === TRUE){	
		echo "<h2>PAGE ARRAY VARIABLE</h2>";
		foreach($page AS $key => $value){
			echo '\''.$key.'\' = '.$value.'\'';
			echo '<br>';
		}
		
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
}
		
		?>
		
		
	</div><!--sideBar END-->
	
	  <?php include ('_includes/template/inc_footer.php'); ?>
  </body>
</html>