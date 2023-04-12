import {
  GET_WHEATHER,
  SET_IS_FETCHING_WEATHER,
} from "../actions/types";

const weather = JSON.parse(localStorage.getItem("weather"));
const defaultState = weather
  ? { isFetching: false, weather }
  : { isFetching: false, weather: null };


export const weatherReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WHEATHER:
      return {
        ...state,
        weather: payload.weather,
        isFetching: false,
      };
    case SET_IS_FETCHING_WEATHER:
      return {
        ...state,
        isFetching: payload,
      }
    default:
      return state;
  }
}
