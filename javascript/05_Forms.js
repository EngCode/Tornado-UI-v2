/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
/*===== Tornado Forms =====*/
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //=====> Controls Placeholder <=====//
    var placeholders = getElements('[placeholder]');
    Array.from(placeholders).forEach(function (placeholder) {
        var placeholderCurrent = placeholder.getAttribute('placeholder');
        //====> When Focus In Empty Placeholder <===//
        placeholder.addEventListener('focus', function () {
            placeholder.setAttribute('placeholder', '');
        });
        //====> When Focus Out Restore Placeholder <===//
        placeholder.addEventListener('blur', function () {
            placeholder.setAttribute('placeholder', placeholderCurrent);
        });
    });

    //=====> Lined Form Control Label Effect <=====//
    var linedControls = getElements('.form-ui.lined input:not(.btn),.form-ui.lined textarea');
    Array.from(linedControls).forEach(function (linedControl) {
        //====> When Value Change <===//
        linedControl.addEventListener('change', function () {
            //===> Catch the Current Value <===//
            var control_val = linedControl.getAttribute('value');
            //===> if its Not Empty Value <===//
            if (control_val !== '') {
                //===> Add Class <===//
                linedControl.classList.add('has-value');
            }
        });
    });

    //=====> File Uploader <=====//
    var fileUploaders = getElements('.file-input input[type="file"]');
    Array.from(fileUploaders).forEach(function (fileUploader) {
        //====> When Value Change <===//
        fileUploader.addEventListener('change', function () {
            //===> Get Files Names <===//
            var filePath = [];
            for (var i = 0; i < fileUploader.files.length; ++i) {
                filePath.push(fileUploader.files[i].name);
            }
            //===> Set Files Names <===//
            fileUploader.parentNode.setAttribute('data-text',filePath);
        });
    });

    //=====> Progress Bars <=====//
    var progressBars = getElements('.progress-bar');
    Array.from(progressBars).forEach(function (progressBar) {
        var progressValue = progressBar.getAttribute('data-value');
        //===> If Page Direction is Left to Right <===//
        if ( pageDirection === 'ltr' ) {
            progressBar.style.backgroundSize = progressValue;
            progressBar.innerHTML = '<span class="progress-num" style="left:' + progressValue + '">' + progressValue + '</span>';
        //===> If Page Direction is Right to Left <===//
        } else if (pageDirection === 'rtl') {
            progressBar.style.backgroundSize = progressValue;
            progressBar.innerHTML = '<span class="progress-num" style="right:' + progressValue + '">' + progressValue + '</span>';
        };
    });

    //====== Colors Checkbox's ======//
    // $('.color-checkbox').each(function(){
    //    var color = $(this).attr('data-color');
    //    $(this).css('background','#' + color);
    // });

    // /*====== Quantity Input =======*/
    // $('body').on('click','.quantity-input .increase',function(){
    //     var input = $(this).siblings('input');
    //     input.val( (parseInt(input.val()) + 1) );
    // });

    // $('body').on('click','.quantity-input .dicrease',function(){
    //     var input = $(this).siblings('input');
    //     input.val( (parseInt(input.val()) - 1) );
    // });
});