
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company API </title>
        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>



    </head>

    <body>

      <?php require 'includes/menu.php';?>

        <h3 style="color:#01A9DB;">Stock Levels:</h3>


        <table id = "items" border = '1' class="searchResults"></table>


        <?php include '/includes/footer.php';?>
        <script src="js/getStockLevels.js"></script>
        <script src="js/addToStock.js"></script>

    </body>

</html>
