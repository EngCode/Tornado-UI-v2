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

    // Code Viewer
    new Clipboard('.copy-btn');

    hljs.initHighlightingOnLoad();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});