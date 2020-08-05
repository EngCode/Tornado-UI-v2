/**======> Referance By Comment <======
 * ===> 01 - React Modules
 * ===> 02 - Controls Props
 * ===> 03 - Form Control Component
 * ===> 04 - Default Options
 * ===> 05 - Render Function
 * ===> 06 - Helpers
 * ===> 07 - Form Control Handler
 * ===> 08 - 
 * ===> 09 - 
 * ===> 10 - 
 * ===> 11 - 
 * ===> 12 - 
 * ===> 13 - 
*/

/*======> React Modules <======*/
import * as React from "react";

/*=======> Define Controls Props <=======*/
interface ControlProps {
    //===> Shared <===//
    id?,
    className?,
    type?,
    size?,
    name?,
    placeholder?,
    value?,
    //===> Events <===//
    onInput? : React.EventHandler<any>,
    onChange?: React.EventHandler<any>,
    onFocus? : React.EventHandler<any>,
    onClick? : React.EventHandler<any>,
    onBlur?  : React.EventHandler<any>,
}

/*======> Form Control Component <======*/
export default class FormControl extends React.Component<ControlProps> {
    /*====> Constructor Method <====*/
    constructor(props) {
        super(props);
    }
    /*======> Render Function <======*/
    render() {
        /*======> Assign Properties <======*/
        const props = this.props,
              {className,size,...attrs} = this.props;
        //====> Form Control Handler <====//
        const formControler = () => {
            //====> Select Handler <====//
            if(props.type == 'select') {
                //===> Select Control <===//
                return null;
            } else {
                //===> Standard Input <===//
                return (<input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} className={`form-control ${className?className:''} ${size?size:''}`} {...attrs} />);
            }
        }
        /*====> Render Content <====*/
        return (formControler());
    }
}
