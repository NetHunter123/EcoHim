import * as types from "./types";
import axios from "axios";

export const GetProductFetch = (url,config={}) => {
  console.log("Axios good user tut");
  return async (dispatch) => {
    await axios.get(url,config).then((data) => {
      console.log("AxiosQuery", data.data);
      dispatch({ type: types.PRODUCT, payload: { productsData: data.data.data } });
    });
  };
};

export const setCartItems = (cartItems) => {
  console.log("cartItems action tut");
  return async (dispatch) => {
      await dispatch({ type: types.CART_ITEMS, payload: { cartItems: cartItems } });
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};
