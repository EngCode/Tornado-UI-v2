//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Dropdowns Button
 * ===> 02 - Dropdown Buttons
 * ===> 03 - Deactivate on Blank
*/

/*==== Dropdowns Button ====*/
export const Dropdowns = options => {
    //===> Dropdown Buttons <===//
    Tornado.getElements('.dropdown-btn').forEach(dropdownButton => {
        //===> When Click on the Button <===//
        dropdownButton.addEventListener('click', event => {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            var thisParent = dropdownButton.closest('.dropdown');

            //===> Deactivate Other <===//
            Tornado.getElements('.dropdown.active').forEach(otherDropdown => {
                if (otherDropdown !== thisParent) otherDropdown.classList.remove('active');
            });

            //===> Activat Button and List <===//
            thisParent.classList.toggle('active');
        });
    });

    //===> Deactivate on Blank <===//
    window.onclick = blank => {
        if (!blank.target.matches('.dropdown') && !blank.target.matches('.dropdown *')) {
            Tornado.getElements('.dropdown.active').forEach(activatedDrops => activatedDrops.classList.remove('active'));
        }
    };
}

document.addEventListener('DOMContentLoaded', Dropdowns);
