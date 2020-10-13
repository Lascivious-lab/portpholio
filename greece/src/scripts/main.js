'use strict';

// var inputs = document.querySelectorAll(".form__input");

// var _loop = function _loop() {
//         item.addEventListener("click", function () {

//         });

let inputs = document.querySelectorAll('input')

inputs.forEach(input => input.setAttribute("autocomplete",
    "off"));