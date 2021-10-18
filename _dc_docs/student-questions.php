<?php
session_start();
include_once( "_includes/notes.class.php");

$userId = $_POST['userId'];
$header = $_POST['referringPage'];
$submitType = $_POST['submitType'];

if ($submitType ==='submit'){
	$from_form = "INSERT INTO `dbi`.`courses_student_answers` (`csa_id`, `csa_cq_id`, `csa_answer`, `csa_user_id`, `csa_time_stamp`) VALUES ";

	$array_length = count($_POST)-2;
	$i=0;

	foreach ($_POST as $key => $answer) {

		if ($key !="userId" && $key !="referringPage" && $key !="submit" && $key !="submitType"){
			$i++;
			$from_form.="(NULL,".$key.", '".mysql_real_escape_string($answer)."', $userId, CURRENT_TIMESTAMP)";
			if($i < $array_length){$from_form.=", ";
			}else {$from_form.="; ";}
		}
	}
}else if ($submitType === 'update'){
	$from_form = "";
	
	$array_length = count($_POST)-2;
	$i=0;

	foreach ($_POST as $key => $answer) {

		if ($key !="userId" && $key !="referringPage" && $key !="submit" && $key !="submitType"){
			$i++;

			$from_form.="UPDATE `dbi`.`courses_student_answers` SET `csa_answer` = '".mysql_real_escape_string($answer)."' WHERE `courses_student_answers`.`csa_id` = ".$key.";";
		}
	}
}
		$notes = new notes();
		$notes->saveStudentAnswers($from_form);
		print $from_form;

//header("Refresh: 7; URL= $header");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Success!</title>
	 <?php include '_includes/template/hd_main.php'; ?>
	<script src="/js/js-lib.js"></script>
	<link rel="icon" href="images/dbifavicon.ico" type="image/x-icon">
	
	<script language="JavaScript">
		var count=8;

		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer()
		{
		  count=count-1;
		  if (count < 0)
		  {
			 clearInterval(counter);
			 //counter ended, do something here
			 return;
		  }

		  //Do code for showing the number of seconds here
			 document.getElementById("timer").innerHTML=count + " "; // watch for spelling
			}
	</script>
		
</head>
<body class='textbook' onload='timer()'>
	
	<?php include ('_includes/template/navBar.php'); ?>

	<div id="main">
		<?php print_r($_POST); ?>
		<h1 style="color:blue;">Success!</h1>
		
		<p>Page will automatically redirect in 
		<span id="timer"></span>seconds.
		</p>
		
	</div>
	<div id="sideBar">
		
	</div>
	
	  <?php include ('_includes/template/inc_footer.php'); ?>
  </body>
</html>