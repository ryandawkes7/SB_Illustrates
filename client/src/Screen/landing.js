import React, {Component} from 'react';

import Portfolio from '../Components/Portfolio/portfolio';
import About from '../Components/About/about';
import Contact from '../Components/Contact/contact';
import {BrowserRouter} from "react-router-dom";

class Landing extends Component {
    render () {
        return (
            <div>
                <Portfolio id="portfolio"/>
                <div className="page-divider"/>
                <About id="about" />
                <div className="page-divider" />
                <Contact id="contact" />
            </div>
        );
    }
}

export default Landing;
