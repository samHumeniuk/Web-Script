
search = function ()
{
    var searchBar = document.getElementById("searchBar");
    var searchQuery = searchBar.value;
    window.location.href = "search.php?query=" + searchQuery;
};

success = function()
{
  var itemJson = getSearchSuggestions.responseText;
  itemJson = itemJson.substring(0, itemJson.length - 3);
  var itemsActualJson = JSON.parse(itemJson);

  var suggestions = document.getElementById("suggestions");

  if(itemsActualJson.length == 0)
  {
    suggestions.innerHTML = '<option value="'+ "no suggestions" +'">';
  }
  else
  {
    var onlyItemJson = itemsActualJson[0];
    suggestions.innerHTML = '<option value="'+ onlyItemJson.productName +'">';
    suggestions.visibility = 'visible';
  }


};

failure = function()
{
  console.log("ah");
};

getSuggestions = function()
{
   console.log("searching");
  var searchBar = document.getElementById("searchBar");
  var searchQuery = searchBar.value;
  var phpFile = "./server-side/getSearchResults.php?" + "query=" +searchQuery;
  
  getSearchSuggestions.open("GET", phpFile, true);
  getSearchSuggestions.addEventListener("load", success);
  getSearchSuggestions.addEventListener("error", failure);
  getSearchSuggestions.send();
};



checkForEnter = function (e)
{
    // comment out for no suggestions
    getSuggestions();
    //  console.log(e.keyCode);
    //If enter key is pressed
    if (e.keyCode == 13)
    {
       search();
    }
};

var getSearchSuggestions = new XMLHttpRequest();

var searchIcon = document.getElementById("searchButton");
searchIcon.addEventListener("click", search, false);
var searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", checkForEnter, false);
