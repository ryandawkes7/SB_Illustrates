import {Link} from "react-router-dom";
import React, {Component} from "react";

import './header.css';
import {IoIosBook} from "react-icons/all";

class header extends Component{

    render(){

        if(window.innerWidth > 1000) {
            return (
                <div className="header-design">
                    <Link to="/" className="header-image-container">
                        <img className="header-logo" src={require('../images/logo/logo-long.png')} />
                    </Link>
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
            );
        } else if(window.innerWidth < 600) {
            return (
                <div className="header-design">
                    <Link to="/" className="header-image-container">
                        <img className="header-logo" src={require('../images/logo/logo-long.png')} />
                    </Link>
                    <div className="links">

                        <a href="/portfolio">
                            <IoIosBook/>
                        </a>

                    </div>
                </div>
            );
        }

    }
}

export default header;
