var databaseExists = function()
{
    var createSetup = document.getElementById("setUp");
    var setUpHTML = "<h3>Database has been configured</h3>";

    createSetup.innerHTML = setUpHTML;
};

var pageLoaded = function () {

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("searchResults");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

	success = function () {

            var dataBaseExistance = getFeaturedItems.responseText;
            console.log(dataBaseExistance);
            if (dataBaseExistance === "Database exists")
            {
                databaseExists();
            }
            else
            {
                var createSetup = document.getElementById("setUp");
                var setUpHTML = "<h3>Database has not been configured</h3>";
                setUpHTML += "<button type='button' id='setupButton'>Set Up database</button>";
                createSetup.innerHTML = setUpHTML;
                
                setupButton = document.getElementById("setupButton");
                setupButton.addEventListener("click", setupDatabase);
            }


	};

	failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/checkForSetup.php";
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

};


window.addEventListener("load", pageLoaded);
