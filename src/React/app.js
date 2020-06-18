import React, { Component } from "react";
import ReactDOM from "react-dom";

/*=======> App Component <=======*/
class Tornado extends Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <h1>Hi!</h1>
        );
    }
}

export default Tornado;

/*=======> Render App Component <=======*/
const appContainer = document.getElementById("tornado-app");
appContainer ? ReactDOM.render(<Tornado />, appContainer) : false;