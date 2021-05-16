import React, {Component} from 'react';
import {Social} from '.';

class SocialLinks extends Component{

    render(){

        const socialList = this.props.socials.map(
            (social) => <Social key={social.id} name={social.name} link={social.link}></Social>
        )

        return(
            <div className="social-links">
                {socialList}
            </div>
        )
    }
}

export default SocialLinks;