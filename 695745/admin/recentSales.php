
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>


    </head>

    <body>

        <?php require 'includes/menu.php';?>


     
        <article>
        <h3 id = "salesTitle"> Sales: </h3>
        <button id="previousButton" class="left">Previous Quarter</button>
        <button id="nextButton" class="right">Next Quarter</button>
        </article>
        <table border = '1' class = "purchases" id = "sales"> </table>
        
        <article>
            <p class="total" id= "totalSales"></p>
        </article>
        <?php require 'includes/footer.php';?>

        <script src ="js/getSales.js"></script>
           
    </body>

</html>
