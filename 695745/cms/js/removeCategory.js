
var success = function ()
{
  alert("Category removed");
  console.log("success aparently");
  window.location.href= "./editCategories.php";
};

var failure = function ()
{
  console.log("failure aparaently");
};

var removeCategory = function ()
{
    
    removeCategoryName = document.getElementById("newItemCategories").value;
    console.log(removeCategoryName);

        var phpVariables = "?categoryName="+ removeCategoryName;

        var phpFile = "./server-side/removeCategory.php"; 
        addItem = new XMLHttpRequest();
        addItem.open("Put", phpFile + phpVariables, true);
        addItem.addEventListener("load", success);
        addItem.addEventListener("error", failure);
        addItem.send();
        return true;

};

var removeCategoryName;

var removeCategoryButton = document.getElementById("removeCategoryButton");
removeCategoryButton.addEventListener('click', removeCategory, false);
