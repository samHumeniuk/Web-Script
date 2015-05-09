
var pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("items");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

        success = function ()
        {

            console.log("success");

            var itemJson = getFeaturedItems.responseText;
            itemJson = itemJson.substring(0, itemJson.length - 3);
            var itemsActualJson = JSON.parse(itemJson);
            var onlyItemJson = itemsActualJson[0];
            
            var searchHtml = "";

            console.log(itemsActualJson.length);
            if(itemsActualJson.length == 0)
            {
                searchHtml = "<tr> <td> <h4>No Results Found </h4> </td> </tr>";
            }
            else
            {
                    for (product = 0; product < itemsActualJson.length; product++)
	            {
	               var j  = product +1;
	               var currentTarget = document.getElementById("featured" + j );
	               var productActualJson = itemsActualJson[product];
	               var productJson = JSON.stringify(productActualJson);

                        searchHtml += "<tr>";
                        searchHtml += "<td>";
                        searchHtml += "<a href='../item.php?productID=" + productActualJson.productID + "'>";
                        searchHtml += "<img style=float:left;width:100px;height:100px; src = " + ".." + productActualJson.productImageURL + ">";
                        searchHtml += "<h4>"+ productActualJson.productName ;
                        searchHtml += "   &pound"+ productActualJson.productPrice + "</h4>";
                        searchHtml += "</a><br>";

                        var colour;
                        if (productActualJson.numberInStock < 30) 
                        {
                            colour = "red";
                        }
                        else if (productActualJson.numberInStock < 50) 
                        {
                            colour = "orange";
                        }
                        else
                        {
                            colour = "black";
                        }
                        
                        searchHtml += "<h4 style='color:"+ colour+"'>" + productActualJson.numberInStock + " in stock </h4>";
                        searchHtml += "<input class=inputStock type=number id='increaseStockInput" + productActualJson.productID + "' placeholder=100><br><br><br>";
                        searchHtml += "<button type='button' onclick='increaseStock("+productActualJson.productID+")' >Increase Stock By</button>";
                        searchHtml += "</td>";
                        searchHtml += "</tr>";

                    }
							
            }

            target.innerHTML = searchHtml;


        };

	failure = function ()
	{
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/getLowStock.php?" + "query=";
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();


};

window.addEventListener("load", pageLoaded, false);
