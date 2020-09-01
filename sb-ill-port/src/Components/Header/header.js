import {Link} from "react-router-dom";
import React, {Component} from "react";

import './header.css';

class header extends Component{
    render(){
        return(
            <div className="header-design">
                <header className="header">
                    <img className="header-logo" src={require('../images/logo/logo-long.png')} />
                    <div className="links">
                        <div className="header-link">
                            <Link to="#">About</Link>
                        </div>
                        <div className="vertical-divider"/>
                        <div className="header-link">
                            <Link to="#">Portfolio</Link>
                        </div>
                        <div className="vertical-divider"/>
                        <div className="header-link">
                            <Link to="#">Contact</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default header;
