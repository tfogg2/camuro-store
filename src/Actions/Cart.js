import * as CartActionTypes from '../ActionTypes/Cart'

export const addProduct = (title, category, description, price, index, image) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    title,
    category,
    description,
    price,
    index,
    image
  }
}

export const removeProduct = (index, price) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    index,
    price
  }
}

export const updateCartTotal = (index, price) => {
  return {
    type: CartActionTypes.UPDATE_CART_TOTAL,
    price,
    index
  }
}
