import React, {Component} from 'react'; import './productBox.css';

class ProductBox extends Component {
    render () {
        return (
            <div className="product-box-container">

                {/* Image */}
                <div className="pb-image-container">
                    <button onClick={this.props.toggle}>
                        <img src={this.props.image} alt="Artwork" />
                    </button>
                </div>

                {/* Description */}
                <div className="pb-description-container">

                    {/* Title */}
                    <div className="pbd-title-container">
                        <div className="pbd-title">
                            <button onClick={this.props.toggle}>
                                {this.props.title}
                            </button>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="pbd-category-container">
                        <div className="pbd-category">
                            <a href="#">
                                {this.props.category}
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProductBox;