import * as types from "./types";
import axios from "axios";

export const GetProductFetch = (url,config={}) => {
  console.log("Axios good user tut");
  return async (dispatch) => {
    await axios.get(url,config).then((data) => {
      console.log("AxiosQuery", data.data);
      console.log("AxiosQueryURL", url);
      dispatch({ type: types.PRODUCT, payload: { productsData: data.data.data } });
    });
  };
};

export const setCartItems = (cartItems) => {
  console.log("cartItems action tut");
  return async (dispatch) => {
      await dispatch({ type: types.CART_ITEMS, payload: { cartItems: cartItems } });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const getOfficesNP = (method, searchMethod, searchParam) => {
  console.log("method", method);
  console.log("searchMethod", searchMethod);
  console.log("searchParam", searchParam);
  return async (dispatch) => {
    const response = await axios
      .post("https://api.novaposhta.ua/v2.0/json/",{
        apiKey: "4c660f3f2164164641570589e0a9419e",
        modelName: "Address",
        calledMethod: `${method}`, //getCities
        methodProperties: {
          [searchMethod]: `${searchParam}`,
          Limit: 20,
        },
      } )
      .then(({ data }) => {
        console.log("action data.data:", data.data);
        method=='getCities'?
          dispatch({ type: types.SET_CITIES, payload: { dataNP: data.data } })
          : dispatch({ type: types.SET_WAREHOUSES, payload: { dataNP: data.data } });

      })
      .catch((e) => console.log(e));
  };
};
