/*global window, document,addLiveListener, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
/*===== Tornado Design Features =====*/
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /*===== Dynamic Backgrounds =====*/
    var backgroundElement = getElements('[data-src]');
    Array.from(backgroundElement).forEach(function (element) {
        var bgData = element.getAttribute('data-src');
        element.style.backgroundImage = 'url("' + bgData + '")';
    });

    /*===== Sticky Elements =====*/
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

    //=== Item Remover Button ===//
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

//     /*===== Responsive X Tooltip =====*/
//     $('.tooltip-start.tooltip-responsive,.tooltip-end.tooltip-responsive').each(function() {
//         var startTip = $(this).offset().left,
//             endTip = $(this).offset().left + $(this).outerWidth(true);
//         if(startTip < 100 && endTip < 100) {
//             $(this).addClass('tooltip-bottom').removeClass('tooltip-end').removeClass('tooltip-start');
//         }
//     });

//     /*===== Responsive Y Tooltip =====*/
//     $('.tooltip.tooltip-responsive').each(function() {
//         var topTip = $(this).offset().top;
//         if(topTip < 50) {
//             $(this).addClass('tooltip-bottom').removeClass('tooltip');
//         }
//     });

//     $('.tooltip-bottom.tooltip-responsive').each(function() {
//         var bottomTip = $(this).offset().top + $(this).outerHeight(true);
//         if(bottomTip < 50) {
//             $(this).addClass('tooltip').removeClass('tooltip-bottom');
//         }
//     });
// });