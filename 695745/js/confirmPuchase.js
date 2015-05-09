var productID;

var validate = function ()
{


  if (customerName == "" || customerAddress == "")
  {
    alert("All fields must be completed");
    return false;
  }
  else
  {
    return true;
  }
};

var success = function ()
{
  alert("Purchase Sucessful - Product ID: " + productID);
  console.log("success aparently");

  window.location.href= "./basket.php";
};

var failure = function ()
{
  console.log("failure aparaently");
};

var confirmPurchase = function ()
{
    customerName = document.getElementById("customerName").value;
    customerAddress =document.getElementById("customerAddress").value;

    console.log("button clicked");

    if (validate() == true)
    {

      var basket = localStorage.getItem("basket");
      // if a basket was retrieved decode it,
      // if not create an empty one
      basket = basket ? JSON.parse(basket) :{};

      var phpVariables = "?customerName="+ customerName;
      phpVariables += "&customerAddress="+ customerAddress;

      for (var product in basket)
      {

         var productActualJson = basket[product];
         productID = productActualJson.productID;
         phpNewVariables = phpVariables + "&productID=" + productActualJson.productID;
         phpNewVariables += "&quantity=" + productActualJson.quantity;
         var phpFile = "./server-side/confirmPurchase.php";
         confirmItem = new XMLHttpRequest();
         // final parameter needs to be false to prevent race condition:
         confirmItem.open("Put", phpFile + phpNewVariables, false);
         confirmItem.addEventListener("load", success);
         confirmItem.addEventListener("error", failure);
         confirmItem.send();

      }
        localStorage.clear();

        return true;
    }
    else
    {
        return false;
    }
};

var customerName ;
var customerAddress ;

var confirmPurchaseButton = document.getElementById("confirmPurchase");
confirmPurchaseButton.addEventListener('click', confirmPurchase, false);
