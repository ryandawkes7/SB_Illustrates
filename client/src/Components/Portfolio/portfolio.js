import React, { Component } from 'react';

import './portfolio.css';
import {Link} from "react-router-dom";

class portfolio extends Component {
    render(){
        return(
            <div className="portfolio-page-design" id="portfolio">
                {/*Portfolio Section*/}
                <div className="portfolio-desc">
                    <h1>PORTFOLIO</h1>
                    <p>Select a category on the right to see my work.</p>
                </div>
                <div className="portfolio-categories">
                    <div className="portfolio-grow-cont">
                        <Link to="/portfolio" className="portfolio-grow">
                            <img src={require('../images/art/university.png')}/>
                            <div className="portfolio-title-container">
                                <h4>UNIVERSITY</h4>
                            </div>
                        </Link>
                        <Link className="portfolio-grow">
                            <img src={require('../images/art/personal.png')}/>
                            <div className="portfolio-title-container">
                                <h4>PERSONAL</h4>
                            </div>
                        </Link>
                        <Link className="portfolio-grow">
                            <img src={require('../images/art/portrait.png')}/>
                            <div className="portfolio-title-container">
                                <h4>COMMISSIONS</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default portfolio;
