<?php
	include_once("_includes/template/admin_top.php");
	
	$labels = [
			['name'=>'cq_weight','default'=>5],
			['name'=>'cq_hint','default'=>NULL],
			['name'=>'objectOrder','default'=>1],
			['name'=>'on_sq','default'=>1],
			['name'=>'on_qz','default'=>1],
			['name'=>'on_fl','default'=>1],
			['name'=>'cq_cdl_id','default'=>$_SESSION['editDocumentId']],
			['name'=>'objectTitle','default'=>NULL],
			['name'=>'cq_answer','default'=>NULL]
		];
	
	if (isset($_POST['new']) && $_POST['new']= 'Submit'){
		$admin->createQuestion($sql->create_question($_POST));
		}

	if (isset($_POST['update']) && $_POST['update']= 'Submit'){
		$admin->updateQuestion($sql->update_Question($_POST));
		}
	if (isset($_POST['delete']) && $_POST['delete']= 'Submit'){
		$admin->deleteQuestion($sql->trash_question($_POST['objectId']),$sql->delete_question($_POST['objectId']));
		}
	if (isset($_POST['deleteConfirm']) && $_POST['deleteConfirm']= 'Submit'){
		$_SESSION['confirmed']='yes';
		}

	$courseFormName = 'course';
	$courseForm = new myForms();
	$courseFormOptions = $admin->listForSelect($page['cid'],$page['sid'],$page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'], $_SESSION['editDocumentId'], $sql->show_all_courses(),'list');
	
	$courseForm->formSelectSimple($courseFormName, $courseFormOptions);
?>

<h1>Manage Questions for <?php echo $_SESSION['editCourseTitle']; ?></h1>
<form id="document" name="document" method="post" style='display:inline-block'>
		<select  name="documentSelect" id="documentSelect" >
			<?php
			$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], $sql->all_course_documents($_SESSION['editCourseId']), 'option',$_SESSION['editDocumentId']);
			?>
		</select>
		<input id="documentSubmit" name="documentSubmit" type="submit" value="Submit" class="btn btn-primary">
	</form> 

<?php echo $courseForm->frmStr; ?>
	
<p>"<b><?php echo $_SESSION['editSectionTitle']; ?></b>" - Document: <b><?php echo $_SESSION['editDocumentTitle']; ?></b></p>
<hr>
<h2>New Question:</h2>
<form id="updatequestion" name="updatequestion" method="post">
	
	<?php 
		
		foreach ($labels AS $l){
			echo '<label id=\''.$l['name'].'\'><strong>'.$l['name'].': </strong><textarea type=\'text\' class=\'editQuestions\' name=\''.$l['name'].'\' id=\''.$l['name'].'\'>'.$l['default'].'</textarea></label>';
		}
	?>
	<br>
	<input id="new" name="new" type="submit" value="New" class="btn btn-primary">
</form>
<hr>
	<?php
	$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], 
		$sql->select_chapter_questions($_SESSION['editDocumentId']),
		'questions');
	?>
<h2>(<?php echo $admin->listcount; ?>) Questions for &ldquo;<?php echo $_SESSION['editDocumentTitle']; ?>&rdquo;:</h2>
<hr>
	<?php
	foreach($admin->qform AS $qform){echo $qform;};
	?>