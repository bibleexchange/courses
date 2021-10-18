<?php
  header("Pragma: public");
  header("Cache-Control: private");
  header("Content-Type: text/csv");
  header("Content-Disposition: attachment; filename=age-of-files.csv");

  $result = array();
  $handle =  opendir(".");
     while ($datei = readdir($handle)) 
     {
          if (($datei != '.') && ($datei != '..')) 
          {
               $file = "./".$datei;
               if (is_dir($file))
                    $result[] = $file;
          }
     }
     closedir($handle);
  foreach($result as $r)
    if (file_exists($r))
      echo substr($r,2).",".date ("m/d/Y", filemtime($r))."\r\n";
?>