import React, { Component } from 'react';

import './portfolio.css';
import {Link} from "react-router-dom";

class portfolio extends Component {
    render(){
        return (
            <div className="portfolio-page-design" id="portfolio">

                {/* Description Section */}
                <div className="portfolio-desc">
                    <h1>PORTFOLIO</h1>
                    <p>Over the years, I have completed various forms of work. View my portfolio by selecting a category</p>
                </div>

                {/* Categories Section */}
                <div className="portfolio-categories">
                    <div className="portfolio-grow-cont">

                        {/* University */}
                        <Link to="/portfolio" className="portfolio-grow">

                            {/* Image */}
                            <img src={require('../images/art/university.png')} className="university-image"/>

                            {/* Description */}
                            <div className="portfolio-title-container">
                                <h4>UNIVERSITY</h4>
                            </div>

                        </Link>

                        {/* Personal */}
                        <Link className="portfolio-grow">
                            <img src={require('../images/art/personal.png')} className="personal-image"/>
                            <div className="portfolio-title-container">
                                <h4>PERSONAL</h4>
                            </div>
                        </Link>

                        {/* Commissions */}
                        <Link className="portfolio-grow">
                            <img src={require('../images/art/portrait.png')} className="commissions-image"/>
                            <div className="portfolio-title-container">
                                <h4>COMMISSIONS</h4>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>
        );
    }
}

export default portfolio;
