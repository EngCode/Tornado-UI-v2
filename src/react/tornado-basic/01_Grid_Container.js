const { Component } = require("react");

/*=======> Creating Grid Component <=======*/
class GridContainer extends Component {
    /*======> Render Function <======*/
    render() {
        /*====> Get Properties <====*/
        const { size, customClass, children } = this.props

        /*===> Get Custom Class Value <===*/
        var classes_value = '';
        if (customClass) var classes_value = ' '+customClass

        /*===> Get Size Value <===*/
        var size_value = 'container';                         //====> Default Size Value
        if (size === 'large') size_value = 'container-xl';    //====> xLarge Container
        if (size === 'fluid') size_value = 'container-fluid'; //====> Full Width Container

        /*====> Render Content <====*/
        return (
            <div className={size_value + classes_value}>{children}</div>
        );
    }
}

/*=======> Export Component <=======*/
export default GridContainer;