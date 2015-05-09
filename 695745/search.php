
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>

        <script src="js/getSearchResults.js"></script>

    </head>

    <body>

        <?php require 'includes/menu.php';?>


      
        <h3 id = "searchQuery"> Results For: </h3>
        <table border = '1' class = "searchResults" id = "searchResults"> </table>

        <?php require 'includes/footer.php';?>

        <?php include 'includes/javascriptCaller.php';?>
    </body>

</html>
