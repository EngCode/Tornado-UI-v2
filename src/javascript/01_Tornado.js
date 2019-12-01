/*global window, document,addLiveListener, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */

//======> Dynamic Backgrounds <======//
const dynamicBackgrounds = (selector) => {
    var backgroundElement = getElements(selector || '[data-src]');
    Array.from(backgroundElement).forEach(function (element) {
        var bgData = element.getAttribute('data-src');
        if(bgData === null || bgData === undefined || bgData === '' || bgData === ' ') {
            element.style.backgroundImage = 'url("https://via.placeholder.com/728x728.png?text=Source%20File%20not%20Found")';
        } else {
            bgData = bgData.replace(' ','%20');
            bgData = bgData.replace('#','%23');
            element.style.backgroundImage = 'url("' + bgData + '")';
        }
    });
}

//======> Sticky Elements <======//
const stickyElements =(selector) => {
    var stickyElement = getElements(selector || '[data-sticky]');
    Array.from(stickyElement).forEach(function (element) {
        //=== Calculate Offset ===//
        var elementTop = element.offsetTop;
        //=== On Window Scroll ===//
        window.addEventListener('scroll', function () {
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
}

//======> Responsive Tooltips <======//
const responsiveTooltips = () => {
    //======> Responsive X Tooltip <======//
    var tooltipX = getElements('.tooltip-start.tooltip-responsive,.tooltip-end.tooltip-responsive');
    Array.from(tooltipX).forEach(function (tooltipX) {
        var startTip = tooltipX.offsetLeft,
            endTip = window.innerWidth - tooltipX.getBoundingClientRect().right; // tooltipX.offsetLeft + tooltipX.offsetWidth;
        if (startTip < 100 || endTip < 100) {
            tooltipX.classList.add('tooltip-bottom');
            tooltipX.classList.remove('tooltip-end');
            tooltipX.classList.remove('tooltip-start');
        }
    });

    //======> Responsive Top Tooltip <======//
    var tooltipTop = getElements('.tooltip.tooltip-responsive');
    Array.from(tooltipTop).forEach(function (tooltipTop) {
        var topTip = tooltipTop.offsetTop;
        if (topTip <= 50) {
            tooltipTop.classList.add('tooltip-bottom');
            tooltipTop.classList.remove('tooltip');
        }
    });

    //======> Responsive Bottom Tooltip <======//
    var tooltipBottom = getElements('.tooltip-bottom.tooltip-responsive');
    Array.from(tooltipBottom).forEach(function (tooltipBottom) {
        var bottomTip = tooltipBottom.offsetTop + tooltipBottom.offsetHeight;
        if (bottomTip <= 50) {
            tooltipBottom.classList.add('tooltip');
            tooltipBottom.classList.remove('tooltip-bottom');
        }
    });
}

//======> ScrollSpy <======//
const scrollSpy = (selector) => {
    const scrollspy = getElements(selector || '.scrollspy [data-target],.scrollspy a');
    Array.from(scrollspy).forEach(function (scrollspy) {
        //====> get the Target <====//
        var scrollTarget = scrollspy.getAttribute('href') || scrollspy.getAttribute('data-target'),
            selectedTarget = getElement(scrollTarget),
            targetOffset = selectedTarget.offsetTop - 100;
        //====> Scroll Event <====//
        window.addEventListener('scroll', function () {
            //====> if the position of the section less then the current position <====//
            if (window.scrollY >= targetOffset) {
                //====> Add Class Active <====//
                if (scrollspy.hasAttribute('data-target')) {
                    scrollspy.classList.add('active');
                    var spySiblings = getSiblings(scrollspy);
                    spySiblings.forEach(function (element) {
                        element.classList.remove('active');
                    });
                } else {
                    var spyParent = scrollspy.parentNode,
                        otherSiblings = getSiblings(spyParent);
                    spyParent.classList.add('active');
                    otherSiblings.forEach(function (element) {
                        element.classList.remove('active');
                    });
                }
            } else {
                //====> Remove Class Active <====//
                if (scrollspy.hasAttribute('data-target')) {
                    scrollspy.classList.remove('active');
                } else {
                    var parent = scrollspy.parentNode;
                    parent.classList.remove('active');
                }
            }
        });
    });
}

//======> Smoth Scroll <======//
const smothScroll = (selector) => {
    const smothScroll = getElements('.scrollspy [data-target],.scrollspy a,' + selector || '.smoth-scroll');
    Array.from(smothScroll).forEach(function (smothScroll) {
        smothScroll.addEventListener('click', function (e) {
            e.preventDefault();

            //====> get the Target and its Options <====//
            var scrollTarget = smothScroll.getAttribute('href') || smothScroll.getAttribute('data-target'),
                duration = smothScroll.getAttribute('data-duration') || 1000,
                target = getElement(scrollTarget),
                startTime = null,
                targetPosition = target.getBoundingClientRect().top,
                startPosition = window.pageYOffset || window.scrollY;

            //====> Scroll Animation <====//
            function smothlyScroll(currentTime) {
                if (startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime,
                    scrollToTarget = easeMath(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0, scrollToTarget);
                if (timeElapsed < duration) requestAnimationFrame(smothlyScroll);
            }

            requestAnimationFrame(smothlyScroll);
        });
    });
}

//======> Animated Counters <======//
const animatedCounter = (selector) => {
    var counterElements = getElements(selector || '[data-counter]');
    Array.from(counterElements).forEach(function (counterElement) {
        //====> Reanimate When its Visible <======//
        window.addEventListener('scroll', function () {
            scrollPosition = window.scrollY || window.pageYOffset,
            boundsTop = counterElement.getBoundingClientRect().top + scrollPosition,
            viewport = {top: scrollPosition,bottom: scrollPosition + window.innerHeight},
            bounds = {top: boundsTop, bottom: boundsTop + counterElement.clientHeight};
            if (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom || bounds.top <= viewport.bottom && bounds.top >= viewport.top) {
                if(!counterElement.classList.contains('counted')) {
                    //====== Animate on Load =====//
                    new counter ({
                        elem: counterElement,
                        speed: 10,
                        duration:5000,
                    });
                }

                counterElement.classList.add('counted');
            }
        });
    });
}

//======> ViewPort Detactor <======//
const ViewPortDetactor = (selector) => {
    var viewportElements = getElements(selector || '.view-status');
    Array.from(viewportElements).forEach(function (element) {
        var animName = element.getAttribute('data-animation'),
            animDelay = element.getAttribute('data-delay') || 0,
            animDuration = element.getAttribute('data-duration') || 1000;
        //=====> Checking ViewPort Function <=====//
        function activateView() {
            //==== Get the Element Data ====//
            var scrollPosition = window.scrollY || window.pageYOffset,
                boundsTop = element.getBoundingClientRect().top + scrollPosition,
                viewport = {top: scrollPosition,bottom: scrollPosition + window.innerHeight},
                bounds = {top: boundsTop, bottom: boundsTop + element.clientHeight};
            //====== if its visible =====//
            if (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom || bounds.top <= viewport.bottom && bounds.top >= viewport.top) {
                //====> Activate the Element <=====//
                element.classList.add('view-active');
                //====> Add CSS Animation <=====//
                if(animName) {
                    element.style.animationName = animName;
                    element.style.animationDuration = animDuration;
                    element.style.animationTimingFunction  = 'linear';
                    element.style.animationDelay = animDelay;
                }
            } else {
                // element.classList.remove('view-active');
                // if(animName) element.style.animation = null;
            }
        }

        //=====> Activate View <=====//
        activateView();
        //====> Activate While Scroll
        window.addEventListener('scroll', function (){
            activateView();
        });
    });
}

//======> Tornado Design Features <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //======> Item Remover Button <======//
    addLiveListener('.remove-item', 'click', function (e) {
        e.preventDefault();
        var thisButton = this; //===> for Fewer Linter Warnings
        //=== Remove Specific Target by ID ===//
        if (thisButton.hasAttribute('data-target')) {
            //=== Get Target ID ===//
            var target = thisButton.getAttribute('data-target');
            //=== Remove the Target ===//
            getElement('#' + target).remove();
        } else if (thisButton.hasAttribute('data-tag')) {
            //=== Get the Targeted HTML Tag ===//
            var parentTag = thisButton.getAttribute('data-closest');
            //=== Remove the Target ===//
            thisButton.closest(parentTag).remove();
        } else {
            //=== Remove Direct Parent ===//
            thisButton.parentNode.remove();
        }
    });

    //======> Dynamic Backgrounds <======//
    dynamicBackgrounds();

    //======> Sticky Elements <======//
    stickyElements();

    //======> ScrollSpy <======//
    scrollSpy();

    //======> Smoth Scroll <======//
    smothScroll('.smoth-scroll');

    //======> Responsive Tooltips <======//
    responsiveTooltips();

    //======> Animated Counters <======//
    animatedCounter();

    //======> ViewPort Detactor <======//
    ViewPortDetactor();
});