<?php
	include_once("_includes/template/admin_top.php");

	if (isset($_POST['new']) && $_POST['new']= 'Submit'){
		$admin->createDocument($sql->create_document($_POST['parentId'], $_POST['title'], $_POST['fileType'], $_POST['order']));
		}

	if (isset($_POST['update']) && $_POST['update']= 'Submit'){
		$admin->updateDocument($sql->update_document($_POST['id'],$_POST['title'],$_POST['parentId'],$_POST['fileType'], $_POST['order']));
		}
	if (isset($_POST['delete']) && $_POST['delete']= 'Submit'){
		$admin->deleteDocument($sql->delete_document($_POST['id']));
		}
	if (isset($_POST['deleteConfirm']) && $_POST['deleteConfirm']= 'Submit'){
		$_SESSION['confirmed']='yes';
		}

	$courseFormName = 'course';
	$courseForm = new myForms();
	$courseFormOptions = $admin->listForSelect($page['cid'],$page['sid'],$page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'], $_SESSION['editDocumentId'], $sql->show_all_courses(),'list');
	
	$courseForm->formSelectSimple($courseFormName, $courseFormOptions);
?>

<h1>Manage Documents for <?php echo $_SESSION['editCourseTitle']; ?></h1>
<form id="section" name="section" method="post" style='display:inline-block'> <!--to debug: action='/dbi/_assets/test-post-form.php' -->
		<select  name="sectionSelect" id="sectionSelect" >
			<option>-- choose --</option>
			<?php
			$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], $sql->show_all_course_sections($_SESSION['editCourseId']), 'option');	
			?>
		</select>
		<input id="sectionSubmit" name="sectionSubmit" type="submit" value="Submit" class="btn btn-primary">
	</form> 

<?php echo $courseForm->frmStr; ?>
	
<p>"<b><?php echo $_SESSION['editSectionTitle']; ?></b>" 
	
	- Document: <b><?php echo $_SESSION['editDocumentTitle']; ?></b>
</p>

<h2>Documents:</h2>
<hr>
	<?php
	$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], 
		$sql->show_section_documents($_SESSION['editSectionId']),
		'document');
	?>

<h2>New Document: </h2>
<hr>

<form id="createcourse" name="createcourse" method="post"> <!--to debug: action='/dbi/_assets/test-post-form.php' -->	
	
	<label>
	<strong>Section</strong>  
		<select  name="parentId" id="parentId">
			<option>-- choose --</option>
			<?php
			$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], $sql->show_all_course_sections($_SESSION['editCourseId']), 'option');	
			?>
		</select>
	</label>
	<label>
		<strong>Document Title</strong>  
		<input type="text" name="title" id="title">  
	</label>
	<br>
	<label>
		<strong>Document Summary</strong>  
		<input type="text" name="summary" id="summary">
	</label>
	<label>
		<strong>File Type</strong>  
		<select name="fileType" id="fileType">
			<option>html</option>
			<option>php</option>
			<option>xml</option>
			<option>txt</option>
		</select>
	</label>
	<label>
		<strong>Document Order</strong>  
		<select name="order" id="order">  
			<?php
			
			for ($i=1; $i<=25; $i++){
				echo "<option>".$i."</option>";
			}
			
			?>
		</select>
	</label>
	<br>			
	<input id="new" name="new" type="submit" value="Submit" class="btn btn-primary">

</form> 
<hr>
<h2>Update Document: </h2>

<form id="updatesection" name="updatesection" method="post" > 
<!--to test: action="/dbi/_assets/test-post-form.php"-->
<h1>
<?php
	$admin->showADocument($sql->show_a_document($_SESSION['editDocumentId']));
	$cd = $admin->showADocument_arr;
?>
</h1>	
	<label>
		<strong>Document Id</strong> 
		<input type="text" name="id" id="id" value="<?php echo $cd ['id']; ?>"> 
		<input type="hidden" name="parentId" id="parentId" value="<?php echo $cd ['parentId']; ?>"> 
	</label>	
	<label>
		<strong>Section</strong>  
		<select  name="parentId" id="parentId">
			<option value='<?php echo $_SESSION['editSectionId'] ; ?>'><?php echo $_SESSION['editSectionTitle'] ; ?></option>
			<?php
			$admin->listForSelect($page['cid'], $page['sid'], $page['chid'], $_SESSION['editCourseId'], $_SESSION['editSectionId'],$_SESSION['editDocumentId'], $sql->show_all_course_sections($_SESSION['editCourseId']), 'option');	
			?>
		</select>
	</label>
	
	<label>
		<strong>Document Title</strong> 
		<input type="text" name="title" id="title" value="<?php echo $cd ['title'] ?>">  
	</label>
	<label>
		<strong>Document Summary</strong>  
		<input type="text" name="fileType" id="fileType" value="<?php echo $cd ['fileType']; ?>">  
	</label>
	<label>
		<strong>Document Order</strong>  
		<input type='text' name="order" id="order" value ="<?php echo $cd ['order']; ?>">  
	</label>

	<br>	
<input id='update' name='update' type='submit' value='Update' class='btn btn-primary'>
<input id='deleteConfirm' name='deleteConfirm' type='submit' value='Delete?' class='btn btn-primary delete'>
		<?php
	if (isset($_SESSION['confirmed']) && $_SESSION['confirmed']='yes')
	{
	echo "<input id='delete' name='delete' type='submit' value='!!Are You Sure?!!' class='btn btn-primary delete'>";
	unset($_SESSION['confirmed']);
	}
	?>
</form> 
<hr>
<div id='md-notes' class="col-sm-12">
<div class="col-sm-5" id='displayNotes'>
<h2>Edit Document: </h2>
<?php 

	$fileName = 
			$strClean->prettyName($_SESSION['editCourseTitle'])."/".
			$strClean->prettyName($_SESSION['editDocumentTitle']).
			'.html'; 
	
	$find = ["<","\t"];
	$replace = ["&lt;",""];
	
	if (file_exists($fileName)) {
		$handle = fopen($fileName, "r");
		$contents1 = '';
		
	while (!feof($handle)){ 
		$text = fgets($handle); 
		$contents1.= $text; 
	} 
		$contents = str_replace($find,$replace,$contents1); 
		$textEditForm = new myForms();
		$textEditForm->formTextSimple('textedit', $contents,$referringPage,$strClean->prettyName($_SESSION['editCourseTitle']),$strClean->prettyName($_SESSION['editDocumentTitle']));
		
		echo $textEditForm->frmStr;
	} else {
		echo "The file $fileName does not exist";
	}
	
?>
</div>
<div class="col-sm-5">

<?php  
if (file_exists($fileName)) {
		$handle = fopen($fileName, "r"); 
	while (!feof($handle)){ 
		$text = fgets($handle); 
		echo $text; 
	} 
	} else {
		echo "The file $fileName does not exist";
	}
?>

</div>
</div>
<hr>
<div  class="col-sm-12">

<h2>Version History: </h2>

<?php

$directory = $strClean->prettyName($_SESSION['editCourseTitle']).'/versions/';
$scanned_directory = array_diff(scandir($directory), array('..', '.'));

foreach($scanned_directory AS $d){
	echo "<a href='".$directory.$d."'>".$d."</a><br>";
}

?>
</div>