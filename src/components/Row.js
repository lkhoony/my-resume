import React, {Component} from 'react';

/*
Row Component

- Layout Component
*/
class Row extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

export default Row;