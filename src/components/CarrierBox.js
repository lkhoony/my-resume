import React, {Component} from 'react';
import '../css/CarrierBox.css';

class CarrierBox extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="resume-item">
                { this.props.children }
            </div>
        );
    }
}

export default CarrierBox;