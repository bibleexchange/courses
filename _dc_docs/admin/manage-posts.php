<?php
include_once("_includes/template/admin_top.php");
	
if (isset($_POST['submitNew'])){
	$change = $sql->create_post($_POST['postTitle'],$_POST['postBody']);
	$admin->createPost($change);
	}
	
if (isset($_POST['submitUpdate'])){
	$change = $sql->update_post($_POST['postId'],$_POST['postTitle'],$_POST['postBody']);
	$admin->updatePost($change);
	}
	
if (isset($_POST['submitDelete'])){
	$admin->deletePost($sql->trash_post($_GET['epost']), $sql->delete_post($_GET['epost']));
	}
	
//print_r($_SESSION);	
?>

<h1>Manage Posts</h1>

<h2>Existing Posts: </h2>
<hr />
	<?php
		$notes->posts('admin');
	?>

<h2>New Post: </h2>
<hr />
<form id="createpost" name="createpost" method="post"> 								
	<label>
		<strong>Post Title</strong>  
		<input type="text" name="postTitle" id="postTitle">  
	</label>
	<label>
		<strong>Body</strong>  
		<input type="text" name="postBody" id="postBody">  
	</label>
	<br>		
	<input id="submitNew" name="submitNew" type="submit" value="Submit" class="btn btn-primary">
</form> 

<h2>Update Post: </h2>
<hr />
<?php
	$cd = $admin->showAPost($sql->show_a_post($_GET['epost']));
?>

<form id="updatepost" name="updatepost" method="post" > 
<!--to test: action="/dbi/_assets/test-post-form.php"-->
									
	<label>
		<strong>Post Id: <?php echo $cd ['id']; ?></strong> 
		<input type="hidden" name="postId" id="postId" value="<?php echo $cd ['id']; ?>">  
	</label>
	<label>
		<strong>Post Title</strong> 
		<input type="text" name="postTitle" id="postTitle" value="<?php echo $cd ['title']; ?>">  
	</label>
	<label>
		<strong>Post Body</strong>  
		<textarea type="text" name="postBody" id="postBody" style="width:500px; height:250px;">
			<?php echo $cd['body']; ?>
		</textarea>
	</label>
	<br>	
<input id='submitUpdate' name='submitUpdate' type='submit' value='Update' class='btn btn-primary'>
<input id='submitDeleteConfirm' name='submitDeleteConfirm' type='submit' value='Delete?' class='btn btn-primary delete'>
		<?php 
	if (isset($_POST['submitDeleteConfirm']) && $_POST['submitDeleteConfirm']='Delete?')
	{
	echo "<input id='submitDelete' name='submitDelete' type='submit' value='!!Are You Sure?!!' class='btn btn-primary delete'>";
	}
	?>
</form> 