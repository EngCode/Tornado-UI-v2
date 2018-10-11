/*======= Backgrounds ======*/
$('[data-src]').each(function () {
    var backgroundImage = $(this).attr('data-src');
    $(this).css('background-image', 'url(' + backgroundImage + ')');
});

/*=== Sticky Elements ===*/
if ($('[data-sticky]').length) { // Check if Element Exist
    //=== Offset Varriables ===//
    var top = $('[data-sticky]').offset().top,
        offsetv = top;
    //=== On Scroll Event ===//
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y >= offsetv) {
            $('[data-sticky]').addClass('is-sticky');
        } else {
            $('[data-sticky]').removeClass('is-sticky');
        }
    });
};

//=== Animated Numbers ===//
$('[data-numbers]').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-numbers');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    }, {
        duration: 8000,
        easing: 'linear',
        step: function () {
            $this.text(Math.floor(this.countNum));
        },
        complete: function () {
            $this.text(this.countNum);
        }
    });
});