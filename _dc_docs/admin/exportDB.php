<?php
//ENTER THE RELEVANT INFO BELOW
$dbhost = 'localhost';
$dbname = 'dbi';
$dbuser = 'root';
$dbpass = 'test';
$mysqlExportPath ='D:\GDrive\server\public_html\dbi\library\admin\\';

$backup_file = $mysqlExportPath.$dbname . date("Y-m-d-H-i-s") . '.gz';
$command = "mysqldump --opt -h $dbhost -u $dbuser -p $dbpass ".
           "test_db | gzip > $backup_file";

system($command);

//$ mysqldump --opt -u [student] -p[dcdbi1969] [dbi] > [backupfile.sql]

?>