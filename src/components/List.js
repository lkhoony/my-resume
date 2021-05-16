import React, {Component} from 'react';
import '../css//List.css';

class List extends Component{

    /*

    # props

    - data : Object ({key : value})
    - colNum : number (List의 열 수)
    - fontSize : number (font 크기)

    */


    constructor(props){
        super(props);
    }

    createList = (data, colNum, fontSize, margin) => {
        
        // const, let, var
        const cols = [];
        const keys = Object.keys(data);
        const rowNum = Math.ceil(keys.length/colNum);
        let cnt = 0;
        let items = [];

        for(let i=0;i<keys.length;i++){

            items.push(
                <li key={i} style={{fontSize : fontSize}}>
                    <i className="bi bi-chevron-right" ></i>
                    <strong>{keys[i] + ":"}</strong>
                    <span>{data[keys[i]]}</span>
                </li>
            );

            cnt = cnt+1;

            if(cnt===rowNum || i===keys.length-1){
                // push 할때는 const 사용 가능 
                cols.push(
                    <div key={i} className={"col-lg-" + Math.ceil(12/colNum)}>
                        <ul className="myList">
                            {items}
                        </ul>
                    </div>
                    
                );
                items = [];
                cnt=0;
            }
        }

        return(
            <div className="row">
                {cols}
            </div>
        )

    }


    render(){
        return(
            <>
                {this.createList(this.props.data,this.props.colNum,this.props.fontSize,this.props.margin)}
            </>
        );
    }
}

export default List;