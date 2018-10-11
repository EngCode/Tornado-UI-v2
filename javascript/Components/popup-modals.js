/*=== Modals ===*/
$('.modal-box').each(function () {
    $(this).prepend('<span class="modal-overlay"></span>');
});

$('body').on('click', '[data-modal]', function () {
    $('a[data-modal]').attr('href', 'javascript:void(0)');
    var modalName = $(this).attr('data-modal');
    $('#' + modalName).toggleClass('active');
});

$('body').on('click', '.modal-box .modal-overlay,.modal-box .close-modal', function () {
    $('a.close-modal').attr('href', 'javascript:void(0)');
    $('.modal-box').removeClass('active');
});