'use strict'; // var inputs = document.querySelectorAll(".form__input");
// var _loop = function _loop() {
//         item.addEventListener("click", function () {
//         });

var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
  return input.setAttribute("autocomplete", "off");
});