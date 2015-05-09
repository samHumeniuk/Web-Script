<!DOCTYPE HTML>
<?php
$nameOfCompany = file_get_contents("nameOfCompany.txt");
$colour = file_get_contents("colourScheme.txt");
echo
    '<body style="background-color:'.$colour . ';"><h1 id = "companyName"> '.$nameOfCompany .' </h1>

    <input name="search" id="searchBar" list="suggestions" type="search" placeholder="search products" autofocus >
    <datalist id="suggestions">

    </datalist>


    <!-- <a href="search.php"> -->
        <img src="images/searchIcon.png" id="searchButton" onmouseover="Img2(this)"  onmouseout="Img(this)" alt="Search" title="Search" style="float:left;width:42px;height:42px;border:0">
    <!-- </a> -->

    <a id="basketIcon" href="basket.php">
        <img src="images/basketIcon.png" onmouseover="Img2(this)"  onmouseout="Img(this)" alt="Basket" title="Basket"  style="float:right;width:42px;height:42px;border:0">
    </a>
    <a href="categories.php">
        <img src="images/tagIcon.png" onmouseover="Img2(this)" onmouseout="Img(this)" alt="Favourites" title="Categories" style="float:right;width:42px;height:42px;border:0">
    </a>
    <a href="index.php">
        <img src="images/favouritesIcon.png" onmouseover="Img2(this)" onmouseout="Img(this)" alt="Shop" title="Featured Items" style="float:right;width:42px;height:42px;border:0">
    </a>
    <br><br></body>'

;
?>
