<?php
header('Access-Control-Allow-Origin: *');
$plantilla =(object) null;
require "menu.php";
require "articulo.php";
require "videos.php";
echo json_encode($plantilla,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>

