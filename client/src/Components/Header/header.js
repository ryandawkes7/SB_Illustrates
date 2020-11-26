import {Link} from "react-router-dom";
import React, {Component} from "react";

import './header.css';

class header extends Component{
    render(){
        return(
            <div className="header-design">
                <div className="header-image-container">
                    <img className="header-logo" src={require('../images/logo/logo-long.png')} />
                </div>
                <div className="links">

                    <div className="header-link" href="(#portfolio) - 100px">
                        <a href="#portfolio">Portfolio</a>
                    </div>
                    <hr />
                    <div className="header-link" href="#about">
                        <a href="#about">
                            About
                        </a>
                    </div>
                    <hr />
                    <div className="header-link">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default header;
