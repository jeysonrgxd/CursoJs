<?php
$token = $_GET["token"];
$url="https://superheroapi.com/api/{$token}/search/Captain%20America";
$json = file_get_contents($url);
echo $json;
?>