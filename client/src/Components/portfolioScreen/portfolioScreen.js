import React, {Component} from 'react';
import './portfolioScreen.css';
import ProductBox from "../ProductBox/productBox";
import { portfolioData } from "./portfolioData";
import {AiFillCloseCircle} from "react-icons/all";

class PortfolioScreen extends Component {

    state = {
        isPopupVisible: false,
        selectedProduct: null,
        currentCategory: "All",
        currentStyle: "All"
    }

    togglePopup = () => {
        this.setState({
            isPopupVisible: !this.state.isPopupVisible
        })
    }

    render () {
        console.log(this.state.selectedProduct);
        console.log("Style: ", this.state.currentStyle)
        console.log("Category: ", this.state.currentCategory)


        const { selectedProduct, currentCategory, currentStyle } = this.state;

        if(window.innerWidth >= 800)
        {
            return (
                <div>

                    {/* Product Popup */ }
                    { selectedProduct !== null && (
                        <div className="product-popup-container">
                            <button
                                className="pp-close-button"
                                onClick={ () => {
                                    this.setState({
                                        selectedProduct: null
                                    })
                                } }
                            >
                                <AiFillCloseCircle/>
                            </button>

                            {/* Image */ }
                            <div className="pp-image-container">
                                <img src={ selectedProduct.image } alt="Artwork"/>
                            </div>

                            {/* Description Box */ }
                            <div className="pp-description-box">
                                <div className="ppd-inner-container">

                                    {/* Title */ }
                                    <div className="pp-title">
                                        { selectedProduct.title }
                                    </div>

                                    {/* Category & Style */ }
                                    <div className="pp-button">

                                        {/* Category Button */ }
                                        <div className="ppb-inner-container">

                                            {/* Title */ }
                                            <div className="ppb-title">
                                                category:
                                            </div>

                                            {/* Button */ }
                                            <button className="ppb-button">
                                                { selectedProduct.category }
                                            </button>
                                        </div>

                                        {/* Style Button */ }
                                        <div className="ppb-inner-container">

                                            {/* Title */ }
                                            <div className="ppb-title">
                                                style:
                                            </div>

                                            {/* Button */ }
                                            <button className="ppb-button">
                                                { selectedProduct.style }
                                            </button>
                                        </div>


                                    </div>

                                    {/* Description */ }
                                    <div className="ppd-description">
                                        <div className="ppdd-inner-container">
                                            { selectedProduct.description }
                                        </div>
                                    </div>

                                    {/* Purchase Button */ }
                                    { selectedProduct.etsy !== null &&
                                    <a href={ selectedProduct.etsy } className="ppd-purchase-button">
                                        Purchase Here
                                    </a>
                                    }

                                </div>
                            </div>

                        </div>
                    ) }

                    {/* Portfolio Grid */ }
                    <div className="portfolio-container">

                        {/* Filter Container Area */ }
                        <div className="portfolio-filter-container">
                            <div className="portfolio-inner-container">

                                {/* Category Filter Section*/ }
                                <div className="portfolio-filter-category">

                                    {/* Title */ }
                                    <div className="p-f-c-title-container">
                                        <h4>CATEGORY</h4>
                                    </div>

                                    {/* Dropdown */ }
                                    <div className="p-f-c-options">

                                        <button onClick={ () => this.setState({
                                            currentCategory: "All"
                                        }) }>
                                            All
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "Commission"
                                        }) }>
                                            Commissions
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "Personal"
                                        }) }>
                                            Personal
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "University"
                                        }) }>
                                            University
                                        </button>

                                    </div>

                                </div>

                                {/* Category Filter Section*/ }
                                <div className="portfolio-filter-category">
                                    <div className="p-f-c-title-container">
                                        <h4>STYLE</h4>
                                    </div>
                                    <div className="p-f-c-options">

                                        <button onClick={ () => this.setState({
                                            currentCategory: "All"
                                        }) }>
                                            All
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "Commission"
                                        }) }>
                                            Commissions
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "Personal"
                                        }) }>
                                            Personal
                                        </button>

                                        <button onClick={ () => this.setState({
                                            currentCategory: "University"
                                        }) }>
                                            University
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Results Section */ }
                        <div className="portfolio-results-container">
                            <div className="portfolio-results-inner-container">

                                {/* All */ }
                                { currentCategory === "All" && portfolioData.map(art => (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                                {/* Personal */ }
                                { currentCategory === "Personal" && portfolioData.map(art => art.category === "Personal" && (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                                {/* Commissions */ }
                                { currentCategory === "Commission" && portfolioData.map(art => art.category === "Commission" && (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                                {/* University */ }
                                { currentCategory === "University" && portfolioData.map(art => art.category === "University" && (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (window.innerWidth < 800) {
            return (
                <div>

                    {/* Product Popup */ }
                    { selectedProduct !== null && (
                        <div className="product-popup-container">
                            <button
                                className="pp-close-button"
                                onClick={ () => {
                                    this.setState({
                                        selectedProduct: null
                                    })
                                } }
                            >
                                <AiFillCloseCircle/>
                            </button>

                            {/* Image */ }
                            <div className="pp-image-container">
                                <img src={ selectedProduct.image } alt="Artwork"/>
                            </div>

                            {/* Description Box */ }
                            <div className="pp-description-box">
                                <div className="ppd-inner-container">

                                    {/* Title */ }
                                    <div className="pp-title">
                                        { selectedProduct.title }
                                    </div>

                                    {/* Category & Style */ }
                                    <div className="pp-button">

                                        {/* Category Button */ }
                                        <div className="ppb-inner-container">

                                            {/* Title */ }
                                            <div className="ppb-title">
                                                category:
                                            </div>

                                            {/* Button */ }
                                            <button className="ppb-button">
                                                { selectedProduct.category }
                                            </button>
                                        </div>

                                        {/* Style Button */ }
                                        <div className="ppb-inner-container">

                                            {/* Title */ }
                                            <div className="ppb-title">
                                                style:
                                            </div>

                                            {/* Button */ }
                                            <button className="ppb-button">
                                                { selectedProduct.style }
                                            </button>
                                        </div>


                                    </div>

                                    {/* Description */ }
                                    <div className="ppd-description">
                                        <div className="ppdd-inner-container">
                                            { selectedProduct.description }
                                        </div>
                                    </div>

                                    {/* Purchase Button */ }
                                    { selectedProduct.etsy !== null &&
                                    <a href={ selectedProduct.etsy } className="ppd-purchase-button">
                                        Purchase Here
                                    </a>
                                    }

                                </div>
                            </div>

                        </div>
                    ) }

                    {/* Portfolio Grid */ }
                    <div className="portfolio-container">

                        {/* Filter Container Area */ }
                        <div className="portfolio-filter-container">
                            <div className="portfolio-inner-container">

                                {/* Category Filter */ }
                                <div className="portfolio-filter-category">

                                    {/* Title */ }
                                    <div className="p-f-c-title-container">
                                        Category
                                    </div>

                                    {/* Dropdown */}
                                    <select onChange={ (e) => this.setState({
                                        currentCategory: e.target.value
                                    })}>
                                        <option>All</option>
                                        <option>Commission</option>
                                        <option>Personal</option>
                                        <option>University</option>
                                    </select>

                                </div>

                                {/*/!* Style Filter *!/*/}
                                {/*<div className="portfolio-filter-category">*/}

                                {/*    /!* Title *!/*/}
                                {/*    <div className="p-f-c-title-container">*/}
                                {/*        Style*/}
                                {/*    </div>*/}

                                {/*    /!* Dropdown *!/*/}
                                {/*    <select onChange={ (e) => this.setState({*/}
                                {/*        currentStyle: e.target.value*/}
                                {/*    })}>*/}
                                {/*        <option>All</option>*/}
                                {/*        <option>Digital</option>*/}
                                {/*        <option>Pencil</option>*/}
                                {/*    </select>*/}

                                {/*</div>*/}

                            </div>
                        </div>

                        {/* Results Section */ }
                        <div className="portfolio-results-container">
                            <div className="portfolio-results-inner-container">

                                {/* Test */ }
                                { currentCategory && portfolioData.map(art => art.category === currentCategory && (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                                {/* All */}
                                { currentCategory === "All" && portfolioData.map(art => (
                                    <ProductBox
                                        image={ art.image }
                                        title={ art.title }
                                        category={ art.category }
                                        toggle={ () => {
                                            this.setState({
                                                selectedProduct: art
                                            })
                                        } }
                                    />
                                )) }

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default PortfolioScreen;
