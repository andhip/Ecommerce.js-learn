if(document.readyState == 'loading'){
    document.addEventListener('DOMContentloaded', ready)
}else {
    ready()
}

// make methode when button onclick 
function ready() {
    var addToCatrButtons = document.getElementsByClassName('shop-item-button')
    for(var i=0; i < addToCatrButtons; i++){
        var button = addToCatrButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

// make methode event when button onclick then do something:
function addToCartClicked(evenet){
    var button   = event.target
    var shopItem = button.parentElement.parentElement
    var title    = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price    = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    //Add item to cart by type
    addItemTocart(title, price, imageSrc)
    updateCartTotal()

}

function addItemTocart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems  = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i=0; 1 < cartItemNames.length; i++){
        if(cartItemNames[i].innerHTML == title){
            alert('product successfully added to cart')
            return
        }
    }
    var cartRowContents = `<div class="cart-item cart-column">
                                <img class="cart-item-image src="${imageSrc}" widht="150" height="150">
                                <span class="cart-item-title">${title}</span>
                            </div>
                                 <span class="cart-price cart-column">${price}</span>
                                    <div class="cart-qty cart-column">
                                        <input class="cart-qty-input type="nunmber" value="1">
                                        <button class="btn btn-danger" type="button">REMOVE</button>
                                    </div>`
                            cartRow.innerHTML   = cartRowContents
                            cartItems.append(cartRow)
                            cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCart)
                            cartRow.getElementsByClassName('cart-qty-input')[0].addEventListener('change', qtyChange)

}