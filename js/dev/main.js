// var catalogInter = document.querySelector('.catalog_basket__summ');
// var buyBtn = catalogInter.querySelector('.btn');
// var orderPopup = document.querySelector('.modal_order');
// var closePopupBtn = orderPopup.querySelector('.modal__close');
// var bascetLines = document.querySelectorAll('.catalog_basket__line');
// var basketlist = document.querySelector('.catalog_basket__list');
// var catalogItems = document.querySelectorAll('.catalog__item');
var loadedData = null;
var twoForLineBtn1 = document.querySelector('.catalog_view');
twoForLineBtn = twoForLineBtn1.children["0"];
var threeForLineBtn = document.querySelectorAll('.catalog_view');
threeForLineBtn = twoForLineBtn1.children["1"];
// var catalogItems = document.querySelectorAll('.catalog__item');
// var arrayCart = [];
// var finalPrice = document.querySelector('.catalog_basket__summ_text');
// var filterContent = document.querySelector('.filter__content');
var LOAD_TIMEOUT = 10000;
var URL = 'http://127.0.0.1:8080/generated.json';
var container = document.querySelector('.catalog__list');
var catalogItems = null;
//var typeFiltration = [];
//
// // function createBasketItem() {
// //   var newBasketItemTitel row.parentNode.parentNode.childNodes[3].innerText;
// //   var newBasketItem = document.createElement('div');
// //   newBasketItem.className = 'catalog_basket__line';
// //   var productName = document.createElement('div');
// //   productName.className = 'catalog_basket__product';
// //   productName.innerText = row.parentNode.parentNode.childNodes[3].innerText;
// // }
// filterContent.addEventListener('click', function(event) {
//   typeFiltration.push(event.target.innerText);
//   loadData(container, URL, renderData);
// });
//
twoForLineBtn.addEventListener('click', function(event) {
  getCurrentClassState(this);
});

threeForLineBtn.addEventListener('click', function(event) {
  getCurrentClassState(this);
});

function getCurrentClassState(btn) {
  if (btn.classList.contains('catalog_view__item--active')) {
    twoForLineBtn.classList.toggle('catalog_view__item--active');
    threeForLineBtn.classList.toggle('catalog_view__item--active');
    container.classList.toggle('catalog__list--two');
    container.classList.toggle('catalog__list--three');
  }
}

