import * as types from "./types";
import axios from "axios";

export const GetProductFetch = (url) => {
  console.log("Axios good user tut");
  return async (dispatch) => {
    await axios.get(url).then((data) => {
      console.log("AxiosQuery", data.data);
      dispatch({ type: types.PRODUCT, payload: { productsData: data.data.data } });
    });
  };
};
