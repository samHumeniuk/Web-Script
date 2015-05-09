
//function found at http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() 
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var removeParticularItem = function()
{
   removeItem(productID);
};

var editItem = function()
{
    
  var submittedBoolean = submitNewItem();
  if (submittedBoolean == true)
  {
        removeParticularItem();
  }
};

var productID = getUrlVars()["productID"];

var newItemName ;
var newItemDiscription ;
var newItemPricePounds ;
var newItemPricePennies ;
var newItemStockNumber ;
var newItemImage ;
var newItemFeaturedItem ;

console.log(newItemName);
console.log(newItemFeaturedItem);
console.log(productID);

var editItemButton = document.getElementById("editItemButton");
editItemButton.addEventListener("click", editItem, false);
