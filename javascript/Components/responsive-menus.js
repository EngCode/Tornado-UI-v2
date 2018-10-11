//=== Nested Multi Level Menu ===//
$('.nested-menu ul').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
$('body').on('click', '.nested-menu ul .submenu', function (e) {
    e.preventDefault();
    $(this).siblings('ul').slideToggle(700);
    $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').children('ul').slideUp(700);
});