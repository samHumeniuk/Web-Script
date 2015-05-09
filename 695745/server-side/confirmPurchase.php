<?php


header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$customerName ='"' . $_GET['customerName'] . '"';
$customerAddress = '"' . $_GET['customerAddress'] . '"';
$productID = $_GET['productID'];
$quantity = $_GET['quantity'];


$getUniqueIDQuery = "SELECT max(`purchaseID`) FROM `purchases` ";

$oldestID = $database->query($getUniqueIDQuery);
$oldestIDArray = $oldestID->fetch();
$oldestIDINT = $oldestIDArray[0];
$newID = $oldestIDINT + 1;

$currentDate = "'" . date('Y-m-d') . "'";



$myQuery = "INSERT INTO `purchases`(`purchaseID`, `customerName`, `customerAddress`, `productID`, `quantity`, `dateOfPurchase`, `dispatched`) VALUES ( $newID, $customerName,$customerAddress,$productID,$quantity,$currentDate,false)";

$queryResult = $database->query($myQuery);


$decreaseStockQuery = "UPDATE `product` SET `numberInStock` = `numberInStock` - $quantity WHERE `productID` = $productID";
$queryResultTwo = $database->query($decreaseStockQuery);

?>;
