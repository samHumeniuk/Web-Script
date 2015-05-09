<?php


header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$productName ='"' . $_GET['productName'] . '"';
$productDiscription = '"' . $_GET['productDiscription'] . '"';
$productPrice = $_GET['productPricePounds'] . "." . $_GET['productPricePennies'];
$productStock = $_GET['productStock'];
$prdouctFeatured = $_GET['productFeatured'];
$productImage = $_GET['productImage'];
$productCategory = '"' . $_GET['productCategory'] . '"';


$getUniqueIDQuery = "SELECT max(`productID`) FROM `product` ";

$oldestID = $database->query($getUniqueIDQuery);
$oldestIDArray = $oldestID->fetch();
$oldestIDINT = $oldestIDArray[0];
$newID = $oldestIDINT + 1;


$myQuery = "INSERT INTO `product`(`productID`, `productName`, `productPrice`, `productDiscription`, `productImageURL`, `numberInStock`, `categoryName`) VALUES ($newID, $productName,$productPrice,$productDiscription,'/itemImages/" .$productImage. "',$productStock, $productCategory)";
echo ($myQuery);
$queryResult = $database->query($myQuery);

if ($prdouctFeatured == "true")
{
    $featuredQuery = "INSERT INTO `featureditems`(`productID`) VALUES ($newID)";
    $FeaturedQueryResult = $database->query($featuredQuery);
}

?>;
