import React, {Component} from 'react';
import {Hero, Main, Footer, Header, MobileToggleBtn} from '.';
import {withRequest} from './HOC';
import {EventListners} from './EventListeners';

import Section from './Section';

class PageWrap extends Component{

    // constructor(props){
    //     super(props);
    //     this.state=({
    //         // modeChecked : admin, user mode checkbox
    //         modeChecked : false,
    //         // sectionChecked : section checkbox
    //         sectionChecked : [],
            
    //         // sections : [
    //         //     {
    //         //         id : 0,
    //         //         name : 'about',
    //         //         subname : '안녕하세요 about section입니다.',
    //         //         checked : true,
    //         //         icon : 'user'
    //         //     },
    //         //     {
    //         //         id : 1,
    //         //         name : 'facts',
    //         //         subname : '안녕하세요 facts section입니다.',
    //         //         checked : true,
    //         //         icon : 'pencil'
    //         //     },
    //         //     {
    //         //         id : 2,
    //         //         name : 'skills',
    //         //         subname : '안녕하세요 skills section입니다.',
    //         //         checked : true,
    //         //         icon : 'book'
    //         //     },
    //         //     {
    //         //         id : 3,
    //         //         name : 'portfolio',
    //         //         subname : '안녕하세요 portfolio section입니다.',
    //         //         checked : true,
    //         //         icon : 'book-content'
    //         //     },
    //         //     {
    //         //         id : 4,
    //         //         name : 'resume',
    //         //         subname : '안녕하세요 resume section입니다.',
    //         //         checked : true,
    //         //         icon : 'file-blank'
    //         //     },
    //         //     {
    //         //         id : 5,
    //         //         name : 'services',
    //         //         subname : '안녕하세요 services section입니다.',
    //         //         checked : true,
    //         //         icon : 'server'
    //         //     },
    //         //     {
    //         //         id : 6,
    //         //         name : 'contact',
    //         //         subname : '안녕하세요 contact section입니다.',
    //         //         checked : true,
    //         //         icon : 'envelope'
    //         //     }
    //         // ]
    //     });
    //     this.toggleMode = this.toggleMode.bind(this);
    //     this.toggleCheckbox = this.toggleCheckbox.bind(this);
    // }

    // componentDidMount() {

    // }

    // toggleMode(checked){
    //     this.setState({
    //         modeChecked : checked
    //     });
    // }

    // // Toggle Checkbox 
    // toggleCheckbox(id, checked) {
    //     const { sections }  = this.state;
    //     this.setState({
    //         // map : callback이 return하는 값으로 새로운 배열을 만들어서 리턴
    //         sections : sections.map(
    //             section => id ===section.id 
    //             ? {...section, checked : checked } // 기존의 todo 객체를 복사하고 checked 키를 가진 값을 checked로 설정
    //             : section  
    //         )
    //     });
    // }

    constructor(props){
        super(props);
        this.state = ({
            data : this.props.data
        })
    }
    
    componentDidMount(){
        EventListners();
    }

    componentDidUpdate(){
        EventListners();
    }
    
    render(){

        return(
            
            <>  
                {this.props.data &&
                    <>  
                        <MobileToggleBtn></MobileToggleBtn>
                        <Header data={this.props.data}></Header>
                        <Main data={this.props.data}></Main>
                        <Footer></Footer>
                    </>
                }
            </>

        );
    }
}

export default withRequest('assets/json/data.json')(PageWrap);
// export default PageWrap;