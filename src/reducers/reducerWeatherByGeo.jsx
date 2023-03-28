import {
  GET_WHEATHER_BY_GEO,
  SET_IS_FETCHING_WEATHER_BY_GEO,
} from "../actions/types";

const weather = JSON.parse(localStorage.getItem("weather"));
console.log(weather)
const defaultState = weather
  ? { isFetching: false, weather }
  : { isFetching: false, weather: null };


export const weatherByGeoReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WHEATHER_BY_GEO:
      return {
        ...state,
        weather: payload.weather,
        isFetching: false,
      };
    case SET_IS_FETCHING_WEATHER_BY_GEO:
      return {
        ...state,
        isFetching: payload,
      }
    default:
      return state;
  }
}
