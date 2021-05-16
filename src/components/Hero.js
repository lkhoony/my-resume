import React, {PureComponent} from 'react';
import {SocialLinks} from '.';
import '../css/Hero.css';

class Hero extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            title : "Kwanghun Lee",
            items : [
                "Front-End Developer",
                "Back-End Develpoer",
                "Freelancer"
            ],
            socials : [
                {
                    id : 0,
                    name : "facebook",
                    link : "https://www.facebook.com/kwanghun.lee.16/"
                },
                {
                    id : 1,
                    name : "instagram",
                    link : "https://www.instagram.com/2kwanghoon/"
                },
                {
                    id : 2,
                    name : "github",
                    link : "https://github.com/lkhoony",
                },
                {
                    id : 3,
                    name : "google",
                    link : "https://mail.google.com/mail/u/0/#inbox"
                }
            ]

        }
    }


    render(){
        return(
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container aos-init" data-aos="zoom-in" data-aos-delay="100">
                    <h1>{this.state.title}</h1>
                    <p>I'm a{" "}
                        <span
                            className="typed"
                            data-typed-items={this.state.items}></span>
                    </p>
                    <SocialLinks socials={this.state.socials}></SocialLinks>
                </div>
            </section>
        );
    }
}

export default Hero;