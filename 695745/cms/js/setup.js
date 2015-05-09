var setupDatabase = function ()
{
    console.log("set-up");

    
	// declare the two variables that will be used
	var setUpRequest, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("items");

	// create a request object
	setUpRequest = new XMLHttpRequest();

            success = function ()
            {

            alert("Set-Up complete");
            console.log("success");
            
            window.location.href = "../cms";

            var itemJson = setUpRequest.responseText;

            //removes last character: ";"
            console.log("length before" + itemJson.length);
            itemJson = itemJson.substring(0, itemJson.length - 3);
            console.log("length after" + itemJson.length);

            var itemsActualJson = JSON.parse(itemJson);


	};

	failure = function ()
	{
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/setup.php?";
        setUpRequest.open("GET", phpFile, true);
	setUpRequest.addEventListener("load", success);
	setUpRequest.addEventListener("error", failure);
	setUpRequest.send();

};
