//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Tornado Tabs System
*/

/*==== Tornado Tabs System ====*/
export const tabsSystem = options => {
    //=== Activate First tab and its Content Box
    Tornado.getElements('.tabs-menu [data-tab]:first-of-type,.tab-content:first-of-type').forEach(elements => {
        //==== Open the Tab Panel by URL HashTag ====//
        if (elements.hasAttribute('data-active-url')) {
            var urlHash = window.location.hash.substr(1),
                tabID = elements.getAttribute('data-tab');
            if (urlHash === '#' + tabID) {
                tabID.classList.add('active');
                Tornado.getElement('#' + tabID).add('active');
            }
        } else {
            //=== Open the First Tab ===//
            elements.classList.add('active');
        }
    });
    //=== When Click on Tab
    Tornado.getElements('.tabs-menu [data-tab]').forEach(thisElement => {
        thisElement.addEventListener('click', event => {
            //==== Store the Tab ID and this Element
            var getPanelId = thisElement.getAttribute('data-tab'),
                targtedPanel = Tornado.getElement('#' + getPanelId);
            //==== Call Back Function Before Opens the Panel ====//
            if (options.callOpen) options.callOpen;
            //==== Activate Clicked Tab
            thisElement.classList.add('active');
            //=== Remove Active Class From Siblings
            Tornado.getSiblings({element:thisElement}).forEach(siblings => siblings.classList.remove('active'));
            //==== Activate Tab Content
            targtedPanel.classList.add('active');
            //=== Remove Active Class From Siblings
            Tornado.getSiblings({element:targtedPanel}).forEach(siblings => siblings.classList.remove('active'));
            //==== Call Back Function After Opens the Panel ====//
            if (options.callClose) options.callClose;
        });
    });
}

document.addEventListener('DOMContentLoaded', tabsSystem);

