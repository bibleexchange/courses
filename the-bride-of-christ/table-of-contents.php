<?php
	include_once("_includes/template/admin_top.php");
	//print_r($_SESSION);
?>
<div id="table-of-contents">
<h1>
	<span lang="en"><?php echo $_SESSION['editCourseTitle']; ?></span>
</h1> 

<?php
	$notes2 = new notes();
	$notes2->createTocFromDb($_SESSION['editCourseId']);
?>

</div>