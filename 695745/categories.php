
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>


    </head>

    <body>

        <?php require 'includes/menu.php';?>

        <h2 style="color:#01A9DB;"> Categories </h2>
        <article>
            <ul class="categories" id="categories">
            </ul>
        </article>
        <article>
            <h3 id = "category"></h3>
        </article>
            <table border="1" class="searchResults" id="searchResults"></table>
        
        
        <?php require 'includes/footer.php';?>
        <?php include 'includes/javascriptCaller.php';?>
        <script src="js/showCategoryItems.js"></script>
        <script src="js/getCategories.js"></script>
        
    </body>

</html>
