<?php


header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$categoryName= '"' . $_GET['categoryName'] . '"';

$myQuery = "DELETE FROM `categories` WHERE `categoryName` = $categoryName;";
echo ($myQuery);
$queryResult = $database->query($myQuery);

?>;
