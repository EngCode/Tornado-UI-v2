//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Create Navigation Menu
 * ===> 02 - Create Nested Dropdown
*/

const Menus = {
    //======> Create Navigation Menu <=======//
    "navigation" : selector => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements('.navigation-menu');

        /*==== Create a Clone from The Menu ====*/
        selector.forEach(element => {
            //===> Check ID and Reset <===//
            if(!element.getAttribute('data-id')) return;
            if(element.classList.contains('ngdone')) return;

            //===> Marking Dropdown Sub Menus <===//
            element.querySelectorAll('li ul,li .megamenu').forEach(SubMenu => {
                SubMenu.classList.add('dropdown-menu');
                SubMenu.parentNode.classList.add('dropdown-item');
                //===> Create Dropdown Toggle Button <===//
                Tornado.insBefore(`<a href="javascript:void(0);" class="dropdown-toggle ti-arrow-down-chevron"></a>`, SubMenu);
            });

            //===> Get Menu ID <===//
            var MenuID = element.getAttribute('data-id'),
                //===> Get Menu Toggle Button <===//
                toggleButton = Tornado.getElement(`.menu-btn[data-id="${MenuID}"]`),
                //===> Get the Menu List Elements <===//
                MenuList = element.querySelectorAll('ul:not(.dropdown-menu)'),
                //===> Wraper Elemets <===//
                MenuElements = `<div class="menu-content"></div><a href="javascript:void(0)" class="overlay-close" title="Close Menu" tabindex="0" role="button" aria-pressed="false"></a>`;

            //===> Create Mobile Menu Wraper <===//
            document.body.insertAdjacentHTML('beforeend', `<div class="mobile-menu" id="${MenuID}">${MenuElements}</div>`);

            //===> Copy the List <===//
            MenuList.forEach(list => {
                var MenuCopy = list.cloneNode(true);
                Tornado.getElement(`#${MenuID} .menu-content`).appendChild(MenuCopy);
            });

            //===> Mega Menu Width Hack <===//
            element.querySelectorAll('.megamenu').forEach(Megamenu => Megamenu.parentNode.style.postion = 'static');

            //=====> Accessibility <=====//
            Tornado.setAttributes(toggleButton,{
                "tabindex":0,
                "role":"button",
                "aria-pressed":"false",
            });

            /*===> Toggle Button <===*/
            Tornado.liveEvent(toggleButton, 'click', event => {
                event.preventDefault();
                Tornado.getElement(`#${MenuID}`).classList.add('active');
            });

            //===> Overlay Toggle <===//
            var overlayToggle = Tornado.getElement(`#${MenuID} .overlay-close`);
            overlayToggle.addEventListener('click', event => {
                event.preventDefault();
                event.target.parentNode.classList.remove('active');
            });

            /*===> Mobile Submenus Toggle <===*/
            var submneuToggle = Tornado.getElements(`#${MenuID} .dropdown-item > a`);
            submneuToggle.forEach(button => {
                button.addEventListener('click', event => {
                    event.preventDefault();
                    //====> Detacte Effect Theme <====//
                    var MobileMen = Tornado.parentsUntil(button, '.mobile-menu');
                    
                    //==== Store Playable Elements ====//
                    var nextSib = button.parentNode.querySelector('ul' || '.megamenu');
                    
                    //==== Check if the Clicked Menu is Activated ====//
                    if (button.parentNode.classList.contains('active')) {
                        //==== Close Dropdown ====//
                        if(nextSib) Tornado.slideUp(nextSib,300);
                        //====> Deactivate the Menu <====//
                        button.parentNode?.classList.remove('active');
                    } else {
                        var parentSiblings = Tornado.getSiblings({element:button.parentNode, filter:'.active'});
                        //==== Deactivate Siblings ====//
                        parentSiblings.forEach(siblings => {
                            siblings.classList.remove('active');
                            //==== Close Dropdown ====//
                            siblings.children.forEach(childs => {
                                if (childs.matches('ul') || childs.matches('.megamenu') && nextSib) Tornado.slideUp(nextSib,300);
                            });
                        });
                        //==== Set Max Height for Transtion ====//
                        if(nextSib) Tornado.slideDown(nextSib,300);
                        //==== Activate Clicked Accordion if its Not Activated ====//
                        button.parentNode?.classList.add('active');
                    }
                });
            });

            element.classList.add('ngdone');
        });
    },

    /*==== Create Nested Dropdown ====*/
    "nestedList" : selector => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements('.nested-menu');
        //====> Nested Menu <====//
        selector.forEach(element => {
            if(element.classList.contains('nldone')) return;
            element.querySelectorAll('li > ul').forEach(SubMenuList => {
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
                        if(siblingList) Tornado.slideUp(siblingList,500);
                        parentSiblings.classList.remove('active');
                    });
                });
                //===> Done <===//
                element.classList.add('nldone');
            });
        });
    }
}

/*==== Activate Menus ====*/
document.addEventListener('DOMContentLoaded', domReady => {
    Menus.navigation('.navigation-menu');
    Menus.nestedList('.nested-menu');
});

export default Menus;