import React, { Component } from 'react';
import axios from 'axios';
import spinner from '../../Assets/RewardingDisfiguredAnnelid-size_restricted.gif';
import '../../style.css';

class ProductDetails extends Component {

    state={
        imageURL: spinner,
        productName: '',
        productPrice: '',
        productDescription:'',
        productCategory:''
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://react-26c41.firebaseio.com/products/${id}.json`)
        .then((response) => {
            console.log(response);
            let details = {
                imageURL: response.data.imageURL,
                productName: response.data.productName,
                productPrice: +response.data.productPrice - +response.data.discount,
                productDescription: response.data.productDescription,
                productCategory: response.data.productCategory
            };
            console.log(details);
            this.setState({...details});
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {        
        return (
            <div className="product-details container">
            <section className="product-details__main">
                <div className="slider">
                    <div className="slider__items">
                        <div className="slider__item active" style={{backgroundImage: `url(${this.state.imageURL})`,
                                                                backgroundSize: "100% 100%"}}></div>
                    </div>
                </div>
                <div className="product-details__info">
                    <h1>{this.state.productName}</h1>
                    <div className="rating">
                        <div className="rating__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="rating__data">
                            2 reviews
                        </div>
                    </div>
                    <div className="product-details__amount">
                        {this.state.productPrice}
                    </div>
                    <p className="product-details__desc">
                        {this.state.productDescription}
                    </p><br/>
                    <div style={{color: 'rgb(0, 136, 204)'}} className="product-details__meta">
                        <span style={{fontWeight: 'bold'}}>Categories:</span>&nbsp;{this.state.productCategory}.
                    </div>
                </div>
            </section>
        </div>
        );
    }
}
 
export default ProductDetails;