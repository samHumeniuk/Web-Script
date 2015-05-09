
var pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {
            
            var featuredItemsJson = getFeaturedItems.responseText; 
            //removes last character: ";"            
            featuredItemsJson = featuredItemsJson.substring(0, featuredItemsJson.length - 1);
            var featuredItemsActualJson = JSON.parse(featuredItemsJson);
            
            var currentTarget = document.getElementById("newItemCategories");
            
            for (category = 0; category < featuredItemsActualJson.length; category++) 
            { 
               
               var categoryActualJson = featuredItemsActualJson[category];
               var categoryJson = JSON.stringify(categoryActualJson);
               var categoryHtml = "";
               categoryHtml += "<option value='" + categoryActualJson.categoryName +"'>" + categoryActualJson.categoryName + "</option>";
                currentTarget.innerHTML += categoryHtml;
            }
           getItem();
            
	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	getFeaturedItems.open("GET", "./server-side/getCategories.php", true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};

window.addEventListener("load", pageLoaded);