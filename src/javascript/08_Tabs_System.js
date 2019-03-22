/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tabs System <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //=== Activate First tab and its Content Box
    getElements('.tabs-menu [data-tab]:first-of-type,.tab-content:first-of-type').forEach(function (elements) {
        //==== Open the Tab Panel by URL HashTag ====//
        if (elements.hasAttribute('data-active-url')) {
            var urlHash = window.location.hash.substr(1),
                tabID = elements.getAttribute('data-tab');
            if (urlHash === '#' + tabID) {
                tabID.classList.add('active');
                getElement('#' + tabID).add('active');
            }
        } else {
            //=== Open the First Tab ===//
            elements.classList.add('active');
        }
    });
    //=== When Click on Tab
    var tabsBtns = getElements('.tabs-menu [data-tab]');
    Array.from(tabsBtns).forEach(function (thisElement) {
        thisElement.addEventListener('click', function () {
            //==== Store the Tab ID and this Element
            var getPanelId = thisElement.getAttribute('data-tab'),
                targtedPanel = getElement('#' + getPanelId);
            //==== Call Back Function Before Opens the Panel ====//
            if (thisElement.hasAttribute('data-call-before')) {
                var callBackBefore = thisElement.getAttribute('data-call-before');
                window[callBackBefore]();
            }
            //==== Activate Clicked Tab
            thisElement.classList.add('active');
            //=== Remove Active Class From Siblings
            getSiblings(thisElement).forEach(function (siblings) {
                siblings.classList.remove('active');
            });
            //==== Activate Tab Content
            targtedPanel.classList.add('active');
            //=== Remove Active Class From Siblings
            getSiblings(targtedPanel).forEach(function (siblings) {
                siblings.classList.remove('active');
            });
            //==== Call Back Function After Opens the Panel ====//
            if (thisElement.hasAttribute('data-call-after')) {
                var callBackAfter = thisElement.getAttribute('data-call-after');
                window[callBackAfter]();
            }
        });
    });
});