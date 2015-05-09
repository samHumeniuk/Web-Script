
var pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {
            
            var companyName = getFeaturedItems.responseText; 
            //removes last character: ";"            
            companyName = companyName.substring(0, companyName.length - 1);
            console.log(companyName);
            var companyNameField = document.getElementById("companyNameField");
            companyNameField.value = companyName;
            
	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	getFeaturedItems.open("GET", "../getCompanyName.php", true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};

window.addEventListener("load", pageLoaded);