<?php

if (isset($_GET['t'])){$task = $_GET['t'];}else {$task = '';}
$body = '';
$course_title = $strClean->prettyName($_SESSION['editCourseTitle']);
$chapter_title = $strClean->prettyName($_SESSION['editDocumentTitle']);

$translation_filename = $course_title."/".$chapter_title."-swa.txt";
$translation1 = file($translation_filename, FILE_IGNORE_NEW_LINES);
$translation = str_replace('###','',$translation1);

$filename = $course_title."/".$chapter_title.".html";
$lines = file($filename, FILE_IGNORE_NEW_LINES);

$find_arr = ['<h1>','<h2>','<h3>','<h4>','<h5>','<h6>','<p>','<blockquote>','<li>','<div>','<ul>','<ol>','<span lang="en">','</span><span lang="swa">SWAHILI</span>','</h1>','</h2>','</h3>','</h4>','</h5>','</h6>','</p>','</blockquote>','</li>','</div>','</ul>','</ol>','<div class=\'emb-outline\'>'];
$replace_arr = ['###','###','###','###','###','###','###','###','###','','','','','','','','','','','','','','','','','',''];

$trans_docs = scandir("admin/trans", 1);

 if(isset($_POST['deleteDocSubmit']) && $_POST['deleteDocSubmit'] == 'x'){
	
	$myFile = $_POST['fileUrl'];
	$fh = fopen($myFile, 'w') or die("can't open file");
	fclose($fh);
	unlink($myFile);
	$body = '';
  }
  
  if(isset($_POST['createTranslatedDoc']) && $_POST['createTranslatedDoc'] == '+'){
	$x = 0;
	$body = '';
	foreach ($lines as $li)
	  {
	  $for_translation[$x] = str_replace($find_arr,$replace_arr,$li);
	  $x++;
	  }

	$for_translation_formatted = '';
	$num = 1;
 $body .= '<div contenteditable=true>';
  foreach ($for_translation as $ft){
	$body .=  str_replace('###','##'.sprintf('%04d', $num).'###',$ft)."<br>";
	$for_translation_formatted .= str_replace('###','##'.sprintf('%04d', $num).'###',$ft)."\n";
	$num++;
  }
  $body .=  '</div>';
  file_put_contents('admin/trans/for_translation_'.$chapter_title.'_'.time().'.txt', $for_translation_formatted);
  }
  
   if(isset($_POST['submitForTranslator']) && $_POST['submitForTranslator'] == '+'){
	$i = 0;
	$body = ''; 
foreach ($lines as $l)
  {
  $new_file_arr[$i] = str_replace('>SWAHILI</','>' . substr($translation[$i], 6) . '</',$l);
  $i++;
  }
$translated_formatted = '';
$body .= '<div contenteditable=true>';
  foreach ($new_file_arr as $new){
	$body .= str_replace('<','&lt',$new).'<br><br>';
	$translated_formatted .= $new;
  }
  $body .= '</div>';
  file_put_contents('admin/trans/translated_'.$chapter_title.'_'.time().'.html', $translated_formatted);
  }  

  
echo 	'Create for Translator <form id=\'docDelete\' name=\'docDelete\' method=\'post\' style=\'display:inline-block\'>	
		<input id=\'submitForTranslator\' name=\'submitForTranslator\' type=\'submit\' value=\'+\' class=\'btn btn-primary\'>
	</form><br>';

echo 	'Create Translated Document <form id=\'docDelete\' name=\'docDelete\' method=\'post\' style=\'display:inline-block\'>	
		<input id=\'createTranslatedDoc\' name=\'createTranslatedDoc\' type=\'submit\' value=\'+\' class=\'btn btn-primary\'>
	</form><br>';

foreach ($trans_docs as $d){
	echo '<a href=\'admin/trans/'.$d.'\'>'.$d.'</a>
	<form id=\'docDelete\' name=\'docDelete\' method=\'post\' style=\'display:inline-block\'>	
		<input id=\'fileUrl\' name=\'fileUrl\' type=\'hidden\' value=\'D:\\GDrive\\server\\public_html\\dbi\\library\\admin\\trans\\'.$d.'\' >
		<input id=\'deleteDocSubmit\' name=\'deleteDocSubmit\' type=\'submit\' value=\'x\' class=\'btn btn-primary\'>
	</form><br>';
}

echo $body;
  
?>