//
// var cardsItems = {
//   card1: {
//     cardId: '001',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'beauty',
//       dataPrice: '25',
//       dataDateTo: '11.07.16',
//       dataDateFrom: '15.08.16',
//       dataMetro: 'pushkinskaya',
//       img: 'img/photo-3.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '50%',
//       title: 'super photosession',
//       priceOld: '50',
//       priceNew: '25'
//     }
//   },
//   card2: {
//     cardId: '002',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'education',
//       dataPrice: '32',
//       dataDateTo: '19.06.16',
//       dataDateFrom: '30.06.16',
//       dataMetro: 'admiralteiskaya',
//       img: 'img/photo-9.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '70%',
//       title: 'it education',
//       priceOld: '106',
//       priceNew: '32'
//     }
//   },
//   card3: {
//     cardId: '003',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'education',
//       dataPrice: '38',
//       dataDateTo: '10.05.16',
//       dataDateFrom: '20.06.16',
//       dataMetro: 'admiralteiskaya',
//       img: 'img/photo-7.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '15%',
//       title: "driver's license",
//       priceOld: '45',
//       priceNew: '38'
//     }
//   },
//   card4: {
//     cardId: '004',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'beauty',
//       dataPrice: '5',
//       dataDateTo: '30.05.16',
//       dataDateFrom: '12.06.16',
//       dataMetro: 'pushkinskaya',
//       img: 'img/photo-6.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '80%',
//       title: 'spa',
//       priceOld: '26',
//       priceNew: '5'
//     }
//   },
//   card5: {
//     cardId: '005',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'beauty',
//       dataPrice: '8',
//       dataDateTo: '15.05.16',
//       dataDateFrom: '30.05.16',
//       dataMetro: 'pushkinskaya',
//       img: 'img/photo-5.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '48%',
//       title: 'tattoo',
//       priceOld: '17',
//       priceNew: '8'
//     }
//   },
//   card6: {
//     cardId: '006',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'entertainment',
//       dataPrice: '26',
//       dataDateTo: '15.07.16',
//       dataDateFrom: '15.09.16',
//       dataMetro: 'primorskaya',
//       img: 'img/photo-4.jpg',
//       timer: {
//         enable: 'true',
//         day: '2',
//         hour: '15',
//         min: '45',
//         sec: '5'
//       },
//       discount: '63%',
//       title: 'hourse ride',
//       priceOld: '42',
//       priceNew: '26'
//     }
//   },
//   card7: {
//     cardId: '007',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'beauty',
//       dataPrice: '23',
//       dataDateTo: '1.09.16',
//       dataDateFrom: '20.09.16',
//       dataMetro: 'pushkinskaya',
//       img: 'img/photo-1.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '70%',
//       title: 'relaxing in spa',
//       priceOld: '33',
//       priceNew: '23'
//     }
//   },
//   card8: {
//     cardId: '008',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'food',
//       dataPrice: '2',
//       dataDateTo: '3.09.16',
//       dataDateFrom: '4.09.16',
//       dataMetro: 'admiralteiskaya',
//       img: 'img/food-2.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '80%',
//       title: 'wafer',
//       priceOld: '10',
//       priceNew: '2'
//     }
//   },
//   card9: {
//     cardId: '009',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'food',
//       dataPrice: '8',
//       dataDateTo: '20.07.16',
//       dataDateFrom: '26.07.16',
//       dataMetro: 'primorskaya',
//       img: 'img/photo-1.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '49%',
//       title: 'box of sweet donnuts. wooowww',
//       priceOld: '15',
//       priceNew: '8'
//     }
//   },
//   card10: {
//     cardId: '010',
//     catalogCartDisabled: 'true',
//     cardInfo: {
//       dataType: 'travel',
//       dataPrice: '99',
//       dataDateTo: '14.07.16',
//       dataDateFrom: '14.08.16',
//       dataMetro: 'primorskaya',
//       img: 'img/travel.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '1%',
//       title: 'box of sweet donnuts. wooowww',
//       priceOld: '100',
//       priceNew: '99'
//     }
//   },
//   card11: {
//     cardId: '011',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'education',
//       dataPrice: '24',
//       dataDateTo: '1.07.16',
//       dataDateFrom: '1.08.16',
//       dataMetro: 'admiralteiskaya',
//       img: 'img/epixx.jpg',
//       timer: {
//         enable: 'false',
//         day: '0',
//         hour: '0',
//         min: '0',
//         sec: '0'
//       },
//       discount: '27%',
//       title: '27% discount on course of internet marketing',
//       priceOld: '33',
//       priceNew: '24'
//     }
//   },
//   card12: {
//     cardId: '011',
//     catalogCartDisabled: 'false',
//     cardInfo: {
//       dataType: 'entertainment',
//       dataPrice: '500',
//       dataDateTo: '10.05.16',
//       dataDateFrom: '1.08.16',
//       dataMetro: 'admiralteiskaya',
//       img: 'img/cat.jpg',
//       timer: {
//         enable: 'true',
//         day: '1',
//         hour: '3',
//         min: '40',
//         sec: '30'
//       },
//       discount: '50%',
//       title: 'one epic cat. best price',
//       priceOld: '1000',
//       priceNew: '500'
//     }
//   }
// }
//
// addCatalogListItem(cardsItems);
//
// function addCatalogListItem(cardsItems) {
//
//   var catalog = document.querySelector('.catalog__list');
//
//   for (var item in cardsItems) {
//
//     var newCatalogItem = document.querySelector('.catalog__item').cloneNode(true);
//
//     newCatalogItem.attributes[2].textContent = cardsItems[item].cardInfo.dataMetro;
//     newCatalogItem.attributes[3].textContent = cardsItems[item].cardInfo.priceOld;
//     newCatalogItem.attributes[4].textContent = cardsItems[item].cardInfo.dataDateFrom;
//     newCatalogItem.attributes[5].textContent = cardsItems[item].cardInfo.dataDateTo;
//     newCatalogItem.attributes[6].textContent = cardsItems[item].cardInfo.dataMetro;
//     newCatalogItem.childNodes[3].childNodes[1].textContent = cardsItems[item].cardInfo.discount;
//     newCatalogItem.children[0].firstChild.src = cardsItems[item].cardInfo.img;
//     newCatalogItem.childNodes[3].childNodes[5].children[0] = cardsItems[item].priceNew;
//
//     if (cardsItems[item].cardInfo.timer.enable == 'false') {
//       catalogCartTimer = newCatalogItem.querySelector('.catalog_cart__timer');
//       catalogCartImage = newCatalogItem.querySelector('.catalog_cart__image');
//       catalogCartImage.removeChild(catalogCartTimer);
//     }
//
//     if (cardsItems[item].catalogCartDisabled == 'true') {
//       catalogCartImage.classList.add('catalog_cart--disabled');
//     }
//
//     var addToCart = newCatalogItem.querySelector('.catalog_cart__btn');
//     addToCartBtn = addToCart.querySelector('.btn');
//     addToCartBtn.addEventListener('click', addBasketItem);
//
//     catalog.appendChild(newCatalogItem);
//   };
//
//   // var addToCart = newCatalogItem.querySelector('.catalog_cart__btn');
//   // addToCartBtn = addToCart.querySelector('.btn');
//   // addToCartBtn.addEventListener('click', addBasketItem);
//   //
//   // catalog.appendChild(newCatalogItem);
//
//   // var catalog = document.querySelector('.catalog__list');
//   // var catalogItem = document.createElement('a');
//   // catalogItem.dataType = "1";
//   // catalogItem.dataPrice = "2";
//   // catalogItem.dataPrice = "3";
//   // catalogItem.dataDateTo = "4";
//   // catalogItem.dataDateFrom = "5";
//   // catalogItem.dataMetro = "6";
//   // catalogItem.className = 'catalog_cart catalog__item catalog_cart--special';
//   //
//   // var cartImage = document.createElement('div');
//   // var image = document.createElement('img');
//   // image.src = "7";
//   //
//   // var cartContent = document.createElement('div');
//   // cartContent.className = "catalog_cart__content";
//   //
//   // var cartDiscount = document.createElement('div');
//   // cartDiscount.className = "catalog_cart__discount";
//   // cartDiscount.innerText = "80%";
//   //
//   // var cartTitle = document.createElement('p');
//   // cartTitle.innerText = "one epic cat. best price%";
//   //
//   // var cartFooter = document.createElement('div');
//   // catalog_cart__footer
//
// }
//
// function renderCart() {
//   cleanCart();
//   arrayCart.forEach(function(item, i) {
//     var newBasketItem = document.createElement('div');
//     newBasketItem.classList.add('catalog_basket__line');
//     var newBasketProduct = document.createElement('div');
//     newBasketProduct.classList.add('catalog_basket__product');
//     newBasketProduct.textContent = item.title;
//     newBasketItem.append(newBasketProduct);
//     var newBasketPrice = document.createElement('div');
//     newBasketPrice.textContent = item.price;
//     newBasketPrice.classList.add('catalog_basket__price', 'price');
//     newBasketItem.append(newBasketPrice);
//     var newBasketCloseBtn = document.createElement('div');
//     newBasketCloseBtn.classList.add('catalog_basket__close');
//     var newBasketCloseBtnImg = document.createElement('img');
//     newBasketCloseBtnImg.setAttribute('src', 'img/svg/i-close.png');
//     newBasketCloseBtnImg.setAttribute('alt', 'close');
//     newBasketCloseBtn.append(newBasketCloseBtnImg);
//     newBasketCloseBtnImg.addEventListener('click', removeFromCard);
//     newBasketItem.append(newBasketCloseBtn);
//     basketlist.append(newBasketItem);
//   });
//
// }
//
// function removeFromCard() {
//
// }
//
// function cleanCart() {
//   basketlist.innerHTML = '';
// }
//
// function calculatePrice() {
//   var price = 0;
//   arrayCart.forEach(function(item) {
//     price += item.price;
//   });
//   finalPrice.textContent = price;
// }
//
function addToCartF(e) {
  e.preventDefault();
  var newCartItem = this.closest('.catalog_cart');
  var title = newCartItem.querySelector('.catalog_cart__title').textContent;
  var price = Number(newCartItem.dataset.price);
  var itemObj = {
    title: title,
    price: price,
  };
  arrayCart.push(itemObj);
  calculatePrice();
  renderCart();
}
//
// function addBasketItem() {
//
//
//   var row = this.parentNode;
//
//   var newRow = document.createElement('div');
//   newRow.className = 'catalog_basket__line';
//
//   var productName = document.createElement('div');
//   productName.className = 'catalog_basket__product';
//   productName.innerText = row.parentNode.parentNode.childNodes[3].innerText;
//
//   var productPrice = document.createElement('div');
//   productPrice.className = 'catalog_basket__price price';
//   productPrice.innerText = row.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].innerText;
//
//   var newRowCloseBtn = document.createElement('div');
//   newRowCloseBtn.className = 'catalog_basket__close';
//
//   var img = document.createElement('img');
//   img.src = 'img/svg/i-close.png';
//   img.alt = 'close';
//
//   newRowCloseBtn.appendChild(img);
//
//   newRow.appendChild(productName);
//   newRow.appendChild(productPrice);
//   newRow.appendChild(newRowCloseBtn);
//
//   basketlist.appendChild(newRow);
//   carrentBasketSumm(newRow, '+');
//
//   newRowCloseBtn.addEventListener('click', removeBasketItem);
// }
//
// function removeBasketItem() {
//   var row = this.parentNode;
//   basketlist.removeChild(row);
//   carrentBasketSumm(row, '-');
// }
//
// function carrentBasketSumm(row, operand) {
//   var price = row.children[1].textContent;
//   var sum = document.querySelector('.catalog_basket__summ_text');
//   if (operand === '-') {
//     var currenSumm = parseInt(sum.innerText) - parseInt(price);
//   } else {
//     var currenSumm = parseInt(sum.innerText) + parseInt(price);
//   }
//   sum.innerText = currenSumm;
// }
//
// catalogItems.forEach(function(item, i) {
//   var addToCart = item.querySelector('.catalog_cart__btn');
//   addToCartBtn = addToCart.querySelector('.btn');
//   addToCartBtn.addEventListener('click', addBasketItem);
// })
//
// bascetLines.forEach(function(item, i) {
//   var closeBtn = item.querySelector('.catalog_basket__close');
//   closeBtn.addEventListener('click', removeBasketItem);
// })
//
// buyBtn.addEventListener('click', function() {
//   orderPopup.style.display = 'block';
// });
//
// closePopupBtn.addEventListener('click', function() {
//   orderPopup.style.display = 'none';
// });
//
// ///////////////////////////
//
// var btnsToCard = document.querySelectorAll('.catalog_cart__btn .btn')
//
// var cart = [];
//
// var item = {
//   title: 'cart',
//   price: 200
// }
//
// function addToCart(e) {
//   e.preventDefault();
//   var item = this.closest('.catalog_cart');
//   var title = item
// }
//
// function calc() {
//   var price = 0;
//   arrayCart.forEach(function(item, i) {
//     price += item.price;
//   });
//   final
// }
//
function renderData(data) {
  container.innerHTML = '';
  data.forEach(function(item) {
    var newItem = document.createElement('a');
    newItem.classList.add('catalog_cart', 'catalog__item');
    var newImgCover = document.createElement('div');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', item.image);
    newItem.setAttribute('data-type', item.type);
    newItem.setAttribute('data-price', item.priceNew);
    newItem.setAttribute('data-date-to', item.dateTo);
    newItem.setAttribute('data-date-from', item.dateFrom);
    newItem.setAttribute('data-metro', item.metro);
    newImgCover.append(newImg);
    var newTimer = document.createElement('div');
    // newTimer.classList.add('catalog_cart__timer', 'timer');
    // newImgCover.append(newTimer);
    newImgCover.classList.add('catalog_cart__image');
    newItem.append(newImgCover);
    if (item.special == true) {
      newItem.classList.add('catalog_cart--special');
      newImg.setAttribute('data-special', 'true');
      var newTimer = document.createElement('div');
      newTimer.classList.add('catalog_cart__timer', 'timer');
      newTimer.innerHTML = '<div class="timer__item">' +
        '<span>1</span>' +
        '<span>day</span>' +
        '</div>' +
        '<div class="timer__item">' +
        '<span>3</span>' +
        '<span>hour</span>' +
        '</div>' +
        '<div class="timer__item">' +
        '<span>40</span>' +
        '<span>min</span>' +
        '</div>' +
        '<div class="timer__item">' +
        '<span>13</span>' +
        '<span>sec</span>' +
        '</div>';
      newImgCover.append(newTimer);
    }

    var newItemContent = document.createElement('div');
    newItemContent.classList.add('catalog_cart__content')
    var newItemContentDiscount = document.createElement('div');
    newItemContentDiscount.classList.add('catalog_cart__discount');
    newItemContentDiscount.textContent = item.discount + '%';
    newItemContent.append(newItemContentDiscount);
    var newItemPar = document.createElement('p');
    newItemPar.classList.add('catalog_cart__title');
    newItemPar.textContent = item.title;
    newItemContent.append(newItemPar);
    var newItemFooter = document.createElement('div');
    newItemFooter.classList.add('catalog_cart__footer');
    var newFooterPar = document.createElement('p');
    newFooterPar.classList.add('catalog_cart__price');
    newItemFooter.append(newFooterPar);
    var newFooterPriceOld = document.createElement('span');
    newFooterPriceOld.classList.add('price', 'catalog_cart__price_old');
    newFooterPriceOld.textContent = item.priceOld;
    newFooterPar.append(newFooterPriceOld);
    var newFooterPriceNew = document.createElement('span');
    newFooterPriceNew.classList.add('price', 'catalog_cart__price_new');
    newFooterPriceNew.textContent = item.priceNew;
    var newToCartBtn = document.createElement('div');
    newToCartBtn.classList.add('catalog_cart__btn');
    var newParToCartBtn = document.createElement('p');
    newParToCartBtn.classList.add('btn');
    newParToCartBtn.textContent = 'to cart';
    newToCartBtn.append(newParToCartBtn);
    newToCartBtn.addEventListener('click', addToCartF);
    newItemFooter.append(newToCartBtn);
    newFooterPar.append(newFooterPriceNew);
    newItemContent.append(newItemFooter);
    newItem.append(newItemContent);
    container.append(newItem);
    if (item.special == true) {
      runSpecialTimer(newItem, item);
    }
  });
  catalogItems = document.querySelectorAll('.catalog__item');
}
//
function loadData(container, URL, callback) {
  var xhr = new XMLHttpRequest();
  var xhrLoadTimeout = setTimeout(function() {
    //toFailedLoadXHR(container);
  }, LOAD_TIMEOUT);

  xhr.onload = function(event) {
    xhr.onerror = null;
    loadedData = JSON.parse(event.target.response);
    callback(loadedData);
  };

  // xhr.onloadend = function() {
  //   clearTimeout(xhrLoadTimeout);
  //   container.classList.remove('loading');
  // };

  xhr.onerror = function() {
    xhr.onload = null;
    toFailedLoadXHR(container);
  };

  xhr.open('GET', URL);
  xhr.send();
};
//
loadData(container, URL, renderData);



