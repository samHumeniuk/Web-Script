
var removeItem = function(productID){

        // declare the two variables that will be used
        var getFeaturedItems, target, success, failure;

        // find the element that should be updated
        target = document.getElementById("items");
        console.log(productID);

        // create a request object
        getFeaturedItems = new XMLHttpRequest();

        success = function () 
        {

            alert("Item Deleted");
            pageLoaded();

        };

        failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
        };


        var phpFile = "./server-side/removeItem.php?" + "productID=" + productID ;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();


};

