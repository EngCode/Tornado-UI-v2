/*global window, document,addLiveListener, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Design Features <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //======> Dynamic Backgrounds <======//
    var backgroundElement = getElements('[data-src]');
    Array.from(backgroundElement).forEach(function (element) {
        var bgData = element.getAttribute('data-src');
        element.style.backgroundImage = 'url("' + bgData + '")';
    });

    //======> Sticky Elements <======//
    var stickyElement = getElements('[data-sticky]');
    Array.from(stickyElement).forEach(function (element) {
        //=== Calculate Offset ===//
        var elementTop = element.offsetTop;
        //=== if the Element Hit the Top Toggle Class ===//
        function stickyElementFire() {
            if (window.scrollY >= elementTop) {
                element.classList.add('is-sticky');
            } else {
                element.classList.remove('is-sticky');
            }
        }
        //=== Fire the Function When Scroll ===//
        window.addEventListener('scroll', function () {
            stickyElementFire();
        });
    });

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
            var parentTag = thisButton.getAttribute('data-tag');
            //=== Remove the Target ===//
            thisButton.closest(parentTag).remove();
        } else {
            //=== Remove Direct Parent ===//
            thisButton.parentNode.remove();
        }
    });

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

    //======> ScrollSpy <======//
    const scrollspy = getElements('.scrollspy [data-target],.scrollspy a');
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

    //======> Smoth Scroll <======//
    const smothScroll = getElements('.scrollspy [data-target],.scrollspy a,.smoth-scroll');
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
});

// jQuery(function ($) {
//     'use strict';
//     //=== Animated Numbers ===//
//     $('[data-numbers]').each(function () {
//         var $this = $(this),
//             countTo = $this.attr('data-numbers');
//         $({ countNum: $this.text() }).animate({
//             countNum: countTo
//         }, {
//             duration: 8000,
//             easing: 'linear',
//             step: function () {
//                 $this.text(Math.floor(this.countNum));
//             },
//             complete: function () {
//                 $this.text(this.countNum);
//             }
//         });
//     });
// });