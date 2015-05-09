
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company API </title>
        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>



    </head>

    <body>

      <?php require 'includes/menu.php';?>

        <h2 style="color:#BA0606;">Edit Item:</h2>
        <article>
            
        <input id="newItemName" placeholder="Item Name">
        <br><br>
        Make this a featured item and display it on the homepage:<input type="checkbox" class = "checkbox" id="newFeaturedItem" name="newFeaturedItem" value=""> <br>
        <br>
        <textarea id="newItemDiscription" placeholder="Item Discription"></textarea>
        <br>
        <p>
            &pound; <input class="inputNumber" type="number" id="newItemPricePounds" placeholder="Item Price" min ="0" max = "9999">
            . <input class="inputNumber" type="number" id="newItemPricePennies" placeholder="99" min="0" max="99" >
        </p>
        Number in stock:<input class="inputNumber" type ="number" id="newItemStockNumber" placeholder=100 min="0">
        <p>Upload an Image: <small>Image must be in the 'htdocs/ShoppingSite/itemImages' folder</small> </p> 
        <input id="newItemImage" placeholder="imageName.imageExtension">
        <br> <br>
        <p>Category:</p><select id="newItemCategories">
        </select>
        <p id="submissionResponce"></p>
        <input type="submit" class="button" id="editItemButton" >
        
        </article>

        <?php include '/includes/footer.php';?>
    <script src="js/getCategories.js"></script>
    <script src="js/getItemForEditing.js"></script>
    <script src="js/newItem.js"></script>
    <script src="js/removeItem.js"></script>
    <script src="js/confirmEditedItem.js"></script>
    
    </body>

</html>
