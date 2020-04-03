<h1>Advance Header Tags</h1>

<form name="form2" method="post" >
<input type="submit" value="submit"><br />
	<textarea name="ta" rows='20' style='width:100%;'>
		
	</textarea>
</form> 

<?php
$text = '';

if(isset($_POST['ta'])){
	$text = str_replace('h6','h7',$_POST['ta']);
	$text = str_replace('h5','h6',$text);
	$text = str_replace('h4','h5',$text);
	$text = str_replace('h3','h4',$text);
	$text = str_replace('h2','h3',$text);
	$text = str_replace('h1','h2',$text);
}

?>

<div style='border:solid'>
	<form name="form2" method="post" >
<input type="button" value="Select All" onClick="javascript:this.form.ta1.focus();this.form.ta1.select();"><br />

<textarea name="ta1" rows='20' style='width:100%;'>
	<?php 	echo str_replace('<','&lt;',$text); ?>
</textarea>
</form> 

</div>