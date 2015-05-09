<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>



    </head>

    <body>




        <?php require 'includes/menu.php';?>
        <article >
            <button type="button" id="addToBasketButton" style="visibility: hidden;" >Add to Basket</button>
            <p id="item"></p>
        </article>

        <?php require 'includes/footer.php';?>

        <script src="js/getItem.js"></script>

        <?php include 'includes/javascriptCaller.php';?>

        <script src="js/basketSetup.js"></script>
        <script src="js/basketStorageManager.js"></script>

    </body>

</html>
