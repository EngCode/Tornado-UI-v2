jQuery(function ($) {
    'use strict';
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

    $('.color-checkbox').each(function(){
    var color = $(this).attr('data-color');
    $(this).css('background','#' + color);
    });

    //====== Lined Form Effect ======//
    $('body').on('change','.form-ui.lined input:not(.btn),.form-ui.lined textarea', function(e){
        var control_val = $(this).val();
        if (control_val !== '') {
            $(this).addClass('has-value');
        } else {
            $(this).removeClass('has-value');
        };
    });

    $('.progress-bar').each(function(){
        var progressValue = $(this).attr('data-value');
        if ( pageDirection == 'ltr' ) {
            $(this).css({
                'background-size':progressValue,
            }).append('<span class="progress-num" style="left:' + progressValue + '">' + progressValue + '</span>');
        } else {
            $(this).css({
                'background-size':progressValue,
            }).append('<span class="progress-num" style="right:' + progressValue + '">' + progressValue + '</span>');
        };
    });

    /*===== File Uploader ====*/
    $("body").on("change",".file-input input[type='file']", function (){
        var filePath = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            filePath.push($(this).get(0).files[i].name);
        }
        $(this).parent().attr('data-text',filePath);
    });

    $('body').on('click','.edit-btn', function(e){
        e.preventDefault();
        $(this).siblings('input,select,textarea').attr('readonly',false).focus();
    });

    /*====== Quantity Input =======*/
    $('body').on('click','.quantity-input .increase',function(){
        var input = $(this).siblings('input');
        input.val( (parseInt(input.val()) + 1) );
    });

    $('body').on('click','.quantity-input .dicrease',function(){
        var input = $(this).siblings('input');
        input.val( (parseInt(input.val()) - 1) );
    });
});