//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Tornado Popup Modals
 * ===> 02 - Create Overlay Trigger
 * ===> 03 - Open Modal Button
 * ===> 04 - Close Modal by Overlay
 * ===> 05 - Close Modal Button
 * ===> 06 - Close Modal Button
*/

/*==== Tornado Popup Modals ====*/
export const tornadoModals = options => {
    /*=====> Create Overlay Trigger <=====*/
    var modalBoxs = Tornado.getElements(options.modal || '.modal-box');
    Array.from(modalBoxs).forEach((modalBox:any) => {
        modalBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="modal-overlay"></a>');
        //==== Open the Modal by URL HashTag ====//
        if (options.activeByURL || modalBox.hasAttribute('data-active-url')) {
            var urlHash = window.location.hash.substr(1),
                modalID = modalBox.getAttribute('id');
            if (urlHash === modalID) {
                modalBox.classList.add('active');
            }
        }
    });

    /*=====> Open Modal Button <=====*/
    var modalButton = Tornado.getElements('*[data-modal]');
    Array.from(modalButton).forEach(function (modalButton) {
        modalButton.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Open the Modal ====//
            var modalID = modalButton.getAttribute('data-modal');
            Tornado.getElement('#' + modalID).classList.add('active');
            //==== Call Back Function After Opens the Modal ====//
            if (options.callOpen) options.callOpen;
        });
    });

    /*=====> Close Modal by Overlay <=====*/
    var modalOverlay = Tornado.getElements('.modal-overlay');
    Array.from(modalOverlay).forEach(function (modalOverlay) {
        modalOverlay.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Close the Modal ====//
            modalOverlay.parentNode.classList.remove('active');
            //==== Call Back Function After Close the Modal ====//
            if (options.callClose) options.callClose;
        });
    });

    /*=====> Close Modal Button <=====*/
    var closeModal = Tornado.getElements('.close-modal');
    Array.from(closeModal).forEach(function (closeModal) {
        closeModal.addEventListener('click', function (event) {
            event.preventDefault();
            //==== Close the Modal ====//
            closeModal.closest('.modal-box').classList.remove('active');
            //==== Call Back Function After Close the Modal ====//
            if (options.callClose) options.callClose;
        });
    });
}

document.addEventListener('DOMContentLoaded', tornadoModals);

