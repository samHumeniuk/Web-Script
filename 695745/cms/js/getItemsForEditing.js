var pageLoaded;

pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("items");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

        success = function ()
        {

                console.log("success");
                var productID = getUrlVars()["query"];
              

                var itemJson = getFeaturedItems.responseText;
                // console.log(itemJson);

                //removes last character: ";"
                console.log("length before" + itemJson.length);
                itemJson = itemJson.substring(0, itemJson.length - 3);
                console.log("length after" + itemJson.length);

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
                        searchHtml += "</a><br><br><br>";

                        // searchHtml += "<button type='button' id='removeItemButton' class='removeItemButton' data-detail={'productID':'" + productActualJson.productID+ "'}>Remove Item</button>";
                        searchHtml += "<button type='button' onclick='editItem("+productActualJson.productID+")' class='editItemButton'>Edit Item</button>";

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


        var phpFile = "./../server-side/getSearchResults.php?" + "query=";
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


window.addEventListener("load", pageLoaded, false);