function sortArrByPrice(a, b) {
  if ((a.priceNew) > (b.priceNew)) return -1;
  if ((a.priceNew) < (b.priceNew)) return 1;
}

function sortArrByDiscount(a, b) {
  if ((a.discount) > (b.discount)) return -1;
  if ((a.discount) < (b.discount)) return 1;
}

function sortByPrice(event) {
  event.preventDefault();
  //var itemsList = document.querySelectorAll('.catalog_cart');

  // var trueArray = Array.prototype.slice.call(loadedData, 0)
  var sortedArray = loadedData.sort(sortArrByPrice);
  renderData(sortedArray);
}

function sortByDiscount(event) {
  event.preventDefault();
  //var itemsList = document.querySelectorAll('.catalog_cart');
  // loadData(container, URL, )
  // var trueArray = Array.prototype.slice.call(itemsList, 0)
  // var sortedArray = trueArray.sort(sortArrByDiscount);
  var sortedArray = loadedData.sort(sortArrByDiscount);
  renderData(sortedArray);
}


var filterTrigerList = document.querySelectorAll('.filter__title');
filterTrigerList.forEach(function(item) {
  item.addEventListener('click', function(event) {
    item.parentNode.classList.toggle('filter--open');
  });
});

var filters = {
  metroStation: [],
  couponTypes: [],
  price: {
    from: null,
    to: null,
  },
  special: false,
  date: null,
}

