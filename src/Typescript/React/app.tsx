/*======> React Modules <======*/
import * as React from "react";
import * as ReactDOM from "react-dom";

/*======> Tornado UI JS/TS Modules <======*/
import Tornado from '.././tornado/Tornado';
/*======> Tornado React Grid <======*/
import * as Grid from './Tornado-UI/Grid';

/*=======> App Component <=======*/
class TornadoApp extends React.Component {
    /*====> App Render Function <====*/
    render() {
        /*====> App Render Content <====*/
        return (
            <Grid.Container size="large" nameit="pt50">
                <h1>Hi! From TSX With Tornado React</h1>
                {/*====> Row Component <====*/}
                <Grid.Row>
                    <Grid.Column nameit="tx-align-center">Column Component 12</Grid.Column>
                </Grid.Row>
                {/*====> // Row Component <====*/}
            </Grid.Container>
        );
    }
}

export default TornadoApp;

/*=======> Render App Component <=======*/
var appContainer = Tornado.getElement("#tornado-app");
if (appContainer) ReactDOM.render(<TornadoApp />, appContainer);