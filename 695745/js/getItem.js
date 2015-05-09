var pageLoaded;

pageLoaded = function () {

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

             var productHtml = "";
             productHtml = productHtml +"<section id='product'><h4>"+ onlyItemJson.productName + "</h4>";
             
            var addToBasketButton = document.getElementById("addToBasketButton");
            addToBasketButton.setAttribute("style", "visibility: visible");
            if(onlyItemJson.numberInStock > 0)
            {
                
                addToBasketButton.setAttribute("data-detail", '{"productName":"' + onlyItemJson.productName + '", "productPrice": "' +  onlyItemJson.productPrice +'",' + '"productID": "'+ onlyItemJson.productID + '", "productImageURL": "'+ onlyItemJson.productImageURL +'", "name": "' + onlyItemJson.productID+ '"}');
            }
            else
            {
                addToBasketButton.setAttribute("disabled", "disabled");
                
                productHtml += "<p style='color:red;'>  Out of Stock</p>";
            }

            
            
            productHtml = productHtml +"<p> &pound"+ onlyItemJson.productPrice + "</p>";
            productHtml = productHtml + "<img style=width:200px;height:200px; src = " + "." + onlyItemJson.productImageURL + ">";
            productHtml = productHtml + "<p>" + onlyItemJson.productDiscription + "</p></section>";
            target.innerHTML = productHtml;

         
            
//            addDrags();

	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var productID = getUrlVars()["productID"];
        var phpFile = "./server-side/getItem.php" + "?productID=" +productID;
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

//var dragStart = function (e)
//{
//    box = document.createElement('img');
//    box.src = 'basket.jpg';
//    box.width = 10;
//    e.dataTransfer.setDragImage(box, 100, 40);
//};
//
//var addToBasket = function()
//{
//    addItem(document.getElementById("addToBasketButton"));
//};
//
//dragHandler = function (e) 
//{
//    e.preventDefault();
//};
//
//var addDrags = function()
//{
//    var currentTarget = document.getElementById("product" );
//    currentTarget.setAttribute("draggable", true);
//    currentTarget.addEventListener("dragstart", dragStart);
//    
//   basket = document.getElementById("basketIcon");
//   basket.addEventListener("dragover", dragHandler);
//   basket.addEventListener("drop", addToBasket );
//};

window.addEventListener("load", pageLoaded);
