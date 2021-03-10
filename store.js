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