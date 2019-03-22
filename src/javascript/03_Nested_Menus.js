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
            //===> Deativate the Siblings Items <===//
            Array.from(parentSiblings).forEach(function (parentSiblings) {
                parentSiblings.classList.remove('active');
            });
            //===> Show/Hide Nested Menu <===//
            if (SubMenuList.style.maxHeight) {
                //==> If its Opened == Close it <==
                SubMenuList.style.maxHeight = null;
            } else {
                //==> if its closed == Open it <==//
                var thisHight = SubMenuList.scrollHeight;
                    // paddingTop = parseInt(getComputedStyle(SubMenuList).paddingTop, 10),
                    // paddingBottom = parseInt(getComputedStyle(SubMenuList).paddingBottom, 10),
                    // padding = paddingTop + paddingBottom;
                SubMenuList.style.maxHeight = thisHight + "px";
            }
        });
    });

});