
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company admin </title>


        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>
    </head>

    <body>
    <?php require 'includes/menu.php';?>

    <h3 style="color:#5FB404;" id = "searchQuery"> Notices: (Need Dispatching) </h3>
    <table border = '1' class = "purchases" id = "purchases"> </table>
    
    <br>
    <h3 style="color:#01A9DB;">Notices: (Low on Stock)</h3>
    <table id = "items" border = '1' class="searchResults"></table>

    <?php require 'includes/footer.php';?>

    <script src ="js/getPurchases.js"></script>
    <script src ="js/dispatchItem.js"></script>
    <script src="js/getLowStockLevels.js"></script>
    <script src="js/addToStock.js"></script>
    
    </body>

</html>
