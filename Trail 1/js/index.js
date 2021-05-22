if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addToCartButton = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addToCartButton.length; i++) {
        var button = addToCartButton[i];
        button.addEventListener('click', addToCartClick);
    }
}

function addToCartClick(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('p-name')[0].innerText;
    var price = shopItem.getElementsByClassName('p-price')[0].innerText;
    var imgSrc = shopItem.getElementsByClassName('p-image')[0].src;
    addItemToCart(title, price, imgSrc);

}

function addItemToCart(title, price, imgSrc) {
    var cartRow = document.createElement('div');
    var cartHtml = `
        <div class="cart-row" style="display:flex;background:rgba(236,236,236,1)">
            <div class="cart-image">
                <img src="${imgSrc}" alt="img" style="width:50px">
            </div>
            <div class="product-title" style="padding:20px 10px">${title}</div>
            <div class="product-price" style="padding:20px 10px">${price}</div>
        </div>`

    cartRow.innerHTML = cartHtml;
    var cartItem = document.getElementsByClassName('cart-wrapper')[0];
    cartItem.append(cartRow)
    console.log(cartItem);
}