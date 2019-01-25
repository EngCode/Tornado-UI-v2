/*global jQuery */
jQuery(function ($) {
    'use strict';

    // Side Menu
    $('.side-menu ul').parent('li').addClass('submenu');
    $('.side-menu li.submenu > a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle().parent('li').toggleClass('active');
        $(this).parent('li').siblings('li').removeClass('active').children('ul').slideUp();
    });

    // $('.slider-component').slick({
    //     rtl: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     dots: true,
    //     arrows:true,
    //     prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
    //     nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
    // });

    // $('.gallery-slider').slick({
    //     rtl: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     arrows:true,
    //     prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
    //     nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
    //     asNavFor:'.gallery-thumbnails'
    // });

    // $('.gallery-thumbnails').slick({
    //     rtl: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     arrows:false,
    //     dots: true,
    //     slidesToShow:4,
    //     asNavFor:'.gallery-slider',
    //     focusOnSelect:true,
    // });

    // $('.vertical-slider').slick({
    //     rtl: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     arrows:true,
    //     prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
    //     nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
    //     dots: true,
    //     slidesToShow:3,
    //     vertical:true,
    //     verticalSwiping:true,
    // });

    // Code Viewer
    new Clipboard('.copy-btn');

    hljs.initHighlightingOnLoad();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});