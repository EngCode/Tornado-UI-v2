jQuery(function ($) {
    'use strict';
    /*=== Modals ===*/
    $('.modal-box').each(function () {
        $(this).prepend('<span class="modal-overlay"></span>');
    });

    $('body').on('click', '[data-modal]', function (e) {
        e.preventDefault();
        var modalName = $(this).attr('data-modal');
        $('#' + modalName).toggleClass('active');
    });

    $('body').on('click', '.modal-box .modal-overlay', function (e) {
        e.preventDefault();
        $(this).parent('.modal-box').removeClass('active');
    });

    $('body').on('click', '.modal-box .close-modal', function (e) {
        e.preventDefault();
        $(this).parent('.modal-content').parent('.modal-box').removeClass('active');
    });
});