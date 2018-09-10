import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'

const Product = props => {
  return(
    <div className="product">
      <div className="product-image">
        <img src={props.image} onClick={props.toggleModal}/>
      </div>
      <div className="product-description">
        <div className="description-text">
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="description-cta">
          <div className="product-price">
            <span>Price: <b>${props.price}</b></span>
          </div>
          <Link to={`/cart`} className="add-product" onClick={ () => props.addProduct(props.title, props.category, props.description, props.price, props.index, props.image)}>
            <button>Add Product</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
