<?php
$query = $_REQUEST["query"];
header('Content-Type: application/json');

if($query === "index"){
	$resp = '{"data":"index here"}';
}else{
	$resp = file_get_contents("docs/" . $query . ".json");
}

echo $resp;
?>