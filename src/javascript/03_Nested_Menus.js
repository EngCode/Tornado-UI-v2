/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Dynamic Menu's <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //===> Nested Multi Level Menu <===//
    var SubMenuList = getElements('.nested-menu ul > li > ul');
    Array.from(SubMenuList).forEach(function (SubMenuList) {
        //===> Catch SubMenu Button <===//
        var SubMenuBtn = getPrevSibling(SubMenuList, 'a');
        SubMenuBtn.classList.add('submenu');
        SubMenuBtn.classList.add('ti-arrow-down-chevron');
        //===> When Click on the Button <===//
        SubMenuBtn.addEventListener('click', function (event) {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            //==> Catch Playable Elements <==//
            var thisParent = SubMenuBtn.parentNode,
                parentSiblings = getSiblings(thisParent);
            //===> Activated The Clicked Item <===//
            thisParent.classList.toggle('active');
            slideToggle(SubMenuList,500);
            //===> Deativate the Siblings Items <===//
            Array.from(parentSiblings).forEach(function (parentSiblings) {
                var siblingList = parentSiblings.querySelector('ul');
                slideUp(siblingList,500);
                parentSiblings.classList.remove('active');
            });
        });
    });

});