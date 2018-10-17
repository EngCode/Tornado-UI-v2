jQuery(function ($) {
    'use strict';
    /*===== Tabs System =====*/
    $('.tabs-menu [data-tab]:first-child,.tab-content:first-child').addClass('active'); // Activate First tab and its Content Box
    $('body').on('click', '.tabs-menu [data-tab]', function () {
        var tabId = $(this).attr('data-tab');
        $(this).addClass('active').siblings('[data-tab]').removeClass('active'); // Activate Clicked Tab
        $('#' + tabId).addClass('active').siblings('.tab-content').removeClass('active'); // Activate Tab Content
    });
});