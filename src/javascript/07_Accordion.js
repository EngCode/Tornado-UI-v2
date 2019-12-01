/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Accordion System <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //======> When Click on Accordion Button <======//
    var accordionButton = getElements('.accordion-title');
    Array.from(accordionButton).forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            //==== Store Playable Elements ====//
            var thisElement = element,
                nextPanel = getNextSibling(thisElement, '.accordion-content'),
                thisParent = thisElement.parentNode;

            //==== Check if the Clicked Button is Activated or Not ====//
            if (thisParent.classList.contains('active')) {
                //==== Call Back Function Before Close the Panel ====//
                if (thisElement.hasAttribute('data-call-before-close')) {
                    var callBackBeforeClose = thisElement.getAttribute('data-call-before-close');
                    window[callBackBeforeClose]();
                }

                //==== Deactivate Clicked Accordion if its Activated ====//
                thisParent.classList.remove('active');
                //==== Close the Panel ====//
                slideUp(nextPanel,300);

                //==== Call Back Function After Close the Panel ====//
                if (thisElement.hasAttribute('data-call-after-close')) {
                    var callBackAfterClose = thisElement.getAttribute('data-call-after-close');
                    window[callBackAfterClose]();
                }
            } else {
                //==== Call Back Function Before Opens the Panel ====//
                if (thisElement.hasAttribute('data-call-before')) {
                    var callBackBefore = thisElement.getAttribute('data-call-before');
                    window[callBackBefore]();
                }

                //==== Close Siblings Panels ====//
                var parentSiblings = getSiblings(thisParent);
                Array.from(parentSiblings).forEach(function (sibling) {
                    //==== Close Other Activated Siblings ====//
                    sibling.classList.remove('active');
                    var siblingPanel = sibling.querySelector('.accordion-content');
                    //==== Close Siblings Panels ====//
                    if (siblingPanel) slideUp(siblingPanel,300);
                });

                //==== Opem the Panel ====//
                slideDown(nextPanel,300);
                //==== Deactivate Clicked Accordion if its Activated ====//
                thisParent.classList.add('active');

                //==== Call Back Function After Opens the Panel ====//
                if (thisElement.hasAttribute('data-call-after')) {
                    var callBackAfter = thisElement.getAttribute('data-call-after');
                    window[callBackAfter]();
                }
            }
        });
    });
});