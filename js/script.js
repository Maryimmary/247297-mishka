"use strict";

var ESC_KEYCODE = 27;

var navigation = document.querySelector(".main-navigation__menu");
var header = document.querySelector(".main-header");
var toggleBtn = document.querySelector(".main-navigation__toggle-btn");// в мобильном меню крестик и гамбургер

var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var btnBuy = document.querySelector(".btn--buy");
var btnBasket = document.querySelectorAll(".catalog__basket");

//Закрывает мобильное меню
header.classList.remove("main-header--no-js");
navigation.classList.remove("main-navigation__menu--open");
toggleBtn.classList.remove("main-navigation__toggle-btn--close");
toggleBtn.classList.remove("main-navigation__toggle-btn--no-js");
toggleBtn.classList.add("main-navigation__toggle-btn--open");

//Механизм открытия мобильного меню
toggleBtn.addEventListener("click", function (event) {
  navigation.classList.toggle("main-navigation__menu--open");
  if (navigation.classList.contains("main-navigation__menu--open")) {
    toggleBtn.classList.remove("main-navigation__toggle-btn--open");
    toggleBtn.classList.add("main-navigation__toggle-btn--close");
  } else {
    toggleBtn.classList.remove("main-navigation__toggle-btn--close");
    toggleBtn.classList.add("main-navigation__toggle-btn--open");
  }
});

// Нажатие на иконки корзины
if (btnBasket) {
  for (var i = 0; i < btnBasket.length; i++) {
    btnBasket[i].addEventListener("click", function () {
      popup.classList.add("modal-content--show");
      overlay.classList.add("modal-overlay--show");
    });
  }
}

//Нажатия на кнопку "Заказать"
if(btnBuy) {
  btnBuy.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content--show");
    overlay.classList.add("modal-overlay--show");
  });
}

// Закрытие при клике на оверлэй и нажатие клавиши
overlay.addEventListener("click", function (event) {
  popup.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function (event) {
  if (popup.classList.contains("modal-content--show") && overlay.classList.contains("modal-overlay--show") && event.keyCode === ESC_KEYCODE) {
    popup.classList.remove("modal-content--show");
    overlay.classList.remove("modal-overlay--show");
  }
});
