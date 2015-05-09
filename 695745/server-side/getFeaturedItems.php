<?php 

header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );


$myQuery = "SELECT * FROM `product`, `featureditems` WHERE product.productID = featureditems.productID";



$queryResult = $database->query($myQuery);
$queryResult->setFetchMode(PDO::FETCH_OBJ);

$queryResultArray = [];


while($row = $queryResult->fetchObject())
{
    $queryResultArray[] = $row;
}

echo (json_encode($queryResultArray));


?>;