/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Dynamic Menu's <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    /*==== Create Responsive Navigation Menu ====*/
    var navMenus = getElements('.navigation-menu');
    Array.from(navMenus).forEach(function (navMenus) {
        //===> Get Menu ID <===//
        var MenuID = navMenus.getAttribute('data-id'),
            //===> Get the Menu List Element <===//
            MenuList = navMenus.querySelectorAll('ul'),
            //===> Wraper Elemets <===//
            MenuElements = '<div class="menu-content"></div> <a href="javascript:void(0)" class="overlay-close" title="Close Menu"></a>';

        //===> Create Mobile Menu Wraper <===//
        document.body.insertAdjacentHTML('beforeend', '<div class="mobile-menu" id="' + MenuID + '">' + MenuElements + '</div>');

        //===> Marking Dropdown Sub Menus <===//
        var SubMenu = navMenus.querySelectorAll('li ul,li .megamenu');
        Array.from(SubMenu).forEach(function (SubMenu) {
            SubMenu.parentNode.classList.add('dropdown-item');
            //===> Create Dropdown Toggle Button <===//
            var dropDownBtn = document.createElement('a');
            dropDownBtn.classList.add('dropdown-toggle');
            dropDownBtn.classList.add('ti-arrow-down-chevron');
            dropDownBtn.setAttribute('href', 'javascript:void(0);');
            SubMenu.insertAdjacentElement('beforebegin', dropDownBtn);
        });

        //===> Adding Logo for Mobile Menu <===//
        if (navMenus.hasAttribute('data-logo')) {
            //===> Get Logo URL <===//
            var logo = navMenus.getAttribute('data-logo');
            //===> Create Logo Elements <===//
            getElement('#' + MenuID + ' .menu-content').innerHTML = '<div class="logo"> <img src="' + logo + '" alt="logo"> </div>';
        }

        //===> Multiple Themes for Mobile Menu <===//
        if (navMenus.hasAttribute('data-theme')) {
            //===> Get Logo URL <===//
            var theme = navMenus.getAttribute('data-theme');
            //===> Create Logo Elements <===//
            getElement('#' + MenuID).classList.add(theme, 'custom-theme');
        }

        //===> Copy the List <===//
        var MenuCopy = MenuList[0].cloneNode(true);
        getElement('#' + MenuID + ' .menu-content').appendChild(MenuCopy);

        //===> Mega Menu Width Hack <===//
        var Megamenu = navMenus.querySelectorAll('.megamenu');
        Array.from(Megamenu).forEach(function (Megamenu) {
            Megamenu.parentNode.style.postion = 'static';
        });
    });

    /*===> Navigation Mobile Menu Toggle Button <===*/
    var MobMenuToggle = getElements('.menu-btn[data-id]');
    Array.from(MobMenuToggle).forEach(function (MobMenuToggle) {
        MobMenuToggle.addEventListener('click', function (event) {
            event.preventDefault();
            var TargetID = MobMenuToggle.getAttribute('data-id');
            getElement('#' + TargetID).classList.toggle('active');
        });
    });

    /*===> Navigation Mobile Menu Overlay Close <===*/
    var OverlayButton = getElements('.mobile-menu .overlay-close');
    Array.from(OverlayButton).forEach(function (OverlayButton) {
        OverlayButton.addEventListener('click', function (event) {
            event.preventDefault();
            OverlayButton.parentNode.classList.remove('active');
        });
    });

    /*===> Mobile Menu Submenus Toggle <===*/
    var dropdownMob = getElements('.mobile-menu .dropdown-toggle');
    Array.from(dropdownMob).forEach(function (dropdownMob) {
        dropdownMob.addEventListener('click', function (event) {
            event.preventDefault();
            //====> Detacte Effect Theme <====//
            var MobileMen = dropdownMob.closest('.mobile-menu');
            if (!MobileMen.matches('.custom-theme')) {
                //==== Store Playable Elements ====//
                var nextSib = getNextSibling(dropdownMob, 'ul') || getNextSibling(dropdownMob, '.megamenu'),
                    thisParent = dropdownMob.parentNode,
                    parentSiblings = getSiblings(thisParent);
                //==== Check if the Clicked Menu is Activated ====//
                if (thisParent.classList.contains('opened')) {
                    //====> Deactivate the Menu <====//
                    thisParent.classList.remove('opened');
                    nextSib.classList.remove('active');
                    //==== Remove Max Height for Transtion ====//
                    nextSib.style.maxHeight = null;
                } else {
                    thisParent.classList.add('opened');
                    //==== Set Max Height for Transtion ====//
                    var thisHight = nextSib.scrollHeight,
                        padding = getComputedStyle(nextSib).padding;
                    nextSib.style.maxHeight = thisHight + padding + "px";
                    //==== Activate Clicked Accordion if its Not Activated ====//
                    thisParent.classList.add('active');
                    //==== Deactivate Siblings ====//
                    Array.from(parentSiblings).forEach(function (siblings) {
                        siblings.classList.remove('active');
                        var siblingsChilds = siblings.children;
                        //==== Remove the Max Height For Transition ====//
                        Array.from(siblingsChilds).forEach(function (childs) {
                            if (childs.matches('ul') || childs.matches('.megamenu')) {
                                childs.style.maxHeight = null;
                            }
                        });
                    });
                }
            } else {
                dropdownMob.parentNode.classList.toggle('opened');
            }
        });
    });
});