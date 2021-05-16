import React, {Component} from 'react';
import '../css/Progress.css';

/*
Progress Component

- Present Progress bar and skill

- props

    - skill : name of skill (String)

    - p : proficiency (Number)
*/
class Progress extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="progress">
                <span className="skill">{this.props.skill}
                    <i className="val">{this.props.proficiency + "%"}</i>
                </span>
                <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={this.props.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

export default Progress;