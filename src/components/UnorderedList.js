import React, {Component} from 'react';

/*
UnorderedList Component

- return unordered list element

- props

    - items : items rendering in <li></li>
*/
class UnorderedList extends Component{

    constructor(props){
        super(props);
    }

    getItemList = (items) => {
        return(
            items.map(
                (item)=><li key={item.id}>{item.activity}</li>
            )
        )
    }

    render(){
        return(
            <>
                <ul style={this.props.style}>
                    {this.getItemList(this.props.items)}
                </ul>
            </>
        )
    }
}

UnorderedList.defaultProps = {
    style : {
        paddingLeft : "20px"
    },
    items : [
        {
            "id" : 0,
            "activity" : "데이터가 없습니다."
        }
    ]
}

export default UnorderedList;