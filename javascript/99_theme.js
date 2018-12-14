/*=== Global jQuery ===*/
jQuery(function ($) {
    'use strict';

    /*=== Direction Detector ====*/
    var pageDirection = $('body').css('direction');

    //==== Multi Langages ====//
    if ( pageDirection == 'rtl' ) {
        //===== RTL Code ====//
        $('.home-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: true,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.tours-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
            responsive: [
                {breakpoint: 805,settings: {slidesToShow: 2}},
                {breakpoint: 640,settings: {slidesToShow: 1,centerMode:true}}
            ]
        });

    } else {
        //===== LTR Code ====//
        $('.home-slider').slick({
            rtl: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: true,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.tours-slider').slick({
            rtl: false,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
            responsive: [
                {breakpoint: 805,settings: {slidesToShow: 2}},
                {breakpoint: 640,settings: {slidesToShow: 1,centerMode:true}}
            ]
        });
    };

});