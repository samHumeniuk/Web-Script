
var getItem = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("item");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {

            var itemJson = getFeaturedItems.responseText;
            //removes last character: ";"
            itemJson = itemJson.substring(0, itemJson.length - 3);
            var itemActualJson = JSON.parse(itemJson);

             var onlyItemJson = itemActualJson[0];

            var nameField = document.getElementById("newItemName");
            nameField.value = onlyItemJson.productName;
            
            var discriptionField = document.getElementById("newItemDiscription");
            discriptionField.value = onlyItemJson.productDiscription;
            
            var stockField = document.getElementById("newItemStockNumber");
            stockField.value = onlyItemJson.numberInStock;
            
            var price = onlyItemJson.productPrice;
            var priceArray = price.split(".");
            
            var poundsField = document.getElementById("newItemPricePounds");
            var penniesField = document.getElementById("newItemPricePennies");
            poundsField.value = priceArray[0];
            penniesField.value = priceArray[1];

            var imageField = document.getElementById("newItemImage");
            var imageFull = onlyItemJson.productImageURL;
//            cut off /itemImages/ from string:
            imageField.value = imageFull.substring(12, itemJson.length);
            
            var categoryField = document.getElementById("newItemCategories");
            categoryField.value = onlyItemJson.categoryName;


	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var productID = getUrlVars()["productID"];
        console.log(productID);
        var phpFile = "../server-side/getItem.php" + "?productID=" +productID;
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

//window.addEventListener("load", pageLoaded);
