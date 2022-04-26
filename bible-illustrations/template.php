<?php

$dir    = './week_15/';
$files = scandir($dir);

class PNG_Reader
{
    private $_chunks;
    private $_fp;

    function __construct($file) {
        if (!file_exists($file)) {
            throw new Exception('File does not exist');
        }

        $this->_chunks = array ();

        // Open the file
        $this->_fp = fopen($file, 'r');

        if (!$this->_fp)
            throw new Exception('Unable to open file');

        // Read the magic bytes and verify
        $header = fread($this->_fp, 8);

        if ($header != "\x89PNG\x0d\x0a\x1a\x0a")
            throw new Exception('Is not a valid PNG image');

        // Loop through the chunks. Byte 0-3 is length, Byte 4-7 is type
        $chunkHeader = fread($this->_fp, 8);

        while ($chunkHeader) {
            // Extract length and type from binary data
            $chunk = @unpack('Nsize/a4type', $chunkHeader);

            // Store position into internal array
            if (!isset($this->_chunks[$chunk['type']]) || $this->_chunks[$chunk['type']] === null)
                $this->_chunks[$chunk['type']] = array ();
            $this->_chunks[$chunk['type']][] = array (
                'offset' => ftell($this->_fp),
                'size' => $chunk['size']
            );

            // Skip to next chunk (over body and CRC)
            fseek($this->_fp, $chunk['size'] + 4, SEEK_CUR);

            // Read next chunk header
            $chunkHeader = fread($this->_fp, 8);
        }
    }

    function __destruct() { fclose($this->_fp); }

    // Returns all chunks of said type
    public function get_chunks($type) {
   	
    	$meta = [];

       if (!isset($this->_chunks[$type]) || $this->_chunks[$type] === null)
            return null;

        $chunks = array ();

        foreach ($this->_chunks[$type] as $chunk) {

        		if ($chunk['size'] > 0) {
	                fseek($this->_fp, $chunk['offset'], SEEK_SET);
	                $chunks[] = fread($this->_fp, $chunk['size']);
	            } else {
	                $chunks[] = '';
	            }

            
        }
        return $chunks;
    }

    // Returns all chunks of all types
    public function get_all_chunks() {
   	
    	$meta = [];

    	foreach($this->_chunks AS $key=>$val){
    		$meta[$key] = $key;
    		var_dump($val[0]);
    		
    	}

       if (!isset($this->_chunks[$type]) || $this->_chunks[$type] === null)
            return null;

        $chunks = array ();

        foreach ($this->_chunks[$type] as $chunk) {

        	foreach($val AS $chunk){
        		if ($chunk['size'] > 0) {
                fseek($this->_fp, $chunk['offset'], SEEK_SET);
                $chunks[$key] = fread($this->_fp, $chunk['size']);
	            } else {
	                $chunks[$key] = '';
	            }
        	}
            
        }

        return $chunks;
    }
}

$all_information = [];

foreach(glob($dir.'*.{arw,ARW,jpg,JPG,jpeg,JPEG,png,PNG}',GLOB_BRACE) as $file){
   	$png = new PNG_Reader($file);
   	$d = new stdclass;
	$rawTextData = $png->get_chunks('iTXt');

	$d->metadata = [];

	if(is_array($rawTextData)){
		foreach($rawTextData as $data) {
			$sections = explode("\0", $data);
			foreach($sections AS $section){
				if(strpos(trim($section), "<") === 0){
					# Removing the tabs, returns and the newlines
					$section = str_replace(array("\n", "\r", "\t"), '', $section);
					# The trailing and leading spaces are trimmed to make sure the XML is parsed properly by a simple XML function.
					$section = trim(str_replace('"', "'", $section));
					$xml = simplexml_load_string($section);
					print($xml->x);
					die;

					foreach($xml->children() AS $k=>$child){
						print(json_encode($k));
					}
					
					die;
					var_dump(json_decode(json_encode($xml->children('rdf', true)),1));
					die;
					
					foreach($xml->children('rdf', true) as $rdf){
						var_dump(json_decode($rdf));
						foreach($rdf->children('dc', true) as $child){
							$d->metadata[$child->getName()] = $child->asXML();
						}
					   
					}
					
				}
			}
		}
	}

	//get info from file name itself
	//if its a file we care about
	$d->details = null;

	if($file != '.' && $file != '..' && !str_contains($file, '.xcf')){

		$artists = [
			'arr'=>'Amelia',
			'sjm'=>'Sophia',
			'alc'=>'Abigail',
			'rpg'=>'Rosemary',
			'ecg'=>'Elizabeth',
			'bsc'=>'Benjamin',
			'jlc'=>'Jeremiah',
			'sgr3'=>'Stephen III',
			'sgrjr'=>'Stephen Jr',
			'egc'=>'Elyanna',
			'amabsost'=>'Amelia, Abigail, Sophia and Stephen'
		];
		$d->details = processItem($file, $artists);
	}

	$all_information[] = $d;

}

