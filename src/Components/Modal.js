import React, {Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Modal extends Component {

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
    const modalClass = this.state.loaded ? 'visible-item modal' : 'modal'

    return (
      <div className={modalClass} onClick={this.props.stopClose}>
        <img src={this.props.image} alt={this.props.title} />
        <div className="modal-footer">
          <a href={this.props.credit} target="_blank"><h4>{this.props.title}</h4></a>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
