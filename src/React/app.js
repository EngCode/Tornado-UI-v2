/*======> Importing React Modules <======*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
/*======> Tornado Grid System <======*/
import GridContainer from './tornado-basic/01_Grid_Container';
import GridRow from './tornado-basic/02_Grid_Row';

/*=======> App Component <=======*/
class Tornado extends Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <GridContainer size="large">
                {/*====> Row Component <====*/}
                <GridRow>
                    <h1>Hi! From Tornado React</h1>
                </GridRow>
                {/*====> // Row Component <====*/}
            </GridContainer>
        );
    }
}

export default Tornado;

/*=======> Render App Component <=======*/
const appContainer = document.getElementById("tornado-app");
appContainer ? ReactDOM.render(<Tornado />, appContainer) : false;
