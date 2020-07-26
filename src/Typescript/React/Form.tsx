/**======> Referance By Comment <======
 * ===> 01 - React Modules
 * ===> 02 - Form Controle Props
 * ===> 03 - Grid Row
 * ===> 04 - Grid Columns
*/

/*======> React Modules <======*/
import * as React from "react";

/*=======> Form Controle Props <=======*/
type ControlProps = {
    id?:string,
    size?: string,
    className?: string,
    type?:string,
    name?:string,
}

/*======> FormControl Components <======*/
export class FormControl extends React.Component<{size,className,id}, ControlProps> {
    /*======> Default Options <======*/
    static defaultProps = {
        id:null,
        className: '',
        size: '',
        type:null,
        name:null,
    }
    /*======> Render Function <======*/
    render() {
        //====> Helpers <====//
        var props = this.props,
            classes = `form-control ${props.className}`;
        //====> Form Control Handler <====//
        const formControler = () => {
            //===> Standard Input <===//
            return (<input id={props.id} />)
        }

        /*====> Render Content <====*/
        return (formControler);
    }
}