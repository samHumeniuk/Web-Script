var displayBasket = function(e)
{
    var basket = localStorage.getItem("basket");

    // if a basket was retrieved decode it,
    // if not create an empty one
    basket = basket ? JSON.parse(basket) :{};

    // store it for later
    localStorage.setItem("basket", JSON.stringify(basket));
    var basketHtml = "";

//    define start of table
    basketHtml += "<table border='1'>";

    var numberOfProducts = Object.keys(basket).length;
    if (numberOfProducts == 0)
    {
      basketHtml += "<tr> <td> <h4>No Items in Basket </h4> </td> </tr>";
    }
    else
    {
      for (var product in basket)
      {
         var j  = product +1;

         var productActualJson = basket[product];

         basketHtml += "<tr>";
         basketHtml += "<td><img style=width:100px;height:100px; src = " + "." + productActualJson.productImageURL + "></a></td>";
         basketHtml += "<td> <a href='item.php?productID=" + productActualJson.productID + "'><h4>"+ productActualJson.productName + "</h4> </td>";
         basketHtml +="<td><p> &pound"+ productActualJson.productPrice + "</p></td>";
         var quantityField = '<input class="quantity" type="number" id="quantity'+productActualJson.productID +'" value="' + productActualJson.quantity + '" min="0" max="99">';
         basketHtml += "<td>" + quantityField + "</td>";
         basketHtml += "</tr>";
      }
    }

    basketHtml += "</table>";

    var basketCurrent = document.getElementById("basket");
    basketCurrent.innerHTML = basketHtml;

    var purchaseButton = document.getElementById("purchase");
    purchaseButton.setAttribute("style", "visibility: visible");

    console.log(basket);

    for (var item in basket)
    {
        var productJson = basket[item];
        quantity = document.getElementById("quantity" + productJson.productID );
        quantity.addEventListener('change',changeItemQuantity );
    }

};

var changeItemQuantity = function(e)
{
    var basket = localStorage.getItem("basket");

    // if a basket was retrieved decde it,
    // if not create an empty one
    basket = basket ? JSON.parse(basket) :{};

    var productID = e.target.id;
    //remove word "quanity:"
    productID = productID.substring(8, productID.length);
    var newQuantity = e.target.value;
    if ( newQuantity == 0)
    {
      delete basket[productID];
      alert("Item has been deleted.");
      // store it for later
      localStorage.setItem("basket", JSON.stringify(basket));
      displayBasket();
    }
    else
    {
    
      var currentProduct =  basket[productID];
      console.log(currentProduct);
      currentProduct.quantity = parseInt(newQuantity);
      // store it for later
      localStorage.setItem("basket", JSON.stringify(basket));
    }


};


var purchase = function()
{
    window.location.href = "confirmPurchase.php";
};

window.addEventListener('load', displayBasket);

var purchaseButton = document.getElementById("purchase");
purchaseButton.addEventListener('click', purchase, false);

