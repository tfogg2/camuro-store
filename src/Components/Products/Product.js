import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'

const Product = props => {
  return(
    <div className="product" onClick={props.toggleModal}>
      <div className="product-image">
        <img src={props.image}/>
      </div>
      <div className="product-description">
        <div className="description-text">
          <div>
            <h2>{props.title}</h2>
          </div>

        </div>
        <div className="description-cta">
          <div className="product-price">
            <span><b>${props.price}</b></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
