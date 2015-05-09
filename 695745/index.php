<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company </title>
        <link href="ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>
        

        <script src="js/getFeaturedItems.js"></script>

    </head>

    <body>

        <?php require 'includes/menu.php';?>
            
        <h2 style="color:#5FB404;"> Featured Items: </h2>
        <p id="featuredItems"> </p>

        <table border="1" >
            <tr>
              <td id="featured1"></td>
              <td id="featured2"></td>
              <td id="featured3"></td>
            </tr>
            <tr>
              <td id="featured4"></td>
              <td id="featured5"></td>
              <td id="featured6"></td>
            </tr>
        </table>
        
        <br><br>
        <?php require 'includes/footer.php';?>
        <?php include 'includes/javascriptCaller.php';?>
    </body>

</html>
