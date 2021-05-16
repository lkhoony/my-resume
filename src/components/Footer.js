import React, {Component} from 'react';
import {SocialLinks} from '.';
import '../css/Footer.css';

class Footer extends Component{

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
    render() {
        return(
            <footer id="footer">
                <div className="container">
                    <h3>Kwanghun Lee</h3>
                    <p>긍정적인 태도로 끊임없이 배우는 Web Front-End 및 Back-End 개발자, 이광훈입니다.</p>
                    <SocialLinks socials={this.state.socials}></SocialLinks>
                    <div className="copyright">
                        &copy; Copyright
                        <strong>
                            <span>MyResume</span>
                        </strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by
                        <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;