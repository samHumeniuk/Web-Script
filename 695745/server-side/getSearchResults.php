<?php

if(isset($_GET['query']))
{
    $productID = $_GET['query'];
}
else
{
    $productID = 3;
}

header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );


$myQuery = "SELECT * FROM `product` WHERE `productName` LIKE'%" . $productID."%'";


$queryResult = $database->query($myQuery);
$queryResult->setFetchMode(PDO::FETCH_OBJ);


$queryResultArray = [];


while($row = $queryResult->fetchObject())
{

    $queryResultArray[] = $row;
}

echo (json_encode($queryResultArray));


?>;
