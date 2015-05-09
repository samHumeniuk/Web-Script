var quartile = 1;

var increaseQuartile = function ()
{
    if (quartile !==1)
    {
        quartile --;
    }
    pageLoaded();
};

var decreaseQuartile = function ()
{
        quartile ++;
        pageLoaded();
};

var pageLoaded = function () {
    
        var monthsAgoStart = quartile * 3;
        var monthsAgoNow = (quartile-1)  * 3;
        salesTitle.innerHTML = "Sales: (" + monthsAgoStart + " months - " + monthsAgoNow + " months ago)";

	// declare the two variables that will be used
	var getFeaturedItems, target, success, failure;
        console.log("quartile: " + quartile);
	// find the element that should be updated
	target = document.getElementById("sales");

	// create a request object
	getFeaturedItems = new XMLHttpRequest();

            success = function ()
            {

                console.log("success");
                var purchaseJson = getFeaturedItems.responseText;
                
                console.log(purchaseJson);

                //removes last character: ";"
                console.log("length before" + purchaseJson.length);
                purchaseJson = purchaseJson.substring(0, purchaseJson.length - 3);
                console.log("length after" + purchaseJson.length);
                console.log(purchaseJson);
                var purchasesActualJson = JSON.parse(purchaseJson);
                
                var searchHtml = "";

                console.log(purchasesActualJson.length);
                var totalCost = 0;
                        if(purchasesActualJson.length == 0)
                        {
                                searchHtml = "<tr> <td> <h4>No Sales </h4> </td> </tr>";
                        }
                        else
                        {
                            var totalCost = 0;
                            searchHtml += "<tr> <td><strong>Purchase ID:</strong></td> <td><strong>Product ID:</strong></td> <td><strong>Individual Price:</strong></td> <td><strong>Quantity:</strong></td> <td><strong>Total from Sale:</strong></td> <td><strong>Date of Purchase:</strong></td> </tr>";        
                            for (product = 0; product < purchasesActualJson.length; product++)
                            {
                                var j  = product +1;
                                var currentTarget = document.getElementById("featured" + j );
                                var individualPurchaseJson = purchasesActualJson[product];
                                var productJson = JSON.stringify(individualPurchaseJson);
                                searchHtml += "<tr>";
                                searchHtml += "<td>";
                                searchHtml += "<p>" + individualPurchaseJson.purchaseID + "<p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<a href='../item.php?productID=" + individualPurchaseJson.productID + "'>" + individualPurchaseJson.productID + "</a>" ;
                                searchHtml += "</td>";
                                
                                var individualCost = individualPurchaseJson.productPrice;
                                searchHtml += "<td>";
                                searchHtml += "<p>&pound;"+ individualCost + "</p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<p>"+ individualPurchaseJson.quantity + "</p>";
                                searchHtml += "</td>";
    
                                var cost = parseFloat(individualPurchaseJson.productPrice);
                                var quantity = parseFloat(individualPurchaseJson.quantity);
                                var saleCost = cost * quantity;
                                
                                searchHtml += "<td>";
                                searchHtml += "<p> &pound;"+ saleCost + "</p>";
                                searchHtml += "</td>";
                                
                                searchHtml += "<td>";
                                searchHtml += "<p>"+ individualPurchaseJson.dateOfPurchase + "</p>";
                                searchHtml += "</td>";

                                searchHtml += "</tr>";

                                totalCost += saleCost;
                            }

                        }
                        var totalCostTarget = document.getElementById("totalSales");
                        totalCostTarget.innerHTML = "The total income from this period is: &pound;" + totalCost;

                totalCostTarget.innerHTML = "The total income from this period is: &pound;" + totalCost;
                target.innerHTML = searchHtml;


        };

	failure = function ()
	{
            target.innerHTML = "<p>The featured items can not be loaded from the server.</p>";
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
         var phpFile = "./server-side/getSales.php?quartile=" + quartile  ;
        getFeaturedItems.open("GET", phpFile, true);
	getFeaturedItems.addEventListener("load", success);
	getFeaturedItems.addEventListener("error", failure);
	getFeaturedItems.send();

        
};

//function found at http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

window.addEventListener("load", pageLoaded, false);

var previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", decreaseQuartile);
var nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click" ,increaseQuartile);

var salesTitle = document.getElementById("salesTitle");
