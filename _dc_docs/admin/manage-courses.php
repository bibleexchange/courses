<?php
	
if (isset($_POST['submitNew'])){
	$change = $this->sql->create_course($_POST['courseTitle'],$_POST['courseYear'],$_POST['courseShortName'],$_POST['courseAcceptingEnroll'],$_POST['courseWebReady'],$_POST['coursePublic']);
	$this->admin->createCourse($change);
	}
	
if (isset($_POST['submitUpdate'])){
	$change = $this->sql->update_course($_POST['courseId'],$_POST['courseTitle'],$_POST['courseYear'],$_POST['courseShortName'],$_POST['courseAcceptingEnroll'],$_POST['courseWebReady'],$_POST['coursePublic']);
	$this->admin->updateCourse($change);
	}
	
if (isset($_POST['submitDeleteConfirm'])){
	$this->admin->deleteCourse($this->sql->trash_course($_POST['courseId']), $this->sql->delete_course($_POST['courseId']));
	}

$manageCourses = '
<h1>Manage Courses</h1>
<h2>Existing Courses: </h2>
<hr />';

		$this->admin->listForSelect($this->courseId,$this->sectionId,$this->did, $this->editCourseId, $this->editSectionId, $this->editDocumentId, $this->sql->show_all_courses(),'course');

$manageCourses .= '<h2>New Course: </h2>
<hr />
<form id=\'createcourse\' name=\'createcourse\' method=\'post\'> 
										
	<label>
		<strong>Course Title</strong>  
		<input type=\'text\' name=\'courseTitle\' id=\'courseTitle\'>  
	</label>
	<label>
		<strong>Short Name</strong>  
		<input type=\'text\' name=\'courseShortName\' id=\'courseShortName\'>  
	</label>
	<br>
	<label>
		<strong>Type</strong>  
		<select  name=\'courseYear\' id=\'courseYear\'> 
			<option value=\'0\'>Elective</option>
			<option value=\'1\'>First</option>
			<option value=\'2\'>Second</option>
			<option value=\'3\'>Third</option>
			<option value=\'100\'>Admin</option>
		</select>		
	</label>
	<label>
		<strong>Accepting Enroll</strong>  
		<select name=\'courseAcceptingEnroll\' id=\'courseAcceptingEnroll\'>  
			<option>0</option>
			<option>1</option>
		</select>
	</label>
	<label>
		<strong>Web Ready</strong>  
		<select name=\'courseWebReady\' id=\'courseWebReady\'>  
			<option>0</option>
			<option>1</option>
		</select>
	</label>
	<label>
		<strong>Public</strong>  
		<select name=\'coursePublic\' id=\'coursePublic\'> 
			<option>0</option>
			<option>1</option>
		</select>		
	</label>
	<br>			
	<input id=\'submitNew\' name=\'submitNew\' type=\'submit\' value=\'Submit\' class=\'btn btn-primary\'>

</form> 

<h2>Update Course: </h2>
<hr />';

	$cd = $this->admin->showACourse($this->sql->show_a_course($_SESSION['editCourseId']));

$manageCourses .= '
<form id=\'updatecourse\' name=\'updatecourse\' method=\'post\' > 								
	<label>
		<strong>Course Id</strong> 
		<input type=\'text\' name=\'courseId\' id=\'courseId\' value=\''.$cd ['id'].'\'> 
	</label>
	<label>
		<strong>Course Title</strong> 
		<input type=\'text\' name=\'courseTitle\' id=\'courseTitle\' value=\''.$cd ['title'].'\'>  
	</label>
	<label>
		<strong>Short Name</strong>  
		<input type=\'text\' name=\'courseShortName\' id=\'courseShortName\' value=\''.$cd ['shortname'].'\'>  
	</label>
	<br>
	<label>
		<strong>Type</strong>  
		<input type=\'text\' name=\'courseYear\' id=\'courseYear\' value=\''.$cd ['year'].'\'> 	
	</label>
	<label>
		<strong>Accepting Enroll</strong>  
		<input type=\'text\' name=\'courseAcceptingEnroll\' id=\'courseAcceptingEnroll\' value=\''.$cd ['acceptingEnroll'].'\'>  
	</label>
	<label>
		<strong>Web Ready</strong>  
		<input type=\'text\' name=\'courseWebReady\' id=\'courseWebReady\' value=\''.$cd ['webReady'].'\'>  
	</label>
	<label>
		<strong>Public</strong>  
		<input type=\'text\' name=\'coursePublic\' id=\'coursePublic\' value=\''.$cd ['public'].'\'> 		
	</label>
	<br>	
<input id=\'submitUpdate\' name=\'submitUpdate\' type=\'submit\' value=\'Update\' class=\'btn btn-primary\'>
<input id=\'submitDeleteConfirm\' name=\'submitDeleteConfirm\' type=\'submit\' value=\'Delete?\' class=\'btn btn-primary delete\'>';

	if (isset($_SESSION['confirmed']) & $_SESSION['confirmed']='yes')
	{
	$manageCourses .= '<input id=\'submitDelete\' name=\'submitDelete\' type=\'submit\' value=\'!!Are You Sure?!!\' class=\'btn btn-primary delete\'>';
	unset($_SESSION['confirmed']);
	}

$manageCourses .= '</form>';
echo $manageCourses;