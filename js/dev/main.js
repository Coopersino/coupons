var catalogInter = document.querySelector('.catalog_basket__summ');
var loader = document.querySelector('.loader');
var modalUnderlay = document.querySelector('.modal_underlay');
var buyBtn = catalogInter.querySelector('.btn');
var orderPopup = document.querySelector('.modal_order');
var closePopupBtn = orderPopup.querySelector('.modal__close');
var modalSuccess = document.querySelector('.modal_success');
var loadedData = null;
var twoForLineBtn1 = document.querySelector('.catalog_view');
twoForLineBtn = twoForLineBtn1.children["0"];
var threeForLineBtn = document.querySelectorAll('.catalog_view');
threeForLineBtn = twoForLineBtn1.children["1"];
var LOAD_TIMEOUT = 10000;
var URL = 'http://127.0.0.1:8080/generated.json';
var container = document.querySelector('.catalog__list');
var catalogItems = null;
var arrayCart = [];
var btnsToCard = document.querySelectorAll('.catalog_cart__btn .btn');
var list = document.querySelector('.catalog_basket__list');
var finalPrice = document.querySelector('.catalog_basket__summ_text');

var noItemsInCart = document.querySelector('.catalog_basket__default');

function calculatePrice() {
  var price = 0;
  arrayCart.forEach(function(item, i) {
    price += item.price;
  });
  finalPrice.textContent = price;
}

function cleanCart() {
  list.innerHTML = "";
}

function removeFromCard() {
  var remItem = this.parentNode.parentNode.attributes[1].nodeValue;
  arrayCart.forEach(function(item, i) {
    if (item.id == remItem) {
      arrayCart.splice(i, 1);
    }
  });
  calculatePrice();
  renderCart();
}

function renderCart() {
  cleanCart();
  if (arrayCart.length == 0) {
    noItemsInCart.style.display = 'block';
  } else {
    noItemsInCart.style.display = 'none';
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
      newItem.setAttribute('id', item.id);
      newItem.querySelector('.catalog_basket__close img').addEventListener('click', removeFromCard);
      list.appendChild(newItem);
    });
  }
}

twoForLineBtn.addEventListener('click', function(event) {
  getCurrentClassState(this);
});

threeForLineBtn.addEventListener('click', function(event) {
  getCurrentClassState(this);
});

function getCurrentClassState(btn) {
  twoForLineBtn.classList.toggle('catalog_view__item--active');
  threeForLineBtn.classList.toggle('catalog_view__item--active');
  container.classList.toggle('catalog__list--two');
  container.classList.toggle('catalog__list--three');
}

function addToCart(event) {
  event.preventDefault();
  var item = this.closest('.catalog_cart');
  if (!item.classList.contains('catalog_cart--disabled')) {
    var title = item.querySelector('.catalog_cart__title').textContent;
    var price = Number(item.dataset.price);
    var itemObj = {
      title: title,
      price: price,
      id: String(Math.random() + '-' + title),
    };
    arrayCart.push(itemObj);
    calculatePrice();
    renderCart();
  }
}

buyBtn.addEventListener('click', function(event) {
  event.preventDefault();
  modalUnderlay.style.display = 'block';
  modalUnderlay.addEventListener('click', closeModalPopup)
  orderPopup.style.display = 'block';
  var modalInner = document.querySelector('.modal__inner');
  var orderBtn = modalInner.querySelector('.btn');
  orderBtn.addEventListener('click', function(event) {
    event.preventDefault();
    formValidate(modalInner);
  });
});

closePopupBtn.addEventListener('click', function(event) {
  event.preventDefault();
  closeModalPopup();
});

function closeModalPopup() {
  modalUnderlay.style.display = 'none';
  orderPopup.style.display = 'none';
}

function formValidate(form) {
  var fields = form.querySelectorAll('.input');
  var name = fields[0].value;
  var phone = fields[1].value;
  var email = fields[2].value;
  var errors = "";
  if (name == "" || phone == "" || email == "") {
    alert("Все поля должны быть заполнены!");
    return false;
  }
  var reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  if (!reg.test(phone)) {
    errors += "Неправильный номер телефона\n";
  }

  var reg = /^.+@.+\..+$/igm;
  if (!reg.test(email)) {
    errors += "Неправильный e-mail \n";
  }
  if (errors == "")
    sendOrder();
  else {
    alert(errors);
    return false;
  }

}
function sendOrder() {
  closeModalPopup();
  loader.style.display = 'block';
  var sendInterval = setInterval(closeLoaderShowSuccess,1000)

  function closeLoaderShowSuccess() {
    clearInterval(sendInterval);
    loader.style.display = 'none';
    modalSuccess.style.display = 'block';
    var closeSuccessInterval = setInterval(closeSuccess,1500)

    function closeSuccess() {
      clearInterval(closeSuccessInterval);
      modalSuccess.style.display = 'none';
    }
  }
}

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
    newImgCover.classList.add('catalog_cart__image');
    newItem.append(newImgCover);
    if (item.special == true) {
      newItem.classList.add('catalog_cart--special');
      newItem.setAttribute('data-special', true);
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
    newToCartBtn.addEventListener('click', addToCart);
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
  }, LOAD_TIMEOUT);

  xhr.onload = function(event) {
    xhr.onerror = null;
    loadedData = JSON.parse(event.target.response);
    callback(loadedData);
  };

  xhr.onerror = function() {
    xhr.onload = null;
    toFailedLoadXHR(container);
  };

  xhr.open('GET', URL);
  xhr.send();
};

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
  var sortedArray = loadedData.sort(sortArrByPrice);
  renderData(sortedArray);
  filterCatalog();
}

function sortByDiscount(event) {
  event.preventDefault();
  var sortedArray = loadedData.sort(sortArrByDiscount);
  renderData(sortedArray);
  filterCatalog();
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

var sortBtns = document.querySelectorAll('.catalog_sort__item');
sortBtns.forEach(function(item) {
  if (item.textContent == 'price (incr)') {
    item.addEventListener('click', function(event) {
      sortByPrice(event);
    })
  } else {
    item.addEventListener('click', function(event) {
      sortByDiscount(event);
    });
  }
});

var checkboxesTypes = document.querySelectorAll('.js-filters-type input[type="checkbox"]');
var specialCheckbox = document.querySelector('.js-filters-special input[type="checkbox"]');
var metroStationCheckbox = document.querySelectorAll('.js-filters-metro input[type="checkbox"]');
var pricesInputs = document.querySelectorAll('.js-filters-price input[type="text"]');
var dateInput = document.querySelector('.js-filters-date input[type="date"]');

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
    if (filters.date >= new Date().setDate(new Date().getDate() - 1)){
    if (new Date(filters.date) >= new Date(item.dataset.dateTo)) {
        shouldBeVisible *= 0;
      }
    }

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
