

var pageLoaded = function () {

	// declare the two variables that will be used
	var getPurchases, target, success, failure;

	// find the element that should be updated
	target = document.getElementById("purchases");

	// create a request object
	getPurchases = new XMLHttpRequest();

            success = function ()
            {

                console.log("success");

                var purchaseJson = getPurchases.responseText;
                
                console.log(purchaseJson);

                //removes last character: ";"
                console.log("length before" + purchaseJson.length);
                purchaseJson = purchaseJson.substring(0, purchaseJson.length - 3);
                console.log("length after" + purchaseJson.length);
                console.log(purchaseJson);
                var purchasesActualJson = JSON.parse(purchaseJson);


                var searchHtml = "";
 
                console.log(purchasesActualJson.length);
                        if(purchasesActualJson.length == 0)
                        {
                                searchHtml = "<tr> <td> <h4>No Items need Dispatching </h4> </td> </tr>";
                        }
                        else
                        {
                            for (product = 0; product < purchasesActualJson.length; product++)
                            {
                                var j  = product +1;
                                var currentTarget = document.getElementById("featured" + j );
                                var individualPurchaseJson = purchasesActualJson[product];
                                var productJson = JSON.stringify(individualPurchaseJson);
                                searchHtml += "<tr>";
                                searchHtml += "<td>";
                                searchHtml += "<p> purchase ID: " + individualPurchaseJson.purchaseID + "<p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<p>" + individualPurchaseJson.customerName + "<p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<p>"+ individualPurchaseJson.customerAddress + "</p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<a href='../item.php?productID=" + individualPurchaseJson.productID + "'>Product ID: " + individualPurchaseJson.productID + "</a>" ;
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<p> Quantity:"+ individualPurchaseJson.quantity + "</p>";
                                searchHtml += "</td>";

                                searchHtml += "<td>";
                                searchHtml += "<button type='button' onclick='dispatchItem("+individualPurchaseJson.purchaseID+")' class='removeItemButton'>Mark as Dispatched</button>";
                                searchHtml += "</td>";
                                searchHtml += "</tr>";
                            }

                        }
                 
                target.innerHTML = searchHtml;


        };

	failure = function ()
	{
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
        var phpFile = "./server-side/getPurchases.php?" ;
        getPurchases.open("GET", phpFile, true);
	getPurchases.addEventListener("load", success);
	getPurchases.addEventListener("error", failure);
	getPurchases.send();


};


window.addEventListener("load", pageLoaded, false);
