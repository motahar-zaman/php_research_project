if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var localStorageForCartArray = [];

var counter = localStorage.getItem('counter');

console.log(counter);


function ready() {
    var addToCartButton = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addToCartButton.length; i++) {
        var button = addToCartButton[i];
        button.addEventListener('click', addToCartClick);
    }

    var removeCartButton = document.getElementsByClassName('remove-cart-button');
    for (var i = 0; i < removeCartButton.length; i++) {
        var removeButton = removeCartButton[i];
        removeButton.addEventListener('click', removeCartRow);
    }

    var cartItem = document.getElementsByClassName('num-cart-product')[0];
    var getLocalCounter = localStorage.getItem('counter');
    if (counter == 0) {
        cartItem.innerText = '';
    } else {
        cartItem.innerText = getLocalCounter;
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


    var cartItem = document.getElementsByClassName('num-cart-product')[0];

    innerCounter = ++counter;

    localStorage.setItem("counter", innerCounter);

    var getLocalCounter = localStorage.getItem('counter');

    cartItem.innerText = getLocalCounter;

    counter = getLocalCounter;
    console.log(counter)

    console.log(getLocalCounter)


    var readLocalStorage = localStorage.getItem('cartObj');



    var parseReadLocalStorage = readLocalStorage != null ? JSON.parse(readLocalStorage) : [];


    var cartObj = {
        "imgSrc": imgSrc,
        "title": title,
        "price": price,
    };

    parseReadLocalStorage.push(cartObj);

    localStorage.setItem('cartObj', JSON.stringify(parseReadLocalStorage));

    // console.log(cartProductNumber);
}