
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>


    </head>

    <body>

        <?php require 'includes/menu.php';?>

        <h2 style="color:#01A9DB;"> Basket </h2>

        
        <p id="basket"> </p>
        <article>
            <button type="button" id="purchase" style="visibility: hidden;" >Purchase</button>
        </article>
            
        <?php require 'includes/footer.php';?>
        <?php include 'includes/javascriptCaller.php';?>


        <script src="js/basketDisplay.js"></script>
    </body>

</html>
