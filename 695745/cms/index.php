
<!DOCTYPE HTML>
<html>

    <head>
        <title> Name of Company API </title>
        

        <link href="../ShoppingSite.css" rel="stylesheet">
        <meta charset='UTF-8'>
    </head>

    <body>
      <?php require 'includes/menu.php';?>
        
        <article id="setUp"></article>
        <br><br><br><br><br><br>
        <article>
            Company Name:  <input id="companyNameField">
            <input type="button" value="Change" class="button" id="changeCompanyName">
            <br><br><br><br>
            Colour Scheme: <select id="colourScheme">
                <option value="rgb(202, 234, 245)">Default(Blue)</option>
                <option value="rgb(95, 114, 116)">Dark</option>
                <option value="silver">Silver</option>
                <option value="white">White</option>
                <option value="rgb(211, 255, 212)">Green</option>
                <option value="rgb(236, 196, 252);">Lilac</option>
                <option value="rgb(252, 255, 223);">Cream</option>
                <option value="rgb(169, 226, 243)">Original Blue</option>
                                
            </select> (Only on main site, not admin or CMS)
        </article>
            
      <?php require 'includes/footer.php';?>
       <script src="js/checkForSetup.js"></script>
       <script src='js/setup.js'></script>
       <script src="js/getCompanyName.js"></script>
       <script src ="js/changeCompanyName.js"></script>
       <script src ="js/changeColourScheme.js"></script>

    </body>

</html>
