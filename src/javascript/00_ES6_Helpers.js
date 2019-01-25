/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
/*===== Get Single Elements =====*/
const getElement = document.querySelector.bind(document);
/*===== Get Multiple Elements =====*/
const getElements = document.querySelectorAll.bind(document);
/*===== Define Page Direction =====*/
var pageDirection = getComputedStyle(document.body).direction;
/*===== Get All Siblings [ES6] (c) 2018 Chris Ferdinandi =====*/
const getSiblings = function (element) {
    'use strict';
    /*== Get all siblings of ==> element @param {Node} ==> @return {Array} The siblings ==*/
    return Array.prototype.filter.call(element.parentNode.children, function (sibling) {
        return sibling !== element;
    });
};
/*===== Get Next Sibling that Matchs =====*/
const getNextSibling = function (element, selector) {
    'use strict';
    // Get the next sibling element
    var sibling = element.nextElementSibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling.matches(selector)) {
            return sibling;
        }
    }
};
/*===== Get Previos Sibling that Matchs =====*/
const getPrevSibling = function (element, selector) {
    'use strict';
    // Get the Previos sibling element
    var sibling = element.previousElementSibling;
    // If the sibling matches our selector, use it
    // If not, jump to the Previos sibling and continue the loop
    while (sibling) {
        if (sibling.matches(selector)) {
            return sibling;
        }
    }
};

/*===== Get Previos Sibling that Matchs =====*/
const setAttributes = function (element, options) {
    'use strict';
    Object.keys(options).forEach(function (attr) {
        element.setAttribute(attr, options[attr]);
    });
};