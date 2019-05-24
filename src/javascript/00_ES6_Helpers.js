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

//======> Parents Until <======//
const parentsUntil = function (elem, parent, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (parent) { if (elem.matches(parent)) break; }
        if (selector) {
            if (elem.matches(selector)) { parents.push(elem); }
            break;
        }
        parents.push(elem);
    }
    return parents;
};

//======> Get All Siblings <======//
const getSiblings = function (element,filter) {
    'use strict';
    /*== Get all siblings of ==> element @param {Node} ==> @return {Array} The siblings ==*/
    if (element !== null) {
        return Array.prototype.filter.call(element.parentNode.children, function (sibling) {
            if(!filter) {
                return sibling !== element;
            } else {
                if (sibling.matches(filter)) return sibling;
            }
        });
    }
};

//======> Get Next Sibling that Matchs <======//
const getNextSibling = function (element, filter) {
    'use strict';
    if (element !== null) {
        // Get the next sibling element
        var sibling = element.nextElementSibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        if (filter && filter !== null) {
            while (sibling) 
                if (sibling.matches(filter)) return sibling;
        } else {
            return sibling;
        }
    }
};

//======> Get Previous Sibling that Matchs <======//
const getPrevSibling = function (element, filter) {
    'use strict';
    if (element !== null && filter !== null) {
        // Get the Previos sibling element
        var sibling = element.previousElementSibling;
        // If the sibling matches our selector, use it
        // If not, jump to the Previos sibling and continue the loop
        while (sibling) {
            if (sibling.matches(filter)) {
                return sibling;
            }
        }
    }
};

//======> Get All Next Sibling <======//
const getNextSiblings = function (element, filter) {
    // Setup siblings array and get next sibling
    var siblings = [],
        next = element.nextElementSibling;
    // Loop through all siblings
	while (next) {
        // If the matching item is found, quit
        if (filter && next.matches(filter)) break;
        // Otherwise, push to array
        siblings.push(next);
        // Get the next sibling
        next = next.nextElementSibling;
	}
	return siblings;
};

//======> Get All Previous Sibling <======//
const getPrevSiblings = function (element, filter) {
    // Setup siblings array and get previous sibling
    var siblings = [];
    var prev = element.previousElementSibling;
    // Loop through all siblings
    while (prev) {
        // If the matching item is found, quit
        if (filter && prev.matches(filter)) break;
        // Otherwise, push to array
        siblings.push(prev);
        // Get the previous sibling
        prev = prev.previousElementSibling
    }
    return siblings;
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

//======> Set new Attributes <======//
const setAttributes = function (element, options) {
    'use strict';
    if (element !== null) {
        Object.keys(options).forEach(function (attr) {
            element.setAttribute(attr, options[attr]);
        });
    }
};

//=======> CounterUp <======//
const counter = function (obj) {
    var elem = obj.elem;
    var input = (elem.nodeName.toLowerCase() === 'input') ? true : false;
    var value = obj.value || parseFloat(elem.getAttribute('data-counter')) || 0;
    var duration = obj.duration || parseInt(elem.getAttribute('data-duration')) || 2000;
    var delay = obj.delay || parseInt(elem.getAttribute('data-delay')) || 0;
    var decimal = obj.decimal || parseInt(elem.getAttribute('data-decimal')) || 0;
    var currency = obj.currency ||  parseInt(elem.getAttribute('data-currency')) || '';
    var speed =  obj.speed ||  parseInt(elem.getAttribute('data-speed')) || 10;
    var count = 0;
    var increment = value / (duration / speed);
    var interval = null;
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    var run = function () {
        count += increment;
        if (count < value) {
            (input) ? elem.value = currency + (count).toFixed(decimal).toString().replace(regex, ','): elem.innerHTML = currency + (count).toFixed(decimal).toString().replace(regex, ',');
        } else {
            clearInterval(interval);
            (input) ? elem.value = currency + (value).toFixed(decimal).toString().replace(regex, ','): elem.innerHTML = currency + (value).toFixed(decimal).toString().replace(regex, ',');
        }
    };
    setTimeout(function () {
        interval = setInterval(run.bind(this), speed);
    }.bind(this), delay);
    this.reset = function () {
        clearInterval(interval);
        value = obj.value || parseFloat(elem.getAttribute('data-counter')) || 0;
        duration = obj.duration || parseInt(elem.getAttribute('data-duration')) || 2000;
        increment = value / (duration / speed);
        delay = obj.delay || parseInt(elem.getAttribute('data-delay')) || 0;
        count = 0;
        interval = setInterval(run, speed);
    }.bind(this);
}