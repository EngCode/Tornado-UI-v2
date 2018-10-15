/*=== Global jQuery ===*/
jQuery(function ($) {
    'use strict';
    $('body').on('click','.remove-product', function(e){
        e.preventDefault();
        $(this).parents('tr').remove();
    });

    $('body').on('click','.edit-btn', function(e){
        e.preventDefault();
        $(this).siblings('input,select,textarea').attr('readonly',false).focus();
    });

    //=== Categories Menu ====//
    $('body').on('click','.category-drop', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings('.navigation-menu').slideToggle().toggleClass('active');
    });

    //=== Filters Menu ====//
    $('body').on('click','.widgets-toggle', function(e){
        e.preventDefault();
        $('.widgets-sidebar').toggleClass('active');
    });

    $('.widgets-sidebar').append('<a href="#" class="overlay close-prent"></a> ');
    $('body').on('click','.close-prent', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    //=== Collapsed Box's ===//
    $('body').on('click', '.widget-block .title,.content-block .title', function(e){
        e.preventDefault();
        $(this).toggleClass('closed').siblings('.collapsed-content').slideToggle(500).toggleClass('closed');
    });

    //==== Multi Langages ====//
    var pageDirection = $('body').css('direction');
    if ( pageDirection == 'rtl' ) {
        //===== RTL Code ====//
        $('.home-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: false,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.products-slider').each(function () {
            var controlers = $(this).prev('.section-title').children('.controls');
            $(this).slick({
                rtl: true,
                autoplay: true,
                autoplaySpeed: 7000,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                appendArrows: controlers,
                prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
                nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
                responsive: [
                    {breakpoint: 985,settings: {slidesToShow: 3}},
                    {breakpoint: 650,settings: {slidesToShow: 2}},
                    {breakpoint: 370,settings: {slidesToShow: 1,centerMode:true}}
                ]
            });
        });

        $('.product-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            asNavFor: '.product-thumbnails',
            arrows:false,
        });

        $('.product-thumbnails').slick({
            autoplay: false,
            speed: 500,
            rtl: true,
            asNavFor: '.product-slider',
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
            responsive: [
                {
                    breakpoint: 645,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode:true,
                    }
                }
            ]
        });
    } else {
        //===== RTL Code ====//
        $('.home-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: false,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.products-slider').each(function () {
            var controlers = $(this).prev('.section-title').children('.controls');
            $(this).slick({
                autoplay: true,
                autoplaySpeed: 7000,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                appendArrows: controlers,
                prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
                nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
                responsive: [
                    {breakpoint: 985,settings: {slidesToShow: 3}},
                    {breakpoint: 650,settings: {slidesToShow: 2}},
                    {breakpoint: 370,settings: {slidesToShow: 1,centerMode:true}}
                ]
            });
        });

        $('.product-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            asNavFor: '.product-thumbnails',
            arrows: false,
        });

        $('.product-thumbnails').slick({
            autoplay: false,
            speed: 500,
            asNavFor: '.product-slider',
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 645,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode:true,
                }
            }]
        });
    };

});