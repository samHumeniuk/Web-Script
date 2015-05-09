<?php


header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$purchaseID = $_GET['purchaseID'];

$myQuery = "UPDATE `purchases` SET `dispatched`= true WHERE `purchaseID` = $purchaseID";

$queryResult = $database->query($myQuery);


?>
