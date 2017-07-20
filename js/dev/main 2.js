var arrayCart = [];
var btnsToCard = document.querySelectorAll('.catalog_cart__btn .btn');
var list = document.querySelector('.catalog_basket__list');
var finalPrice = document.querySelector('.catalog_basket__summ_text');

for(var i = 0; i < btnsToCard.length; i++) {
  btnsToCard[i].addEventListener('click', addToCard);
}

function addToCard(e) {
  e.preventDefault();
  var item = this.closest('.catalog_cart');
  var title = item.querySelector('.catalog_cart__title').textContent;
  var price = Number(item.dataset.price);
  var itemObj = {
    title: title,
    price: price,
  };
  arrayCart.push(itemObj);
  calculatePrice();
  renderCart();
}

function removeFromCard() {
  console.log('!!!');
  // var line
  // var title
  // var price

  // for array
  // if
  // удалить

  calculatePrice();
  renderCart();
}

function cleanCart() {
  list.innerHTML = "";
}

function renderCart() {
  cleanCart();
  arrayCart.forEach(function(item, i) {
    var newItem = document.createElement('div');
    newItem.className = "catalog_basket__line";
    newItem.innerHTML = '<div class="catalog_basket__product">' +
      item.title + '</div>' +
      '<div class="catalog_basket__price price">' +
      item.price + '</div>' +
      '<div class="catalog_basket__close">' +
      '<img src="img/svg/i-close.png" alt="close">' +
      '</div>';

      newItem.querySelector('.catalog_basket__close img').addEventListener('click', removeFromCard);

      list.appendChild(newItem);
  });
}

function calculatePrice() {
  var price = 0;
  arrayCart.forEach(function(item, i) {
    price += item.price;
  });
  finalPrice.textContent = price;
}


// catalog_cart--disabled не должны добавляться в корзину
// использовать делегирование для удаления элементов
// удаление из корзины

// 6, 7, 9

