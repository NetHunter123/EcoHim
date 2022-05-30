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

// COMBINED REDUCERS
const reducers = {
  products: productReducer,
};

export default combineReducers(reducers);
