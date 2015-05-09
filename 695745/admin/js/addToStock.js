
// var removeItem = function (e) {

var increaseStock = function(productID){

        // declare the two variables that will be used
        var getFeaturedItems, target, success, failure;

        // find the element that should be updated
        target = document.getElementById("items");
        console.log(productID);

        var inputID = "increaseStockInput" + productID;
        var stockInput = document.getElementById(inputID);
        var stockIncrease = stockInput.value;

        console.log(stockInput);

        console.log("stock increase" +stockIncrease);

        // create a request object
        getFeaturedItems = new XMLHttpRequest();

        success = function () {

            alert("Stock Updated");
            pageLoaded();
        };

        failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
        };

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/addToStock.php?" + "productID=" + productID + "&stockIncrease="+stockIncrease ;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};


