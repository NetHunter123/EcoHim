import { combineReducers } from "redux";
import * as types from "./types";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.Auth:

    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

const authInitial = {
  loginData: {}
};

const authReducer =(state = authInitial, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case types.Auth:
     console.log("type", type);

      return { ...state, loginData: payload.loginDataUser };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  counter: counterReducer,
  timer: timerReducer,
};

export default combineReducers(reducers);
