import React, {Component} from 'react';
import '../css/Section.css';

class Section extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <section id={this.props.title} className={this.props.title}>
                <div className="container aos-init" data-aos="fade-up">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;