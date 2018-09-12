import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartReducer from './Reducers/Cart'
import './index.css'
import App from './App'
import {StripeProvider} from 'react-stripe-elements';

const store = createStore(
  cartReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root')
)
