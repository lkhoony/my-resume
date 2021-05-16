import React, {Component} from 'react';
import {withRequest} from './HOC';

class Test extends Component{

    render() {
        const {data} = this.props;

        if(!data) return null;

        return(
            
            <div>
                {JSON.stringify(data)}
            </div>
        )
    }
}

export default withRequest('assets/json/data.json')(Test);