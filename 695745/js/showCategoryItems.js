
var showCategory = function (categoryName) 
{
        target = document.getElementById("searchResults");
	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {
            
            
            var searchQuery = document.getElementById("category");
            searchQuery.innerHTML = categoryName + ":";

            var itemJson = getFeaturedItems.responseText;
            console.log(itemJson);

            //removes last character: ";"
            console.log("length before" + itemJson.length);
            itemJson = itemJson.substring(0, itemJson.length - 3);
            console.log("length after" + itemJson.length);
            console.log(itemJson);
            var itemsActualJson = JSON.parse(itemJson);
            console.log(itemJson);

            var onlyItemJson = itemsActualJson[0];
            console.log(onlyItemJson);
            var searchHtml = "";

            console.log(itemsActualJson.length);
            if(itemsActualJson.length == 0)
            {
                searchHtml = "<tr> <td> <h4>No Items in this Category </h4> </td> </tr>";
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
                        searchHtml = searchHtml + "<a href='item.php?productID=" + productActualJson.productID + "'>";
                        searchHtml += "<img style=float:left;width:100px;height:100px; src = " + "." + productActualJson.productImageURL + ">";
                        searchHtml = searchHtml +"<h4>"+ productActualJson.productName ;
                        searchHtml = searchHtml +"   &pound"+ productActualJson.productPrice + "</h4>";

                        searchHtml += "</a>";
                        searchHtml += "</td>";
                        searchHtml += "</tr>";

	            }
            }

            target.innerHTML = searchHtml;
           
            
	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        
        var phpFile = "./server-side/getCategoryItems.php?" + "categoryName=" + categoryName;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};
