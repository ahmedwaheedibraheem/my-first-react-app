import React, { Component } from 'react';
import '../../style.css';
import SideMenu from '../../components/side-menu/side-menu';
import Product from '../../components/product/product';
import Filter from '../../components/filter/filter';
import axios from 'axios';
import storage from '../../firebase/firebase-config';


class ProductListing extends Component {

    state = {
        products: [],
        currentPage: 1,
        productsPerPage: 9
    }

    componentDidMount(){
        axios.get('https://react-26c41.firebaseio.com/products.json')
        .then(response => {
            let productArr = [];
            for (let key in response.data){
                let product = {
                    id: key,
                    imageURL: response.data[key].imageURL,
                    imageName: response.data[key].imageName,
                    productName: response.data[key].productName,
                    productPrice: response.data[key].productPrice,
                    productStatus: response.data[key].productStatus,
                    discount: response.data[key].discount,
                }
                productArr.push(product);
                this.setState({products: productArr});
            }
        })
        .catch(error => console.log(error))
    }
    
    //EVENT HANDLERS

    currentPageHandler = (id) => {
        this.setState({currentPage: id})
    }

    deleteHandler = (id, imageName) => {
        axios.delete(`https://react-26c41.firebaseio.com/products/${id}.json`)
        .then((response) => {
            if (response.status == 200){
                let productIndex = this.state.products.findIndex((product) => {return product.id == id});
                console.log(productIndex);
                let productsArr = [...this.state.products];
                productsArr.splice(productIndex, 1);
                this.setState({products: productsArr});
                storage.ref('images').child(imageName).delete();
            }
        })
        .catch(error => console.log(error))
    }

    viewHandler = (id) => {
        this.props.history.push(`product/${id}`);
    }

    render() {
        
        //PAGING LOGIC
        const {products, currentPage, productsPerPage} = this.state;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        
        //DISPLAY PRODUCTS
        const displayedProducts = currentProducts.map((product) => {
            return <Product
                key = {product.id}
                id = {product.id}
                imageURL = {product.imageURL}
                imageName = {product.imageName}
                productName = {product.productName}
                productPrice = {product.productPrice}
                productStatus = {product.productStatus}
                discount = {product.discount}
                delete = {this.deleteHandler}
                view = {this.viewHandler}/>
        });

        //DISPLAY PAGENUMBERS
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++){
            pageNumbers.push(i);
        }

        const displayedPageNumbers = pageNumbers.map((n) => {            
            return <div 
                key = {n}
                id = {n}
                className = {n == currentPage? "paging__number active" : "paging__number"}
                onClick = {(event) => this.currentPageHandler(event.target.id)}
                >{n}</div>
        })

        return (
            <div className="container">
                <SideMenu></SideMenu>
                <section className="item-listing">
                    <Filter></Filter>
                    <div className="item-listing__items item-listing--3items" style={{width: '100%'}}>
                        {displayedProducts}
                    </div>
                    <div className="paging">
                     {displayedPageNumbers}
                    </div>
                </section>
            </div>
        );
    }
}
 
export default ProductListing ;