import { combineReducers } from "redux";
import * as types from "./types";

const productsInitial = {
  products: [],
};

const productReducer = (state = productsInitial, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case types.PRODUCT:
      console.log("type", type);
      return { ...state, products: payload.productsData };
    default:
      return state;
  }
};


const cartInitial = {
  cartItems: [],
};

const cartReducer = (state = cartInitial, { type, payload }) => {
  console.log("payload", payload);
  console.log("ReduxCartItems", state.cartItems);
  switch (type) {
    case types.CART_ITEMS:
      console.log("type", type);
      return { ...state, cartItems: payload.cartItems };
    default:
      return state;
  }
};
// COMBINED REDUCERS
const reducers = {
  products: productReducer,
  cart:cartReducer
};

export default combineReducers(reducers);
