import {Link} from "react-router-dom";
import React, {Component} from "react";

import './footer.css';

class FooterBar extends Component{

    render(){
        return <div className="footer-bar">
            Designed By <a href="https://www.linkedin.com/in/ryandawkes/">Ryan Dawkes</a>
        </div>
    }
}

export default FooterBar;
