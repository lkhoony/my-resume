import React, {Component} from 'react';

/*
Head Component 

- component with wrapping <h2></h2>

- props 

    - style : style of <h2></h2>

*/

class Head extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <h2 style={this.props.style}>{this.props.children}</h2>
            </>
        )
    }
}

Head.defaultProps = {
    style : {
        fontWeight: "700",
        fontSize: "26px",
        color: "#728394",
    }
}

export default Head;