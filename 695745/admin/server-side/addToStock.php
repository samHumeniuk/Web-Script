<?php

header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$productID = $_GET['productID'];
$stockIncrease = $_GET['stockIncrease'];

$myQuery = "UPDATE `product` SET `numberInStock` = `numberInStock` + $stockIncrease WHERE `productID` = $productID";

$queryResult = $database->query($myQuery);

?>
