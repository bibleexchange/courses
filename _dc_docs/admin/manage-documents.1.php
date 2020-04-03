<?php
//	if (isset($_POST['sectionNew'])){
//		$admin->createSection($sql->create_section($_POST['sectionTitle'],$_POST['courseId'],$_POST['sectionOrder'],$_POST['sectionSummary']));
//		}
		
//	if (isset($_POST['sectionUpdate'])){
//		$admin->updateSection($sql->update_section($_POST['sectionId'],$_POST['SectionTitle'],$_POST['SectionCoursesId'],$_POST['SectionSummary'], $_POST['SectionOrder']));
//		}
//	if (isset($_POST['submitDelete'])){
//		$admin->deleteSection($sql->delete_section($_POST['sectionId']));
//		}
//	if (isset($_POST['submitDeleteConfirm'])){
//		$_SESSION['confirmed']='yes';
//		}
		print_r($sql, $admin);
		//print_r($_SESSION);

?>

<h1>Manage Documents</h1>
<p><?php echo '<b>course: </b>'.$_SESSION['editCourseTitle'].' - <b>section: </b>'.$_SESSION['editSectionTitle']; ?></p>
<hr>
<h2>Course Sections:</h2>
<hr>
	<?php

	$admin->listForSelect($cid, $sid, $chid, $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], 
		$sql->show_all_course_sections($_SESSION['editCourseId']),
		'section');
	?>
<!--
<h2>New Document: </h2>
<hr>

<form id="createcourse" name="createcourse" method="post" > <!--to debug: action='/dbi/_assets/test-post-form.php' -->
<!--										
	<label>
		<strong>Document Title</strong>  
		<input type="text" name="sectionTitle" id="sectionTitle"> 
		<input type="hidden" name="courseId" id="courseId" value="<?php echo $_SESSION['editCourseId']; ?>"> 
	</label>
	<br>
	<label>
		<strong>Document Summary</strong>  
		<input type="text" name="sectionSummary" id="sectionSummary">
	</label>
	<label>
		<strong>Document Order</strong>  
		<select name="sectionOrder" id="sectionOrder">  
			<?php
			
			for ($i=1; $i<=25; $i++){
				echo "<option>".$i."</option>";
			}
			
			?>
		</select>
	</label>
	<br>			
	<input id="sectionNew" name="sectionNew" type="submit" value="Submit" class="btn btn-primary">

</form> 
<hr>
<h2>Update Document: </h2>

<form id="updatesection" name="updatesection" method="post" > 
<!--to test: action="/dbi/_assets/test-post-form.php"-->

<?php
	$admin->showASection($sql->show_a_section($_SESSION['editSectionId']));
	$cd = $admin->showASection_arr;
?>
<!--		
	<label>
		<strong>Document Id</strong> 
		<input type="text" name="sectionId" id="sectionId" value="<?php echo $cd ['SectionId']; ?>"> 
		<input type="hidden" name="SectionCoursesId" id="SectionCoursesId" value="<?php echo $cd ['SectionCoursesId']; ?>"> 
	</label>	
	<label>
		<strong>Document Title</strong> 
		<input type="text" name="SectionTitle" id="SectionTitle" value="<?php echo $cd ['SectionTitle'] ?>">  
	</label>
	<label>
		<strong>Document Summary</strong>  
		<input type="text" name="SectionSummary" id="SectionSummary" value="<?php echo $cd ['SectionSummary']; ?>">  
	</label>
	<label>
		<strong>Document Order</strong>  
		<input type='text' name="SectionOrder" id="SectionOrder" value ="<?php echo $cd ['SectionOrder']; ?>">  
	</label>

	<br>	
<input id='submitUpdate' name='submitUpdate' type='submit' value='Update' class='btn btn-primary'>
<input id='submitDeleteConfirm' name='submitDeleteConfirm' type='submit' value='Delete?' class='btn btn-primary delete'>
		<?php
	if (isset($_SESSION['confirmed']) && $_SESSION['confirmed']='yes')
	{
	echo "<input id='submitDelete' name='submitDelete' type='submit' value='!!Are You Sure?!!' class='btn btn-primary delete'>";
	unset($_SESSION['confirmed']);
	}
	?>
</form> 

<hr>
<h2>Change Course: </h2>
<form id="selectCourse" name="selectCourse" method="post"> 
	<select  name="courseSelect" id="courseSelect">
		<?php 
			$admin->listForSelect($cid,$sid,$chid, $_SESSION['editCourseId'], $_SESSION['editSectionId'], $_SESSION['editDocumentId'], $sql->show_all_courses(),'option'); 
		?>
		
	</select>
	<input id="submitSelection" name="submitSelection" type="submit" value="Submit" class="btn btn-primary">
</form>