// var filtersInputList = document.querySelectorAll('.checkbox__input');
// filtersInputList.forEach(function(item) {
//   item.addEventListener('click', function(event) {
//
//   });
// });

var sortBtns = document.querySelectorAll('.catalog_sort__item');
sortBtns.forEach(function(item) {
  if (item.textContent == 'price (incr)') {
    item.addEventListener('click', function(event) {
      sortByPrice(event);
    })
    //
  } else {
    item.addEventListener('click', function(event) {
      sortByDiscount(event);
    });
  }
  // else {
  //   item.addEventListener('click', function(event) {
  //     sortByDiscount(event);
  //   });
  // }
  //     // if (item.textContent == 'price (incr)') {
  //     //   sortByPrice()
  //     // } else {
  //     //   sortByDiscount()
  //     // }
  //   });

});

var checkboxesTypes = document.querySelectorAll('.js-filters-type input[type="checkbox"]');
var specialCheckbox = document.querySelector('.js-filters-special input[type="checkbox"]');
var metroStationCheckbox = document.querySelectorAll('.js-filters-metro input[type="checkbox"]');
var pricesInputs = document.querySelectorAll('.js-filters-price input[type="text"]');
var dateInput = document.querySelector('.js-filters-date input[type="date"]');
// var catalogItems = document.querySelectorAll('.catalog__item');

