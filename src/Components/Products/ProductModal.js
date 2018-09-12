import React, {Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class ProductModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )
  }


  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    const modalClass = this.state.loaded ? 'visible-item product-modal modal' : 'modal'

    return (
      <div className={modalClass} onClick={this.props.stopClose}>
        <img src={this.props.image} alt={this.props.title} />
        <div className="product-info">
          <h2 className="modal-header-title">{this.props.title}</h2>
          <span><b>${this.props.price}</b></span>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

ProductModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ProductModal;
