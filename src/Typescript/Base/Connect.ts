/**======> Referance By Comment <======
 * ===> 01 - API Handler Function
 * ===> 02 - Default Options 
 * ===> 03 - Fetching With Async
 * ======> 01 - Fetch Settings
 * ======> 02 - Authntication Handler
 * ======> 03 - Fetch Data from API
 * ======> 04 - Handle Data as Json
 * ===> 04 - Data Handler
*/

//=====> API Handler <=====//
const Connect = (options) => {
    //====> Default Options <====//
    options = {
        url : options.url || null,
        method : options.method || "GET",
        authnticate : options.authnticate || null,
        authnticateKey : options.authnticateKey || null,
    };

    /*=======> Fetching With Async <========*/
    async function getData () {
        /*===> Fetch Settings <===*/
        let settings = {
            method  : options.method,
            headers : {}
        }

        /*===> Extra Custom Headers <===*/
        if (options.hasOwnProperty('headers')) settings.headers += options.headers;

        /*===> Authntication Handler <===*/
        if (options.authnticate) {
            //====> Bearer Method <====//
            if (options.authnticate == "Bearer") {
                settings.headers['Authorization'] = `${options.authnticate} ${options.authnticateKey}`;
            }
        }

        /*===> Fetch Data from API <===*/
        let response = await fetch(options.url, settings);

        /*===> Handle Data as Json <===*/
        return response.json();
    }

    /*====> Data Handler <====*/
    if(options.hasOwnProperty('url')) return getData();
};

export default Connect;
