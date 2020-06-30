/*======> React Modules <======*/
import * as React from "react";
import * as ReactDOM from "react-dom";
/*======> Tornado TS Modules <======*/
import Tornado from '../Typescript/Tornado';
// import '../Typescript/Utilities';        //======> Import Utilities
// import '../Typescript/Responsive-Menus'; //======> Navigation Menu Component
// import '../Typescript/Nested-Menus';     //======> Nested Menu Component
// import '../Typescript/Dropdowns';        //======> Dropdowns Component
// import '../Typescript/Forms';            //======> Form UI Component
// import '../Typescript/Modals';           //======> Popup UI Component
// import '../Typescript/Accordion';        //======> Accordion UI Component
// import '../Typescript/Tabs';             //======> Tabs System UI Component
// import '../Typescript/app';              //======> Custom Script
/*======> Tornado React Grid <======*/
import {Container, Row, Column} from './ui-baisc/grid_system';

/*=======> App Component <=======*/
class TornadoApp extends React.Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <Container size="large" nameit="pt50">
                <h1>Hi! From TSX Tornado React</h1>
                {/*====> Row Component <====*/}
                <Row>
                    <Column nameit="tx-align-center">Column Component 12</Column>
                </Row>
                {/*====> // Row Component <====*/}
            </Container>
        );
    }
}

export default TornadoApp;

/*=======> Render App Component <=======*/
var appContainer = Tornado.getElement("#tornado-app");
if (appContainer) ReactDOM.render(<TornadoApp />, appContainer);