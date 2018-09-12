import * as CartActionTypes from '../ActionTypes/Cart';

const initialState = {
  cartProducts: [],
  total:0,
  isChecked: true
}

export default function Cart(state=initialState, action){

  switch(action.type){
    case CartActionTypes.ADD_PRODUCT: {
      let newTotal = state.total += action.price

      const addProductList = [...state.cartProducts, {
        product: action.product,
        title: action.title,
        price: action.price,
        category: action.category,
        description: action.description,
        image: action.image
      }]

      return {
        ...state,
        cartProducts: addProductList,
        total: newTotal
      }
    }

    case CartActionTypes.REMOVE_PRODUCT: {
      let newTotal = state.total -= action.price

      const removeProductList = [
        ...state.cartProducts.slice(0, action.index),
        ...state.cartProducts.slice(action.index + 1)
      ]

      return {
        ...state,
        cartProducts: removeProductList,
        total: newTotal
      }
    }
    default:
      return state;
  }
}
