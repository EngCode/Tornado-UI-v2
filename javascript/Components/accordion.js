/*=== accordion ===*/
$(".accordion:not(.collapsed) .accordion-item:first-of-type .accordion-title").addClass("active").next(".accordion-content").addClass("active");
$(".accordion-title").on("click", function () {
    $(this).toggleClass("active").parent(".accordion-item").siblings().children(".accordion-title").removeClass("active");
    $(this).next(".accordion-content").slideToggle(350).toggleClass("active").parent(".accordion-item").siblings().children(".accordion-content").slideUp(350).removeClass("active");
});