var pageLoaded;

pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {
            
            var featuredItemsJson = getFeaturedItems.responseText; 
            //removes last character: ";"            
            featuredItemsJson = featuredItemsJson.substring(0, featuredItemsJson.length - 1);
            var featuredItemsActualJson = JSON.parse(featuredItemsJson);
            
                       
            for (product = 0; product < featuredItemsActualJson.length; product++) 
            { 
               var j  = product +1;
               var currentTarget = document.getElementById("featured" + j );
               var productActualJson = featuredItemsActualJson[product];
               var productJson = JSON.stringify(productActualJson);
               var productHtml = "";
               productHtml = productHtml + "<a href='item.php?productID=" + productActualJson.productID + "'>";
               productHtml = productHtml +"<h4>"+ productActualJson.productName + "</h4>";
               productHtml = productHtml +"<p> &pound"+ productActualJson.productPrice + "</p>";
               productHtml = productHtml + "<img style=width:200px;height:200px; src = " + "." + productActualJson.productImageURL + "></a>";
//               currentTarget.innerHTML = productJson;
               currentTarget.innerHTML = productHtml;
            }
           
                       
	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	getFeaturedItems.open("GET", "./server-side/getFeaturedItems.php", true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};



window.addEventListener("load", pageLoaded);