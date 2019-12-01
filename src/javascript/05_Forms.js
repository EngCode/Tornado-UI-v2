/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Forms =====*/
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

    //======> Validation <======//
    var formElement = getElements('form');
    Array.from(formElement).forEach(function(formElement) {
        if (!formElement.matches('.no-vali')) {
            formElement.addEventListener('submit', function(e) {
                //===== Select and Loop Throgh Childs =====//
                let childs = this.children;
                Array.from(childs).forEach(function(child) {
                    //===== Select All Childs that Matchs =====//
                    let formControls = child.querySelectorAll('[aria-required="true"],.required,[required],.wpcf7-validates-as-required');
                    Array.from(formControls).forEach(function(formControl) {
                        if(!formControl.matches('label')) {
                            //======== Catch Control With Icon Wraper =======//
                            var controlWrap = null,
                                wraperClasses = formControl.parentNode.classList;
                            if (wraperClasses.contains('control-icon') || wraperClasses.contains('file-input')) controlWrap = formControl.parentNode;
                            //==== Create Error Message ====//
                            if (pageDirection == 'ltr') {
                                var errorMsg = 'Error : This Field is Required Please Fulfill this Field.';
                            } else {
                                var errorMsg = 'خطأ : هذا الحقل مطلوب يرجي املاء هذا الحقل.';
                            }
                            //===== Grap this Control Value =====//
                            var controlValue = formControl.value,
                                controlType = formControl.getAttribute('type'),
                                errorExist = getNextSibling(controlWrap,'.error-msg') || getNextSibling(formControl,'.error-msg'),
                                emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            //===== if the Value is Empity =====//
                            if (controlValue === '' || controlValue === null || controlValue === undefined) {
                                //==== Add Error Class ====//
                                var errorElement = '<span class="badge danger outline dismiss pointing-top error-msg">'+errorMsg+' <a href="#" class="remove-item ti-close"></a></span>';
                                formControl.classList.add('error');
                                if (controlWrap) {
                                    insertAfter(errorElement, controlWrap);
                                } else if (!errorExist) {
                                    insertAfter(errorElement, formControl);
                                }
                                //===== Error to Fix Submit =====//
                                e.preventDefault();
                            } else if (controlType == 'email' && emailCheck.test(String(controlValue).toLowerCase()) == false) {
                                if (pageDirection == 'rtl') {
                                    errorMsg = 'يرجي كتابة بريد الكتروني صحيح.'
                                } else {
                                    errorMsg = 'The Email Address is not Currect.'
                                }
                                var errorElement = '<span class="badge danger outline dismiss pointing-top error-msg">'+errorMsg+' <a href="#" class="remove-item ti-close"></a></span>';
                                //==== Add Error Class ====//
                                formControl.classList.add('error');
                                if (controlWrap) {
                                    insertAfter(errorElement, controlWrap);
                                } else if (!errorExist) {
                                    insertAfter(errorElement, formControl);
                                }
                                //===== Error to Fix Submit =====//
                                e.preventDefault();
                            } else {
                                if (errorExist) errorExist.remove();
                                //==== Clear Error Message and add Success Class ====//
                                formControl.classList.remove('error');
                                formControl.classList.add('success');
                                //==== Redirect to Success Page ====//
                                if(formElement.hasAttribute('data-success')) {
                                    var SuccessURL = formElement.getAttribute('data-success'),
                                        timeOut = formElement.getAttribute('data-timeout') || 500;
                                    //====> Redirect
                                    setTimeout(function(){
                                        window.location = SuccessURL;
                                    }, timeOut);
                                } else {
                                    var rediInput = formControl.querySelector('input[name="success-redirect"]');
                                    if (rediInput !== null) {
                                        var SuccessURL = formElement.getAttribute('value'),
                                        timeOut = formElement.getAttribute('data-timeout') || 500;
                                        //====> Redirect
                                        setTimeout(function(){
                                            window.location = SuccessURL;
                                        }, timeOut);
                                    }
                                }
                            }
                        }
                    });
                });
            });
        }
    });
});