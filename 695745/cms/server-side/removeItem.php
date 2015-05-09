<?php


header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$productID = $_GET['productID'];

$myQuery = "Delete FROM `product` where `productID` =". $productID .";Delete FROM `featureditems` where `productID`=" . $productID;


$queryResult = $database->query($myQuery);

echo("hsuccess, we hope");


?>
