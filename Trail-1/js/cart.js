if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var readLocalStorageObj = JSON.parse(localStorage.getItem('cartObj'));
var readLocalStorageCounter = localStorage.getItem('counter');


function ready() {
    // console.log(readLocalStorageObj);
    showCart();
}


function showCart() {
    if (readLocalStorageObj != null) {
        readLocalStorageObj.forEach(function(items) {
            var separateItem = items;
            var cartRow = document.createElement('div');
            var cartHtml = `
                    <div class="cart-row" style="display:flex;background:rgba(236,236,236,1)">
                        <div class="cart-image">
                            <img src="${separateItem.imgSrc}" alt="img" style="width:50px">
                        </div>
                        <div class="product-title" style="padding:20px 10px">${separateItem.title}</div>
                        <div class="product-price" style="padding:20px 10px">${separateItem.price}</div>
                        <div class="remove-cart-button" style="padding:20px 10px"><i class="fas fa-trash"></i></div>
                    </div>`

            cartRow.innerHTML = cartHtml;

            var cartItem = document.getElementsByClassName('cart-wrapper')[0];
            cartItem.append(cartRow);

            cartRow.getElementsByClassName('remove-cart-button')[0].addEventListener('click', removeCartRow)

        });
    } else {
        return true;
    }
}

function removeCartRow(event) {
    var buttonClicked = event.target;
    var mainDivParent = buttonClicked.parentElement.parentElement.remove();
    // var cartItemNumber = document.getElementsByClassName('num-cart-product')[0].innerText;
    var cartItem = document.getElementsByClassName('num-cart-product')[0];
    var removeCounter = --readLocalStorageCounter;
    localStorage.setItem('counter', removeCounter)
    remove();

    if (removeCounter == 0) {
        cartItem.innerText = '';
    } else {
        cartItem.innerText = removeCounter;
    }

    // console.log(removeCounter);

    // var cartProductNumber = document.getElementsByClassName('num-cart-product')[0];
    // cartProductNumber.innerText = counter--;
}

function remove() {
    var removeItem = JSON.parse(localStorage.removeItem('cartObj'));
    console.log(removeItem);
}