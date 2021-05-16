import React,{Component} from 'react';
import '../css/ComponentCheckbox.css';

class ComponentCheckbox extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const checkboxes = this.props.sections.map(
            (checkbox) => <div key={checkbox.id} className="checkbox_item">
                            <input type="checkbox" id={checkbox.name + "_check"} 
                                checked={checkbox.checked} 
                                onChange={(e)=>this.props.toggleCheckbox(checkbox.id, e.target.checked)}>    
                            </input>
                            <label htmlFor={checkbox.name+"_check"}>{checkbox.name.charAt(0).toUpperCase() + checkbox.name.slice(1)}</label>
                          </div>
        )
        return(

            <div className="component_checkbox">
                {this.props.modeChecked && 
                    <form>
                        {checkboxes}
                    </form>}
            </div>
        )
    }
}

export default ComponentCheckbox;