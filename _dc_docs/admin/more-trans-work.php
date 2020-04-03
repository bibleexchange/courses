<?php

if (isset($_GET['t'])){$task = $_GET['t'];}else {$task = '';}

$filename = $_GET['file'].'.html';
$filenameTrans = $_GET['file'].'.swa';
$filenameMD = $_GET['file'].'.md.html';

$lines = file($filename, FILE_IGNORE_NEW_LINES);

//////swahili translation
$swa1 = file($filenameTrans, FILE_IGNORE_NEW_LINES);
$swa2 = str_replace('###','',$swa1);

$c = 0;
foreach ($swa2 AS $swa3){
	$swa4[$c] = explode("##",$swa3);
	$lineId = $swa4[$c][0];
	$swa[$lineId] = ['text'=>$swa4[$c][1]];
	$c++;
}

//////end swahili translation

//////markdown conversion
//$md = file($filenameMD, FILE_IGNORE_NEW_LINES);

$md = file_get_contents($filenameMD);
$md = trim(preg_replace('/[\n\r]/', ' ', $md));
$md = preg_replace('/<style\b[^>]*>(.*?)<\/style>/', '', $md);
$md = preg_replace("/<([a-z][a-z0-9]*)[^>]*?(\/?)>/i",'<$1$2>', $md);

$str_find = 	['–'	,'—'	,'“'	,'”'	,'…'	,'’'	,'<blockquote> <p>','</p> </blockquote>','<li> <p>','</p> </li>'];
$str_replace = 	['-'	,'--'	,'"'	,'"'	,'...'	,'\''	,'<blockquote>','</blockquote>'	,'<li>','</li>'];
$md = str_replace($str_find,$str_replace,$md);

$str_find2 = 	[
/*1*/			'<',	
/*2*/			'&lt;h1>',	
/*3*/			'&lt;h2>',
/*4*/			'&lt;h3>',
/*5*/			'&lt;h4>',
/*6*/			'&lt;h5>',
/*7*/			'&lt;h6>',
/*8*/			'&lt;p>',	
/*9*/			'&lt;li>',	
/*10*/			'&lt;blockquote>',
/*11*/			'&lt;/h1>',	
/*12*/			'&lt;/h2>',
/*13*/			'&lt;/h3>',
/*14*/			'&lt;/h4>',
/*15*/			'&lt;/h5>',
/*16*/			'&lt;/h6>',
/*17*/			'&lt;/p>',	
/*18*/			'&lt;/li>',	
/*19*/			'&lt;/blockquote>'
				];
$str_replace2 = [
/*1*/			"&lt;",
/*2*/			"\n &lt;h1>&lt;span lang='en'>",
/*3*/			"\n &lt;h2>&lt;span lang='en'>",
/*4*/			"\n &lt;h3>&lt;span lang='en'>",
/*5*/			"\n &lt;h4>&lt;span lang='en'>",
/*6*/			"\n &lt;h5>&lt;span lang='en'>",
/*7*/			"\n &lt;h6>&lt;span lang='en'>",	
/*8*/			"\n &lt;p>&lt;span lang='en'>",	
/*9*/			"\n &lt;li>&lt;span lang='en'>",
/*10*/			"\n &lt;blockquote>&lt;span lang='en'>",
/*11*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h1>",	
/*12*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h2>",
/*13*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h3>",
/*14*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h4>",
/*15*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h5>",
/*16*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/h6>",
/*17*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/p>",	
/*18*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/li>",	
/*19*/			"&lt;/span>&lt;span lang='swa'> &lt;/span>&lt;/blockquote>"
				];
$md = str_replace($str_find2,$str_replace2,$md);

//////end markdown translation

$tagsToKeep = ['<h1>','<h2>','<h3>','<h4>','<h5>','<h6>'];

$findInlineTags = ['<em>','</em>','<b>','</b>','<i>','</i>','<strong>','</strong>'];

$replaceInlineTags = ['&lt;em&gt;','&lt;/em&gt;','&lt;b&gt;','&lt;/b&gt;','&lt;i&gt;','&lt;/i&gt;','&lt;strong&gt;','&lt;/strong&gt;'];
$i = 0;

