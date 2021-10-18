<?php
$course = $_SESSION['course'];
$courseId = $_SESSION['courseId'];
$sectionId = $_SESSION['sectionArrayId'];
$sectionTitle = $_SESSION['sectionTitle'];

include_once ("../../_includes/myFunctionsLib.php");

?>
<div id="table-of-contents">
<h1>
	<span lang="en"><?php echo $sectionTitle; ?></span>
</h1> 

<?php
	createTocFromDbSection($_SESSION['courseEditId'],$_SESSION['sectionEditId']);
?>

</div>