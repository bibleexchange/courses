<?php
if(!isset($_SESSION['course_name'])){$_SESSION['course_name'] = "Revelation";}
?>
<div id="table-of-contents">
<h1>
	<span lang="en"><?php echo $notes->filenameToTitle($_SESSION['course_name']); ?></span>
</h1> 

<?php
	$notes->createTocFromDb($page['cid'],$page['sid']);
?>

</div>