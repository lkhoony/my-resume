import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component{

    getNavItems = (items)=>{
        return(
            items.map(
                item => <li key={item.id}>
                            <a href={"#"+item.title} className="nav-link scrollto">
                                <i className={"bx "+"bx-"+item.icon}></i> 
                                <span>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</span>
                            </a>
                        </li>
            )
        )
    }

    render(){

        return(
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        {this.getNavItems(this.props.data.sections)}
                    </ul>
                </nav>
            </header>              
        );
    }
}

export default Header;
