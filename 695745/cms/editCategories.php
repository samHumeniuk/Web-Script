
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company API </title>
        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>



    </head>

    <body>

      <?php require 'includes/menu.php';?>

        <h3>New Category:</h3>
        <article>
            
            <input id="newCategoryName" placeholder="Category Name">
            <br><br>

            <p id="submissionResponce"></p>
            <input type="button" value="New" class="button" id="newCategoryButton" >

        </article>
        
        <h3>Remove Category:</h3>
        <article>
            <select id="newItemCategories">
            </select>
            <br><br>
            <input type="button" value="Remove"  class="button" id="removeCategoryButton" >
        </article>

        <?php include '/includes/footer.php';?>
    <script src="js/newCategory.js"></script>
    <script src="js/getCategories.js"></script>
    <script src="js/removeCategory.js"></script>
    </body>

</html>
