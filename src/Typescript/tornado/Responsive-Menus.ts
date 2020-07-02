//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Responsive Navigation Menu
 * ===> 02 - Create a Clone from The Menu
 * ===> 03 - Navigation Mobile Menu Toggle Button
 * ===> 04 - Navigation Mobile Menu Overlay Close
 * ===> 05 - Mobile Menu Submenus Toggle
*/

/*==== Responsive Navigation Menu ====*/
export const navMenu = options => {
    /*======> Options <======*/
    if(!options.wraper) options.wraper = ".navigation-menu";

    /*==== Create a Clone from The Menu ====*/
    Tornado.getElements(options.wraper).forEach(navMenus => {
        //===> Get Menu ID <===//
        var MenuID = options.MenuID || navMenus.getAttribute('data-id'),
            //===> Get the Menu List Elements <===//
            MenuList = navMenus.querySelectorAll('ul'),
            //===> Wraper Elemets <===//
            MenuElements = `<div class="menu-content"></div>
            <a href="javascript:void(0)" class="overlay-close" title="Close Menu"></a>`,
            mobileClass = options.mobileClass || '';

        //===> Create Mobile Menu Wraper <===//
        document.body.insertAdjacentHTML('beforeend', `<div class="mobile-menu ${mobileClass}" id="${MenuID}">${MenuElements}</div>`);

        //===> Marking Dropdown Sub Menus <===//
        navMenus.querySelectorAll('li ul,li .megamenu').forEach(SubMenu => {
            SubMenu.parentNode.classList.add('dropdown-item');
            //===> Create Dropdown Toggle Button <===//
            var dropDownBtn = document.createElement('a');
            dropDownBtn.classList.add('dropdown-toggle');
            dropDownBtn.classList.add('ti-arrow-down-chevron');
            dropDownBtn.setAttribute('href', 'javascript:void(0);');
            SubMenu.insertAdjacentElement('beforebegin', dropDownBtn);
        });

        //===> Adding Logo for Mobile Menu <===//
        if (navMenus.hasAttribute('data-logo')) {
            //===> Get Logo URL <===//
            var logo = navMenus.getAttribute('data-logo');
            //===> Create Logo Elements <===//
            Tornado.getElement('#' + MenuID + ' .menu-content').innerHTML = '<div class="logo"> <img src="' + logo + '" alt="logo"> </div>';
        }

        //===> Copy the List <===//
        var MenuCopy = MenuList[0].cloneNode(true);
        Tornado.getElement('#' + MenuID + ' .menu-content').appendChild(MenuCopy);

        //===> Mega Menu Width Hack <===//
        navMenus.querySelectorAll('.megamenu').forEach(Megamenu => {
            Megamenu.parentNode.style.postion = 'static';
        });
    });

    /*===> Navigation Mobile Menu Toggle Button <===*/
    Tornado.getElements('.menu-btn[data-id]').forEach(MobMenuToggle => {
        Tornado.liveEvent(MobMenuToggle, 'click', event => {
            event.preventDefault();
            var TargetID = MobMenuToggle.getAttribute('data-id');
            Tornado.getElement('#' + TargetID).classList.toggle('active');
        });
    });

    /*===> Navigation Mobile Menu Overlay Close <===*/
    Tornado.getElements('.mobile-menu .overlay-close').forEach(OverlayButton => {
        OverlayButton.addEventListener('click', event => {
            event.preventDefault();
            OverlayButton.parentNode.classList.remove('active');
        });
    });

    /*===> Mobile Menu Submenus Toggle <===*/
    var dropdownMob = Tornado.getElements('.mobile-menu .dropdown-toggle,.mobile-menu .dropdown-item > a');
    dropdownMob.forEach(dropdownMob => {
        dropdownMob.addEventListener('click', event => {
            event.preventDefault();
            //====> Detacte Effect Theme <====//
            var MobileMen = dropdownMob.closest('.mobile-menu');
            if (!MobileMen.matches('.custom-theme')) {
                //==== Store Playable Elements ====//
                var nextSib = Tornado.getNextSibling({element:dropdownMob,filter:'ul'}) || Tornado.getNextSibling({element:dropdownMob,filter:'.megamenu'}) || dropdownMob.parentNode.querySelector('ul'),thisParent = dropdownMob.parentNode,parentSiblings = Tornado.getSiblings({element:thisParent,});
                //==== Check if the Clicked Menu is Activated ====//
                if (thisParent.classList.contains('active')) {
                    //==== Close Dropdown ====//
                    Tornado.slideUp(nextSib,300);
                    //====> Deactivate the Menu <====//
                    thisParent.classList.remove('active');
                } else {
                    //==== Deactivate Siblings ====//
                    parentSiblings.forEach(siblings => {
                        siblings.classList.remove('active');
                        //==== Close Dropdown ====//
                        siblings.children.forEach(childs => {
                            if (childs.matches('ul') || childs.matches('.megamenu')) Tornado.slideUp(nextSib,300);
                        });
                    });
                    //==== Set Max Height for Transtion ====//
                    Tornado.slideDown(nextSib,300);
                    //==== Activate Clicked Accordion if its Not Activated ====//
                    thisParent.classList.add('active');
                }
            } else {
                dropdownMob.parentNode.classList.toggle('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', navMenu);
