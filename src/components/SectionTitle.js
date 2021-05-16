import React, {Component} from 'react';
import '../css/SectionTitle.css';

class SectionTitle extends Component{

    render(){
        return(
            <div className="section-title">
                <h2>{this.props.title}</h2>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}

export default SectionTitle;