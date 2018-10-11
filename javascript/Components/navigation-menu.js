/*=== Navigation menu ===*/
$('.navigation-menu').each(function () {
    // Create Mobile Menu
    var menuId = $(this).attr('data-id');
    $('body').append('<div class="mobile-menu" id="' + menuId + '"><span class="overlay-close"></span><div class="menu-content"></div></div>');
    // Copy and Past Menus
    var mobileClone = $('#' + menuId + ' .menu-content');
    $(this).children("ul").clone().appendTo(mobileClone);
    // Adding Class to Submenus
    $('.navigation-menu ul,.mobile-menu ul').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
});

/*=== Mobile Menu Button ===*/
$('body').on('click', '.menu-btn[data-id]', function (e) {
    e.preventDefault();
    var menuId = $(this).attr('data-id');
    $('#' + menuId).toggleClass('active');
});

/*=== Mobile Menu Overlay Close ===*/
$('body').on('click', '.mobile-menu .overlay-close', function () {
    $(this).parent('.mobile-menu').toggleClass('active');
});

/*=== Mobile Menu Submenus ===*/
$('body').on('click', '.mobile-menu .submenu', function (e) {
    e.preventDefault();
    $(this).siblings('ul,.megamenu').slideToggle(700);
    $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').children('ul').slideUp(700);
});