//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Item Remover
 * ===> 02 - Dynamic Backgrounds
 * ===> 03 - Images lazyLoading
 * ===> 04 - Sticky Elements
 * ===> 05 - Responsive Tooltips
 * ===> 06 - Animated Counters
 * ===> 07 - ViewPort Detactor
 * ===> 08 - Fix Grid Tiny Slider
 * ===> 09 - Activate Smoth Scroll
 * ===> 10 - Activate Scroll Spy
 * ===> 11 - Activate Date Counter
*/

document.addEventListener('DOMContentLoaded', function () {
    //======> Item Remover <======//
    Tornado.liveEvent('.remove-item', 'click', function (event) {
        event.preventDefault();
        var thisButton = event.target; //===> for Fewer Linter Warnings
        //=== Remove Specific Target by ID ===//
        if (thisButton.hasAttribute('data-target')) {
            //=== Get Target ID ===//
            var target = thisButton.getAttribute('data-target');
            //=== Remove the Target ===//
            Tornado.getElement('#' + target).remove();
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

    //====> Dynamic Backgrounds <====//
    Tornado.setBackground('[data-src]:not(.lazyactive)',false);
    Tornado.setBackground('[data-src].lazyactive',true);

    //====> Images lazyLoading <====//
    Tornado.lazyLoading('[data-lazyload]');

    //====> Sticky Elements <====//
    Tornado.sticky('[data-sticky]');

    //======> Responsive Tooltips <======//
    (function responsiveTooltips() {
        //======> Responsive X Tooltip <======//
        var tooltipX = Tornado.getElements('.tooltip-start.tooltip-responsive,.tooltip-end.tooltip-responsive');
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
        var tooltipTop = Tornado.getElements('.tooltip.tooltip-responsive');
        Array.from(tooltipTop).forEach(function (tooltipTop) {
            var topTip = tooltipTop.offsetTop;
            if (topTip <= 50) {
                tooltipTop.classList.add('tooltip-bottom');
                tooltipTop.classList.remove('tooltip');
            }
        });

        //======> Responsive Bottom Tooltip <======//
        var tooltipBottom = Tornado.getElements('.tooltip-bottom.tooltip-responsive');
        Array.from(tooltipBottom).forEach(function (tooltipBottom) {
            var bottomTip = tooltipBottom.offsetTop + tooltipBottom.offsetHeight;
            if (bottomTip <= 50) {
                tooltipBottom.classList.add('tooltip');
                tooltipBottom.classList.remove('tooltip-bottom');
            }
        });
    }());

    //======> Animated Counters <======//
    (function animatedCounter() {
        var counterElements = Tornado.getElements('[data-counter]');
        Array.from(counterElements).forEach(element => {
            function animateNumbers () {
                if (Tornado.inView(element)) {
                    if(!element.classList.contains('counted')) {
                        //====== Animate on Load =====//
                        Tornado.counter ({
                            element: element,
                            steps: 10,
                            duration:2000,
                        });
                    }
                    element.classList.add('counted');
                }
            }

            animateNumbers();
            //====> Reanimate When its Visible <======//
            window.addEventListener('scroll', function () {
                animateNumbers();
            });
        });
    }());

    //======> ViewPort Detactor <======//
    (function ViewPortDetactor () {
        var viewportElements = Tornado.getElements('.view-status');
        Array.from(viewportElements).forEach(function (element) {
            var animName = element.getAttribute('data-animation'),
                animDelay = element.getAttribute('data-delay') || 0,
                animDuration = element.getAttribute('data-duration') || 1000;
            //=====> Activate View <=====//
            function activateView() {
                if (Tornado.inView(element)) {
                    //====> Activate the Element <=====//
                    element.classList.add('view-active');
                    //====> Add CSS Animation <=====//
                    if(animName) {
                        element.style.animationName = animName;
                        element.style.animationDuration = animDuration;
                        element.style.animationTimingFunction  = 'linear';
                        element.style.animationDelay = animDelay;
                    }
                }
            }
            //====> Activate While Scroll
            window.addEventListener('scroll', function (){
                activateView();
            });
        });
    }());

    //====> Fix Grid Tiny Slider <====//
    (function fixTnsGrid() {
        window.addEventListener('load', event => {
            var gridTns = Tornado.getElements('.tns-slider.row');
            Array.from(gridTns).forEach(function (gridTns){
                gridTns.closest('.tns-outer').classList.add('grid-tns');
            });
        })
    }());

    //====> Activate Smoth Scroll <====//
    Tornado.smothScroll({
        selector : '.smoth-scroll',
        duration : 1500,
    });

    //====> Activate Scroll Spy <====//
    Tornado.scrollSpy({
        selector : '.scrollSpy',
        duration : 1500,
    });

    //====> Activate Date Counter <====//
    Tornado.dateCounter({selector : '.date-counter'});
});
