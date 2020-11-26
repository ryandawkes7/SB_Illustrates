import React, {Component} from 'react';
import './portfolioScreen.css';
import ProductBox from "../ProductBox/productBox";

import BTTF from './assets/bttf.JPG'; import TTC from './assets/ttc.JPG';
import {AiFillCloseCircle, AiOutlineCloseCircle, RiCloseFill} from "react-icons/all";

class PortfolioScreen extends Component {

    state = {
        isPopupVisible: false
    }

    togglePopup = () => {
        this.setState({
            isPopupVisible: !this.state.isPopupVisible
        })
        console.log(this.state.isPopupVisible)
    }

    render () {

        const { isPopupVisible } = this.state;

        return (
            <div>
                {
                    isPopupVisible && (
                        <div className="product-popup-container">
                            <button className="pp-close-button" onClick={this.togglePopup}>
                                <AiFillCloseCircle />
                            </button>

                            {/* Image */}
                            <div className="pp-image-container">
                                <img src={BTTF} alt="Artwork"/>
                            </div>

                            {/* Description Box */}
                            <div className="pp-description-box">
                                <div className="ppd-inner-container">

                                    {/* Title */}
                                    <div className="pp-title">
                                        Artwork Title
                                    </div>

                                    {/* Category & Style */}
                                    <div className="pp-button">

                                        {/* Category Button */}
                                        <div className="ppb-inner-container">

                                            {/* Title */}
                                            <div className="ppb-title">
                                                category:
                                            </div>

                                            {/* Button */}
                                            <button className="ppb-button">
                                                Personal
                                            </button>
                                        </div>

                                        {/* Style Button */}
                                        <div className="ppb-inner-container">

                                            {/* Title */}
                                            <div className="ppb-title">
                                                style:
                                            </div>

                                            {/* Button */}
                                            <button className="ppb-button">
                                                Digital
                                            </button>
                                        </div>


                                    </div>

                                    {/* Description */}
                                    <div className="ppd-description">
                                        <div className="ppdd-inner-container">

                                        </div>
                                    </div>

                                    {/* Purchase Button */}
                                    <button className="ppd-purchase-button">
                                        Purchase Here
                                    </button>

                                </div>
                            </div>

                        </div>
                    )
                }

                <div className="portfolio-container">


                    {/* Filter Container Area */}
                    <div className="portfolio-filter-container">
                        <div className="portfolio-inner-container">

                            {/* Category Filter Section*/}
                            <div className="portfolio-filter-category">
                                <div className="p-f-c-title-container">
                                    <h4>CATEGORY</h4>
                                </div>
                                <div className="p-f-c-options">
                                    <h5>All</h5>
                                    <h5>Commissions</h5>
                                    <h5>Personal</h5>
                                    <h5>University</h5>
                                </div>
                            </div>

                            {/* Sort By Filter Category */}
                            <div className="portfolio-sort-category">
                                <div className="p-f-c-title-container">
                                    <h4>SORT BY</h4>
                                </div>
                                <div className="p-f-c-options">
                                    <h5>Newest</h5>
                                    <h5>Oldest</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-results-container">
                        <div className="portfolio-results-inner-container">
                            <ProductBox image={BTTF} title="Back to the Future" category="Commission" toggle={this.togglePopup} />
                            <ProductBox image={TTC} title="Tyler The Creator" category="Personal" toggle={this.togglePopup}/>
                            <ProductBox />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioScreen;
