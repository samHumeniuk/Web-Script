<?php


header("Content-Type: application/json");


$pdo = new PDO("mysql:host=localhost", "root", "");
$pdo->query("CREATE DATABASE IF NOT EXISTS shoppingsite");
$pdo = null;


$database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );

$createTable = "create table product
(productID int,
 productName varchar(100),
 productDiscription varchar(10000),
 productPrice decimal(10,2),
 numberInStock int,
 productImageURL varchar(100),
 categoryName varchar(100));";
$queryResult = $database->query($createTable);

$createSecondTable = "create table featureditems
(productID int);";
$querySecondResult = $database->query($createSecondTable);

$createThirdTable = "create table purchases
(purchaseID int,
 customerName varchar(40),
 customerAddress varchar(100),
 productID int,
 quantity int,
 dateOfPurchase date,
 dispatched bool
 );";
 $queryThirdResult = $database->query($createThirdTable);
 
 $createForthTable = "create table categories
(categoryName varchar(100));";
 $queryForthResult = $database->query($createForthTable);

$insertIntoProduct = "INSERT INTO `product`(`productID`, `productName`, `productPrice`,
`productDiscription`, `productImageURL`, `numberInStock`, `categoryName`) VALUES (1, 'Computer mouse', 5,
'A USB computer mouse with scrolling wheel',
'/itemImages/computerMouse.jpeg', 100, 'computing'), (2,'Computer keyboard',5,'A USB computer keyboard', '/itemImages/computerKeyboard.jpeg', 100, 'computing'),
(3, 'A computer', 200,
'A computer: 8GB RAM, 1 Tera-byte Hard Drive, intel...',
'/itemImages/computer.jpeg', 100, 'computing'), (4, 'Speakers', 20,
'A set of speakers. Power cable included.',
'/itemImages/speakers.jpeg', 100, 'music'),
(5, 'USB Flash Drive', 20,
'A  USB memory stick - 4GB',
'/itemImages/USB.jpeg', 100, 'computing');";
$database->query($insertIntoProduct);

$insertIntoCategory = "INSERT INTO `categories`(`categoryName`) VALUES ('computing'), ('music');";
$database->query($insertIntoCategory);

$insertIntoFeatured = "INSERT INTO `featureditems`(`productID`) VALUES (1), (3), (5)";
$database->query($insertIntoFeatured);

echo("Database created");


?>
