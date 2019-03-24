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
                thisParent = thisElement.parentNode,
                parentSiblings = getSiblings(thisParent);
            //==== Close Other Panels Function ====//
            function closeOtherAccourdions() {
                //==== Deactivate Siblings ====//
                Array.from(parentSiblings).forEach(function (siblings) {
                    siblings.classList.remove('active');
                    var siblingsChilds = siblings.children;
                    //==== Remove the Panel Max Height For Transition ====//
                    Array.from(siblingsChilds).forEach(function (childs) {
                        if (childs.classList.contains('accordion-content')) {
                            childs.style.maxHeight = null;
                        }
                    });
                });
            }
            //==== Check if the Clicked Button is Activated or Not ====//
            if (thisParent.classList.contains('active')) {
                //==== Call Back Function Before Close the Panel ====//
                if (thisElement.hasAttribute('data-call-before-close')) {
                    var callBackBeforeClose = thisElement.getAttribute('data-call-before-close');
                    window[callBackBeforeClose]();
                }
                //==== Deactivate Clicked Accordion if its Activated ====//
                thisParent.classList.remove('active');
                //==== Remove the Panel Max Height for Transtion ====//
                nextPanel.style.maxHeight = null;
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
                //==== Set the Panel Max Height for Transtion ====//
                var thisHight = nextPanel.scrollHeight,
                    padding = getComputedStyle(nextPanel).padding;
                nextPanel.style.maxHeight = thisHight + padding + "px";
                //==== Activate Clicked Accordion if its Not Activated ====//
                thisParent.classList.add('active');
                //==== Close Other Activated Siblings Accordion Items ====//
                closeOtherAccourdions();
                //==== Call Back Function After Opens the Panel ====//
                if (thisElement.hasAttribute('data-call-after')) {
                    var callBackAfter = thisElement.getAttribute('data-call-after');
                    window[callBackAfter]();
                }
            }
        });
    });
});