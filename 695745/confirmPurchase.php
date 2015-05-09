
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>


    </head>

    <body>

        <?php require 'includes/menu.php';?>

        <p id="basket"> </p>
        <article>
            <h3>Your Details:</h3>
            <input id="customerName" placeholder="Your Name">
            <br><br>
            <textarea id="customerAddress" placeholder="Your Address"></textarea>
            <br><br>
            <button type="button" id="confirmPurchase">Confirm Purchase</button>
        </article>
            
        <?php require 'includes/footer.php';?>
        <?php include 'includes/javascriptCaller.php';?>


        <script src="js/basketDisplay.js"></script>
        <script src="js/confirmPuchase.js"></script>
    </body>

</html>
