/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */

//======> Get Elements <=======//
const getElement = document.querySelector.bind(document);

//======> Get Multiple Elements <=======//
const getElements = document.querySelectorAll.bind(document);

//======> Define Page Direction <=======//
const pageDirection = getComputedStyle(document.body).direction;
var startDirection = 'left',
    endDirection = 'right';
if (pageDirection == 'rtl') {
    startDirection = 'right';
    endDirection = 'left';
}

//======> Live Events Watcher <=======//
const addLiveListener = (selector, event, func) => {
    'use strict';
    //==== interval for Checking new Elements ====//
    if (selector !== null) {
        setInterval(function () {
            //==== Check if its Node Object =====//
            if (typeof(selector) === 'object') {
                selector.addEventListener(event, func);
            } else {
                //==== Selector ====//
                var elements = getElements(selector);
                Array.from(elements).forEach(function (element) {
                    element.addEventListener(event, func);
                });
            }
        }, 500);
    }
};

//======> Parents Until <=======//
const parentsUntil = (element, filter) => {
    //====> Filtering the Matching Parent
    for (i = 0; element && element !== document; element = element.parentNode) {
        if (element.matches(filter)) {
            return element;
            break;
        }
    }
};

//======> Get All Siblings <=======//
const getSiblings = (element,selector) => {
    'use strict';
    /*== Get all siblings of ==> element @param {Node} ==> @return {Array} The siblings ==*/
    if (element !== null) {
        return Array.prototype.filter.call(element.parentNode.children, sibling => {
            if(!selector) {
                return sibling !== element;
            } else if(sibling.matches(selector)) {
                return sibling;
            }
        });
    }
};

//======> Get Next Sibling that Matchs <=======//
const getNextSibling = (element, filter) => {
    'use strict';
    if (element !== null) {
        //====> Get the next sibling element
        var sibling = element.nextElementSibling;
        //====> Filtering the Matching Sibling
        if (filter && filter !== null) {
            if (sibling !== null && sibling.matches(filter)) return sibling;
        }
    }
};

//======> Get Previous Sibling that Matchs <=======//
const getPrevSibling = (element, filter) => {
    'use strict';
    if (element !== null && filter !== null) {
        //====> Get the Previous sibling element
        var sibling = element.previousElementSibling;
        //====> Filtering the Matching Sibling
        if (sibling !== null && sibling.matches(filter)) return sibling;
    }
};

//======> Get All Next Sibling <=======//
const getNextSiblings = (element, filter) => {
    //====> Get the Next Sibling and Initialize Array
    var siblings = [],
        sibling = element.nextElementSibling;
    //====> Loop Throgh the Next Siblings
	while (sibling) {
        //====> Filtering Matched Sibling
        if (filter && sibling.matches(filter)) siblings.push(sibling);
        //====> Catch the New Next Sibling
        next = sibling.nextElementSibling;
    }
    //====> Return Siblings
	if (siblings.length > 0) return siblings;
};

//======> Get All Previous Sibling <=======//
const getPrevSiblings = (element, filter) => {
    //====> Get the Previous Sibling and Initialize Array
    var siblings = [],
        sibling = element.previousElementSibling;
    //====> Loop Throgh the Next Siblings
	while (sibling) {
        //====> Filtering Matched Sibling
        if (filter && sibling.matches(filter)) siblings.push(prevSibling);
        //====> Catch the New Next Sibling
        sibling = sibling.previousElementSibling;
    }
    //====> Return Siblings
	if (siblings.length > 0) return siblings;
};