pricesInputs.forEach(function(input) {
  input.addEventListener('change', function() {
    var type = this.dataset.type;
    var value = Number(this.value);
    if (!isNaN(value)) {
      if (this.value === '') {
        filters.price[type] = null;
      } else {
        filters.price[type] = value;
        filterCatalog();
      }
    }
  });
});

for (var i = 0; i < checkboxesTypes.length; i++) {
  checkboxesTypes[i].addEventListener('change', function() {
    var name = this.parentNode.querySelector('.checkbox__label').textContent;
    if (this.checked) {
      filters.couponTypes.push(name);
    } else {
      var indexOfValue = filters.couponTypes.indexOf(name);
      if (indexOfValue !== -1) {
        filters.couponTypes.splice(indexOfValue, 1);
      };
    }
    filterCatalog();
  });
}

for (var i = 0; i < metroStationCheckbox.length; i++) {
  metroStationCheckbox[i].addEventListener('change', function() {
    var name = this.parentNode.querySelector('.checkbox__label').textContent;
    if (this.checked) {
      filters.metroStation.push(name);
    } else {
      var indexOfValue = filters.metroStation.indexOf(name);
      if (indexOfValue !== -1) {
        filters.metroStation.splice(indexOfValue, 1);
      };
    }
    filterCatalog();
  });
}

