/*======> React Modules <======*/
import * as React from "react";
import * as ReactDOM from "react-dom";
/*======> Tornado TS Modules <======*/
import Tornado from '.././tornado/Tornado';
/*======> Tornado React Grid <======*/
import {Container, Row, Column} from './Components/Grid-System';

/*=======> App Component <=======*/
class TornadoApp extends React.Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <Container size="large" nameit="pt50">
                <h1>Hi! From TSX With Tornado React</h1>
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