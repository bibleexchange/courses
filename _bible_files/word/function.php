<?php

function takeXMLMakeSQL(){

$myXMLData = file_get_contents('entire-bible-4.xml');
	
	$xml=simplexml_load_string($myXMLData) or die("Error: Cannot create object");
	
	$string = '';
	
	foreach($xml->book AS $book){
		
		//$string .= '<h1>'.$book->id[0].'</h1>';
		
		foreach($book->c AS $chapter){
			
			//$string .= '<h2>'.$chapter['id'].'</h2>';
			
			foreach($chapter->p AS $paragraph){
			
				//$string .= '<p>';
				
				foreach($paragraph->v AS $verse){
					
					foreach($verse->w AS $word){
						$string .= '(\''.$verse['bcv'].'\',';
						$string .= ' \''.$word.'\',';
						$string .= '\'' . $word['s'] . '\',';
						$string .= '\'' . $word['m'] . '\'),';
						
					}
					
				}
				
				//$string .= '</p>';
				
			}
			
		}
	}
	
	file_put_contents('6.sql',$string);
	
}