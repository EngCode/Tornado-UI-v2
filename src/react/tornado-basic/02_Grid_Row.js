const { Component } = require("react");

/*=======> Creating Grid Component <=======*/
class GridRow extends Component {
    /*======> Render Function <======*/
    render() {
        /*====> Get Properties <====*/
        const { customClass, direction, gutter, alignX, alignY, children } = this.props

        /*===> Get Custom Class Value <===*/
        var classes_value = '';
        if (customClass) var classes_value = ' '+customClass

        /*===> Get Direction Value <===*/
        var direction_value = '';
        if (direction === 'reverse') direction_value = ' row-reverse ';

        /*===> Get Gutter Value <===*/
        var gutter_value = '';
        if (gutter === 'false')  gutter_value = ' no-gutter ';
        if (gutter === 'small')  gutter_value = ' gutter-small ';
        if (gutter === 'large')  gutter_value = ' gutter-large ';
        if (gutter === 'medium') gutter_value = ' gutter-medium ';

        /*===> Get Align X Value <===*/
        var alignX_value = '';
        if (alignX === 'start')   alignX_value = ' align-start-x ';
        if (alignX === 'center')  alignX_value = ' align-center-x ';
        if (alignX === 'end')     alignX_value = ' align-end-x ';
        if (alignX === 'around')  alignX_value = ' align-around ';
        if (alignX === 'between') alignX_value = ' align-between ';

        /*===> Get Align Y Value <===*/
        var alignY_value = '';
        if (alignY === 'start')   alignY_value = ' align-start-y';
        if (alignY === 'center')  alignY_value = ' align-center-y';
        if (alignY === 'end')     alignY_value = ' align-end-y';

        /*====> Render Content <====*/
        return (
            <div className={'row' + direction_value + gutter_value + alignX_value + alignY_value + classes_value}>
                {children}
            </div>
        );
    }
}

/*=======> Export Component <=======*/
export default GridRow;