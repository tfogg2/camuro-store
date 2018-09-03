import React, {Component} from 'react'
import $ from "jquery"


class ItemForm extends Component {
  render(){
    const index = this.props.index + 1
    const item = this.props.item
    return(
      <div className="item-form-group">
        <h4>Item {index}</h4>
        <div className="form-group item pricing">
          <label for="price">ASKING PRICE</label>
          <span>$</span>
          <input type="number" index={this.props.index} className={this.props.inputClass('price')} className="price" />
        </div>
        <div className="form-group item">
          <label for="modelName">MODEL</label>
          <input type="text" index={this.props.index} className={this.props.inputClass('model')} className="model" />
        </div>
        <div className="form-group item">
          <label>ITEM CONDITION</label>
          <select className="condition" placeholder="Select item description" index={this.props.index}>
            <option>Like New</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Well Used</option>
            <option>Heavily Used</option>
            <option>Faulty</option>
          </select>
        </div>
      </div>
    )
  }
}

export default ItemForm
