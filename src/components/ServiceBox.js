import React, {Component} from 'react';
import { Head, Image, Paragraph } from '.';
import '../css/ServiceBox.css';
/*
ServiceBox Component

- Show Service and Move to link

- props 
    - service : service name(String)
    - description : service description(String)
    - url : service url
    - src : img link
*/

class ServiceBox extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="icon-box">
                <Image src={this.props.src} width={this.props.width} height={this.props.height}></Image>
                <h4><a href={this.props.url}>{this.props.service}</a></h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default ServiceBox;