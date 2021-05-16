import React, {Component} from 'react';
import {List} from '.';

class AboutSection extends Component{

    constructor(props){
        super(props);
        this.state=({
            title : 'About',
            subtitle : '안녕하세요',
            info : {
                title : 'Web Front End Developer & Back End Developer',
                subtitle : '안녕하세요',
                user : {
                    birthday : '7 April 1995',
                    age : '26',
                    website : 'www.github.com/lkhoony',
                    degree : 'Bachelor',
                    phone : '+82 10 2852 0975',
                    email : 'lkh14011424@gmail.com',
                    city : 'Seoul, South Korea',
                    freelance : 'Available'
                },
                description : '열심히 하겠습니다.'
            }
        });
    }

    render() {
        return(
            
            <div className="row">
                <div className="col-lg-4">
                    <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>{this.state.info.title}</h3>
                    <p className="fst-italic">
                        {this.state.info.subtitle}
                    </p>
                    {/* List Component */}
                    <List data={this.state.info.user} colNum={1} fontSize={20}></List>
                    <hr></hr>
                    <List data={this.state.info.user} colNum={2} fontSize={15}></List>
                    <hr></hr>
                    <List data={this.state.info.user} colNum={3} fontSize={10}></List>
                    <hr></hr>
                    <List data={this.state.info.user} colNum={4} fontSize={5}></List>
                    <p>
                        {this.state.info.description}
                    </p>
                </div>
            </div>

        );
    }
}

export default AboutSection;