import React from 'react'
import { Link } from 'react-router-dom'
import Checkout from '../Checkout'

const Cart = props => {
  const products = props.cartProducts
  const total = props.total


  if(products.length > 0 ){
    return (
      <div className="cart">
        <div className="cart-left">
          <table className="cart-table">
            <tbody>
              <tr className="cart-header">
                <td></td>
                <td><b>Title</b></td>
                <td><b>Price</b></td>
                <td><b>Remove</b></td>
              </tr>
              {props.cartProducts.map((product, index) => (
                  <tr className="cart-product-row">
                    <td className="cart-product-image">
                      <img src={product.image}/>
                    </td>
                    <td className="cart-product-title">
                      <h3>{product.title}</h3>
                    </td>
                    <td className="cart-product-price">
                      <span>${product.price}</span>
                    </td>
                    <td className="remove-product">
                      <a onClick={ () => props.removeProduct(index, product.price)}>✖</a>
                    </td>
                  </tr>
              ))}
              <tr className="cart-total-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>${total}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-right">
          <div className="cart-checkout">
            <Checkout
               name={'Checkout'}
               description={'Only the Book'}
               amount={total}
            />
            <p> or </p>
            <Link to="/products">Continue Shopping</Link>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="cart">
        <h3><Link to="/products">Add some products!</Link></h3>
      </div>
    )
  }
}

export default Cart;
