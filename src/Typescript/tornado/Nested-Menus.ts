//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Nested Multi Level Menu
*/

/*==== Nested Multi Level Menu ====*/
export const nestedMenu = options => {
    Tornado.getElements('.nested-menu ul > li > ul').forEach(SubMenuList => {
        //===> Catch SubMenu Button <===//
        var SubMenuBtn = Tornado.getPrevSibling({element:SubMenuList, filter:'a'});
        SubMenuBtn.classList.add('submenu');
        SubMenuBtn.classList.add('ti-arrow-down-chevron');
        //===> When Click on the Button <===//
        SubMenuBtn.addEventListener('click', event => {
            //==> Prevent Default Behavor <==//
            event.preventDefault();
            //==> Catch Playable Elements <==//
            var thisParent = SubMenuBtn.parentNode;
            //===> Activated The Clicked Item <===//
            thisParent.classList.toggle('active');
            Tornado.slideToggle(SubMenuList,500);
            //===> Deativate the Siblings Items <===//
            Tornado.getSiblings({element:thisParent}).forEach(parentSiblings => {
                var siblingList = parentSiblings.querySelector('ul');
                Tornado.slideUp(siblingList,500);
                parentSiblings.classList.remove('active');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', nestedMenu);
