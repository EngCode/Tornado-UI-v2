/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    /*===== Tabs System =====*/
    $('.tabs-menu [data-tab]:first-of-type,.tab-content:first-of-type').addClass('active'); // Activate First tab and its Content Box
    $('body').on('click', '.tabs-menu [data-tab]', function () {
        var tabId = $(this).attr('data-tab');
        $(this).addClass('active').siblings('[data-tab]').removeClass('active'); // Activate Clicked Tab
        $('#' + tabId).addClass('active').siblings('.tab-content').removeClass('active'); // Activate Tab Content
    });

    /*===== Accordion =====*/
    $('body').on('click','.accordion-title', function () {
        $(this).next('.accordion-content').slideToggle().parent('.accordion-item').siblings().children('.accordion-content').slideUp();
        $(this).parent('.accordion-item').toggleClass('active').siblings('.accordion-item').removeClass('active');
    });
});