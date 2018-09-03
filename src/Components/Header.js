import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
              <li className="scrollLink no-mobile">
                <button onClick={() => scrollToComponent(this.Gallery, { offset: 0, align: 'top', duration: 1500})}>
                  Photos
                </button>
              </li>
              <li className="scrollLink no-mobile">
                <button onClick={() => scrollToComponent(this.OfferForm, { offset: 0, align: 'top', duration: 1500})}>
                  Sell Gear
                </button>
              </li>
              <li className="no-mobile coming-soon">
                <Link to="/products">
                  <button>
                    Shop <i>(Coming Soon)</i>
                  </button>
                </Link>
              </li>
              <li className="insta-link ">
                <a href="https://www.instagram.com/camuro.co/" target="_blank" alt="camuro-instagram" >
                  <div className="instagram"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;
