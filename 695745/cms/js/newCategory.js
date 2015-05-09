var validate = function ()
{
    var removeCategoryOptions = document.getElementById("newItemCategories").options;
    
    for (option = 0; option < removeCategoryOptions.length; option++) 
    { 
        if (removeCategoryOptions[option].value === newCategoryName)
        {
           alert("The Category " + newCategoryName + " already exists");
            return false; 
        }
    }
    console.log(removeCategoryOptions);
    
    if (newCategoryName == "")
    {
        alert("All fields must be completed");
        return false;
    }
    else
    {
        return true;
    }
};



var submitNewCategory = function ()
{
    
    var success = function ()
    {
      alert("Category added");
      console.log("success aparently");
      window.location.href= "./editCategories.php";
    };

    var failure = function ()
    {
      console.log("failure aparaently");
    };
    
    newCategoryName = document.getElementById("newCategoryName").value;


    if (validate() == true)
    {

        var phpVariables = "?categoryName="+ newCategoryName;

        var phpFile = "./server-side/addCategory.php"; 
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

var newCategoryName;

var newCategoryButton = document.getElementById("newCategoryButton");
newCategoryButton.addEventListener('click', submitNewCategory, false);
