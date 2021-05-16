import React, {Component} from 'react';
import {List} from '.';
import '../css/Fact.css';

/*

Fact Component 

- Present Icon, number, title

- props
    - icon : icon image(String)
    - count : number of title(number)
    - title : topic of fact(String)
*/
class Fact extends Component{

    constructor(props){
        super(props);
        this.state=({
            icon : null,
            count : null,
            title : null,
        });
    }

    componentDidMount(){
        this.setState(
            {
                icon : this.props.icon,
                count : this.props.count,
                title : this.props.title
            }
        )
    }
    render(){
        return(
            <>
                <div className="count-box">
                    <i className={"bi bi-" + this.state.icon}></i>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end={this.state.count}
                        data-purecounter-duration="1"
                        className="purecounter">{this.state.count}</span>
                    <p>{this.state.title}</p>
                </div>
            </>
        )
    }
}

export default Fact;