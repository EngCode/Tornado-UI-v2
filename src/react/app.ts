/*======> Importing React Modules <======*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
/*======> Tornado Grid System <======*/
import {Container, Row, Column} from './ui-baisc/01_Grid_System';
/*=======> App Component <=======*/
class Tornado extends Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <Container size="large" nameit="pt50">
                <h1>Hi! From Tornado React</h1>
                {/*====> Row Component <====*/}
                <Row>
                    <Column nameit="tx-align-center">Column Component 12</Column>
                </Row>
                {/*====> // Row Component <====*/}
            </Container>
        );
    }
}

export default Tornado;

/*=======> Render App Component <=======*/
const appContainer = document.getElementById("tornado-app");
appContainer ? ReactDOM.render(<Tornado />, appContainer) : false;
