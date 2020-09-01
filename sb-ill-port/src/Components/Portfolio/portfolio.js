import React, { Component } from 'react';

import './portfolio.css';
import {Link} from "react-router-dom";

class portfolio extends Component {
    render(){
        return(
            <div className="portfolio-page-design">
                {/*Portfolio Section*/}
                <div className="portfolio">
                    <div className="portfolio-desc">
                        <h1>PORTFOLIO</h1>
                        <p>Select a category on the right to see my work.</p>
                    </div>
                    <div className="portfolio-categories">
                        <div className="portfolio-grow-cont">
                            <div className="portfolio-grow">
                                <img src={require('../images/art/university.png')}/>
                                <img className="uni-title" src={require('../images/title/uniwork.png')}/>
                            </div>
                            <div className="portfolio-grow">
                                <img src={require('../images/art/personal.png')}/>
                            </div>
                            <div className="portfolio-grow">
                                <img src={require('../images/art/portrait.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default portfolio;