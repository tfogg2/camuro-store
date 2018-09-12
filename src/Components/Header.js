import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="logo">
          <h1>
            <Link exact="true" to="/">
              camuro
            </Link>
          </h1>
        </div>
        <div className="nav">
          <div  className="right-nav">
            <ul className="navLinks">
              <li className="shop-link">
                <NavLink to="/products">
                  <button>
                    Shop
                  </button>
                </NavLink>
              </li>
              <li className="scrollLink">
                <NavLink to="/offer">
                  <button>
                    Sell
                  </button>
                </NavLink>
              </li>
              <li className="scrollLink no-mobile">
                <NavLink to="/gallery">
                  <button>
                    Photos
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <button>
                    Cart
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;
