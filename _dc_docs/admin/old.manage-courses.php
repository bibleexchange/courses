<!-- rename file: manage-courses.php -->

<?php
	if (isset($_POST['submitNew'])){
		$admin->createCourse($_POST['courseTitle'],$_POST['courseYear'],$_POST['courseShortName'],$_POST['courseAcceptingEnroll'],$_POST['courseWebReady'],$_POST['coursePublic']);
		}
		
	if (isset($_POST['submitUpdate'])){
		$admin->updateCourse($_POST['courseId'],$_POST['courseTitle'],$_POST['courseYear'],$_POST['courseShortName'],$_POST['courseAcceptingEnroll'],$_POST['courseWebReady'],$_POST['coursePublic']);
		}
	if (isset($_POST['submitDelete'])){
		$admin->deleteCourse($_POST['courseId']);
		}
	if (isset($_POST['submitDeleteConfirm'])){
		$_SESSION['confirmed']='yes';
		}
?>

<h1>Manage Courses</h1>

<h2>Existing Courses: </h2>

	<?php
		$admin->showCourses();
	?>

<h2>New Course: </h2>

<form id="createcourse" name="createcourse" method="post"> 
										
	<label>
		<strong>Course Title</strong>  
		<input type="text" name="courseTitle" id="courseTitle">  
	</label>
	<label>
		<strong>Short Name</strong>  
		<input type="text" name="courseShortName" id="courseShortName">  
	</label>
	<br>
	<label>
		<strong>Type</strong>  
		<select  name="courseYear" id="courseYear"> 
			<option value='0'>Elective</option>
			<option value='1'>First</option>
			<option value='2'>Second</option>
			<option value='3'>Third</option>
			<option value='100'>Admin</option>
		</select>		
	</label>
	<label>
		<strong>Accepting Enroll</strong>  
		<select name="courseAcceptingEnroll" id="courseAcceptingEnroll">  
			<option>0</option>
			<option>1</option>
		</select>
	</label>
	<label>
		<strong>Web Ready</strong>  
		<select name="courseWebReady" id="courseWebReady">  
			<option>0</option>
			<option>1</option>
		</select>
	</label>
	<label>
		<strong>Public</strong>  
		<select name="coursePublic" id="coursePublic"> 
			<option>0</option>
			<option>1</option>
		</select>		
	</label>
	<br>			
	<input id="submitNew" name="submitNew" type="submit" value="Submit" class="btn btn-primary">

</form> 

<h2>Update Course: </h2>

<?php
	$admin->showACourse($_SESSION['editCourseId']);
	$cd = $admin->sql->arr;
?>

<form id="updatecourse" name="updatecourse" method="post" > 
<!--to test: action="/dbi/_assets/test-post-form.php"-->
										
	<label>
		<strong>Course Title</strong> 
		<input type="text" name="courseId" id="courseId" value="<?php echo $cd ['courseId']; ?>"> 
		<input type="text" name="courseTitle" id="courseTitle" value="<?php echo $cd ['courseTitle']; ?>">  
	</label>
	<label>
		<strong>Short Name</strong>  
		<input type="text" name="courseShortName" id="courseShortName" value="<?php echo $cd ['courseShortName']; ?>">  
	</label>
	<br>
	<label>
		<strong>Type</strong>  
		<input type="text" name="courseYear" id="courseYear" value="<?php echo $cd ['courseYear']; ?>"> 	
	</label>
	<label>
		<strong>Accepting Enroll</strong>  
		<input type="text" name="courseAcceptingEnroll" id="courseAcceptingEnroll" value="<?php echo $cd ['courseAcceptingEnroll']; ?>">  
	</label>
	<label>
		<strong>Web Ready</strong>  
		<input type="text" name="courseWebReady" id="courseWebReady" value="<?php echo $cd ['course_web_ready']; ?>">  

	</label>
	<label>
		<strong>Public</strong>  
		<input type="text" name="coursePublic" id="coursePublic" value="<?php echo $cd ['course_public']; ?>"> 		
	</label>
	<br>	
<input id='submitUpdate' name='submitUpdate' type='submit' value='Update' class='btn btn-primary'>
<input id='submitDeleteConfirm' name='submitDeleteConfirm' type='submit' value='Delete?' class='btn btn-primary delete'>
		<?php
	if (isset($_SESSION['confirmed']) & $_SESSION['confirmed']='yes')
	{
	echo "<input id='submitDelete' name='submitDelete' type='submit' value='!!Are You Sure?!!' class='btn btn-primary delete'>";
	unset($_SESSION['confirmed']);
	}
	?>
</form> 