
var changeColour = function(){

    console.log("inside function");
        // declare the two variables that will be used
        var changeColour, target, success, failure;

        var colour = changeColourSpinner.value;
        
        // find the element that should be updated
        target = document.getElementById("items");
       
        // create a request object
        changeColour = new XMLHttpRequest();

        success = function () 
        {

            alert("Colour Scheme Changed");
            pageLoaded();

        };

        failure = function () {
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
        };


        var phpFile = "../changeColour.php?" + "name=" + colour ;
        changeColour.open("GET", phpFile, true);
	changeColour.addEventListener("load", success);
	changeColour.addEventListener("error", failure);
	changeColour.send();


};

var changeColourSpinner = document.getElementById("colourScheme");
changeColourSpinner.addEventListener("change", changeColour);