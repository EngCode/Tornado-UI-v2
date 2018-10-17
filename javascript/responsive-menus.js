/*=== Navigation menu ===*/
$('.navigation-menu').each(function () {
    // Create Mobile Menu
    var menuId = $(this).attr('data-id'),
        logoAttr = $(this).attr('data-logo'),
        mobileClone = $('#' + menuId + ' .menu-content');
    $('body').append('<div class="mobile-menu" id="' + menuId + '"><span class="overlay-close"></span><div class="menu-content"></div></div>');
    // Copying The Menu To Mobile Container
    $(this).children("ul").clone().appendTo(mobileClone);
    // Hacking Submenu's
    $('.navigation-menu ul,.navigation-menu .megamenu').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
    $('.mobile-menu ul,.mobile-menu .megamenu').parent('li').children('a').addClass('submenu').after('<span class="toggle-display ti-arrow-down-chevron"></span>');
    $('.navigation-menu .megamenu').parent('li').css({'position':'static'});
    // Adding Logo To Mobile Menu
    if (typeof logoAttr !== typeof undefined && logoAttr !== false) {
        $('#' + menuId).addClass('has-logo').children('.menu-content').prepend('<div class="logo"> <img src="' + logoAttr + '" alt="logo"></div> ');
    };
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
$('body').on('click', '.mobile-menu .toggle-display', function (e) {
    e.preventDefault();
    $(this).toggleClass('ti-close ti-arrow-down-chevron');
    $(this).parent('li').toggleClass('active').siblings('li').removeClass('active');
});

//=== Nested Multi Level Menu ===//
$('.nested-menu ul').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
$('body').on('click', '.nested-menu ul .submenu', function (e) {
    e.preventDefault();
    $(this).siblings('ul').slideToggle(700);
    $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').children('ul').slideUp(700);
});