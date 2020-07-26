/**======> Referance By Comment <======
 * ===> 01 - React Modules
 * ===> 02 - Grid Container
 * ===> 03 - Grid Row
 * ===> 04 - Grid Columns
*/

/*======> React Modules <======*/
import * as React from "react";

/*=======> Grid Container <=======*/
type ContainerProps = {
    size?: string,
    nameit?: string
}

export class Container extends React.Component<{size,nameit}, ContainerProps> {
    /*======> Default Options <======*/
    static defaultProps = {
        size: '',
        nameit: ''
    }
    /*======> Render Function <======*/
    render() {
        /*====> Get Properties <====*/
        /*===> Get Custom Class Value <===*/
        var classes_value = '';
        if (this.props.nameit) var classes_value = ' '+this.props.nameit;

        /*===> Get Size Value <===*/
        var size_value = 'container';                         //====> Default Size Value
        if (this.props.size === 'large') size_value = 'container-xl';    //====> xLarge Container
        if (this.props.size === 'fluid') size_value = 'container-fluid'; //====> Full Width Container

        /*====> Render Content <====*/
        return (
            <div className={size_value + classes_value}>{this.props.children}</div>
        );
    }
}

/*=======> Grid Row <=======*/
type RowProps = {
    nameit?: string,
    direction?: string,
    gutter?: any,
    alignX?: string,
    alignY?: string,
    gridType?: string,
    columns?: string,
    columnsSmall?: string,
    columnsMedium?: string,
    columnsLarge?: string,
    columnsxLarge?: string
}

export class Row extends React.Component < {
        nameit,
        direction,
        gutter,
        alignX,
        alignY,
        gridType,
        columns,
        columnsSmall,
        columnsMedium,
        columnsLarge,
        columnsxLarge
    }, RowProps > {
    /*======> Default Options <======*/
    static defaultProps = {
        nameit: '',
        direction: '',
        gutter: '',
        alignX: '',
        alignY: '',
        gridType: '',
        columns: '',
        columnsSmall: '',
        columnsMedium: '',
        columnsLarge: '',
        columnsxLarge: '',
    }
    /*======> Render Function <======*/
    render() {
        /*===> Get Custom Class Value <===*/
        var classes_value = '';
        if (this.props.nameit) var classes_value = ' '+this.props.nameit

        /*===> Get Direction Value <===*/
        var direction_value = '';
        if (this.props.direction === 'reverse') direction_value = ' row-reverse ';

        /*===> Get Gutter Value <===*/
        var gutter_value = '';
        if (this.props.gutter === 'false')  gutter_value = ' no-gutter ';
        if (this.props.gutter === 'small')  gutter_value = ' gutter-small ';
        if (this.props.gutter === 'large')  gutter_value = ' gutter-large ';
        if (this.props.gutter === 'medium') gutter_value = ' gutter-medium ';

        /*===> Get Align X Value <===*/
        var alignX_value = '';
        if (this.props.alignX === 'start')   alignX_value = ' align-start-x ';
        if (this.props.alignX === 'center')  alignX_value = ' align-center-x ';
        if (this.props.alignX === 'end')     alignX_value = ' align-end-x ';
        if (this.props.alignX === 'around')  alignX_value = ' align-around ';
        if (this.props.alignX === 'between') alignX_value = ' align-between ';

        /*===> Get Align Y Value <===*/
        var alignY_value = '';
        if (this.props.alignY === 'start')   alignY_value = ' align-start-y';
        if (this.props.alignY === 'center')  alignY_value = ' align-center-y';
        if (this.props.alignY === 'end')     alignY_value = ' align-end-y';

        /*===> Define Row Types <===*/
        var rowType = 'row' + direction_value + gutter_value + alignX_value + alignY_value + classes_value;
        if (this.props.gridType === 'masonry') {
            /*===> Get Columns Number <===*/
            var columns_value = '';
            if (this.props.columns) columns_value =`masonry-${this.props.columns}x1`;

            /*===> Get Columns Number in Small Screens <===*/
            var columnsSmall_value = '';
            if (this.props.columnsSmall) columnsSmall_value =` masonry-s-${this.props.columnsSmall}x1`;

            /*===> Get Columns Number in Medium Screens <===*/
            var columnsMedium_value = '';
            if (this.props.columnsMedium) columnsMedium_value =` masonry-m-${this.props.columnsMedium}x1`;

            /*===> Get Columns Number in Large Screens <===*/
            var columnsLarge_value = '';
            if (this.props.columnsLarge) columnsLarge_value =` masonry-l-${this.props.columnsLarge}x1`;

            /*===> Get Columns Number in xLarge Screens <===*/
            var columnsxLarge_value = '';
            if (this.props.columnsxLarge) columnsxLarge_value =` masonry-xl-${this.props.columnsxLarge}x1`

            /*===> Get Columns Number <===*/
            return rowType = columns_value + columnsSmall_value + columnsMedium_value + columnsLarge_value + columnsxLarge_value + classes_value;
        }

        /*====> Render Content <====*/
        return (
            <div className={rowType}>
                {this.props.children}
            </div>
        );
    }
}

/*=======> Grid Columns <=======*/
type ColumnProps = {
    nameit?: string,
    size? :string,
    small?: string,
    medium?: string,
    large?: string,
    xlarge?: string,
}

export class Column extends React.Component<{nameit,size,small,medium,large,xlarge}, ColumnProps> {
    /*======> Default Options <======*/
    static defaultProps = {
        nameit: '',
        size :'',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
    }
    /*======> Render Function <======*/
    render() {
        /*===> Get Custom Class Value <===*/
        var classes_value = '';
        if (this.props.nameit) var classes_value = ' '+this.props.nameit

        /*===> Mobile Size <===*/
        var smallSize = '';
        if (this.props.small) smallSize = ' col-s-'+this.props.small;

        /*===> Tablet Size <===*/
        var mediumSize = '';
        if (this.props.medium) mediumSize = ' col-m-'+this.props.medium;

        /*===> Desktop Size <===*/
        var largeSize = '';
        if (this.props.large) largeSize = ' col-l-'+this.props.large;

        /*===> Desktop Large Size <===*/
        var xlargeSize = '';
        if (this.props.xlarge) xlargeSize = ' col-xl-'+this.props.xlarge;

        /*====> Render Content <====*/
        return (
            <div className={this.props.size ? 'col-' + this.props.size + smallSize + mediumSize + largeSize + xlargeSize + classes_value : 'col-auto'}>
                {this.props.children}
            </div>
        );
    }
}
