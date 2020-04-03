<?php
	include_once("_includes/template/admin_top.php");
	//unset($_SESSION );
	//print_r($_SESSION);
	//echo "<BR><BR><BR>";
	//print_r($_POST);
	//echo "<BR><BR><BR>";
	/////////////////////////////////////////
	
	$viewFormName = 'view';
	$langFormName = 'lang';
	
	if (isset($_POST[$viewFormName.'Submit'])){
		$_SESSION[$viewFormName.'Choice'] = $_POST[$viewFormName.'Select'];
	}else if (!isset($_SESSION[$viewFormName.'Choice'])){$_SESSION[$viewFormName.'Choice'] = 'echo';}		

	if (isset($_POST[$langFormName.'Submit'])){
		$_SESSION[$langFormName] = $_POST[$langFormName.'Select'];
	}	
	/////////////////////////////////////////
	
	$viewForm = new myForms();
		$VFOptions = array('echo'=>'LIST','include'=>'text');
		$viewForm->formSelectSimple($viewFormName, $VFOptions);	
	
	echo $viewForm->frmStr;
	
		$langForm = new myForms();
		$options = array('en'=>'english','swa'=>'swahili','en-swa'=>'english+swahili');
		
		$langForm->formSelectSimple($langFormName, $options);
	
	echo $langForm->frmStr;
	 
?>

<div class="textbook">
<?php

$notes->createFullText($_SESSION['editCourseId'], 
		$sql->all_course_documents($_SESSION['editCourseId']),
		$_SESSION['lang'],
		$_SESSION[$viewFormName.'Choice']);

?>
</div>