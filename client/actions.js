import * as types from "./types";
import axios from "axios";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

export const ActionloginUser = (url, props) => {
  console.log("Login user tut");
  // return async (dispatch) => {
  //   await axios.post(url, props).then((data) => {
  //     // setAxdata(data.data);
  //     const axdata = JSON.stringify(data.data);
  //     localStorage.setItem("user", axdata);
  //     console.log("AxiosQuery", data.data);
  //     dispatch({ type: types.Auth, payload: { loginDataUser: data.data } });
  //   });
  // };
};
