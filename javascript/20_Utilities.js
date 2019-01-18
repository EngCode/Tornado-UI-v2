/*jslint browser:true */
jQuery(function ($) {
    'use strict';

    /*======= Backgrounds ======*/
    $('[data-src]').each(function () {
        var backgroundImage = $(this).attr('data-src');
        $(this).css('background-image', 'url(' + backgroundImage + ')');
    });

    /*=== Sticky Elements ===*/
    if ($('[data-sticky]').length) { // Check if Element Exist
        //=== Offset Varriables ===//
        var top = $('[data-sticky]').offset().top,
            offsetv = top + 50;
        //=== On Scroll Event ===//
        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= offsetv) {
                $('[data-sticky]').addClass('is-sticky');
            } else {
                $('[data-sticky]').removeClass('is-sticky');
            }
        });
    };

    //=== Collapsed Box's ===//
    $('body').on('click', '.widget-block .title,.content-block .title', function(e){
        e.preventDefault();
        $(this).toggleClass('closed').siblings('.collapsed-content').slideToggle(500).toggleClass('closed');
    });

    //=== Animated Numbers ===//
    $('[data-numbers]').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-numbers');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });

    /*===== Responsive X Tooltip =====*/
    $('.tooltip-start.tooltip-responsive,.tooltip-end.tooltip-responsive').each(function() {
        var startTip = $(this).offset().left,
            endTip = $(this).offset().left + $(this).outerWidth(true);
        if(startTip < 100 && endTip < 100) {
            $(this).addClass('tooltip-bottom').removeClass('tooltip-end').removeClass('tooltip-start');
        }
    });

    /*===== Responsive Y Tooltip =====*/
    $('.tooltip.tooltip-responsive').each(function() {
        var topTip = $(this).offset().top;
        if(topTip < 50) {
            $(this).addClass('tooltip-bottom').removeClass('tooltip');
        }
    });

    $('.tooltip-bottom.tooltip-responsive').each(function() {
        var bottomTip = $(this).offset().top + $(this).outerHeight(true);
        if(bottomTip < 50) {
            $(this).addClass('tooltip').removeClass('tooltip-bottom');
        }
    });

    /*===== Remove Parent Button ======*/
    $('body').on('click','.remove-item', function(e){
        e.preventDefault();
        // Grap Options
        var target = $(this).attr('data-target'),
            parentTag = $(this).attr('data-tag');
        // Remove Specific Target
        if (typeof target !== typeof undefined && target !== false){
            $('#' + target).remove();
        } else if (typeof parentTag !== typeof undefined && parentTag !== false) {
            // Remove Targeted HTML Tag
            $(this).parents(parentTag).remove();
        } else {
            // Remove Direct Parent
            $(this).parent().remove();
        }
    });
});