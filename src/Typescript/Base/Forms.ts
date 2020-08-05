//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';

/**======> Referance By Comment <======
 * ===> 01 - Form UI Methods
 * ===> 02 - Controls Placeholder
 * ===> 03 - Control Validation
 * ===> 04 - Form Validate
 * ===> 05 - File Uploader
 * ===> 06 - Progress Component
 * ===> 07 - Advanced Select
 * ===> 08 - Fix Controls Sizes
 * ===> 09 - Advanced Uploader
 * ===> 10 - Form Repeater
 * ===> 11 - Form Rating Control
 * ===> 12 - Tornado Forms Assets
*/

//=====> Form UI Methods <=====//
const Forms = {
    //=====> Controls Placeholder <=====//
    "placeholder" : input => {
        var currentPlaceholder = input.getAttribute('placeholder');
        //====> When Focus In Empty Placeholder <===//
        input.addEventListener('focus', event => input.setAttribute('placeholder', ''));
        //====> When Focus Out Restore Placeholder <===//
        input.addEventListener('blur', event => input.setAttribute('placeholder', currentPlaceholder));
    },
    //=====> Control Validation <=====//
    "validate" : selector => {
        //==== if it is label return nothing ====//
        if (selector.matches('label' || '.success')) return;
        //==== Define Data Circle ====//
        var mailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //====> Email Regx
            theValue = selector.value?.toLowerCase(), //====> get Current Value
            theType  = selector.getAttribute('type'); //====> get Control Type
        //==== Error Message ====//
        var errorMsg:string = 'This Field is Required Please Fulfill this Field.';
        if (Tornado.direction('page') == 'rtl') errorMsg = 'هذا الحقل مطلوب يرجي املاء هذا الحقل.';
        //==== Email Error Message ====//
        if (theType == 'email' && !mailRegx.test(theValue)) {
            errorMsg = 'This Field only accepts Working Email Address';
            if (Tornado.direction('page') == 'rtl') errorMsg = 'هذا الحقل لا يقبل الا البريد الالكتروني.';
            theValue = null;
        }
        //==== Validation Process ====//
        if (!theValue || theValue == '') {
            //==== add Error Class  Name ====//
            selector.classList.add('error');
            //==== if has a Wraper Change Selector to Parent ====//
            if (!selector.parentNode.matches('.control-icon' || '.file-input')) selector == selector.parentNode;
            //==== if Error not Exist ====//
            if (!Tornado.getNextSibling({element:selector,filter:'.control-hint'})) {
                //==== Show the Error Message ====//
                Tornado.insertAfter(`<p class="control-hint error">${errorMsg}</p>`, selector);
            }
            //==== add Has Error the Form ====//
            Tornado.parentsUntil(selector, 'form:not(.no-vali)' || '.wp7')?.classList.add('hasErrors');
        } else {
            //==== Remove Error Class Name ====//
            selector.classList.remove('error');
            //==== Add Success Class Name ====//
            selector.classList.add('success');
            //==== if has a Wraper Change Selector to Parent ====//
            if (!selector.parentNode.matches('.control-icon' || '.file-input')) selector == selector.parentNode;
            //==== Remove the Error Message ====//
            Tornado.getNextSibling({element:selector,filter:'.control-hint'}).remove();
            //==== Remove Has Error the Form ====//
            Tornado.parentsUntil(selector, 'form:not(.no-vali)' || '.wp7')?.classList.remove('hasErrors');
        }
    },
    //======> Form Validate <======//
    "formValidate" : element => {
        //======> on Submit <======//
        element.addEventListener('submit', event => {
            //======> Define Data for Success Redirect <======//
            var checkForRedierct = element.getAttribute('data-success') || event.target.querySelector('[name="redirect"]');
            if (checkForRedierct) var formData = new FormData();
            //======> Validate The Form Controls <======//
            event.target.querySelectorAll('.required,[aria-required="true"],[required]').forEach(element => {
                //==== if it is label return nothing ====//
                if (element.matches('label' || '.success')) return;
                //======> Validate The Control <======//
                Forms.validate(element);
                //======> Colect Data for Redirect if Exist <======//
                if (checkForRedierct) {
                    if(element.matches('[type="file"]')) {
                        formData.append(element.getAttribute('name'), element.files[0]);
                    } else {
                        formData.append(element.getAttribute('name'), element.value);
                    }
                }
            });
            //======> if has Error Prevent Submit <======//
            if (event.target.matches('.hasErrors')) return event.preventDefault();
            //======> Success Redirect if Exist <======//
            if (checkForRedierct) {
                var theUrl = element.getAttribute('data-success') || event.target.querySelector('[name="success-redirect"]').value,
                    theAction = element.getAttribute('action'),
                    theMethod = element.getAttribute('method');
                //======> Send Data <======//
                fetch(theAction, {method: theMethod,body: formData})
                //======> Send Data Error Handler <======//
                .then(response => response.json()).catch(error => console.error('Error:', error))
                //======> Send Data Success Redirect <======//
                .then(response => window.location.href = theUrl);
            }
        });
    },
    //=====> File Uploader <=====//
    "fileUploader" : fileUploader => {
        if(fileUploader.classList.contains('fudone')) return;
        //====> When Value Change <===//
        fileUploader.addEventListener('change', event => {
            //===> Get Files Names <===//
            var filePath = [];
            for (var i = 0; i < fileUploader.files.length; ++i) filePath.push(fileUploader.files[i].name);
            //===> Set Files Names <===//
            fileUploader.parentNode.setAttribute('data-text',filePath);
        });
        //===> Done <===//
        fileUploader.classList.add('fudone');
    },
    //=====> Progress Component <=====//
    "progress" : (selector, options?) => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);

        //====> Options <====//
        var Options = {
            type  : options?.type || 'bar',
            color : options?.color,
            background : options?.background,
        }

        //====> for Each Progress <====//
        selector.forEach(element => {
            //===> get Progress Value <===//
            var progressValue = element.getAttribute('data-value');
            //===> Create Bar <===//
            if (Options.type == 'bar') {
                //===> Set Number Position <===//
                element.innerHTML = `<span class="progress-num" style="${Tornado.direction('start')}:${progressValue};${Options.background?`background-color:${Options.background}`:""}">${progressValue}</span>`;
                //===> Set Progress Value <===//
                element.querySelector('svg')?.remove();
                Tornado.appendIn(`<svg xmlns="http://www.w3.org/2000/svg" width="${progressValue}" height="100%"><rect ${Options.color?`fill="${Options.color}"`:''} width="100%" height="100%"/></svg>`, element);
            }
            //===> Create Circle <===//
            if (Options.type == 'circle') {
                //===> Set Number Position <===//
                element.innerHTML = `<span class="progress-num">${progressValue}</span>`;
                //===> Set Progress Value <===//
                element.classList.add('circle');
                element.querySelector('svg')?.remove();
                var Progress = progressValue.replace(/%/g,'')
                Tornado.appendIn(`<svg viewBox="0 0 36 36">
                    <path class="circle" stroke-dasharray="${Progress}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>`, element);
            }
            //===> Create Radial <===//
            if (Options.type == 'radial') {
                //===> Set Number Position <===//
                element.innerHTML = `<span class="progress-num">${progressValue}</span>`;
                //===> Set Progress Value <===//
                element.classList.add('radial');
                element.querySelector('svg')?.remove();
                Tornado.appendIn(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="180" viewBox="0 0 200 180">
                  <path class="progress-bg" ${Options.background?`stroke="${Options.background}"`:""} d="M41 149.5a77 77 0 1 1 117.93 0"  fill="none"/>
                  <path class="progress" ${Options.color?`stroke="${Options.color}"`:""} d="M41 149.5a77 77 0 1 1 117.93 0" fill="none" stroke-dasharray="350" stroke-dashoffset="350"/>
                </svg>`, element);
                //===> get Progress Data <===//
                var radialMeter = element.querySelector('svg .progress'),
                    MeterLength = radialMeter.getTotalLength(),
                    MeterProgress = progressValue.replace(/%/g,''),
                    MeterCalc = MeterLength * ((100 - MeterProgress) / 100);
                //===> Set Progress <===//
                radialMeter.style.strokeDashoffset = Math.max(0, MeterCalc);  
            }
        });
    },
    //=====> Advanced Select <=====//
    "advancedSelect" : selector => {
        //====> Check if Selector or Element <====//
        typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);
        //====> Selector Handler <====//
        selector.forEach((element, index) => {
            if(element.classList.contains('asdone')) return;
            //=====> Hide the Original Element <=====//
            element.style.display = 'none';
            //=====> Select HTML Structure <=====//
            var tornadoSelect = `<div class="tornado-select">
                <!-- Selected -->
                <div class="selected-option form-control"></div>
                <!-- Arrow Icon -->
                <i class="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path class="arrow-color" d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"/><path d="M0-.75h48v48H0z" fill="none"/></svg></i>
                <!-- Options List -->
                <ul class="options-list">
                    <li class="filter-select ti-search"> <input type="text" placeholder="filter" /> </li>
                </ul>
            </div>`;
            //=====> Insert the Select after the Orginal Select <=====//
            Tornado.insertAfter(tornadoSelect,element);
            //=====> Tornado Select Elements <=====//
            var selectWraper = Tornado.getNextSibling({element:element,filter:'.tornado-select'}),
                Forms = Tornado.parentsUntil(element, '.form-ui'),
                selectList = selectWraper.querySelector('.options-list'),
                multipleSelect = element.hasAttribute('multiple'),
                selectedOption = selectWraper.querySelector('.selected-option'),
                arrowIcon = selectWraper.querySelector('.arrow-icon');
            //=====> Set Large Size <=====//
            if(element.classList.contains('large') || Forms?.classList.contains('large'))
                selectWraper.querySelector('.form-control').classList.add('large');
            //=====> Set Small Size <=====//
            if(element.classList.contains('small') || Forms?.classList.contains('small'))
                selectWraper.querySelector('.form-control').classList.add('small');
            //=====> Get Current Value <=====//
            var selectedValue = [element.value];
            //=====> Remove Multiple <=====//
            const removeOption = () => {
                selectedOption.querySelectorAll('span').forEach(item => {
                    item.addEventListener('click', event => {
                        //====> Set the Selected Value <====//
                        if(selectedValue) {
                            element.querySelectorAll('option').forEach(option => {
                                if (option.value == item.getAttribute('data-value')) option.removeAttribute('selected');
                            });
                            element.dispatchEvent(new Event('change'));
                        }
                        event.target.remove();
                    });
                });
            }
            //=====> Creating the Options <=====//
            element.querySelectorAll('option').forEach((option, index) => {
                //=====> Set the First Option <=====//
                if(index == 0 || option.hasAttribute('selected')) selectWraper.querySelector('.selected-option').textContent = option.textContent;
                //=====> Append Each Option in the List <=====//
                Tornado.appendIn(`<li data-value="${option.getAttribute('value')}" tabindex="0" role="button" aria-pressed="false">${option.textContent}</li>`,selectList);
            });
            //=====> prepare as multiple <=====//
            if (multipleSelect) {
                //=====> Convert Current value into item <=====//
                selectedOption.innerHTML = `<span data-value="${element.value}" tabindex="0" role="button">${selectedOption.textContent}</span>`;
                //=====> get Filter <=====//
                var filterInput = selectWraper.querySelector('li.filter-select');
                //=====> add filter class <=====//
                selectedOption.classList.add('filter-select');
                //=====> change placeholder <=====//
                filterInput.querySelector('input').setAttribute('placeholder','...');
                //=====> move the Filter <=====//
                Tornado.appendIn(filterInput.innerHTML, selectedOption);
                //=====> remove dropdown Filter <=====//
                filterInput.remove();
                removeOption();
                //=====> Show the Options on Focus <=====//
                selectedOption.querySelector('input').addEventListener('focus', event => selectList.classList.add('active'));
                selectedOption.querySelector('input').addEventListener('blur', event => selectList.classList.remove('active'));
            } else {
                //=====> Show/Hide options <=====//
                selectedOption.addEventListener('click', event => selectList.classList.add('active'));
                arrowIcon.addEventListener('click', event => selectList.classList.add('active'));
                selectWraper.addEventListener('mouseout', event => selectList.classList.remove('active'));
            }
            //=====> get and set the Selected Value <=====//
            selectList.querySelectorAll('li').forEach((item,index) => {
                if (!item.classList.contains('filter-select')) item.addEventListener('click', event => {
                    selectedValue = item.getAttribute('data-value');
                    //=====> if its not multiple <=====//
                    if(!multipleSelect) {
                        //====> Set the Selected Label <====//
                        selectedOption.textContent = item.textContent;
                        //====> Set the Selected Value <====//
                        if(selectedValue) {
                            element.value = selectedValue;
                            element.dispatchEvent(new Event('change'));
                        }
                    } else {
                        //====> Set the Selected Label <====//
                        var lastSelectedItem = selectedOption.querySelector('span:last-of-type'),
                            newItem = `<span data-value="${selectedValue}" tabindex="0" role="button">${item.textContent}</span>`;
                        if (lastSelectedItem) {
                            Tornado.insertAfter(newItem, lastSelectedItem);
                        } else {
                            lastSelectedItem = selectedOption.querySelector('input');
                            Tornado.insBefore(newItem, lastSelectedItem);
                        }
                        removeOption();
                        //====> Set the Selected Value <====//
                        if(selectedValue) {
                            element.querySelectorAll('option').forEach(option => {
                                if (option.value == selectedValue) option.setAttribute('selected', true);
                            });
                            element.dispatchEvent(new Event('change'));
                        }
                    }
                });
            });
            //=====> Filting The Options <=====//
            selectWraper.querySelector('.filter-select input').addEventListener('keyup', event => {
                //=====> Loop Through Options <=====//
                selectList.querySelectorAll('li').forEach((item,index) => {
                    var currentValue = event.target.value,
                        keyboard_key = event.keyCode || event.charCode;
                    if(keyboard_key == 8 && currentValue == '' || null) {
                        item.classList.remove('hidden');
                    } else {
                        //=====> Search and Options Data <=====//
                        var labelValue  = item.textContent.toString(),
                            optionValue = item.getAttribute('data-value')?.toString();
                        //=====> Show / Hide Options <=====//
                        if (!item.classList.contains('filter-select')) {
                            if (labelValue.includes(currentValue) || optionValue.includes(currentValue)) {
                                if(currentValue) item.classList.remove('hidden');
                            } else {
                                if(currentValue) item.classList.add('hidden');
                            }
                        }
                    }
                });
            });
            //===> Done <===//
            element.classList.add('asdone');
        });
    },
    //======> Fix Controls Icon Size <======//
    "fixSizes" : element => {
        let elementParent = Tornado.parentsUntil(element, '.form-ui');
        if(elementParent && elementParent.classList.contains('large')) element.classList.add('large');
        if(elementParent && elementParent.classList.contains('small')) element.classList.add('small');
    },
    //======> Advanced Uploader <======//
    "advancedUploader" : input => {
        if(input.classList.contains('afudone')) return;
        //====> get Data <====//
        var parent = input.parentNode,
            text   = parent.getAttribute('data-text') || 'Drag and Drop your file to upload',
            multiple = input.getAttribute('multiple');
        //====> set Uploader Icon <====//
        if (!parent.matches('[class*=" ti-"]')) parent.classList.add('ti-play-work-up');
        //====> set Uploader Text <====//
        Tornado.insertAfter(`<span>${text}</span><ul class="files"></ul>`, input);
        //====> Change File Function <===//
        const changeFile = (files) => {
            //===> Get File Data <===//
            var filePath = [],
                filesList = parent.querySelector('.files'),
                fileType,
                fileUrl;
            //===> Set Files Data <===//
            for (var i = 0; i < files.length; ++i) {
                filePath.push(files[i].name);
                fileType = files[i].type.split('/');
                fileUrl = URL.createObjectURL(files[i]);
            }
            //===> Reset File List <===//
            filesList.innerHTML = '';
            //===> Create Files List <===//
            filePath.forEach(file => {
                //===> Create new File Item <===//
                Tornado.appendIn(`<li>${file}</li>`, filesList);
                if(multiple === null) {
                    //===> Image Preview Mode <===//
                    if(fileType[0] === 'image') {
                        parent.style.backgroundImage = `url(${fileUrl})`;
                        parent.classList.add('image-mode');
                        //===> if Video , Reset <===//
                        if (parent.classList.contains('video-mode')) {
                            parent.classList.remove('video-mode');
                            parent.querySelector('video')?.remove();
                        }
                    }
                    //===> Video Preview Mode <===//
                    if (fileType[0] === 'video') {
                        parent.classList.add('video-mode');
                        var videoCheck = Tornado.getNextSibling({element:input, filter:'video'});
                        //===> if video exist replace data else create new video <==//
                        if(videoCheck) videoCheck.remove();
                        Tornado.insertAfter(`<video controls><source src="${fileUrl}" type="video/${fileType[1]}"></video>`, input);
                        //===> if Image , Reset <===//
                        if (parent.classList.contains('image-mode')) {
                            parent.classList.remove('image-mode');
                            parent.style.backgroundImage = null;
                        }
                    }
                }
            });
            //===> File Type <===//
        };
        //====> Change File <===//
        input.addEventListener('change', event => changeFile(event.target.files));
        //====> Highlight Droparea <===//
        input.addEventListener('dragenter', event => parent.classList.add('highlight'));
        input.addEventListener('dragleave', event => parent.classList.remove('highlight'));
        //====> Drop Files <===//
        input.addEventListener('drop', event => {
            /*====> get Files <====*/
            var data = event.dataTransfer,
                files = data.files;
            input.files = files;
        });
        //===> Done <===//
        input.classList.add('afudone');
    },
    /*=====> Form Repeater <=====*/
    "repeater" : selector => {
        let element = selector.querySelector('.add-item');
        //====> if its Done <====//
        if(element.classList.contains('rpdone')) return;
        //=====> Accessibility <=====//
        Tornado.setAttributes(element,{
            "tabindex":0,
            "role":"button",
            "aria-pressed":"false",
        });
        //====> Add Item Handler <====//
        element.addEventListener('click', event => {
            event.preventDefault();
            /*====> Clone Parent Item <====*/
            var itemClone = Tornado.parentsUntil(event.target, '.repeater-item').cloneNode(true),
                repeater = Tornado.parentsUntil(event.target, '.form-repeater'),
                newButton = itemClone.querySelector('.add-item');
            /*====> Change Button to Remover <====*/
            newButton.classList.remove('add-item');
            newButton.classList.remove('ti-plus');
            newButton.classList.add('remove-item');
            newButton.classList.add('ti-minus');
            //====> Reset new Item Controls <====//
            itemClone.querySelectorAll('input,select,textarea').forEach(element => {
                //===> Reset Value <===//
                element.value = null;
                if (element.matches('[placeholder]')) Forms.placeholder(element);
                //===> Reset Select <===//
                if (element.matches('select')) {
                    element.classList.remove('tsdone');
                    Tornado.getNextSibling({element:element,filter:'.tornado-select'})?.remove();
                    Forms.advancedSelect(element);
                }
                //===> Reset File Uploader <===//
                if (element.parentNode.matches('.file-input')) {
                    element.classList.remove('tsdone');
                    Forms.fileUploader(element);
                }
                //===> Reset Advanced Uploader <===//
                if (element.parentNode.matches('.advanced-uploader')) {
                    element.classList.remove('tsdone');
                    element.classList.remove('image-mode');
                    element.classList.remove('video-mode');
                    element.removeAttribute('data-src');
                    element.querySelector('video')?.remove();
                    Forms.advancedUploader(element);
                }
                //===> Reset Validation <===//
                if(element.parentNode.matches('.required' || '[aria-required="true"]' || '[required]')) {
                    element.addEventListener('blur', event => Forms.validate(event.target));
                };
            });
            /*====> Repeat the Item <====*/
            Tornado.appendIn(itemClone, repeater);
        });
        //===> Done <===//
        element.classList.add('rpdone');
    },
    /*=====> Form Rating Control <=====*/
    "rating" : element => {
        //====> if its Done <====//
        if(element.classList.contains('rtdone')) return;
        //====> Get Data <====//
        var input = element.querySelector('input'),
            maxRate:any = parseInt(input.getAttribute('max')) || 5,
            text = maxRate < 10 ? `${maxRate}.0` : maxRate,
            iconName = element.getAttribute('data-icon') || 'ti-star';
        //====> Create Elements <====//
        for (let i = 1; maxRate >= i; i++) Tornado.insertAfter(`<a href="javascript:void(0)" class="${iconName} rate-icon" tabindex="0" role="button" aria-pressed="false"></a>`, input);
        //====> Create Text Element <====//
        Tornado.insertAfter(`<span class="text">${text}</span>`, element.querySelector('.rate-icon:last-child'));
        //====> get the New Elements <====//
        var ratingElements = element.querySelectorAll('.rate-icon');
        //====> Loop Throgh Rating Elements <====//
        ratingElements.forEach((rateElement, index) => {
            if (parseInt(input.value)-1 >= index) rateElement.classList.add('active');
            //===> Hover Effect <===//
            rateElement.addEventListener('mouseenter', event => {
                //===> Activate Elements <===//
                Tornado.getPrevSiblings({element:rateElement, filter:'.rate-icon'})?.forEach(ele => ele.classList.add('active'));
                Tornado.getNextSiblings({element:rateElement, filter:'.rate-icon'})?.forEach(ele => ele.classList.remove('active'));
                event.target.classList.add('active');
                //===> When Mouse Leaves Element <===//
                rateElement.addEventListener('mouseleave', event => {
                    var currentValue = parseInt(input.value) || -1;
                    //===> unactivate Elements <===//
                    element.querySelectorAll('.rate-icon').forEach((item, i) => {
                        if (i > currentValue-1) item.classList.remove('active');
                    });
                });
            });
            //===> Toggle Rate <===//
            rateElement.addEventListener('click', event => {
                //===> Set Value <===//
                input.value = index+1;
                //===> Activate Elements <===//
                Tornado.getPrevSiblings({element:rateElement, filter:'.rate-icon'})?.forEach(ele => ele.classList.add('active'));
                Tornado.getNextSiblings({element:rateElement, filter:'.rate-icon'})?.forEach(ele => ele.classList.remove('active'));
                event.target.classList.add('active');
                rateElement.addEventListener('mouseleave', event => event.target.classList.add('active'));
                //===> Dispatch Change Event <===//
                input.dispatchEvent(new Event('change'));
            });            
        });
        //===> Done <===//
        element.classList.add('rtdone');
    },
}

/*===== Tornado Forms Assets =====*/
document.addEventListener('DOMContentLoaded', domReady => {
    //=====> Buttons Accessibility <=====//
    Tornado.getElements('.btn').forEach(element => {
        Tornado.setAttributes(element,{
            "tabindex":0,
            "role":"button",
            "aria-pressed":"false",
        })
    });
    //=====> Activate Placeholder <=====//
    Tornado.getElements('[placeholder]').forEach(element => Forms.placeholder(element));
    //=====> File Uploader <=====//
    Tornado.getElements('.file-input input[type="file"]').forEach(element => Forms.fileUploader(element));
    //=====> Progress Bars <=====//
    Forms.progress('.progress-bar:not(.circle):not(.radial)');
    Forms.progress('.progress-bar.circle', {type:'circle'});
    Forms.progress('.progress-bar.radial', {type:'radial'});
    //======> Realtime Validate <======//
    Tornado.getElements('.required,[aria-required="true"],[required]').forEach(element => element.addEventListener('blur', event => Forms.validate(event.target)));
    //======> on Submit Validate <======//
    // Tornado.getElements('form:not(.no-vali),.wp7').forEach(element => Forms.formValidate(element));
    //======> Advanced Select <======//
    Forms.advancedSelect('.form-ui select,select.form-control');
    //======> Fix Controls Sizes <======//
    Tornado.getElements('.control-icon,.form-repeater,.form-ui .btn,.rating-control').forEach(element => Forms.fixSizes(element));
    //======> Advanced Uploader <======//
    Tornado.getElements('.advanced-uploader input[type="file"]').forEach(element => Forms.advancedUploader(element));
    /*=====> Form Repeater <=====*/
    Tornado.getElements('.form-repeater').forEach(element => Forms.repeater(element));
    /*=====> Form Rating Control <=====*/
    Tornado.getElements('.rating-control').forEach(element => Forms.rating(element));
});

//=====> Export Form UI Methods <=====//
export default Forms;
