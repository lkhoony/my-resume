import React, {Component} from 'react';

/*
Paragraph Component 

- component with wrapping <p></p>

- props 

    - style : style of <p></p>
*/
class Paragraph extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <p style={this.props.style}>
                    {this.props.children}
                </p>
            </>

        )
    }
}

export default Paragraph;