/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
/*===> Tornado UI v2 Slider <===*/
var tui_carousel = function (this_slider,settings) {
    'use strict';
    //=====> Default Settings <======//
    var default_settings = {
        pagination: '.slider-pagination',
        prevButton: '.prev-button',
        nextButton: '.next-button',
        breakpoints: {},
        slides: 1,
        speed: 500,
        easing: 'linear',
        swipe: true,
        fade:true,
        // afterChangeSlide: callBack,
    };

    //=====> Carousel New Settings <=====//
    if (settings !== undefined) {
        default_settings = {
            pagination:  settings.pagination  || default_settings.pagination,
            prevButton:  settings.prevButton  || default_settings.prevButton,
            nextButton:  settings.nextButton  || default_settings.nextButton,
            breakpoints: settings.breakpoints || default_settings.breakpoints,
            slides: settings.slides || default_settings.slides,
            speed:  settings.speed  || default_settings.speed,
            easing: settings.easing || default_settings.easing,
            swipe:  settings.swipe  || default_settings.swipe,
            fade:   settings.fade   || default_settings.fade,
        };
    }

    //====> Define the Slider Wraper <====//
    this_slider.classList.add('tornado-slider');

    //====> Slider Items Information
    var slidesToShow = default_settings.slides,
        //====> Select All Slides
        slides_items = this_slider.children,
        //====> Get the Number of Items
        slides_length = slides_items.length;

    //====> Duplicate Items for Infinite Scroll <=====//
    if (slides_length >= slidesToShow && slides_length < 15) {
        Array.from(slides_items).forEach(function (slide_item,i) {
            var cloneSlide = slide_item.cloneNode(true);
            cloneSlide.classList.add('cloned');
            this_slider.appendChild(cloneSlide);
        });
    }

    //====> Slider Wraper Width
    var slider_width = this_slider.clientWidth,
        //====> Select All Slides
        slides_select = this_slider.children,
        //====> Get the Number of Items
        slides_number = slides_select.length,
        //=====> get the Total Width of the Items
        slides_totalWidth = slider_width*slides_number/2,
        //=====> Calculate the Width of Each Slide
        slide_width = slider_width/slidesToShow;

    //====> Create the Track Element <=====//
    var slides_markup = this_slider.innerHTML;
    this_slider.innerHTML = '<div class="slider-track" style="width:' + slides_totalWidth +'px">' + slides_markup + '</div>';
    var slider_track = this_slider.querySelector('.slider-track');

    //====> Create Controls Elements <======//
    var pagiantion_wrap = '<ul class="slider-pagination"></ul>',
        next_btn = '<a href="#" class="slider-button prev-button ti-arrow-left-chevron"></a>',
        prev_btn = '<a href="#" class="slider-button next-button ti-arrow-right-chevron"></a>';
    insertAfter(pagiantion_wrap + next_btn + prev_btn,slider_track);

    //====> Item HTML Structure <=====//
    slides_select = slider_track.children;
    Array.from(slides_select).forEach(function (slide_item,i) {
        //=====> Set Items Width <======//
        slide_item.classList.add('slide-item');
        slide_item.style.width = slide_width + 'px';
        //=====> Create Items Pagination <=====//
        var track_container = this_slider.querySelector('.slider-track'),
            pagination_container = getNextSibling(track_container,'.slider-pagination');
        if (!slide_item.classList.contains('cloned')) {
            slide_item.setAttribute('data-index',i);
            appendIn(pagination_container,'<li data-index="'+i+'"><a href="javascript:void(0);">' + i + '</a></li>');
        }
    });

    //===> set Current Slides <===//
    slides_select[0].classList.add('current-slide');
    // for (var i = 0; i < slidesToShow; ++i) {
    //     slides_select[i].classList.add('current-slide');
    // }

    //====> Set Transition Speed <======//
    slider_track.style.transitionDuration = default_settings.speed + 'ms';

    //=====> Next Slide <=====//
    function nextSlide () {
        //====> get the Current Slide and its Next Sibling <=====//
        var currentSlides = this_slider.querySelectorAll('.current-slide'),
            firstSlide = currentSlides[0],
            lastSlide = currentSlides[currentSlides.length-1];
        //====> Infinite Loop Moving <====//
        // if(getPrevSiblings(firstSlide).length+1 === slides_length) {
        //     var cutItems = getPrevSiblings(firstSlide);
        //     Array.from(cutItems).forEach(function (item) {
        //         slider_track.appendChild(item);
        //     });
        // }
        //====> if its the Last in Chin Back to the First Slide <====//
        var goTo = getNextSibling(lastSlide,'.slide-item');
        if (goTo === undefined || goTo.offsetLeft > slides_totalWidth-slide_width) {
            goTo = this_slider.querySelector('.slide-item:first-child');
        };
        //====> get current Offset and Destance Offset <=====//
        var goToOffset = goTo.offsetLeft;
        //====> Animate Slide <=====//
        slider_track.style.left = -goToOffset + 'px';
        //====> Switch the Current Class <====//
        goTo.classList.add('current-slide');
        firstSlide.classList.remove('current-slide');
    };

    this_slider.querySelector('.next-button').addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
    });

    //=====> Previos Slide <======//
    function prevSlide () {
        //====> get the Current Slide and its Next Sibling <=====//
        var currentSlides = this_slider.querySelectorAll('.current-slide'),
            firstSlide = currentSlides[0],
            lastSlide = currentSlides[currentSlides.length-1];
        //====> if its the First in Chin Back to the First Slide <====//
        var goTo = getPrevSibling(firstSlide,'.slide-item');
        if (goTo !== undefined) {
            //====> get current Offset and Destance Offset <=====//
            var goToOffset = goTo.offsetLeft;
            //====> Animate Slide <=====//
            slider_track.style.left = -goToOffset + 'px';
            //====> Switch the Current Class <====//
            goTo.classList.add('current-slide');
            lastSlide.classList.remove('current-slide');
        }
    };

    this_slider.querySelector('.prev-button').addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
    });
};

/*======> Test <======*/
var slider = getElements('.slider-1');
Array.from(slider).forEach(function (slider){
    var sliderTest = new tui_carousel(slider,{
        slides:2,
    });
});

var slider_2 = getElements('.slider-2');
Array.from(slider_2).forEach(function (slider_2){
    var sliderTest_2 = new tui_carousel(slider_2,{
        slides:1,
    });
});