specialCheckbox.addEventListener('change', function() {
  filters.special = this.checked;
  filterCatalog();
});

dateInput.addEventListener('change', function() {
  filters.date = Date.parse(this.value);
  filterCatalog();
});

function filterCatalog() {
  catalogItems.forEach(function(item, i) {
    var shouldBeVisible = 1;
    //Coupon types
    if (filters.couponTypes.length) {
      var currentType = item.dataset.type;
      var flagDelete = filterByType(currentType);
      if (flagDelete) {
        shouldBeVisible *= 0;
      }
    }
    //Metro station
    if (filters.metroStation.length) {
      var currentType = item.dataset.metro;
      var flagDelete = filterByMetro(currentType);
      if (flagDelete) {
        shouldBeVisible *= 0;
      }
    }
    //Special offer
    if (filters.special && !item.dataset.special) {
      shouldBeVisible *= 0;
    }
    //price
    if (filters.price.from || filters.price.to) {
      var currentValue = item.dataset.price;
      var from = filters.price.from;
      var to = filters.price.to;
      if (from && currentValue < from) {
        shouldBeVisible *= 0;
      }
      if (to && currentValue > to) {
        shouldBeVisible *= 0;
      }
    }
    //Date
    // if () {
    //
    // }

    if (!shouldBeVisible) {
      item.style.display = 'none';
    } else {
      item.style.display = 'inline-block';
    }
  });
};

function filterByType(currentType) {
  return filters.couponTypes.indexOf(currentType) === -1
}

function filterByMetro(currentType) {
  return filters.metroStation.indexOf(currentType) === -1
}
//------------------------timer------------------------------------------------------------------------
function runSpecialTimer(newItem, item) {
  var currentItem = newItem;
  var timerItemList = currentItem.querySelectorAll('.timer__item');

  var daysBlock = timerItemList[0].childNodes["0"],
    hoursBlock = timerItemList[1].childNodes["0"],
    minutesBlock = timerItemList[2].childNodes["0"],
    secondsBlock = timerItemList[3].childNodes["0"];

  var goal = new Date(item.dateTo);
  initClock(goal);
  //
  function getTimeRemaining(goal) {
    var total = goal - Date.parse(new Date()),
      seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / 1000 / 60) % 60),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      'total': total,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  //
  function updateClock() {
    var time = getTimeRemaining(goal);

    if (time.total <= 0) {
      currentItem.classList.add('catalog_cart--disabled');
      clearInterval(timeInterval);
    }

    if (time.days < 10) {
      daysBlock.textContent = time.days;
    } else {
      daysBlock.textContent = time.days;
    }
    hoursBlock.textContent = time.hours;
    minutesBlock.textContent = time.minutes;
    secondsBlock.textContent = time.seconds;
  }

  function initClock(goal) {
    var remaining = getTimeRemaining(goal);

    if (remaining.total > 0) {
      updateClock();
      var timeInterval = setInterval(updateClock, 1000);
    } else {
      currentItem.classList.add('catalog_cart--disabled');
    }
  }
}
