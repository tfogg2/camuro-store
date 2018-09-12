import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import Gallery from '../Gallery'
import About from '../About'
import OfferForm from '../Offers/OfferForm'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'
import scrollToComponent from 'react-scroll-to-component'
import Footer from '../Footer.js'



class Home extends Component {

  state = {
    loaded: false
  }
  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )
    const about = document.getElementById('about')
  }

  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    const limit = 9
    return(
      <div className="home">
        <div className="splash-background">
          <div className={homeClass}></div>
        </div>
        <HomeCta offer={this.OfferForm} />
        <div className="content">
          <About offer={this.OfferForm} ref={(section) => { this.About = section; }}/>
          <div className="home-gallery" ref={(section) => { this.Gallery = section; }}>
            <div className='home-content'>
              <Gallery limit={limit}/>
              <Link to="/gallery" alt="gallery">
                <button className="gallery-btn">
                  See More Photos
                </button>
              </Link>
            </div>
          </div>
          <div className="home-offer">
            <OfferForm ref={(section) => { this.OfferForm = section; }}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
