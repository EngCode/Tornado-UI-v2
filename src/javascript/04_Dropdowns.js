/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Dynamic Dropdowns <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //===> Dropdown Buttons <===//
    var dropdownButton = getElements('.dropdown-btn');
    Array.from(dropdownButton).forEach(function (dropdownButton) {
        //===> Catch List Button <===//
        var dropdownList = getNextSibling(dropdownButton, '.dropdown-list');
        //===> When Click on the Button <===//
        dropdownButton.addEventListener('click', function (event) {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            //===> Activat Button and List <===//
            dropdownButton.classList.toggle('active');
            dropdownList.classList.toggle('active');
        });
    });

});