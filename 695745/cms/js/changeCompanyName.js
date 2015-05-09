
var changeName = function(){

        // declare the two variables that will be used
        var getFeaturedItems, target, success, failure;

        var newName = document.getElementById("companyNameField").value;
        
        // find the element that should be updated
        target = document.getElementById("items");
       
        // create a request object
        getFeaturedItems = new XMLHttpRequest();

        success = function () 
        {

            alert("Name Changed");
            pageLoaded();

        };

        failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
        };


        var phpFile = "../changeName.php?" + "name=" + newName ;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();


};

var changeNameButton = document.getElementById("changeCompanyName");
changeNameButton.addEventListener("click", changeName);