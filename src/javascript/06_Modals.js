/*global window, document, getSiblings ,setInterval, clearInterval,getElements,getElement,getNextSibling,getPrevSibling,setAttributes,getComputedStyle,pageDirection,console*/
/*jslint es6 */
//======> Tornado Popup Modals <======//
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    /*=====> Create Overlay Triger <=====*/
    var modalBoxs = getElements('.modal-box');
    Array.from(modalBoxs).forEach(function (modalBox) {
        modalBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="modal-overlay"></a>');
        //==== Open the Modal by URL HashTag ====//
        if (modalBox.hasAttribute('data-active-url')) {
            var urlHash = window.location.hash.substr(1),
                modalID = modalBox.getAttribute('id');
            if (urlHash === modalID) {
                modalBox.classList.add('active');
            }
        }
    });

    /*=====> Open Modal Button <=====*/
    var modalButton = getElements('*[data-modal]');
    Array.from(modalButton).forEach(function (modalButton) {
        modalButton.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Call Back Function Before Opens the Modal ====//
            if (modalButton.hasAttribute('data-call-before')) {
                var callBackBefore = modalButton.getAttribute('data-call-before');
                window[callBackBefore]();
            }
            //==== Open the Modal ====//
            var modalID = modalButton.getAttribute('data-modal');
            getElement('#' + modalID).classList.add('active');
            //==== Call Back Function After Opens the Modal ====//
            if (modalButton.hasAttribute('data-call-after')) {
                var callBackAfter = modalButton.getAttribute('data-call-after');
                window[callBackAfter]();
            }
        });
    });

    /*=====> Close Modal by Overlay <=====*/
    var modalOverlay = getElements('.modal-overlay');
    Array.from(modalOverlay).forEach(function (modalOverlay) {
        modalOverlay.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Call Back Function Before Close the Modal ====//
            if (modalOverlay.hasAttribute('data-call-before')) {
                var callBackBefore = modalOverlay.parentNode.getAttribute('data-call-before');
                window[callBackBefore]();
            }
            //==== Close the Modal ====//
            modalOverlay.parentNode.classList.remove('active');
            //==== Call Back Function After Close the Modal ====//
            if (modalOverlay.hasAttribute('data-call-after')) {
                var callBackAfter = modalOverlay.parentNode.getAttribute('data-call-after');
                window[callBackAfter]();
            }
        });
    });

    /*=====> Close Modal Button <=====*/
    var closeModal = getElements('.close-modal');
    Array.from(closeModal).forEach(function (closeModal) {
        closeModal.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Call Back Function Before Close the Modal ====//
            if (closeModal.hasAttribute('data-call-before')) {
                var callBackBefore = closeModal.closest('.modal-box').getAttribute('data-call-before');
                window[callBackBefore]();
            }
            //==== Close the Modal ====//
            closeModal.closest('.modal-box').classList.remove('active');
            //==== Call Back Function After Close the Modal ====//
            if (closeModal.hasAttribute('data-call-after')) {
                var callBackAfter = closeModal.closest('.modal-box').getAttribute('data-call-after');
                window[callBackAfter]();
            }
        });
    });
});