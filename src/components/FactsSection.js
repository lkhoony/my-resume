import React, {Component} from 'react';
import {Fact} from '.';

class FactsSection extends Component{

    constructor(props){
        super(props);
        this.state=({
            subtitle : 'subtitle입니다.',
            facts : [
                {
                    id : 0,
                    name : 'Projects',
                    count : 5,
                    icon : 'journal-richtext',
                    item : {
                        
                    }

                },
                {
                    id : 1,
                    name : 'Awards',
                    count : 3,
                    icon : 'award'
                },
                {
                    id : 2,
                    name : 'Repositories',
                    count : 15,
                    icon : 'github'
                },
                {
                    id : 3,
                    name : 'Certifications',
                    count : 3,
                    icon : 'clipboard'
                }
            ]
        });
    }

    // function
    // render안에 X
    render(){
        const facts = this.state.facts.map(
            (fact) => <Fact key={fact.id} name={fact.name} icon={fact.icon} count={fact.count}></Fact>
        )

        return(

            <div className="row">
                {facts}
            </div>

        );
    }
}

export default FactsSection;