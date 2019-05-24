/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Dynamic Dropdowns <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //===> Dropdown Buttons <===//
    var dropdownButton = getElements('.dropdown-btn');
    Array.from(dropdownButton).forEach(function (dropdownButton) {
        //===> When Click on the Button <===//
        dropdownButton.addEventListener('click', function (event) {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            var thisParent = dropdownButton.closest('.dropdown'),
                otherDropdown = getElements('.dropdown.active');

            //===> Deactivate Other <===//
            Array.from(otherDropdown).forEach(function (otherDropdown) {
                if (otherDropdown !== thisParent) {
                    otherDropdown.classList.remove('active');
                }
            });

            //===> Activat Button and List <===//
            thisParent.classList.toggle('active');
        });
    });

    //===> Deactivate on Blank <===//
    window.onclick = function (blank) {
        if (!blank.target.matches('.dropdown') && !blank.target.matches('.dropdown *')) {
            var activatedDrops = getElements('.dropdown.active');
            Array.from(activatedDrops).forEach(function (activatedDrops) {
                activatedDrops.classList.remove('active');
            });
        }
    };

});