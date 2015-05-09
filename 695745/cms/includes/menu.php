<!DOCTYPE HTML>
<?php

echo
    '<h1 id = "companyName">Content Management System</h1>

    <a href="addItem.php">
      <img src="images/plusIcon.png" id="addButton" onmouseover="Img2(this)"  onmouseout="Img(this)" alt="Add Item" title="Add Item"  style="float:right;width:42px;height:42px;border:0">
    </a>
    <a href="deleteItem.php">
        <img src="images/minusIcon.png" onmouseover="Img2(this)" onmouseout="Img(this)" alt="Remove Item" title="Remove Item"  style="float:right;width:42px;height:42px;border:0">
    </a>
    <a href="editItems.php">
        <img src="images/editIcon.png" onmouseover="Img2(this)" onmouseout="Img(this)" alt="Edit Item" title="Edit Item"  style="float:right;width:42px;height:42px;border:0">
    </a>
    <a href="editCategories.php">
        <img src="images/tagIcon.png" onmouseover="Img2(this)" onmouseout="Img(this)" alt="Edit Categories" title="Edit Categories"  style="float:right;width:42px;height:42px;border:0">
    </a>
    <br><br>

    <script src="../js/highlightIcons.js"></script>
    '

;
?>
