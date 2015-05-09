<?php

$quartile = $_GET['quartile'];

header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );



$dateNow = date('Y-m-d');

$startMonthsAgo = 3 * $quartile;
$endMonthsAgo = 3 * ($quartile-1);
$startTimeStamp = strtotime("-". $startMonthsAgo ." months");
$endTimeStamp = strtotime("-". $endMonthsAgo ." months");
$dateEndFormatted = "'". date('Y-m-d', $startTimeStamp ) ."'" ;
$dateStartFormatted = "'". date('Y-m-d',$endTimeStamp). "'" ;



$myQuery = "SELECT * FROM `purchases`, `product` WHERE `dateOfPurchase` between $dateEndFormatted and $dateStartFormatted and purchases.productID = product.productID";


$queryResult = $database->query($myQuery);
$queryResult->setFetchMode(PDO::FETCH_OBJ);


$queryResultArray = [];


while($row = $queryResult->fetchObject())
{
    $queryResultArray[] = $row;
}

echo (json_encode($queryResultArray));


?>;
