
var dispatchItem = function(purchaseID){

        // declare the two variables that will be used
        var getFeaturedItems, target, success, failure;

        // find the element that should be updated
        target = document.getElementById("items");
        console.log(purchaseID);

        // create a request object
        getFeaturedItems = new XMLHttpRequest();

        success = function ()
        {

            alert("Item marked as Dispatched");
            getPurchasesDispatched();
            pageLoaded();


        };

        failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
        };

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/dispatchItem.php?" + "purchaseID=" + purchaseID ;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

 

};

