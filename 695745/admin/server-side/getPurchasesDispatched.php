<?php

header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$dateNow = date('Y-m-d');

$endMonthsAgo = 1;
$endTimeStamp = strtotime("-". $endMonthsAgo ." months");
$dateStartFormatted = "'". date('Y-m-d',$endTimeStamp) ."'" ;
$dateEndFormatted = "'". date('Y-m-d'). "'" ;



$myQuery = "SELECT * FROM `purchases` WHERE `dispatched` = true and `dateOfPurchase` between $dateStartFormatted and $dateEndFormatted";


$queryResult = $database->query($myQuery);
$queryResult->setFetchMode(PDO::FETCH_OBJ);


$queryResultArray = [];


while($row = $queryResult->fetchObject())
{
    $queryResultArray[] = $row;
}

echo (json_encode($queryResultArray));


?>;
