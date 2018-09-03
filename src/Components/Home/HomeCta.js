import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class HomeCta extends Component {
  render(){
    return(
      <div className="home-cta">
         <h1>One <span onClick={() => scrollToComponent(this.props.offer, { offset: 0, align: 'top', duration: 1500})} className="selling">restoration</span><br/>at a time.</h1>
      </div>
    )
  }
}

export default HomeCta;




// <h1>Film.</h1><br/>
// <h1>It's what <Link to='/about'>we</Link> do.</h1>
// <Link to="/products">
//   <button className="cta-btn">
//     Shop Now
//   </button>
// </Link>
// <Link to="/sell"><button className="cta-btn">Let us know</button></Link>
