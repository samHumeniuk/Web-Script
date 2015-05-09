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
`productDiscription`, `productImageURL`, `numberInStock`, `categoryName`) VALUES (1, 'Book 1', 5,
'A fantasy novel.',
'/itemImages/book1.png', 100, 'Fantasy'), (2,'Book 2',5,'A crime/thriller novel.', '/itemImages/book2.png', 100, 'Crime and Thriller'),
(3, 'Book 3', 10,
'A detective story.',
'/itemImages/book3.png', 100, 'Crime and Thriller'), (4, 'Book 4', 20,
'A horror Story',
'/itemImages/book4.png', 100, 'Horror'),
(5, 'Book 5', 10,
'A  science-fiction novel',
'/itemImages/book5.png', 100, 'Science Fiction'),
(6, 'Book 6', 15,
'A fantasy novel Part 1 of 3.',
'/itemImages/book6.png', 100, 'Fantasy'), (7,'Book 7',15,'A fantasy novel Part 2 of 3.', '/itemImages/book7.png', 100, 'Fantasy'),
(8, 'Book 8', 15,
'A fantasy novel Part 3 of 3.',
'/itemImages/book8.png', 100, 'Fantasy'), (9, 'Book 9', 20,
'A Romance Novel',
'/itemImages/book9.png', 100, 'Romance'),
(10, 'Book 10', 10,
'A  science-fiction story',
'/itemImages/book10.png', 100, 'Science Fiction');";
$database->query($insertIntoProduct);

$insertIntoCategory = "INSERT INTO `categories`(`categoryName`) VALUES ('Fantasy'), ('Crime and Thriller'), ('Horror'), ('Science Fiction'), ('Romance');";
$database->query($insertIntoCategory);

$insertIntoFeatured = "INSERT INTO `featureditems`(`productID`) VALUES (1), (3), (5)";
$database->query($insertIntoFeatured);

echo("Database created");


?>
