//======> Import Tornado UI Helpers <=======//
import {Tornado as tui, Tornado} from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Tornado Accordions
 * ===> 02 - Accordion Trigger
*/

/*==== Tornado Accordion ====*/
export const tornadoAccordion = options => {
    //======> Accordion Trigger <======//
    var accordionButton = tui.getElements(options.panelButton || '.accordion-title');
    Array.from(accordionButton).forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            //==== Store Playable Elements ====//
            var thisElement = element,
                nextPanel   = Tornado.getNextSibling({element:thisElement, filter:options.panelContent || '.accordion-content'}),
                thisParent  = Tornado.parentsUntil(thisElement,options.panelWraper || '.accordion-item');

            //==== Check if the Clicked Button is Activated or Not ====//
            if (thisParent.classList.contains('active')) {
                //==== Deactivate Clicked Accordion if its Activated ====//
                thisParent.classList.remove('active');
                //==== Close the Panel ====//
                Tornado.slideUp(nextPanel,300);

                if(options.callClose) options.callClose;
            } else {
                //==== Close Siblings Panels ====//
                var parentSiblings = Tornado.getSiblings({element:thisParent});
                Array.from(parentSiblings).forEach((sibling:any) => {
                    //==== Close Other Activated Siblings ====//
                    sibling.classList.remove('active');
                    var siblingPanel = sibling.querySelector('.accordion-content');
                    //==== Close Siblings Panels ====//
                    if (siblingPanel) Tornado.slideUp(siblingPanel,300);
                });
                //==== Opem the Panel ====//
                Tornado.slideDown(nextPanel,300);
                //==== Deactivate Clicked Accordion if its Activated ====//
                thisParent.classList.add('active');
                //==== Call Back Function After Opens the Panel ====//
                if(options.callOpens) options.callOpens;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', tornadoAccordion);

