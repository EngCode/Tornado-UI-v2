//======> Import Tornado UI Helpers <=======//
import {Tornado as tui, Tornado} from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Dropdowns Button
 * ===> 02 - Dropdown Buttons
 * ===> 03 - Deactivate on Blank
*/

/*==== Dropdowns Button ====*/
export const Dropdowns = options => {
    //===> Dropdown Buttons <===//
    var dropdownButton = tui.getElements('.dropdown-btn');
    Array.from(dropdownButton).forEach(dropdownButton => {
        //===> When Click on the Button <===//
        dropdownButton.addEventListener('click', function (event) {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            var thisParent = dropdownButton.closest('.dropdown'),
                otherDropdown = tui.getElements('.dropdown.active');

            //===> Deactivate Other <===//
            Array.from(otherDropdown).forEach(function (otherDropdown) {
                if (otherDropdown !== thisParent) {
                    otherDropdown.classList.remove('active');
                }
            });

            //===> Activat Button and List <===//
            thisParent.classList.toggle('active');
        });
    });

    //===> Deactivate on Blank <===//
    window.onclick = blank => {
        if (!blank.target.matches('.dropdown') && !blank.target.matches('.dropdown *')) {
            var activatedDrops = tui.getElements('.dropdown.active');
            Array.from(activatedDrops).forEach(function (activatedDrops) {
                activatedDrops.classList.remove('active');
            });
        }
    };
}

document.addEventListener('DOMContentLoaded', Dropdowns);
