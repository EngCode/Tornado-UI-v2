
/**======> Referance By Comment <======
 * ===> 01 - Tornado Methods Object
 * ===> 02 - TinySlider [Third Party]
 * ===> 03 - Import Utilities
 * ===> 04 - Navigation Menu Component
 * ===> 05 - Nested Menu Component
 * ===> 06 - Dropdowns Component
 * ===> 07 - Form UI Component
 * ===> 08 - Popup UI Component
 * ===> 09 - Accordion UI Component
 * ===> 10 - Tabs System UI Component
 * ===> 11 - Custom Script
*/

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
        if (!document.body.classList.contains('wp-admin')) pageDirection =  getComputedStyle(document.body).direction;
        //======> Change Directions if RTL <======//
        if (pageDirection === 'rtl') {
            startDirection = 'right';
            endDirection = 'left';
        }
        //======> Return Property Value <======//
        if (property === "start") {
            return startDirection;
        } else if (property === "end") {
            endDirection
        } else {
            return pageDirection;
        }
    },

    //======> Live Events Watcher <=======//
    "liveEvent" : (selector, event, func) => {
        //==== interval for Checking new Elements ====//
        if (selector !== null) {
            setInterval(() => {
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
            sibling = options.element.nextElementSibling,
            next;
        //====> Loop Throgh the Next Siblings
        while (sibling) {
            //====> Filtering Matched Sibling
            if (options.filter && sibling.matches(options.filter)) siblings.push(sibling);
            //====> Catch the New Next Sibling
            next = sibling.nextElementSibling;
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
    },

    //======> Set Background <======//
    "setBackground" : (selector,lazy) => {
        //======> Get Elements <=====//
        Tornado.getElements(selector || '[data-src]').forEach(element => {
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
                            setBackground(element);
                            if (sliderDetact) {
                                var sliderItems = sliderDetact.querySelectorAll('[data-src]');
                                Array.from(sliderItems).forEach(item => setBackground(item));
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
        });
    },

    //======> Images LazyLoading <======//
    "lazyLoading" : (selector) => {
        //========> LazyLoading <========//
        Tornado.getElements(selector || '[data-lazyload]').forEach(element => {
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

            //====> Check if Target in Slider <====//
            var sliderDetact = Tornado.parentsUntil(element,'.tns-outer');

            //====> Scroll Event <====//
            window.addEventListener('scroll', event => {
                setMediaImages();
                if (Tornado.inView(element)) {
                    if (sliderDetact) {
                        var sliderItems = sliderDetact.querySelectorAll('[data-lazyload]');
                        Array.from(sliderItems).forEach(item => {
                            var lazydata = element.getAttribute('data-lazyload');
                                element.setAttribute('src',lazydata);
                        });
                    }
                }
            });

            //====> if its in first view <=====//
            var newResault = Tornado.inView(element);
            if (newResault && !sliderDetact) setMediaImages();
        });
    },

    //======> Sticky Elements <======//
    "sticky" : (selector) => {
        Tornado.getElements(selector || '[data-sticky]').forEach(element => {
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
        Tornado.getElements(options.selector || '.smoth-scroll').forEach(element => {
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
        });
    },

    //======> ScrollSpy <======//
    "scrollSpy" : (options) => {
        //====> Scroll Spy Elements <====//
        var elements = Tornado.getElements(options.selector || '.scrollspy [href]' || '.scrollspy [data-target]');
        elements.forEach(element => {
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
    },

    //=====> Event Date Counter <=====//
    "dateCounter" : (options) => {
        //====== Get Element and its Data =======//
        Tornado.getElements(options.selector || '.date-counter').forEach(timerWraper => {
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
        });
    }
};

export default Tornado;
//======> TinySlider <=======//
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
//======> Import Utilities <=======//
import './Utilities';
//======> Navigation Menu Component <=======//
import './Responsive-Menus';
//======> Nested Menu Component <=======//
import './Nested-Menus';
//======> Dropdowns Component <=======//
import './Dropdowns';
//======> Form UI Component <=======//
import './Forms';
//======> Popup UI Component <=======//
import './Modals';
//======> Accordion UI Component <=======//
import './Accordion';
//======> Tabs System UI Component <=======//
import './Tabs';
//======> Custom Script <=======//
import '../app';
