import React, { Component } from 'react';
import AddProduct from './containers/add-product/add-product';
import ProductListing from './containers/product-listing/product-listing'
import ProductDetails from './containers/product-details/product-details';
import Navbar from './components/navbar/navbar';
import ErrorPage from './components/error/error';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar></Navbar>
            <Switch>
              <Route path="/add-product" exact component={AddProduct}/>
              <Route path="/product/:id" exact component={ProductDetails}/>
              <Route path="/" exact component={ProductListing}/>
              <Route path='*' component={ErrorPage}/>
            </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
