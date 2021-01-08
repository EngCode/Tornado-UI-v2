/*======> React Modules <======*/
import * as React from "react";
import * as ReactDOM from "react-dom";

/*======> Tornado Base Modules <======*/
import Tornado from './Base/Tornado';

/*======> Tornado Grid <======*/
import * as Grid from './React/Grid';

/*======> Form Control <======*/
import FormControl from './React/FormControl';

/*=======> App Component <=======*/
class TornadoApp extends React.Component {
    /*====> App Render Function <====*/
    render() {
        //===> Form Control Event Handler <===//
        function chHandler (event) {
            const eventTarget = event.target as HTMLInputElement;
            console.log(eventTarget.value);
        }
        /*====> App Render Content <====*/
        return (
            <Grid.Container size="large" className="pt50">
                <h1>Hi! From TSX With Tornado React</h1>
                {/*====> Row Component <====*/}
                <Grid.Row>
                    {/*===> Normal Text <===*/}
                    <Grid.Column size="12">Column Component 12</Grid.Column>
                    {/*===> Controls Test <===*/}
                    <Grid.Column size="4">
                        <FormControl
                            type="text"               //===> Control Type
                            size="large"              //===> Control Size
                            name="control_name"       //===> Control Name
                            placeholder="fullname"    //===> Control Placeholder
                            onChange={chHandler}      //===> onChange Event
                            onInput={chHandler}       //===> onInput Event
                            onFocus={chHandler}       //===> onFocus Event
                            onClick={chHandler}       //===> onClick Event
                            onBlur={chHandler}        //===> onBlur Event
                        />
                    </Grid.Column>
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

