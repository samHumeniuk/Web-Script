
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>


    </head>

    <body>

        <?php require 'includes/menu.php';?>


        <h3 style="color:#5FB404;" id = "searchQuery"> Recent Purchases (Not Dispatched): </h3>
        <table border = '1' class = "purchases" id = "purchases"> </table>
        
        <h3 style="color:#5FB404;" id = "searchQueryDispatched"> Recent Purchases (Dispatched): </h3>
        <table border = '1' class = "purchases" id = "purchasesDispatched"> </table>
        
        <?php require 'includes/footer.php';?>

        <script src ="js/getPurchases.js"></script>
        <script src ="js/getPurchasesDispatched.js"></script>
        <script src ="js/dispatchItem.js"></script>    
    </body>

</html>
