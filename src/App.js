import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import _ from 'lodash'

import { bindActionCreators } from 'redux'
import * as CartActionCreators from './Actions/Cart'
import { connect } from 'react-redux'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Home from './Components/Home/Home.js'
import Products from './Components/Products/Products.js'
import Product from './Components/Products/Product.js'
import Gallery from './Components/Gallery'
import ProductModal from './Components/Products/ProductModal.js'
import Offer from './Components/Offers/OfferForm.js'
import About from './Components/About.js'
import NotFound from './Components/NotFound.js'
import './App.css'

class App extends Component {
  constructor(props) {
   super(props)
  }

  render() {
    const {dispatch, cartProducts, total, isChecked} = this.props
    const addProduct = bindActionCreators(CartActionCreators.addProduct, dispatch)
    const removeProduct = bindActionCreators(CartActionCreators.removeProduct, dispatch)

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/cart" render={() => <Cart removeProduct={removeProduct} cartProducts={cartProducts} total={total} isChecked={isChecked}/>} />
            <Route path="/products" render={() => <Products addProduct={addProduct}/>} />
            <Route path="/gallery" render={() => <Gallery />}/>
            <Route path="/offer" render={() => <Offer />}/>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => (
  {
    cartProducts: state.cartProducts,
    total: state.total
  }
)

export default connect(mapStateToProps)(App)
