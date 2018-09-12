import React, {Component} from 'react'
import ReactContactForm from 'react-mail-form'
import axios from 'axios'
import SelectUSState from 'react-select-us-states'
import $ from "jquery"
import ItemForm from './ItemForm'

class OfferForm extends Component {
  state = {
    activeField: null,
    invalidFields: [],
    items: [{
      item:[
        {
          price: '',
          model: '',
          condition: ''
        }
      ]
    }]
  }


  handleAddItem = () => {

    this.setState({
       items: this.state.items.concat([{ model: '' , condition: '', price: ''}])
     });
  }

  removeItem = (index) => {
    const items = this.state.items.slice()
    items.splice(index, 1)
    this.setState({
      items: items
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const state = document.getElementById('state').value
    const model = document.getElementsByClassName('model')[0].value
    const condition = document.getElementsByClassName('condition')[0].value
    const price = document.getElementsByClassName('price')[0].value

    const item1 = `\n \n Item 1- \n model: ${model} \n condition: ${condition} \n price: ${price}`
    const items = []
    items.push(item1)

    if (this.state.items.length > 1) {
      const model2 = document.getElementsByClassName('model')[1].value
      const condition2 = document.getElementsByClassName('condition')[1].value
      const price2 = document.getElementsByClassName('price')[1].value
      const item2 = `\n \n Item 2- \n model: ${model2} \n condition: ${condition2} \n price: ${price2}`
      items.push(item2)
    }
    if (this.state.items.length > 2) {
      const model3 = document.getElementsByClassName('model')[2].value
      const condition3 = document.getElementsByClassName('condition')[2].value
      const price3 = document.getElementsByClassName('price')[2].value
      const item3 = `\n \n Item 3- \n model: ${model3} \n condition: ${condition3} \n price: ${price3}`
      items.push(item3)
    }
    if (this.state.items.length > 3) {
      const model4 = document.getElementsByClassName('model')[3].value
      const condition4 = document.getElementsByClassName('condition')[3].value
      const price4 = document.getElementsByClassName('price')[3].value
      const item4 = `\n \n Item 4- \n model: ${model4} \n condition: ${condition4} \n price: ${price4}`
      items.push(item4)
    }
    if (this.state.items.length > 4) {
      const model5 = document.getElementsByClassName('model')[4].value
      const condition5 = document.getElementsByClassName('condition')[4].value
      const price5 = document.getElementsByClassName('price')[4].value
      const item5 = `\n \n Item 5- \n model: ${model5} \n condition: ${condition5} \n price: ${price5}`
      items.push(item5)
    }
    if (this.state.items.length > 5) {
      const model6 = document.getElementsByClassName('model')[5].value
      const condition6 = document.getElementsByClassName('condition')[5].value
      const price6 = document.getElementsByClassName('price')[5].value
      const item6 = `\n \n Item 6- \n model: ${model6} \n condition: ${condition6} \n price: ${price6}`
      items.push(item6)
    }
    if (this.state.items.length > 6) {
      const model7 = document.getElementsByClassName('model')[6].value
      const condition7 = document.getElementsByClassName('condition')[6].value
      const price7 = document.getElementsByClassName('price')[6].value
      const item7 = `\n \n Item 7- \n model: ${model7} \n condition: ${condition7} \n price: ${price7}`
      items.push(item7)
    }
    if (this.state.items.length > 7) {
      const model8 = document.getElementsByClassName('model')[7].value
      const condition8 = document.getElementsByClassName('condition')[7].value
      const price8 = document.getElementsByClassName('price')[7].value
      const item8 = `\n \n Item 8- \n model: ${model8} \n condition: ${condition8} \n price: ${price8}`
      items.push(item8)
    }
    if (this.state.items.length > 8) {
      const model9 = document.getElementsByClassName('model')[8].value
      const condition9 = document.getElementsByClassName('condition')[8].value
      const price9 = document.getElementsByClassName('price')[8].value
      const item9 = `\n \n Item 9- \n model: ${model9} \n condition: ${condition9} \n price: ${price9}`
      items.push(item9)
    }
    if (this.state.items.length > 9) {
      const model10 = document.getElementsByClassName('model')[9].value
      const condition10 = document.getElementsByClassName('condition')[9].value
      const price10 = document.getElementsByClassName('price')[9].value
      const item10 = `\n \n Item 10- \n model: ${model10} \n condition: ${condition10} \n price: ${price10}`
      items.push(item10)
    }

    const invalidFields = []
    if (!email || email.length < 1) { invalidFields.push('email') }
    if (!name || name.length < 1) { invalidFields.push('name') }
    if (!model || model.length < 1) { invalidFields.push('model') }
    if (!price || price.length < 1) { invalidFields.push('price') }

    this.setState({
      invalidFields: invalidFields
    })

    if (invalidFields.length > 0) { return false }

    const message = items
    $.post('/sendEmail', {
          name: name,
          email: email,
          state: state,
          message: message
        }
    ).done((data)=>{
        if(data.success){
            alert("Thanks for the message! We'll get back to you.")
            this.resetForm()
        }else{
            alert("Message failed to send.")
            this.resetForm()
        }
    })
  }

  inputActive = (field) => {
    const currentState = this.state.active
    this.setState({ activeField: field})
  }

  inputClass = (field) => {
    let fieldClasses = []
    // Check to see if field is currently active
    if (this.state.activeField === field) {
      fieldClasses.push('active')
    }
    // Check if field is in array of invalid fields
    if (this.state.invalidFields.indexOf(field) !== -1) {
      fieldClasses.push('error')
    }

    return fieldClasses.join(' ')
  }

  resetForm(){
    document.getElementById('contact-form').reset()
  }

  render(){
    const LastItem = () => {
      if (this.state.items.length > 1) {
        return <a className="remove-last"onClick={() => this.removeItem(this.state.items.last)}>Remove Last Item</a>
      }
      else {
        return null
      }
    }

    const AddItem = () => {
      if (this.state.items.length < 10){
        return <button className="add-items" type="button" onClick={this.handleAddItem}>Add Item</button>
      }
      else {
        return <p className="addItemText"> You have reached the maximum number of items. Please fill out the form again to add more.</p>
      }
    }
    return(
      <div className="sell-content">
        <div className="sell-form-content">
          <h1>Get An Offer</h1>
          <span>* We will never sell or share your information.</span>
          <form className="sell-form" id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="personal-info">
              <h4>Contact Info</h4>
              <div className="form-group">
                <label for="name">NAME</label>
                <input type="name" className={this.inputClass('name')} id="name" aria-describedby="customerName" onClick={() => this.inputActive("name")}/>
              </div>
              <div className="form-group">
                <label for="email">EMAIL</label>
                <input type="email" className={this.inputClass('email')} id="email" aria-describedby="emailHelp" onClick={() => this.inputActive("email")}/>
              </div>
              <div className="form-group">
                <label for="state">STATE</label>
                <SelectUSState id="state" className="myClassName"/>
              </div>
            </div>
            <div>
              {this.state.items ?
                this.state.items.map((item, index) =>
                  <ItemForm inputClass={this.inputClass} inputActive={this.inputActive} index={index} item={item} removeItem={this.removeItem}/>
                )
              : null }
            </div>
            <AddItem />
            <LastItem />
            <button type="submit" className="btn btn-primary">Get Offer</button>
          </form>
        </div>
      </div>
    )
  }
}

export default OfferForm
