//======> Tornado UI Core Base <=======//
import './Base/Tornado';
import Tornado from './Base/Tornado';
import Connect from './Base/Connect';


document.addEventListener('DOMContentLoaded', event => {
    "use strict";

    //=====> Connect With Bearer Authentication Key <=====//
    var apiurl = 'http://localhost/wordpress/tornado-docs/wp-json/wp/v2/pages';
    Connect ({
        url    : apiurl,  //===> API URL
        method : "GET",   //===> Request Method
        authnticate : "Bearer", //===> 
        authnticateKey : "dxO1WGYbfCuacPcWSZrmOgXkFaRof2X5"
    }).then(response => {
        //====> Return Data as Json and Print it in Console <===//
        console.log(response);
    }).catch(error => {
        /*===> Promise To Catch Errors <===*/
        console.error(error);
    });

    /*====> Authentication Methods 
     *====> Bearer Auth
     *====> Basic Auth
     *====> OAuth (1.0) (Digest Scheme)
     *====> OAuth (2.0) (Bearer Token Scheme)
     *====> OpenID Connect (JWT [JSON Web Tokens])
     *====> *********************
     *====> Authorization Header
     *====> Basic Auth
     *====> Body Data
     *====> Custom Header
     *====> Query String
    <===========================*/
});