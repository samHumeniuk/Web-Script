var pageLoaded;

pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("searchResults");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {

            var productID = getUrlVars()["query"];
            var searchQuery = document.getElementById("searchQuery");
            var searchBar = document.getElementById("searchBar");
            searchBar.value = productID;
            searchQuery.innerHTML += productID;

            //featuredItemsText.split(" ", 6);
            //var featuredItemsText = getFeaturedItems.responseText;

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
        var productID = getUrlVars()["query"];
        var phpFile = "./server-side/getSearchResults.php?" + "query=" +productID;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};

//function found at http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

window.addEventListener("load", pageLoaded);
