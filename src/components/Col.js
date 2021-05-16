import React, {Component} from 'react';

/*
Col Component

- Layout Component (decide Column about Row)

- props

    - colNum : column number of row
*/
class Col extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            // class name에 colNum 들어가게
            <div className={"col-lg-"+this.props.colNum}>
                {this.props.children}
            </div>
        )
    }
}

export default Col;