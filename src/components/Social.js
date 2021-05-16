import React, {Component} from 'react';

class Social extends Component{

    constructor(props){
        super(props);
    }

    
    render(){

        return(
            <a href={this.props.link} className={this.props.name}>
                <i className={"bx "+ "bxl-" + this.props.name}></i>
            </a>
        )
    }
}

export default Social;