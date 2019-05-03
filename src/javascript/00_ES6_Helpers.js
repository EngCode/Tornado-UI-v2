/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */

//======> Get Elements <======//
const getElement = document.querySelector.bind(document);

//======> Get Multiple Elements <======//
const getElements = document.querySelectorAll.bind(document);

//======> Define Page Direction <======//
const pageDirection = getComputedStyle(document.body).direction;
var startDirection = 'left',
    endDirection = 'right';
if (pageDirection == 'rtl') {
    startDirection = 'right';
    endDirection = 'left';
}

//======> Live Events Watcher <======//
const addLiveListener = function (selector, event, func) {
    'use strict';
    //==== interval for Checking new Elements ====//
    if (selector !== null) {
        setInterval(function () {
            //==== Selector ====//
            var elements = getElements(selector);
            Array.from(elements).forEach(function (element) {
                element.addEventListener(event, func);
            });
        }, 1000);
    }
};

//======> Get All Siblings [ES6] (c) 2018 Chris Ferdinandi <======//
const getSiblings = function (element) {
    'use strict';
    /*== Get all siblings of ==> element @param {Node} ==> @return {Array} The siblings ==*/
    if (element !== null) {
        return Array.prototype.filter.call(element.parentNode.children, function (sibling) {
            return sibling !== element;
        });
    }
};


//======> Get Next Sibling that Matchs <======//
const getNextSibling = function (element, selector) {
    'use strict';
    if (element !== null && selector !== null) {
        // Get the next sibling element
        var sibling = element.nextElementSibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) {
                return sibling;
            }
        }
    }
};

//======> Get All Next Sibling <======//
function getNextSiblings(elem, filter) {
    var sibs = [];
    var nextElem = elem.parentNode.firstChild;
    do {
        if (nextElem.nodeType === 3) continue; // ignore text nodes
        if (nextElem === elem) continue; // ignore elem of target
        if (nextElem === elem.nextElementSibling) {
            if (!filter || filter(elem)) {
                sibs.push(nextElem);
                elem = nextElem;
            }
        }
    } while(nextElem = nextElem.nextSibling)
    return sibs;
}

//======> Get Previous Sibling that Matchs <======//
const getPrevSibling = function (element, selector) {
    'use strict';
    if (element !== null && selector !== null) {
        // Get the Previos sibling element
        var sibling = element.previousElementSibling;
        // If the sibling matches our selector, use it
        // If not, jump to the Previos sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) {
                return sibling;
            }
        }
    }
};

//======> Get All Previous Sibling <======//
function getPrevSiblings(elem, filter) {
    var sibs = [];
    while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // ignore text nodes
        if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
}

//======> Set new Attributes <======//
const setAttributes = function (element, options) {
    'use strict';
    if (element !== null) {
        Object.keys(options).forEach(function (attr) {
            element.setAttribute(attr, options[attr]);
        });
    }
};

//======> Insert After <======//
function insertAfter(element, reference) {
    'use strict';
    //===> Descover if its HTML String <===//
    var elementString = element;
    if (typeof elementString === 'string' && reference !== null) {
        var range = document.createRange();
        elementString = range.createContextualFragment(element);
    }
    //===> Insert the Element After the Target <====//
    if (reference !== null) {
        reference.parentNode.insertBefore(elementString, reference.nextSibling);
    }
}

//======> Insert Before <======//
function insBefore(element, reference) {
    'use strict';
    //===> Descover if its HTML String <===//
    var elementString = element;
    if (typeof elementString === 'string' && reference !== null) {
        var range = document.createRange();
        elementString = range.createContextualFragment(element);
    }
    //===> Insert the Element After the Target <====//
    if (reference !== null) {
        reference.parentNode.insertBefore(elementString, reference);
    }
}

//======> Append HTML <======//
function appendIn(reference, element) {
    'use strict';
    //===> Descover if its HTML String <===//
    if (typeof element === 'string' && reference !== null) {
        reference.innerHTML += element;
    } else if (reference !== null) {
        reference.appendChild(element);
    }
}