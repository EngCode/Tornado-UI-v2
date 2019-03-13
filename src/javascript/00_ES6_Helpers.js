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

/*===== Live Events =====*/
function addLiveListener(scope, selector, event, funct) {
    'use strict';
    //==== interval for Checking new Elements ====//
    setInterval(function () {
        //==== Selector ====//
        var selectorParts = selector.split('.');
        var tag = selectorParts.shift();
        var className;
        if (selectorParts.length) {
            className = selectorParts.shift();
        }
        if (tag != "") {
            tag = tag.toUpperCase();
            var elements = scope.getElementsByTagName(tag);
        } else {
            var elements = scope.getElementsByClassName(className);
            for (var i = 0; i < elements.length; i++) {
                if (elements[i][event + '_processed'] === undefined && (tag == "" || elements[i].tagName == tag)) {
                    elements[i].addEventListener(event, funct);
                }
            }
        }
    }, 1000);
}

/**
 * Adds a Listener for specific tags for elements that may not yet
 * exist.
 * @param scope a reference to an element to look for elements in (i.e. document)
 * @param selector the selector in form [tag].[class] (i.e. a.someBtn)
 * @param event and event (i.e. click)
 * @param funct a function reference to execute on an event
 */

/*===== Insert After =====*/
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
