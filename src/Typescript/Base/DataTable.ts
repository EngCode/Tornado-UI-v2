//======> Import Tornado UI Helpers <=======//
import Tornado from './Tornado';
import Forms from './Forms';

/**======> Referance By Comment <======
 * ===> 01 - DataTable Method
 * ===> 02 - Detact Responsive Tables
 * ===> 03 - Label Translate
 * ===> 04 - Data Table Options
 * ===> 05 - Get Table Elements
 * ===> 06 - Create Labels from Data
 * ===> 07 - Create Data from Source File
 * ===> 08 - Editable Handler
 * ===> 09 - Per-Page Template
 * ===> 10 - Search Template
 * ===> 11 - Navigation Template
 * ===> 12 - Pagination Template
 * ===> 13 - Set Page Handler
 * ===> 14 - Pagination Handlers
 * ===> 15 - Create Pagination
 * ===> 16 - Per-Page Activate
 * ===> 17 - Search Handler
 * ===> 18 - Sorting Handler
*/

//=====> DataTable Method <=====//
const DataTable = (selector, options?) => {
    //====> Check if Selector or Element <====//
    typeof(selector) === 'object' ? selector = [selector] : selector = Tornado.getElements(selector);
    //====> For Each Table <====//
    selector.forEach(element => {
        var tableParent = element;
        //====> Detact Responsive Tables <====//
        if (element.parentNode.matches('.responsive-table' || '.responsive-sm-table')) tableParent = element.parentNode;
        element.classList.add('data-table-wrap');

        //====> Label Translate <====//
        const Label_Translate = (english,arabic) => {
            if (Tornado.direction('page') == 'ltr') {
                return english;
            } else {
                return arabic;
            }
        };
        
        //====> Data Table Options <====//
        options = {
            //===> Controls Options <===//
            perPage  : options?.perPage  || false, //====> Rows Per Pages
            search   : options?.search   || true,  //====> Enable Search
            sortable : options?.sortable || true,  //====> Enable Sorting

            //===> Data Options <===//
            data : {
                editable : options?.data?.editable || false,  //====> Enable Data Edit
                source   : options?.data?.source   || false,  //====> Data Source URL [csv, json]
                labels   : options?.data?.labels   || false,  //====> Table Head Items [array of strings]
            },
        };

        //====> Get Table Elements <====//
        var tableLabels = element.querySelectorAll('thead th'),
            tableRows   = element.querySelectorAll('tbody tr'),
            rowLength = tableRows.length;

        //====> Create Labels from Data <====//
        if (options.data.labels) {
            //====> Remove Head <====//
            element.querySelector('thead')?.remove();
            //====> Create Head Wraper <====//
            Tornado.appendIn(`<thead><tr></tr></thead>`,element);
            var headRow = element.querySelector('thead tr');
            //====> Create Labels <====//
            for (let i = 0; options.data.labels.length-1 >= i; i++) {
                var label = options.data.labels[i];
                Tornado.appendIn(`<th>${label}</th>`,headRow);
            };
            //====> get the New Labels <====//
            tableLabels = element.querySelectorAll('thead th');
        }

        //====> Create Data from Source File <====//
        if (options.data.source) {
            //====> Remove Head <====//
            element.querySelector('tbody')?.remove();
            //====> Create Head Wraper <====//
            Tornado.appendIn(`<tbody></tbody>`,element);
            var tbody = element.querySelector('tbody');
            //====> Create Labels <====//
            // for (let i = 0; options.data.labels.length-1 >= i; i++) {
            //     var label = options.data.labels[i];
            //     Tornado.appendIn(`<th>${label}</th>`,headRow);
            // };
            //====> get the New Labels <====//
            tableRows = element.querySelector('tbody tr');
        }

        //====> Editable Handler <====//
        if (options.data.editable) {
            tableRows.forEach(row => {
                row.querySelectorAll('td').forEach(column => column.setAttribute('contenteditable',true));
            });
        }

        //====> Per-Page Template <====//
        var perPageHTML = '';
        if (options.perPage) perPageHTML = `<!-- Per Page Selector -->
            <select class="form-control small perpage">
                <option value="${options.perPage}">${options.perPage}</option>
                ${options.perPage*2 < rowLength ? `<option value="${options.perPage*2}">${options.perPage*2}</option>` : ''};
                ${options.perPage*4 < rowLength ? `<option value="${options.perPage*4}">${options.perPage*4}</option>` : ''};
                ${options.perPage*10 < rowLength ? `<option value="${options.perPage*10}">${options.perPage*10}</option>` : ''};
                ${options.perPage*20 < rowLength ? `<option value="${options.perPage*20}">${options.perPage*20}</option>` : ''};
                ${options.perPage*25 < rowLength ? `<option value="${options.perPage*25}">${options.perPage*25}</option>` : ''};
                ${options.perPage*50 < rowLength ? `<option value="${options.perPage*50}">${options.perPage*50}</option>` : ''};
                ${options.perPage*100 < rowLength ? `<option value="${options.perPage*100}">${options.perPage*100}</option>` : ''};
                ${`<option value="${rowLength}">${rowLength}</option>`};
            </select>
            <label class="backspace">${Label_Translate('Per Page', 'فى كل صفحة')}</label>
        `;

        //====> Search Template <====//
        var searchHTML = '';
        if (options.search) searchHTML = `
            <div class="control-icon small floating-end ti-search">
                <input type="search" class="table-search form-control small" placeholder="${Label_Translate('Search in Table', 'البحث فى الجدول')}">
            </div>
        `;

        //====> Navigation Template <====//
        var tableNav = `<div class="data-table-nav flexbox align-between align-center-y">
            ${options.perPage ? 
                `<!-- Action Area -->
                <div class="table-filters col-auto">
                    ${perPageHTML}
                </div>` : ''
            }

            ${options.search ?             
                `<!-- Seach -->
                <div class="table-filters">
                    ${searchHTML}
                </div>
                <!-- // Seach -->` : ''
            }
        </div>`;

        //====> Insert Navigation <====//
        Tornado.insBefore(tableNav, tableParent);

        //====> Pagination Template <====//
        var paginationTemplate = `<div class="data-table-pagi flexbox align-between align-center-y">
            <!-- Display Info -->
            <p>${Label_Translate(
                `Showing from <span class="start-count">1</span> to <span class="end-count">${tableRows.length}</span> out of ${tableRows.length}`,
                `اظهار <span class="start-count">1</span> الي <span class="end-count">${tableRows.length}</span> من مجموع ${tableRows.length}`
            )}</p>
            <!-- Pagination -->
            <ul class="pagination small"></ul>
        </div>`;

        //====> Insert Pagination <====//
        Tornado.insertAfter(paginationTemplate, tableParent);

        //====> get Navigation and Pagination <====//
        var navigation = Tornado.getPrevSibling({element:tableParent, filter:'.data-table-nav'});
        var pagination = Tornado.getNextSibling({element:tableParent, filter:'.data-table-pagi'});

        //====> Set Page Handler <====//
        const setPage = (rows, start, end) => {
            //====> Clear Current Items <====//
            element.querySelectorAll('tbody tr')?.forEach(del => del.remove());
            //====> Set Pages <====//
            for(let i = start; end >= i; i++) {
                if(rows[i]) Tornado.appendIn(rows[i], element.querySelector('tbody'))
            };
            //====> Display Information <====//
            pagination.querySelector('.start-count').textContent = start+1;
            pagination.querySelector('.end-count').textContent = end+1;
        };

        //====> Pagination Handlers <====//
        const paginationHandlers = () => {
            //===> Set New Page <===//
            const setNewPage = item => {
                //====> Positions <====//
                var thisPage   = parseInt(item.textContent),
                    perPageNumber = navigation.querySelector('.perpage').value;

                //====> Activate <====//
                item.parentNode.querySelector('.active')?.classList.remove('active')
                item.classList.add('active');

                //====> Items Caluclation <====//
                var startPoint = thisPage == 1 ? 0 : thisPage*perPageNumber-perPageNumber,
                    endPoint   = thisPage*perPageNumber-1;

                //====> Set First Page <====//
                setPage(tableRows, startPoint, endPoint);
            };

            //===> Get Pagination Items <===//
            pagination.querySelectorAll('.pagination li:not(.next-page):not(.prev-page)').forEach(item => {
                //===> On Item Click <===//
                item.addEventListener('click', event => {
                    event.preventDefault();
                    setNewPage(event.target);
                });
            });

            //===> Next Page <===//
            pagination.querySelector('.pagination .next-page')?.addEventListener('click', event => {
                event.preventDefault();
                //====> Positions <====//
                var item = Tornado.getNextSibling({element:pagination.querySelector('li.active'), filter:'li:not(.prev-page):not(.next-page)'});
                if(item) setNewPage(item);
            });

            //===> Prev Page <===//
            pagination.querySelector('.pagination .prev-page')?.addEventListener('click', event => {
                event.preventDefault();
                //====> Positions <====//
                var item = Tornado.getPrevSibling({element:pagination.querySelector('li.active'), filter:'li:not(.prev-page):not(.next-page)'});
                if (item) setNewPage(item);
            });
        };

        //====> Create Pagination <====//
        const createPagination = (rows, start, end) => {
            //====> Clear Current Items <====//
            element.querySelectorAll('tbody tr')?.forEach(del => del.remove());

            //====> Select Pagination List <====//
            var paginationList = pagination.querySelector('.pagination'),
                pagesNumber    = Math.ceil(rows.length/options.perPage);

            //===> Reset Pagination <===//
            paginationList.innerHTML = null;

            //====> Create Pagination Items <====//
            for(let i = 0; pagesNumber-1 >= i; i++) Tornado.appendIn(`<li class="${i==0?'active':''}">${i+1}</li>`, paginationList);

            //====> Create Next / Prev Buttons <====//
            if (pagesNumber > 1) {
                Tornado.insBefore(`<li class="prev-page ti-arrow-${Tornado.direction('start')}-c"></li>`, paginationList.querySelector('li:first-child'));
                Tornado.appendIn(`<li class="next-page ti-arrow-${Tornado.direction('end')}-c"></li>`, paginationList);
            }

            //====> Set First Page <====//
            setPage(rows,start,end);

            //====> Activate Pagination <====//
            paginationHandlers();
        };

        //====> Per-Page Activate <====//
        if(options.perPage) {
            //====> Create Pagination <====//
            createPagination(tableRows, 0, options.perPage-1);

            //====> Per-Page Handler <====//
            var perPageControl = navigation.querySelector('.perpage');
            Forms.advancedSelect(perPageControl);

            perPageControl.addEventListener('change', event => {
                options.perPage = event.target.value;
                //====> Create Pagination <====//
                createPagination(tableRows, 0, options.perPage-1);
            });
        }

        //====> Search Handler <====//
        if(options.search) {
            navigation.querySelector('.table-search')?.addEventListener('keyup', event => {
                //====> Get Search Data <====//
                var currentValue = event.target.value.toString().toLowerCase(),
                    keyboard_key = event.keyCode || event.charCode,
                    filteredData = [];
    
                //====> Search Process <====//
                if(keyboard_key == 8 && currentValue == '' || null) {
                    //====> if its Empty Return Original Data <====//
                    filteredData = tableRows;
                } else {
                    //=====> Loop Through Options <=====//
                    tableRows.forEach((item,index) => {
                        //=====> Search and Options Data <=====//
                        var labelValue = item.textContent.toString().toLowerCase();
                        //=====> Show / Hide Options <=====//
                        if (labelValue.includes(currentValue)) filteredData.push(item);
                    });
                }
    
                //====> Search Resault <====//
                if (options.perPage && filteredData.length > 0) createPagination(filteredData, 0, options.perPage-1);
                if (!options.perPage) setPage(filteredData, 0, filteredData.length-1);
            });
        }

        //====> Sorting Handler <====//
        if(options.sortable) {
            tableLabels.forEach((label, tdIndex) => {
                //====> Set Sort Icons <====//
                label.classList.add('sort-table');
                Tornado.appendIn(`<span class="sort-icon ti-arrow-down-c"></span>`, label);

                //====> Handler <====//
                label.addEventListener('click', event => {
                    event.preventDefault();
                    //====> Deactive Handler <====//
                    const deactiveOther = () => {
                        //====> Deactivte Other <====//
                        Tornado.getSiblings({element:label, filter:'.active'})?.forEach(sibling => {
                            sibling.classList.remove('active');
                            sibling.classList.remove('asc-sort');
                            sibling.classList.remove('desc-sort');
                        });
                    }

                    //====> Sort Detactor <====//
                    if(!label.classList.contains('asc-sort')) {
                        var sortBy = 'asc'
                        //====> Deactivte Other <====//
                        deactiveOther();
                        //====> Activate Item <====//
                        label.classList.add('active');
                        label.classList.add('asc-sort');
                        label.classList.remove('desc-sort');
                    } else {
                        var sortBy = 'desc';
                        //====> Deactivte Other <====//
                        deactiveOther();
                        //====> Activate Item <====//
                        label.classList.add('active');
                        label.classList.add('desc-sort');
                        label.classList.remove('asc-sort');
                    }

                    //====> Clear Current Items <====//
                    if(options.perPage) {
                        var tableBody = element.querySelector('tbody');
                        tableBody.querySelectorAll('tr')?.forEach(del => del.remove());
                        //====> Show All <====//
                        if (tableBody) tableRows.forEach(row => tableBody.appendChild(row));
                    }

                    //====> Rows Sorting <====//
                    element.querySelectorAll('tbody tr')?.forEach((row, index) => {
                        var rowSiblings = Tornado.getSiblings({element:row,filter:'tr'}),
                            currentValue = row.children[tdIndex].textContent;
                        //====> Compare Row to its Sibling <====//
                        rowSiblings.forEach(sibling => {
                            var siblingValue = sibling.children[tdIndex].textContent;
                            
                            //====> Compare as Number <====//
                            if (!isNaN(currentValue)) {
                                currentValue = parseFloat(currentValue);
                                siblingValue = parseFloat(siblingValue);
                            } 
                            
                            //====> Compare as String <====//
                            if (isNaN(currentValue)) {
                                currentValue = currentValue.toString();
                                siblingValue = siblingValue.toString();
                            }

                            //====> ASC Sorting <====//
                            if(sortBy == 'asc' && currentValue >= siblingValue) Tornado.insertAfter(row, sibling);
                            //====> DESC Sorting <====//
                            if(sortBy == 'desc' && currentValue <= siblingValue) Tornado.insertAfter(row, sibling);
                        });
                    });

                    //====> new Sorted Rows <====//
                    tableRows = element.querySelectorAll('tbody tr');
                    //====> Create Pagination <====//
                    if (options.perPage && tableRows.length > 0) createPagination(tableRows, 0, options.perPage-1);
                    if (!options.perPage) setPage(tableRows, 0, tableRows.length-1);
                });
            });
        }
    });
}

export default DataTable;
