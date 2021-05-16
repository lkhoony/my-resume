import React, {Component} from 'react';
import '../css/ModeBtn.css';

class ModeBtn extends Component{

    render(){
        console.log(this.props.toggleMode);
        console.log(this.props.modeChecked);
        return(
          <div className="check_form">
              {this.props.modeChecked ? <h1>Admin Mode</h1> : <h1>User Mode</h1>}
            <input id="check1" type="checkbox" checked={this.props.modeChecked} onChange={(e)=>this.props.toggleMode(e.target.checked)}></input>
            <label htmlFor="check1"></label>
          </div>
        );
    }
}

export default ModeBtn;