<?php


header("Content-Type: application/json");

try 
{ 
    $database = new PDO("mysql: host = localhost; dbname=shoppingsite",  "root", "" );
    echo("Database exists");
}
catch (PDOException $failure) 
{
    echo("No database exists");
}


?>
