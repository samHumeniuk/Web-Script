<?php


    $categoryName = "'". $_GET['categoryName'] . "'";



header("Content-Type: application/json");

$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );


$myQuery = "SELECT * FROM `product` WHERE `categoryName` = $categoryName;";


$queryResult = $database->query($myQuery);
$queryResult->setFetchMode(PDO::FETCH_OBJ);


$queryResultArray = [];


while($row = $queryResult->fetchObject())
{

    $queryResultArray[] = $row;
}

echo (json_encode($queryResultArray));


?>;
