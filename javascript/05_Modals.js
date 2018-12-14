/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    /*========= Modals =========*/
    $('.modal-box').each(function () {
        $(this).prepend('<a href="javascript:void(0);" class="modal-overlay"></a>');
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
        $(this).parents('.modal-box').removeClass('active');
    });
});