var_dump($all_information[0]);
die;

$style = "<style>@font-face {    font-family: 'Dancing Script';    src: url('/libs/fonts/DancingScript-Regular.ttf');    src: url('/libs/fonts/DancingScript-Regular.ttf') format('truetype'),         url('/libs/fonts/DancingScript-Bold.ttf') format('truetype'),         url('/libs/fonts/DancingScript-Medium.ttf') format('truetype'),         url('/libs/fonts/DancingScript-SemiBold.ttf') format('truetype');    font-weight: 400;    font-style: normal;}/** Source: https://dev.to/peterc/how-to-create-joined-bulletpoint-lists-with-css-bbc-news-style-1eem**/ol.time-line {  list-style-type: none;}ol.time-line  li {  position: relative;  margin: 0;  padding-bottom: 1em;  padding-left: 20px;}ol.time-line li:before {  content: '';  background-color: #c00;  position: absolute;  bottom: 0;  top: 0;  left: 6px;  width: 3px;}ol.time-line  li:after {  content: '';  background-image: url('data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23c00' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E');  position: absolute;  left: 0;  height: 15px;  width: 15px;}#quiz {background:#98cef5; bottom:55px; right:10px;padding:10px; border:solid 5px rgb(175,77,13);z-index:100;position:fixed;}blockquote.quote {border-left: 4px solid var(--color-page-draft);}</style><style>	.print-page {      box-sizing: border-box;		overflow: hidden;		background: #f5f5f5;		margin: 0px;		padding-bottom: 100px;		height: 800px; /* width: 7in; */		width: 1040px; /* or height: 9.5in; */		clear: both;		page-break-after: always;		position: relative;	   display: flex;	  flex-direction: row;	  flex-wrap: wrap;	}	.print-page .side {		background: white;		display: flex;	  flex-direction: column;	  flex-basis: 100%;	  flex: 1;	  border: solid 1px gray;	  border: none;	  margin-right: 50px;	  width: 500px;	  overflow: hidden;	  height: 700px;	}	.print-page .side:nth-of-type(1) {		margin-right: 100px;	}	.print-page .container {	   display: flex;	  flex-direction: row;	  flex-wrap: wrap;	  align-items: center;    justify-content: center;    height: 800px;    width: 100%;	}		.print-page h1 {		text-align: center;		font-family: 'Dancing Script','DancingScript', cursive;    font-weight: 700;    line-height: 46px;    font-size: 42px;	}	.print-page h2 {		font-family: 'EB Garamond', serif;	    font-weight: normal;	    text-transform: uppercase;	    font-size: 18px;	    line-height: 23px;	    letter-spacing: 2px;	    margin: 30px;	    text-align: center;	}	.print-page .logo {		margin: 0 auto;		width: 30%;		margin-top: 100px;		margin-bottom: 0;		padding-bottom: 0;	}	.print-page .art {		width: 50%;		margin: 0 auto;		margin-top: 0;		margin-bottom: 0;		display: block;		clear: both;	}	.print-page blockquote{		margin-top: 100px;		font-style: italic;	}	.print-page p {		font-family: 'EB Garamond', serif;	    font-weight: normal;	    font-size: 18px;	    line-height: 23px;	    letter-spacing: 2px;	    text-align: center;	    padding: 0;	    margin: 0;	}	.print-page .pen-in{		display: block;		width: 100%;		clear: both;		text-align: center;		font-family: 'Dancing Script', cursive;	}	.print-page .line{		border-bottom: dashed 1px #d5d2d2;		width: 100%;	}</style><style>@media print {  .skip-to-content-link, #social-links, #bkmrk-page-titleDISABLED{ display:none;}.print-page{background:white; page-break-before: always;	padding-top: 50px;		padding-left: 50px;}html,body,.content-wrap.card, .card {margin:0; padding:0;}.tri-layout-middle { margin:0;padding:0}#quiz{display:none; visibility:hidden;}main {margin:0; padding:0; float:left;}}.book-cover { margin-left: auto; margin-right: auto; width: 50%; display: block; margin-bottom:15px;border-left: 1px solid #ccc;	border-top: 1px solid #ccc;	border-right: 1px solid #888;	border-bottom: 1px solid #888;	background-color: #fcfcfc;	padding: 4px;}/*textbook styles*/body {  counter-reset: h1;}table {  border-collapse: collapse;}th,td {  border: 1px solid #000;  padding: 0.5rem;}th {  background-color: #000;  color: #fff;  border-left: 1px dashed #fff;  border-right: 1px dashed #fff;}th:first-of-type {  border-left: 1px solid #000;}th:last-of-type {  border-right: 1px solid #000;}.book-meta {  margin-top: 0;  text-align: right;  font-size: 1rem;}.title {  margin-top: auto;  font-size: 5rem;  text-align: center;  text-transform: uppercase;  line-height: 1;}.subtitle {  margin-bottom: auto;  font-size: 2rem;  text-align: center;}hr + ul {  font-size: 0.6rem;  list-style-type: none;  padding: 0;}.highlights h1::before,.highlights h2::before,.highlights h3::before,.highlights h4::before,.highlights h5::before,.highlights h6::before {  content: none;}@media print {  section {    column-count: 2;    margin-bottom: 1rem;    padding: 0 5px;    column-gap: 2rem;    break-before: auto;    page-break-before: auto;  }  h1 {    column-span: all;    page-break-before: auto;    break-inside: avoid;    page-break-inside: avoid;  }  h2 {    margin-left: -5px;    margin-right: -5px;  }  h2,  h3,  h4,  h5,  h6 {    break-inside: avoid;  }  .highlights h1 {    column-span: initial;  }}</style><style>* {  box-sizing: border-box;}body {  margin: 0;  font-family: Arial;}.header {  text-align: center;  padding: 32px;}.row {  display: flex;  flex-wrap: wrap;  padding: 0 4px;}/* Create four equal columns that sits next to each other */.column {  flex: 25%;  max-width: 25%;  padding: 0 4px;}.column img {  margin-top: 8px;  vertical-align: middle;}/* Responsive layout - makes a two column-layout instead of four columns */@media (max-width: 800px) {  .column {    flex: 50%;    max-width: 50%;  }}/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */@media (max-width: 600px) {  .column {    flex: 100%;    max-width: 100%;  }}</style>";