//======> Insert After <=======//
const insertAfter = (element, reference) => {
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

//======> Insert Before <=======//
const insBefore = (element, reference) => {
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

//======> Append HTML <=======//
const appendIn = (reference, element) => {
    'use strict';
    //===> Descover if its HTML String <===//
    if (typeof element === 'string' && reference !== null) {
        reference.innerHTML += element;
    } else if (reference !== null) {
        reference.appendChild(element);
    }
}

//======> Set new Attributes <=======//
const setAttributes = (element, options) => {
    'use strict';
    if (element !== null) {
        Object.keys(options).forEach(function (attr) {
            element.setAttribute(attr, options[attr]);
        });
    }
};

//=======> Counter Up <=======//
const counter = (obj) => {
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

//=======> Get Element Height <=======//
const getHeight = (element) => {
    //======> for Getting the Height of a Hidden Element <=======//
    var origDisplay = getComputedStyle(element).display;
    if (origDisplay == 'none') element.style.display = 'block';    
    //======> Get Element Height <=======//
    var eleHeight = element.scrollHeight,
        elePadding = parseInt(getComputedStyle(element).padding,10) || 0;
    if (origDisplay === 'none') element.style.display = 'none';
    return eleHeight + elePadding;
};

//=======> Slide Up <=======//
const slideUp = (element,time) => {
    //======> Get Element Height and Current Display <=======//
    var origDisplay = element.style.display,
        eleHeight = getHeight(element);
    if (!time) time = 300;
    //===> Check Cureent State <===//
    if (origDisplay !== 'none') {
        //====== Prepare Element for Animation =======//
        element.style.overflow = "hidden";
        element.style.height = eleHeight + 'px';
        //====== Slide Up Animation =======//
        var keyframes = [
            { height: eleHeight + 'px' },
            { height: '0px' }
        ]
        element.animate(keyframes, {duration: time,});
        //====== After Animation Reset to Default =======//
        setTimeout(()=> {
            element.style.display = "none";
            element.style.height = null;
            element.style.overflow = null;
        },time);
    }
}

//=======> Slide Down <=======//
const slideDown = (element,time) => {
    //======> Get Element Height and Current Display <=======//
    var origDisplay = element.style.display || getComputedStyle(element).display,
        eleHeight = getHeight(element);
    if (!time) time = 300;
    //===> Slide Down <===//
    if (origDisplay && origDisplay === 'none')  {
        //====== Prepare Element for Animation =======//
        element.style.overflow = "hidden";
        element.style.display = "block";
        element.style.height = 0;
        //====== Set Height With Animation =======//
        setTimeout(()=>{
            //====== Slide Down Animation =======//
            var keyframes = [
                { height: '0px' },
                { height: eleHeight + 'px' }
            ]
            element.animate(keyframes, {duration: time,});
        },5);
        //====== After Animation Reset to Default =======//
        setTimeout(()=>{
            element.style.height = null;
            element.style.overflow = null;
        },time);
    }
}

//=======> Slide Toggle <=======//
const slideToggle = (element,time) => {
    //======> Get Element Height and Current Display <=======//
    var origDisplay = element.style.display || getComputedStyle(element).display,
        eleHeight = getHeight(element);
    if (!time) time = 300;
    //===> Slide Up <===//
    if (origDisplay && origDisplay !== 'none')  {
        //====== Prepare Element for Animation =======//
        element.style.overflow = "hidden";
        element.style.height = eleHeight + 'px';
        //====== Slide Up Animation =======//
        var keyframes = [
            { height: eleHeight + 'px' },
            { height: '0px' }
        ]
        element.animate(keyframes, {duration: time,});
        //====== After Animation Reset to Default =======//
        setTimeout(()=> {
            element.style.display = "none";
            element.style.height = null;
            element.style.overflow = null;
        },time);
    //===> Slide Down <===//
    } else {
        //====== Prepare Element for Animation =======//
        element.style.overflow = "hidden";
        element.style.display = "block";
        element.style.height = 0;
        //====== Set Height With Animation =======//
        setTimeout(()=>{
            //====== Slide Down Animation =======//
            var keyframes = [
                { height: '0px' },
                { height: eleHeight + 'px' }
            ]
            element.animate(keyframes, {duration: time,});
        },5);
        //====== After Animation Reset to Default =======//
        setTimeout(()=>{
            element.style.height = null;
            element.style.overflow = null;
        },time);
    }
}