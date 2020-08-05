/**======> Referance By Comment <======
 * ===> 00 - TinySlider [Third Party]
 * ===> 01 - Tornado Methods Object
 * ===> 02 - Navigation Menu Component
 * ===> 03 - Nested Menu Component
 * ===> 04 - Form UI Component
 * ===> 05 - DataTable Component
 * ===> 06 - Allow Access to Tornado Methods
 * ===> 07 - Tornado UI Utilities
*/

//======> TinySlider <=======//
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

//======> Tornado Methods Object <=======//
const Tornado = {
    /**======> Referance By Comment <======
     * ===> 01 - get Element
     * ===> 02 - get Elements
     * ===> 03 - get Page Direction
     * ===> 04 - Live Events Watcher
     * ===> 05 - get Parents Until
     * ===> 06 - Get All Siblings
     * ===> 07 - Get Next Sibling that Matchs
     * ===> 08 - Get Previous Sibling that Matchs
     * ===> 09 - Get All Next Sibling
     * ===> 10 - Get All Previous Sibling
     * ===> 11 - Set new Attributes
     * ===> 12 - Insert After
     * ===> 13 - Insert Before
     * ===> 14 - Append HTML
     * ===> 15 - Get Element Height
     * ===> 16 - Slide Toggle
     * ===> 17 - Slide Up
     * ===> 18 - Slide Down
     * ===> 19 - Animated Counter
     * ===> 20 - Set Background
     * ===> 21 - Images LazyLoading
     * ===> 22 - Sticky Elements
     * ===> 23 - Animations Pattrens
     * ===> 24 - Smoth Scroll
     * ===> 25 - ScrollSpy
     * ===> 26 - Event Date Counter
     * ===> 27 - Dropdown Button
     * ===> 28 - TNS Slider Method
     * ===> 29 - Tabs Method
     * ===> 30 - Accordion Method
     * ===> 31 - Popup Modals
     * ===> 32 - Lightbox Modal
     * ===> 33 - Design Options
     * ===> 34 - Theme Switcher
    */

    //======> get Elements <=======//
    "getElement"  : selector => document.querySelector(selector),

    //======> get Multiple Elements <=======//
    "getElements" : selector => document.querySelectorAll(selector),

    //======> get Page Direction <=======//
    "direction" : property => {
        //======> Default Directions <======//
        var pageDirection = 'ltr',
            startDirection = 'left',
            endDirection = 'right';
        //======> Detact Page Direction <======//
        if (!document.body.classList.contains('wp-admin')) pageDirection = getComputedStyle(document.body).direction;
        //======> Change Directions if RTL <======//
        if (pageDirection === 'rtl') {
            startDirection = 'right';
            endDirection = 'left';
        }
        //======> Return Property Value <======//
        if (property == "start") {
            return startDirection;
        } else if (property == "end") {
            return endDirection;
        } else {
            return pageDirection;
        }
    },

    //======> Live Events Watcher <=======//
    "liveEvent" : (selector, event, func) => {
        //==== interval for Checking new Elements ====//
        if (selector !== null) {
            var timerLoop = setInterval(() => {
                //==== Check if its Node Object =====//
                if (typeof(selector) === 'object') {
                    selector.addEventListener(event, func);
                } else {
                    //==== Selector ====//
                    Tornado.getElements(selector).forEach(element => element.addEventListener(event, func));
                }
            }, 500);
        }
    },

    //======> get Parents Until <=======//
    "parentsUntil" : (element, filter) => {
        //====> Filtering the Matching Parent
        if (typeof(element) === 'object') {
            for (let i = 0; element && element !== document; element = element.parentNode) {
                if (element.matches(filter)) {
                    return element;
                    break;
                }
            }
        } else {
            var result;
            Tornado.getElements(element).forEach(element => {
                for (let i = 0; element && element !== document; element = element.parentNode) {
                    if (element.matches(filter)) {
                        result = element;
                        break;
                    }
                }
            });
            return result;
        }
    },

    //======> Get All Siblings <=======//
    "getSiblings" : (options) => {
        /*== Get all siblings of ==> element @param {Node} ==> @return {Array} The siblings ==*/
        if (options.element !== null) {
            return Array.prototype.filter.call(options.element.parentNode.children, sibling => {
                if(!options.filter) return sibling !== options.element;
                if(sibling.matches(options.filter)) return sibling;
            });
        }
    },

    //======> Get Next Sibling that Matchs <=======//
    "getNextSibling" : (options) => {
        if (options.element !== null) {
            //====> Get the next sibling element
            var sibling = options.element.nextElementSibling;
            //====> Filtering the Matching Sibling
            if (options.filter && options.filter !== null) {
                if (sibling !== null && sibling.matches(options.filter)) return sibling;
            }
        }
    },

    //======> Get Previous Sibling that Matchs <=======//
    "getPrevSibling" : (options) => {
        if (options.element !== null && options.filter !== null) {
            //====> Get the Previous sibling element
            var sibling = options.element.previousElementSibling;
            //====> Filtering the Matching Sibling
            if (sibling !== null && sibling.matches(options.filter)) return sibling;
        }
    },

    //======> Get All Next Sibling <=======//
    "getNextSiblings" : (options) => {
        //====> Get the Next Sibling and Initialize Array
        var siblings = [],
            sibling = options.element.nextElementSibling;
        //====> Loop Throgh the Next Siblings
        while (sibling) {
            //====> Filtering Matched Sibling
            if (options.filter && sibling.matches(options.filter)) siblings.push(sibling);
            //====> Catch the New Next Sibling
            sibling = sibling.nextElementSibling;
        }
        //====> Return Siblings
        if (siblings.length > 0) return siblings;
    },

    //======> Get All Previous Sibling <=======//
    "getPrevSiblings" : (options) => {
        //====> Get the Previous Sibling and Initialize Array
        var siblings = [],
            sibling = options.element.previousElementSibling;
        //====> Loop Throgh the Next Siblings
        while (sibling) {
            //====> Filtering Matched Sibling
            if (options.filter && sibling.matches(options.filter)) siblings.push(sibling);
            //====> Catch the New Next Sibling
            sibling = sibling.previousElementSibling;
        }
        //====> Return Siblings
        if (siblings.length > 0) return siblings;
    },

    //======> Set new Attributes <=======//
    "setAttributes" : (element, options) => {
        if (element !== null) {
            Object.keys(options).forEach(function (attr) {
                element.setAttribute(attr, options[attr]);
            });
        }
    },

    //======> Insert After <=======//
    "insertAfter" : (element, reference) => {
        //===> Descover if its HTML String <===//
        var elementString = element;
        if (typeof elementString === 'string' && reference !== null) {
            var range = document.createRange();
            elementString = range.createContextualFragment(element);
        }
        //===> Insert the Element After the Target <====//
        reference?.parentNode.insertBefore(elementString, reference.nextSibling);
    },

    //======> Insert Before <=======//
    "insBefore" : (element, reference) => {
        //===> Descover if its HTML String <===//
        var elementString = element;
        if (typeof elementString === 'string' && reference !== null) {
            var range = document.createRange();
            elementString = range.createContextualFragment(element);
        }
        //===> Insert the Element After the Target <====//
        reference?.parentNode.insertBefore(elementString, reference);
    },

    //======> Append HTML <=======//
    "appendIn" : (element, reference) => {
        //===> Descover if its HTML String <===//
        if (typeof element === 'string' && reference !== null) {
            reference.innerHTML += element;
        } else if (reference !== null) {
            reference.appendChild(element);
        }
    },

    //=======> Get Element Height <=======//
    "getHeight" : (element) => {
        //======> for Getting the Height of a Hidden Element <=======//
        var origDisplay = getComputedStyle(element).display;
        if (origDisplay == 'none') element.style.display = 'block';    
        //======> Get Element Height <=======//
        var eleHeight = element.scrollHeight,
            elePadding = parseInt(getComputedStyle(element).padding,10) || 0;
        if (origDisplay === 'none') element.style.display = 'none';
        return eleHeight + elePadding;
    },

    //======> ViewPort Detactor <======//
    "inView" : (element) => {
        //==== Get the Element Data ====//
        var scrollPosition = window.scrollY || window.pageYOffset,
            boundsTop = element.getBoundingClientRect().top + scrollPosition,
            viewport = {top: scrollPosition,bottom: scrollPosition + window.innerHeight},
            bounds = {top: boundsTop, bottom: boundsTop + element.clientHeight};
        //====== if its visible =====//
        if (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom || bounds.top <= viewport.bottom && bounds.top >= viewport.top) {
            return true;
        } else {
            return false;
        }
    },

    //=======> Slide Toggle <=======//
    "slideToggle" : (element,time) => {
        //======> Get Element Height and Current Display <=======//
        var origDisplay = element.style.display || getComputedStyle(element).display,
            eleHeight = Tornado.getHeight(element);
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
    },

    //=======> Slide Up <=======//
    "slideUp" : (element,time) => {
        //======> Get Element Height and Current Display <=======//
        var origDisplay = element.style.display,
            eleHeight = Tornado.getHeight(element);
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
    },

    //=======> Slide Down <=======//
    "slideDown" : (element,time) => {
        //======> Get Element Height and Current Display <=======//
        var origDisplay = element.style.display || getComputedStyle(element).display,
            eleHeight = Tornado.getHeight(element);
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
    },

    //=======> Animated Counter <=======//
    "counter" : (options) => {
        if(options.element.classList.contains('coudone')) return;
        //====> Get Element <===//
        var element = options.element,
            //====> Check if Element is Input <===//
            input = (element.nodeName.toLowerCase() === 'input') ? true : false,
            //====> Get the Element Number to Count <===//
            value = options.counter || parseFloat(element.getAttribute('data-counter')) || 0,
            //====> Get Animation steps <===//
            duration = options.duration || parseInt(element.getAttribute('data-duration')) || 2000,
            //====> Get Animation Delay <===//
            delay = options.delay || parseInt(element.getAttribute('data-delay')) || 0,
            //====> Get Decimal Pattren <===//
            decimal = options.decimal || parseInt(element.getAttribute('data-decimal')) || 0,
            //====> Get symbol <===//
            symbol = options.symbol ||  element.getAttribute('data-symbol') || '',
            //====> Get Number Steps steps <===//
            steps =  options.steps ||  parseInt(element.getAttribute('data-steps')) || 10,
            //====> Count to Start From <====//
            count = 0,
            //====> Count Increment Math <====//
            increment = value / (duration / steps),
            //====> Interval Runer <====//
            interval = null,
            //====> Numbers Filter <====//
            regex = /\B(?=(\d{3})+(?!\d))/g;
            //====> Count Runer <===//
            const runCounter = () => {
                count += increment;
                if (count < value) {
                    (input) ? element.value = symbol + (count).toFixed(decimal).toString().replace(regex, ','): element.innerHTML = symbol + (count).toFixed(decimal).toString().replace(regex, ',');
                } else {
                    clearInterval(interval);
                    (input) ? element.value = symbol + (value).toFixed(decimal).toString().replace(regex, ','): element.innerHTML = symbol + (value).toFixed(decimal).toString().replace(regex, ',');
                }
            };
        //====> Counting Up <===//
        setTimeout(function () {
            interval = setInterval(runCounter.bind(this), steps);
        }.bind(this), delay);

        //====> Stop Counting When Finsh <===//
        this.reset = function () {
            clearInterval(interval);
            value = options.value || parseFloat(element.getAttribute('data-counter')) || 0;
            duration = options.duration || parseInt(element.getAttribute('data-duration')) || 2000;
            increment = value / (duration / steps);
            delay = options.delay || parseInt(element.getAttribute('data-delay')) || 0;
            count = 0;
            interval = setInterval(runCounter, steps);
        }.bind(this);
        //===> Done <===//
        element.classList.add('coudone');
    },

    //======> Set Background <======//
    "setBackground" : (selector,lazy?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector || '[data-src]');
        //====> Selector Handler <====//
        selector.forEach(element => {
            if(element.classList.contains('dbdone')) return;
            //====> Lazyloader Set <====//
            if (lazy) {
                element.classList.add('lazyloader');
                element.style.backgroundImage = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+)`;
            }
            //====> get the Target <====//
            var bgData = element.getAttribute('data-src'),
                //====> Set Background Method <=====//
                setBackground = ele => {
                    if(bgData === null || bgData === undefined || bgData === '' || bgData === ' ') {
                        element.style.backgroundImage = '';
                    } else {
                        bgData = bgData.replace(' ','%20');
                        bgData = bgData.replace('#','%23');
                        if (lazy) element.classList.remove('lazyloader');
                        element.style.backgroundImage = 'url("' + bgData + '")';
                    }
                },
                //====> Detact if there is a Slider <====//
                sliderDetact = Tornado.parentsUntil(element,'.tns-outer');
            //====> Lazyloading Mode <====//
            if (lazy) {
                if (bgData === '' || bgData === ' ') element.classList.remove('lazyloader');
                //====> Scroll Event <====//
                window.addEventListener('scroll', event => {
                    if (Tornado.inView(element)) {
                        if (sliderDetact) {
                            var sliderItems = sliderDetact.querySelectorAll('[data-src]');
                            Array.from(sliderItems).forEach(item => setBackground(item));
                        } else {
                            setBackground(element);
                        }
                    }
                });
            }
            //====> if its in first view <=====//
            if (lazy && Tornado.inView(element)) {
                /*======> if not Slider Set Background <====*/
                if (!sliderDetact) setBackground(element);
            } else if (!lazy) {
                setBackground(element);
            }
            //===> Done <===//
            element.classList.add('dbdone');
        });
    },

    //======> Images LazyLoading <======//
    "lazyLoading" : (selector) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector || '[data-lazyload]');
        //========> LazyLoading <========//
        selector.forEach(element => {
            if(element.classList.contains('lldone')) return;
            //====> Default Loader <====//
            element.setAttribute('src', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+");
            //====> Set Media Method <====//
            var setMediaImages = () => {
                //==== Get the Element Data ====//
                var newResault = Tornado.inView(element),
                    lazydata = element.getAttribute('data-lazyload');
                //====== if its visible =====//
                if (newResault) element.setAttribute('src',lazydata);
            };
            
            setMediaImages();
            //====> Check if Target in Slider <====//
            var sliderDetact = Tornado.parentsUntil(element,'.tns-outer');

            //====> Scroll Event <====//
            window.addEventListener('scroll', event => {
                if (sliderDetact) {
                    var sliderItems = sliderDetact.querySelectorAll('[data-lazyload]');
                    Array.from(sliderItems).forEach(item => {
                        var lazydata = element.getAttribute('data-lazyload');
                            element.setAttribute('src',lazydata);
                    });
                } else {
                    setMediaImages();
                }
            });

            //====> if its in first view <=====//
            var newResault = Tornado.inView(element);
            if (newResault && !sliderDetact) setMediaImages();

            //===> Done <===//
            element.classList.add('lldone');
        });
    },

    //======> Sticky Elements <======//
    "sticky" : (selector) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector || '[data-sticky]');
        //====> Selector Handler <====//
        selector.forEach(element => {
            if(element.classList.contains('stdone')) return;
            //=== Calculate Offset ===//
            var elementTop = element.offsetTop;
            //=== On Window Scroll ===//
            window.addEventListener('scroll', event => {
                //==== if the Postion Less Then 50 Add Extra 10 pixels ====//
                if (elementTop < 50) { elementTop = element.offsetTop+10; }
                //==== if the Element Hit the Top Toggle Class ====//
                if (window.scrollY >= elementTop) {
                    element.classList.add('is-sticky');
                } else {
                    element.classList.remove('is-sticky');
                }
            });
            //===> Done <===//
            element.classList.add('stdone');
        });
    },

    //======> Animations Pattrens <======//
    "animation" : {
        "ease" : (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }  
    },

    //======> Smoth Scroll <======//
    "smothScroll" : (options) => {
        //====> Check if Selector or Element <====//
        let selector = options.selector;
        typeof(selector) === 'object' ? options.selector = [selector] : options.selector = Tornado.getElements(selector || '.smoth-scroll');
        //====> Selector Handler <====//
        options.selector.forEach(element => {
            if(element.classList.contains('tssdone')) return;
            element.addEventListener('click', event => {
                event.preventDefault();

                //====> get the Target and its Options <====//
                var scrollTarget = element.getAttribute('href') || element.getAttribute('data-target'),
                    duration = options.duration || element.getAttribute('data-duration') || 1000,
                    target = Tornado.getElement(options.target || scrollTarget),
                    startTime = null,
                    targetPosition = target.getBoundingClientRect().top,
                    startPosition = window.pageYOffset || window.scrollY;

                //====> Scroll Animation <====//
                function smothlyScroll(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    var timeElapsed = currentTime - startTime,
                        scrollToTarget = Tornado.animation.ease(timeElapsed, startPosition, targetPosition, duration);
                    window.scrollTo(0, scrollToTarget);
                    if (timeElapsed < duration) requestAnimationFrame(smothlyScroll);
                }

                requestAnimationFrame(smothlyScroll);
            });
            //===> Done <===//
            element.classList.add('tssdone');
        });
    },

    //======> ScrollSpy <======//
    "scrollSpy" : (options) => {
        //====> Check if Selector or Element <====//
        let selector = options.selector;
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);
        //====> Scroll Spy Elements <====//
        selector.forEach(element => {
            if(element.classList.contains('ssdone')) return;
            //===> Get Children <===//
            element.querySelectorAll('[href],[data-target]').forEach(element => {
                Tornado.smothScroll({
                    element:element,
                    duration:options.duration,
                });
                //====> get the Target <====//
                var scrollTarget   = options.target || element.getAttribute('href') || element.getAttribute('data-target'),
                    selectedTarget = Tornado.getElement(scrollTarget),
                    targetOffset   = selectedTarget.offsetTop - 100,
                    parentDetactor = element.parentNode;
                //====> Scroll Event <====//
                window.addEventListener('scroll', event => {
                    //====> if the position of the section less then the current position <====//
                    if (window.scrollY >= targetOffset) {
                        //====> Add Class Active <====//
                        if (parentDetactor.matches('li')) {
                            var otherSiblings = Tornado.getSiblings({element:parentDetactor});
                            parentDetactor.classList.add('active');
                            otherSiblings.forEach(element => element.classList.remove('active'))
                        } else if (element.hasAttribute('data-target') || element.hasAttribute('href')) {
                            element.classList.add('active');
                            var spySiblings = Tornado.getSiblings({element:element});
                            spySiblings.forEach(element => element.classList.remove('active'));
                        } else {
                            var otherSiblings = Tornado.getSiblings({element:element});
                            element.classList.add('active');
                            otherSiblings.forEach(element => element.classList.remove('active'));
                        }
                    } else {
                        //====> Remove Class Active <====//
                        if (parentDetactor.matches('li')) {
                            var otherSiblings = Tornado.getSiblings({element:parentDetactor});
                            parentDetactor.classList.remove('active');
                        } else if (element.hasAttribute('data-target')) {
                            element.classList.remove('active');
                        } else {
                            var parent = element.parentNode;
                            parent.classList.remove('active');
                        }
                    }
                });
            });
            //===> Done <===//
            element.classList.add('ssdone');
        });
    },

    //=====> Event Date Counter <=====//
    "dateCounter" : (options) => {
        //====> Check if Selector or Element <====//
        let selector = options.selector;
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector || '.date-counter');
        //====== Get Element and its Data =======//
        selector.forEach(timerWraper => {
            if(timerWraper.classList.contains('dcdone')) return;
            var timerSeconds  = timerWraper.querySelector('.seconds'),
                timerMinutes  = timerWraper.querySelector('.minutes'),
                timerHours    = timerWraper.querySelector('.hours'),
                timerDays     = timerWraper.querySelector('.days'),
                timerDate     = options.date || timerWraper.getAttribute('data-date'),
                countDownDate = new Date(timerDate).getTime();
            //========> Update the count down every 1 second <========//
            var updateCount = setInterval(function () {
                //=======> Get today's date and time <========//
                var now = new Date().getTime();
                //=======> Find the distance between now and the count down date  <========//
                var distance = countDownDate - now;
                //=======> Time calculations for days, hours, minutes and seconds <========//
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                //=======> Display the result in the elements <========//
                timerSeconds.innerHTML = seconds;
                timerMinutes.innerHTML = minutes;
                timerHours.innerHTML = hours;
                timerDays.innerHTML = days;

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(updateCount);
                    if(Tornado.direction('page') == 'ltr') {
                        timerWraper.innerHTML = "<div class='expired'>This Event has been Expired!</div>";
                    } else {
                        timerWraper.innerHTML = "<div class='expired'>لقد انتهي هذا العرض!</div>";
                    }
                }
            }, 1000);
            //===> Done <===//
            timerWraper.classList.add('dcdone');
        });
    },

    //=====> Dropdown Button <=====//
    "dropdown" : selector => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);
        //===> Dropdown Buttons <===//
        selector.forEach(element => {
            if(element.classList.contains('dd-done')) return;
            //=====> Accessibility <=====//
            Tornado.setAttributes(element,{
                "tabindex":0,
                "role":"button",
                "aria-pressed":"false",
            });

            //===> When Click on the Button <===//
            element.addEventListener('click', event => {
                //==> Prevent Default Behavor <==//
                event.preventDefault();
                //===> Deactivate Other <===//
                Tornado.getElement('.dropdown.active')?.classList.remove('active');
                //===> Activat Button and List <===//
                Tornado.parentsUntil(event.target,'.dropdown')?.classList.add('active');
            });

            //===> Deactivate on Blank <===//
            window.onclick = blank => {
                if (!blank.target.matches('.dropdown') && !blank.target.matches('.dropdown *')) {
                    Tornado.getElements('.dropdown.active').forEach(close => close.classList.remove('active'));
                }
            };

            //===> Done <===//
            element.classList.add('dd-done');
        });
    },

    //=====> TNS Slider Method <=====//
    "slider" : (selector, options?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //====> Default Options <====//
        if(!options) options = {};
        if(!options.hasOwnProperty('autoplay'))   options.autoplay = true;
        if(!options.hasOwnProperty('hoverPause')) options.hoverPause = true;
        if(!options.hasOwnProperty('controls'))   options.controls   = true; 
        if(!options.hasOwnProperty('infinite'))   options.infinite = true;
        if(!options.hasOwnProperty('arrowKeys'))  options.arrowKeys = true;
        if(!options.hasOwnProperty('mouseDrag'))  options.mouseDrag   = true; 
        if(!options.hasOwnProperty('touch'))      options.touch = true;

        //====> Sliders Array <====//
        var sliders = [];

        //====> For Each Slider <====//
        selector.forEach(element => {
            //=====> Flow Direction Set <=====//
            var sliderDirection = options?.direction || false;
            if(!sliderDirection && Tornado.direction('page') == 'ltr') sliderDirection = "forward";
            if(!sliderDirection && Tornado.direction('page') == 'rtl') sliderDirection = "backward";

            //=====> Responsive Handler <=====//
            var responsiveHandler:any = {
                576  : options?.responsive?.small  || {},
                768  : options?.responsive?.medium || {},
                1200 : options?.responsive?.large  || {},
                1366 : options?.responsive?.xlarge || {},
            };

            if (!options?.responsive) responsiveHandler = false;

            //=====> Get Slider Options <=====//
            var TnOptions:object = {
                container  : element,
                //===> Items Options <===//
                items      : options.items      || 1,     //===> Display Slides Count
                slideBy    : options.slideBy    || 1,     //===> Change Slide Steps
                autoWidth  : options.autoWidth  || false, //===> Adaptive Width from Each Item
                autoHeight : options.autoHeight || false, //===> Adaptive Height from Each Item
                center     : options.center     || false, //===> Center the Active Slide
                responsive : responsiveHandler  || false, //===> Responsive Options
                //===> Autoplay Options <===//
                autoplay           : options.autoplay, //===> Autoplay Support
                autoplayTimeout    : options.duration   || 6000,  //===> Autoplay Duration
                autoplayHoverPause : options.hoverPause,  //===> Pause on Hover
                autoplayButton     : options.playButton || false, //===> Show Play Button
                //===> Controls Options <===//
                nav               : options.pagination        || false,  //===> Show Dots Pagination
                navContainer      : options.navContainer      || false,  //===> Define Pagination Container
                controls          : options.controls,                    //===> Show Arrows
                controlsContainer : options.controlsContainer || false,  //===> Define Arrows Container
                //===> Animations Options <===//
                mode       : options.animation     || "carousel", //===> Animation Mode [carousel, gallery]
                speed      : options.speed         || 700,        //===> Animation Speed
                axis       : options.flow          || "horizontal",    //===> Slider Flow
                animateIn  : options.animateIn     || "tns-fadeIn",    //===> Inter Animation Class
                animateOut : options.animateOut    || "tns-fadeOut",   //===> Outer Animation Class
                animateDelay  : options.animateDelay  || false,        //===> Animation Delay
                animateNormal : options.animateNormal || "tns-normal", //===> Default Animation Class
                //===> Other Options <===//
                mouseDrag    :  options.mouseDrag,
                touch        :  options.touch,
                swipeAngle   :  options.swipeAngle   || 30,
                nested       :  options.nested       || false,
                loop         :  options.infinite,
                arrowKeys    :  options.arrowKeys,
                rewind       :  options.rewind       || false,
                fixedWidth   :  options.fixedWidth   || false,
                viewportMax  :  options.viewportMax  || false,
                onInit       :  options.onInit  || false,
                controlsText :  options.controlsText || ['',''],
                autoplayText :  options.autoplayText || ['',''],
                autoplayDirection :  sliderDirection,
                navAsThumbnails   :  options.navAsThumbnails || false,
                autoplayButtonOutput : options.playButton || false,
            }

            //=====> Create The Slider <=====//
            var TnSlider = tns(TnOptions);

            //=====> Return The Slider <=====//
            if(TnSlider) sliders.push(TnSlider);

            //====> Adding Uniuqe Class to Slider Wraper <====//
            if(options?.uniuqClass) element.closest('.tns-outer')?.classList.add(`${options.uniuqClass}`);

            //====> Fix Grid Mode <====//
            if (element.classList.contains('row')) element.closest('.tns-outer')?.classList.add(`grid-mode`);
        });

        return sliders;
    },

    //=====> Tabs Method <=====//
    "tabs" : (selector, options?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //=====> Tabs Options <=====//
        var Options = {
            active   : options?.active   || 0,     //===> Activate Tab on init by [ index || ID ]
            hashOpen : options?.hashOpen || true,  //===> Activate Tab by URL Hash [true || false]
            onChange : options?.onChange || function (btn?, tab?, func?) { return func; }, //===> On Tab Change Call Back Function
            onShow   : options?.onShow   || function (btn?, tab?, func?) { return func; }, //===> On Tab Shows Call Back Function
            onHide   : options?.onHide   || function (btn?, tab?, func?) { return func; }, //===> On Tab Hide Call Back Function
        }

        //=====> Activate Handler <=====//
        const TabActivate = element => {
            //====> get First Tab Id <====//
            var firstTab = element.matches('*:first-child') ? element.getAttribute('data-tab' || 'href') : null;

            //====> get the ID from Options <====//
            if (typeof(Options.active) == 'number') {
                //====> get the ID <====//
                firstTab = element.matches(`*:nth-child(${Options.active+1})`) ? element.getAttribute('data-tab' || 'href') : null;
            } else if (typeof(Options.active) == 'string') {
                //====> get the ID <====/
                firstTab = Options.active;
            }

            //====> get the ID from Url <====//
            if(Options.hashOpen) if (window.location.hash.substr(1)) firstTab = window.location.hash.substr(1);

            if (firstTab) {
                //====> Cleanup the ID <====//
                firstTab = firstTab.replace(/#/g, "");
                //====> Activate the Tab <====//
                Tornado.getElement(`#${firstTab}`)?.classList.add('active');
                Tornado.getElement(`[data-tab="${firstTab}"]` || `a[href="#${firstTab}"]`)?.classList.add('active');
            }
        };

        //=====> for Each Tab Button <=====//
        selector.forEach((element,index) => {
            //====> if Ts is Done Return no thing <====//
            if(element.classList.contains('tbdone')) return;

            //=====> Activate Tab <=====//
            TabActivate(element);

            //=====> Accessibility <=====//
            Tornado.setAttributes(element,{
                "tabindex":0,
                "role":"button",
                "aria-pressed":"false",
            });

            //=====> Tabs Change Handler <=====//
            element.addEventListener('click', event => {
                //====> get the Tab <====//
                var panelID  = element.getAttribute('data-tab' || 'href'),
                    thePanel = Tornado.getElement(`#${panelID.replace(/#/g, "")}`);

                //====> on Change Function <====//
                if(Options.onChange) Options.onChange(element,thePanel);

                //====> De-Activate Siblings <====//
                Tornado.getSiblings({element:element, filter:'.active'}).forEach(sibling => {
                    //====> De-Activated Sibling <====//
                    sibling.classList.remove('active');
                    //====> Hide Activated Sibling Panel <====//
                    var sibPanel = sibling.getAttribute('data-tab' || 'href');
                        sibPanel = Tornado.getElement(`#${sibPanel.replace(/#/g, "")}`);
                    sibPanel?.classList.remove('active');
                    //====> on Hide Function <====//
                    if(Options.onHide) Options.onHide(sibling,sibPanel);
                });

                //====> Activate Current Tab <====//
                element.classList.add('active');
                thePanel.classList.add('active');

                //====> on Shows Function <====//
                if(Options.onShow) Options.onShow(element,thePanel);
            });

            //====> Done <====//
            element.classList.add('tbdone');
        });
    },

    //=====> Accordion <=====//
    "accordion" : (selector, options?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //=====> Accordion Options <=====//
        var Options = {
            onChange   : options?.onChange || function (btn?, panel?, func?) { return func; }, //===> On Panel Change Call Back Function
            onShow     : options?.onHide   || function (btn?, panel?, func?) { return func; }, //===> On Panel Shows Call Back Function
            onHide     : options?.onShow   || function (btn?, panel?, func?) { return func; }, //===> On Panel Hide Call Back Function
        }

        //======> Accordion Trigger <======//
        selector.forEach(element => {
            //====> if Ts is Done Return no thing <====//
            if(element.classList.contains('acdone')) return;

            //====> Store Playable Elements <====//
            var nextPanel   = Tornado.getNextSibling({element:element, filter:'.accordion-content'}),
                thisParent  = Tornado.parentsUntil(element, '.accordion-item');

            //=====> Accessibility <=====//
            Tornado.setAttributes(element,{
                "tabindex":0,
                "role":"button",
                "aria-pressed":"false",
            });

            //====> Activate First Accordion <====//
            if(thisParent.matches('.accordion-item:first-child')) {
                if(!Tornado.parentsUntil(element, '.accordion')?.querySelector('.active')) {
                    thisParent.classList.add('active');
                }
            }

            //====> Accordion Handler <====//
            element.addEventListener('click', event => {
                event.preventDefault();
    
                //==== Check if the Clicked Button is Activated or Not ====//
                if (thisParent.classList.contains('active')) {
                    //==== Deactivate Clicked Accordion if its Activated ====//
                    thisParent.classList.remove('active');
                    //==== Close the Panel ====//
                    Tornado.slideUp(nextPanel,300);
                    //====> on Hide Function <====//
                    if(Options.onHide) Options.onHide(element, nextPanel);
                } else {
                    //==== Close Siblings Panels ====//
                    Tornado.getSiblings({element:thisParent}).forEach((sibling:any) => {
                        //==== Close Other Activated Siblings ====//
                        sibling.classList.remove('active');
                        var siblingPanel = sibling.querySelector('.accordion-content');
                        //==== Close Siblings Panels ====//
                        if (siblingPanel) Tornado.slideUp(siblingPanel,300);
                    });
                    //==== Open the Panel ====//
                    Tornado.slideDown(nextPanel,300);
                    //==== Deactivate Clicked Accordion if its Activated ====//
                    thisParent.classList.add('active');
                    //====> on Shows Function <====//
                    if(Options.onShow) Options.onChange(element, nextPanel);
                }

                //====> on Change Function <====//
                if(Options.onChange) Options.onChange(element, nextPanel);
            });

            //====> Done <====//
            element.classList.add('acdone');
        });
    },

    //=====> Popup Modals <=====//
    "popup" : (selector, options?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);
    
        //=====> Tabs Options <=====//
        var Options = {
            hashOpen : options?.hashOpen || true,  //===> Activate Tab by URL Hash [true || false]
            onShow   : options?.onShow   || function (trigger?, popup?, func?) { return func; }, //===> On Tab Shows Call Back Function
            onHide   : options?.onHide   || function (trigger?, popup?, func?) { return func; }, //===> On Tab Hide Call Back Function
        }
    
        selector.forEach(element => {
            //====> if Ts is Done Return no thing <====//
            if(element.classList.contains('pmdone')) return;
    
            //=====> Get Popup Data <=====//
            var theID = element.getAttribute('id');
    
            /*=====> Create Overlay Trigger <=====*/
            element.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="modal-overlay"></a>');
    
            //=====> Open by URL <=====//
            if (Options.hashOpen) {
                var urlHash = window.location.hash.substr(1);
                if (urlHash == theID) element.classList.add('active');
                //====> on Shows Function <====//
                if(Options.onShow) Options.onShow(null, element);
            }
    
            //=====> Activate Triggers <=====///
            Tornado.getElements(`*[data-modal="${theID}"]`)?.forEach(trigger => {
                //=====> Accessibility <=====//
                Tornado.setAttributes(trigger,{
                    "tabindex":0,
                    "role":"button",
                    "aria-pressed":"false",
                });
                //====> Trigger Handler <====//
                trigger.addEventListener('click', event => {
                    event.preventDefault();
                    //==== Open the Modal ====//
                    Tornado.getElement(`#${theID}`).classList.add('active');
                    //====> on Shows Function <====//
                    if(Options.onShow) Options.onShow(event.target, element);
                })
            });
    
            //=====> Activate Overlay Trigger <=====//
            element.querySelector('.modal-overlay')?.addEventListener('click', event => {
                event.preventDefault();
                //==== Close the Modal ====//
                event.target.parentNode.classList.remove('active');
                //====> on Hide Function <====//
                if(Options.onHide) Options.onShow(null , element);
            });
    
            //=====> Activate Close Triggers <=====///
            element.querySelectorAll('.close-modal').forEach(trigger => {
                trigger.addEventListener('click', event => {
                    event.preventDefault();
                    //==== Close the Modal ====//
                    trigger.closest('.modal-box').classList.remove('active');
                    //====> on Hide Function <====//
                    if(Options.onHide) Options.onShow(event.target , element);
                });
            });
    
            //====> Done <====//
            element.classList.add('pmdone');
        });
    },

    //=====> Lightbox Modal <=====//
    "lightbox" : selector => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //====> Create Lightbox <====//
        if(selector.length >= 1) {
            //====> Lightbox Markup <====//
            document.body.insertAdjacentHTML('beforeend', `
                <div class="modal-box" id="lightbox-modal">
                    <!-- Overlay -->
                    <a href="javascript:void(0);" class="modal-overlay"></a>
                    <!-- Lightbox Content -->
                    <div class="modal-content">
                        <!-- Images Slider -->
                        <div class="lightbox-slider"></div>
                        <!-- // Images Slider -->
                    </div>
                    <!-- // Lightbox Content -->
                </div> 
            `);

            //====> Lightbox Data <====//
            var lightbox     = Tornado.getElement('#lightbox-modal'),
                lightContent = lightbox.querySelector('.modal-content'),
                lightSlider  = lightContent.querySelector('.lightbox-slider');

            //====> Overlay Trigger <====//
            lightbox.querySelector('.modal-overlay')?.addEventListener('click', event => {
                event.target.parentNode.classList.remove('active');
                lightbox.querySelector('.modal-content').innerHTML = '<div class="lightbox-slider"></div>';
                lightSlider = lightbox.querySelector('.lightbox-slider');
            });
        }

        //====> for Each Lightbox <=====//
        selector.forEach(element => {
            //====> if Ts is Done Return no thing <====//
            if(element.classList.contains('lbdone')) return;

            //====> Lightbox Handler <====//
            element.addEventListener('click', event => {
                event.preventDefault();
                //====> Images Data <====//
                var group = element.getAttribute('data-group'),
                    images = [];
                //====> Group Build <====//
                if(element.hasAttribute('data-group')) {
                    //====> get All Related Images <====//
                    Tornado.getElements(`[data-group="${group}"]`)?.forEach(img => {
                        //====> get the Image <====//
                        images.push(img.getAttribute('data-lightbox'));
                        //====> Create the Image <====//
                        images.forEach(image => {
                            Tornado.appendIn(`<div class="item" style="background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+);"> <img src="${image}" alt="original size"> </div>`, lightSlider);
                        });
                    });
                    //====> Build the Slider <====//
                    var lightSlide = Tornado.slider(lightSlider, {
                        autoWidth  : false,
                        autoHeight : true,
                        autoplay   : false,
                        pagination : false,
                    });
                } else {
                    images.push(element.getAttribute('data-lightbox'));
                    //====> Create the Image <====//
                    images.forEach(image => {
                        Tornado.appendIn(`<div class="item" style="background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+);"> <img src="${image}" alt="original size"> </div>`, lightSlider);
                    });
                }
                //====> Show the Lightbox <====//
                lightbox.classList.add('active');
                //====> Clear Loading <====//
                lightSlider.querySelectorAll('img')?.forEach(img => {
                    //====> Size Data <====//
                    var firstWidth = lightSlider.querySelector('.item img').clientWidth,
                        parentTns = Tornado.parentsUntil(lightSlider, '.tns-outer');
                    //====> Images Load <====//
                    img.onload = () => {
                        img.parentNode.style.backgroundImage = null;
                        img.clientWidth > firstWidth ? firstWidth = img.clientWidth : null;
                        //====> Resize <====//
                        if(firstWidth < window.innerWidth && parentTns) parentTns.style.width = firstWidth+'px';
                    };
                });
            });

            //====> Done <====//
            element.classList.add('lbdone');
        });
    },

    //=====> Design Options <=====//
    "design" : options => {
        //====> Fonts Loader <====//
        let fontLoader = () => {
            var fonts = [];
            //===> LTR Fonts <===//
            if (options?.font?.include && Tornado.direction('page') == 'ltr') options.font.include.forEach(font => fonts.push(`<link rel="stylesheet" media="all" href="${font}" class="tornado-fonts"/>`));
            //===> RTL Fonts <===//
            if (options?.font?.rtl?.include && Tornado.direction('page') == 'rtl') options.font.rtl.include.forEach(font => fonts.push(`<link rel="stylesheet" media="all" href="${font}" class="tornado-fonts"/>`));
            //===> Return Fonts Links <===//
            return fonts;
        }
        //====> Colors Options <====//
        var colorsOptions = `
            /*======== Backgrounds ========*/
            ${options?.colors?.background?  `--body-bg :${options?.colors?.background}`:''};
            /*======== Primary ========*/
            ${options?.colors?.primary?        `--primary-color:${options?.colors?.primary}`:''};
            ${options?.colors?.primaryHover?   `--primary-hover:${options?.colors?.primaryHover}`:''};
            ${options?.colors?.primaryReverse? `--primary-reverse:${options?.colors?.primaryReverse}`:''};
            /*======== Secondary ========*/
            ${options?.colors?.secondary?        `--secondary-color:${options?.colors?.secondary}`:''};
            ${options?.colors?.secondaryHover?   `--secondary-hover:${options?.colors?.secondaryHover}`:''};
            ${options?.colors?.secondaryReverse? `--secondary-reverse:${options?.colors?.secondaryReverse}`:''};
            /*======== Assets Colors ========*/
            ${options?.colors?.info?     `--info-color:${options?.colors?.info}`:''};
            ${options?.colors?.gray?     `--gray-color:${options?.colors?.gray}`:''};
            ${options?.colors?.dark?     `--dark-color:${options?.colors?.dark}`:''};
            ${options?.colors?.success?  `--success-color:${options?.colors?.success}`:''};
            ${options?.colors?.danger?   `--danger-color:${options?.colors?.danger}`:''};
            ${options?.colors?.warning?  `--warning-color:${options?.colors?.warning}`:''};
            ${options?.colors?.disable?  `--disable-color:${options?.colors?.disable}`:''};
            /*======== Assets Light ========*/
            ${options?.colors?.infoLight?     `--info-light:${options?.colors?.infoLight}`:''};
            ${options?.colors?.grayLight?     `--gray-light:${options?.colors?.grayLight}`:''};
            ${options?.colors?.darkLight?     `--dark-light:${options?.colors?.darkLight}`:''};
            ${options?.colors?.successLight?  `--success-light:${options?.colors?.successLight}`:''};
            ${options?.colors?.dangerLight?   `--danger-light:${options?.colors?.dangerLight}`:''};
            ${options?.colors?.warningLight?  `--warning-light:${options?.colors?.warningLight}`:''};
            /*======== Typography Colors ========*/
            ${options?.colors?.headlines?    `--headlines-color:${options?.colors?.headlines}`:''};
            ${options?.colors?.typography?   `--typography-color:${options?.colors?.typography}`:''};
            ${options?.colors?.lightReverse? `--light-reverse:${options?.colors?.lightReverse}`:''};
            ${options?.colors?.darkReverse?  `--dark-reverse:${options?.colors?.darkReverse}`:''};
        `;
        //====> RTL Handler <====//
        var rtlFont = () => {
            if(options?.font?.rtl && Tornado.direction('page') == 'rtl') {
                options?.font?.rtl.primary?       options.font.primary = options.font.rtl.primary : '';
                options?.font?.rtl.secondary?     options.font.primary = options.font.rtl.secondary : '';
                options?.font?.rtl.normalWeight?  options.font.normalWeight  = options.font.rtl.normalWeight:'';
                options?.font?.rtl.mediumWeight?  options.font.mediumWeight  = options.font.rtl.mediumWeight:'';
                options?.font?.rtl.strongWeight?  options.font.strongWeight  = options.font.rtl.strongWeight:'';
            } else {return '';}
        }
        //====> Font Options <====//
        var fontOptions = `
            /*=====> RTL Fonts <=====*/
            ${rtlFont()}
            /*=====> Font Famileis <=====*/
            ${options?.font?.primary?   `--primary-font:${options.font.primary}`:''};
            ${options?.font?.secondary? `--secondary-font:${options.font.secondary}`:''};
            ${options?.font?.icons?     `--icons-font:${options.font.icons}`:''};
            /*=====> Font Sizes <=====*/
            ${options?.font?.size?        `--base-l-size:${options.font.size}`:''};
            ${options?.font?.sizeMedium?  `--base-m-size:${options.font.sizeMedium}`:''};
            ${options?.font?.sizeSmall?   `--base-s-size:${options.font.sizeSmall}`:''};
            /*=====> Line-Height <=====*/
            ${options?.font?.lineHeight?  `--line-height:${options.font.lineHeight}`:''};
            /*=====> Font Weights <=====*/
            ${options?.font?.normalWeight?  `--normal-weight:${options.font.normalWeight}`:''};
            ${options?.font?.mediumWeight?  `--medium-weight:${options.font.mediumWeight}`:''};
            ${options?.font?.strongWeight?  `--strong-weight:${options.font.strongWeight}`:''};
        `;
        //====> Forms Options <====//
        var formOptions = `
            ${options?.forms?.background?  `--forms-bg:${options.forms.background}`:''};
            ${options?.forms?.typography?  `--forms-color:${options.forms.typography}`:''};
            ${options?.forms?.edgeRadius?  `--forms-radius:${options.forms.edgeRadius}`:''};
            ${options?.forms?.border?      `--forms-border:${options.forms.border}`:''};
            ${options?.forms?.darkerBG?    `--forms-darker-bg:${options.forms.darkerBG}`:''};
            ${options?.forms?.alertColor?  `--forms-alert:${options.forms.alertColor}`:''};
            ${options?.forms?.height?      `--forms-height:${options.forms.height}`:''};
            ${options?.forms?.heightS?     `--forms-height-small:${options.forms.heightS}`:''};
            ${options?.forms?.heightL?     `--forms-height-large:${options.forms.heightL}`:''};
            ${options?.forms?.textArea?    `--forms-height-txarea:${options.forms.textArea}`:''};
            ${options?.forms?.padding?     `--forms-padding:${options.forms.padding}`:''};
            ${options?.forms?.paddingL?    `--forms-padding-large:${options.forms.paddingL}`:''};
            ${options?.forms?.gutter?      `--forms-gutter:${options.forms.gutter}`:''};
            ${options?.forms?.shadow?      `--forms-shadow:${options.forms.shadow}`:''};
            ${options?.forms?.btnShadow?   `--forms-btns-shadow:${options.forms.btnShadow}`:''};
        `
        //====> Components Options <====//
        var tablesOptions = `
            ${options?.tables?.background? `--table-background:${options.tables.background}`:''};
            ${options?.tables?.padding?    `--table-padding:${options.tables.padding}`:''};
            ${options?.tables?.border?     `--table-border:${options.tables.border}`:''};
            ${options?.tables?.headBG?     `--table-head-bg:${options.tables.headBG}`:''};
            ${options?.tables?.stripedBG?  `--table-striped:${options.tables.stripedBG}`:''};
        `
        //====> Components Options <====//
        var componentsOps = `
            ${options?.components?.background?   `--component-background:${options.components.background}`:''};
            ${options?.components?.darkerBg?     `--component-darker-bg:${options.components.darkerBg}`:''};
            ${options?.components?.color?        `--component-color:${options.components.color}`:''};
            ${options?.components?.activeBg?     `--component-active-bg:${options.components.activeBg}`:''};
            ${options?.components?.activeColor?  `--component-active-color:${options.components.activeColor}`:''};
            ${options?.components?.border?       `--component-border:${options.components.border}`:''};
            ${options?.components?.edgeRadius?   `--component-radius:${options.components.edgeRadius}`:''};
            ${options?.components?.padding?      `--component-padding:${options.components.padding}`:''};
            ${options?.components?.shadow?       `--component-shadow:${options.components.shadow}`:''};
        `
        //====> Markup <====//
        var designOptions = `<style id="tornado-design-options" type="text/css">
            :root {
                /*=====> Colors Options <=====*/
                ${options?.colors? colorsOptions : ''}
                /*=====> Font Options <=====*/
                ${options?.font? fontOptions : ''}
                /*==== Forms Options ====*/
                ${options?.forms? formOptions : ''}
                /*==== Tables Options ====*/
                ${options?.tables? tablesOptions : ''}
                /*==== Components Options ====*/
                ${options?.components? componentsOps : ''}
            }
        </style>
        <!-- Loading Fonts -->
        ${fontLoader()}`;
        //====> Activate Options <====//
        document.head.querySelector('#tornado-design-options')?.remove();
        if(options?.font?.include || options?.font?.rtl?.include) document.head.querySelectorAll('.tornado-fonts').forEach(del => del.remove());
        document.head.insertAdjacentHTML('beforeend',designOptions);
    },

    //=====> Theme Switcher <=====//
    "themeSwitcher" : (selector,themes) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //====> Cookies Handler <====//
        var cookiesOutput = {},
            cookiesHandler = (cookies) => {
            cookiesOutput = {};
            //====> Cookies Handler <====//
            cookies.split(/\s*;\s*/).forEach((pair:any) => {
                pair = pair.split(/\s*=\s*/);
                cookiesOutput[pair[0]] = pair.splice(1).join('=');
            });
        };

        //====> Set Default <====//
        if(themes['default']) {
            cookiesHandler(document.cookie);
            //===> if it has Options <===//
            if (cookiesOutput['tornado-theme']) {
                Tornado.design(JSON.parse(cookiesOutput['tornado-theme']));
            } else {
                document.cookie = `tornado-theme=${JSON.stringify(themes['default'])} ;path=/`;
                cookiesHandler(document.cookie);
                Tornado.design(JSON.parse(cookiesOutput['tornado-theme']));
            }
        }

        //====> for Each Switch <=====//
        selector.forEach(element => {
            //====> if Ts is Done Return no thing <====//
            if(element.classList.contains('tsd-done')) return;

            //====> Lightbox Handler <====//
            element.addEventListener('click', event => {
                event.preventDefault();
                //===> Get Theme <===//
                var themeName = element.getAttribute('data-theme'),
                    themeOps  = themes[themeName];
                //====> Set the Theme <====//
                if(themeOps) {
                    //====> Store Theme in Cookies <====//
                    document.cookie = `tornado-theme=${JSON.stringify(themeOps)};path=/`;
                    //====> Get the Theme form Cookies <====//
                    cookiesHandler(document.cookie);
                    Tornado.design(JSON.parse(cookiesOutput['tornado-theme']));
                }
            });

            //====> Done <====//
            element.classList.add('tsd-done');
        });
    }
};

export default Tornado;

//======> Navigation Menu Assets <=======//
import './Navigation-Menu';
import Menus from './Navigation-Menu';

//======> Form UI Component <=======//
import './Forms';
import Forms from "./Forms";

//======> DataTable Component <=======//
import './DataTable';
import DataTable from "./DataTable";

//=====> Allow Access to Tornado Methods <=====//
declare global {interface Window {Tornado: any;}}
window.Tornado = window.Tornado || Tornado;
window.Tornado.forms = window.Tornado.forms || Forms;
window.Tornado.menus = window.Tornado.menus || Menus;
window.Tornado.DataTable = window.Tornado.DataTable || DataTable;

//======> Tornado UI Utilities <=======//
import './Utilities';