foreach($lines as $line){
	$line = str_replace($findInlineTags, $replaceInlineTags, $line);
	$lines1[$i] = preg_split('/(<[^>]*[^\/]>)/i', $line, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
	
	if (isset($lines1[$i][0])){$tagStart = $lines1[$i][0];}else {$tagStart = '';}
	if (isset($lines1[$i][1]) && isset($lines1[$i][7])){$engStart = $lines1[$i][1];}else {$engStart = '';}
	if (isset($lines1[$i][2]) && isset($lines1[$i][7])){$english = $lines1[$i][2];}else {$english = '';}
	if (isset($lines1[$i][3]) && isset($lines1[$i][7])){$engEnd = $lines1[$i][3];}else {$engEnd = '';}
	if (isset($lines1[$i][4]) && isset($lines1[$i][7])){$swaStart = $lines1[$i][4];}else {$swaStart = '';}
	if (isset($lines1[$i][5]) && isset($lines1[$i][7])){$swahili = $lines1[$i][5];}else {$swahili = '';}
	if (isset($lines1[$i][6]) && isset($lines1[$i][7])){$swaEnd = $lines1[$i][6];}else {$swaEnd = '';}
	if (isset($lines1[$i][7]) && isset($lines1[$i][7])){$tagEnd = $lines1[$i][7];}else {$tagEnd = '';}
	
	$lines[$i] = ["lineId"=>$i,"tagStart"=>$tagStart, 'engStart' => $engStart,'english' => $english,'engEnd' => $engEnd,'swaStart' => $swaStart,'swahili' => $swahili,'swaEnd' => $swaEnd,'tagEnd' => $tagEnd];

	$i++;
}

?>

<html>
<head>
	<style>
.box {width:100%; height:200px; border-top:solid;}	
.box textarea {width:98%; height:195px; overflow:scroll; float:left; padding-left:20px; border:solid;}		
.box h1 {font-size:1.5rem; color:green;}
		
		</style>
</head>
<body>

<div class="box" id="translator">

<h1>For Translator</h1>

<form name="form1">
<input type="button" value="Select All" onClick="javascript:this.form.ta.focus();this.form.ta.select();"><br />
<textarea name="ta">

<?php 

	foreach ($lines AS $line){
		if (in_array($line['tagStart'], $tagsToKeep) ){
			echo '###'.$line['lineId'].'##'.$line['english'];
			echo "\n";
		}
	}
?>

</textarea>
</form> 


</div>

<div class="box">

<h1>Current Master Doc: Edit While Translator is Working</h1>

<form name="form2">
<input type="button" value="Select All" onClick="javascript:this.form.ta.focus();this.form.ta.select();"><br />
<textarea name="ta">

<?php

	foreach ($lines AS $line){
		echo str_replace('<','&lt;',$line['tagStart']);
		echo str_replace('<','&lt;',$line['engStart']);
		echo $line['english'];
		echo str_replace('<','&lt;',$line['engEnd']);
		echo str_replace('<','&lt;',$line['swaStart']);
		echo $line['swahili'];
		echo str_replace('<','&lt;',$line['swaEnd']);
		echo str_replace('<','&lt;',$line['tagEnd']);
		echo "\n";
	}
?>

</textarea>
</form> 


</div>

<div class="box">

<h1>TO COPY and PASTE: Merge Translation TXT</h1>

<form name="form2">
<input type="button" value="Select All" onClick="javascript:this.form.ta.focus();this.form.ta.select();"><br />
<textarea name="ta">

<?php

	foreach ($lines AS $line){
		echo str_replace('<','&lt;',$line['tagStart']);
		echo str_replace('<','&lt;',$line['engStart']);
		echo $line['english'];
		echo str_replace('<','&lt;',$line['engEnd']);
		echo str_replace('<','&lt;',$line['swaStart']);
		
		if (isset($swa[$line['lineId']])){
			echo $swa[$line['lineId']]['text'];
			}else { 
				echo ' ';
				}
		
		echo str_replace('<','&lt;',$line['swaEnd']);
		echo str_replace('<','&lt;',$line['tagEnd']);
		echo "\n";
	}

?>

</textarea>
</form> 


</div>

<div class="box">
<h1>Markdown HTML TO Clean HTML</h1>

<form name="form2" method="post">
<input type="button" value="Select All" onClick="javascript:this.form.ta.focus();this.form.ta.select();"><br />
<textarea name="ta">

<?php
	echo $md;
?>

</textarea>
</form> 

</div>
</body>
</html>