$html = "<a href='https://archive.org/serve/nt-illustrations/watch-this-space.jpg' target='_blank'><img src='https://archive.org/serve/nt-illustrations/watch-this-space.jpg' width='100%'></a><div class='row'>";

$col_start = "<div class='column'>";
$col_end = "</div>";
$arts = [];

foreach($all_information AS $a){
	$arts[] = "<div><a href='https://archive.org/serve/nt-illustrations/".str_replace('-small','',$a->id)."' target='_blank'><img src='https://archive.org/serve/nt-illustrations/".$a->id."'></a><p>&quot;".$a->title."&quot; by ".$a->artist."</p></div>";
}

if(count($arts) < 3){
	foreach($arts AS $art_d){
		$html .= $col_start . $art_d . $col_end;
	}
}else{
	$col1 = ceil(count($arts)/3);
	$col2 = ((count($arts) - $col1)/2)+$col1;

	//first column
	$html .= $col_start;
	foreach($arts AS $k=>$v){
		if($k < $col1){
			$html .= $v;
		}
	}
	$html .= $col_end;

	//second column
	$html .= $col_start;
	foreach($arts AS $k=>$v){
		if($k >= $col1 && $k < $col2){
			$html .= $v;
		}
	}
	$html .= $col_end;

	//third column
	$html .= $col_start;
	foreach($arts AS $k=>$v){
		if($k >= $col2){
			$html .= $v;
		}
	}
	$html .= $col_end;
}

$html .="</div>";
$html = $style . "<textarea style='width:100%; height:150px;'>".$html."</textarea><h1>Count: ".count($art)."</h1>".$html;

file_put_contents(str_replace('./','',$dir) . '.html', $html);

function processItem($string, $artists){
	$item = new stdclass;
	$item->id = $string;
	$file = explode('.',$item->id);
	$item->file_type = $file[1];
	$item->artist = '';
	$item->title = '';
	$item->web = false;

	$about = explode('-',$file[0]);

	if(in_array('small', $about)){
		$item->web = true;
	}

	foreach($about AS $ab){
		if(isset($artists[$ab])){
			$item->artist = $artists[$ab];
		}else if($ab != 'small'){
			$item->title .= ' ' . ucfirst($ab);
		}
	}
	$item->title = trim($item->title);

	return $item;
}