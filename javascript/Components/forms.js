/*=== Forms ===*/
$('*[placeholder]').each(function () {
    var placeHold = $(this).attr('placeholder');
    $(this).on({
        focusin: function () {
            $(this).attr('placeholder', ' ');
        },

        focusout: function () {
            $(this).attr('placeholder', placeHold);
        }
    })
});