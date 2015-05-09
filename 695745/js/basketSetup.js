"strict mode";

var fireBasketEvent = function(detail, quantity)
{
    detail.quantity = quantity;
    document.dispatchEvent(
        new CustomEvent(
            'addToBasket',
            {
                detail: detail
            }
        )
    );
};

var clicked = function(e)
{
    fireBasketEvent(JSON.parse(e.currentTarget.dataset.detail),1);
    alert("Item has been added to the basket");
};


var addToBasketButton = document.getElementById("addToBasketButton");
addToBasketButton.addEventListener("click", clicked);
