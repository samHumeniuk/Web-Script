var validate = function ()
{

  if(newItemPricePennies > 99)
  {
    alert("The price can not have a more 99 pennies.");
    console.log("The price can not have a more 99 pennies.");
    return false;
  }
  if (isNaN(parseInt(newItemPricePounds)) || isNaN(parseInt(newItemPricePennies)) || isNaN(parseInt(newItemStockNumber)) )
  {
    alert("The item's price and stock must contain digits only");
    return false;
  }
  if (newItemName == "" || newItemDiscription == "" || newItemPricePounds == "" || newItemPricePennies=="" || newItemStockNumber == "")
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
  alert("Item added");
  console.log("success aparently");
  window.location.href= "./";
};

var failure = function ()
{
  console.log("failure aparaently");
};

var submitNewItem = function ()
{
    newItemName = document.getElementById("newItemName").value;
    newItemDiscription =document.getElementById("newItemDiscription").value;
    newItemPricePounds =document.getElementById("newItemPricePounds").value;
    newItemPricePennies =document.getElementById("newItemPricePennies").value;
    newItemStockNumber =document.getElementById("newItemStockNumber").value;
    newItemImage =document.getElementById("newItemImage").value;
    newItemFeatured =document.getElementById("newFeaturedItem");
    newItemCategory = document.getElementById("newItemCategories").value;
    var featured = newItemFeatured.checked;
    
//    newItemImagePath = document.getElementById("image").value;
//    console.log(newItemImagePath);
 
    console.log("button clicked");

    if (validate() == true)
    {


        console.log(newItemImage);


        var phpVariables = "?productName="+ newItemName;
        phpVariables += "&productDiscription="+ newItemDiscription;
        phpVariables += "&productPricePennies="+ newItemPricePennies;
        phpVariables += "&productPricePounds="+ newItemPricePounds;
        phpVariables += "&productStock="+ newItemStockNumber;
        phpVariables += "&productFeatured=" + featured;
        phpVariables += "&productImage="+ newItemImage;
        phpVariables += "&productCategory=" + newItemCategory;
        var phpFile = "./server-side/addItem.php"; //+ "?productID=" +productID;
        addItem = new XMLHttpRequest();
        addItem.open("Put", phpFile + phpVariables, true);
        addItem.addEventListener("load", success);
        addItem.addEventListener("error", failure);
        addItem.send();
        return true;
    }
    else
    {
        return false;
    }
};

var newItemName ;
var newItemDiscription ;
var newItemPricePounds ;
var newItemPricePennies ;
var newItemStockNumber ;
var newItemImage ;
var newItemFeaturedItem ;

console.log(newItemName);
console.log(newItemFeaturedItem);

var newItemButton = document.getElementById("newItemButton");
newItemButton.addEventListener('click', submitNewItem, false);
