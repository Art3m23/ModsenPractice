import {
  GET_WHEATHER,
  RESET_WHEATHER,
} from "../actions/types";

const weather = localStorage.getItem("persist:root");
const defaultState = weather
  ? { weather }
  : { weather: null };


export const weatherReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WHEATHER:
      return {
        ...state,
        weather: payload.weather,
      };
    case RESET_WHEATHER:
      return {
        ...state,
        weather: null,
      };
    default:
      return state;
  }
}
