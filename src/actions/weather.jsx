import api from "../services/api";
import {
  GET_WHEATHER,
  SET_IS_FETCHING_WEATHER,
} from "./types";

export const getWeatherByGeo = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch({
      type: SET_IS_FETCHING_WEATHER,
      payload: true,
    });
    const response = await api.get(`forecast.json?key=76c6ba98c9834c79beb101656232703&q=${latitude},${longitude}&days=7`)
    dispatch({
      type: GET_WHEATHER,
      payload: { weather: response.data, isGeoLocation: false },
    });
    if (response.data) {
      localStorage.setItem("weather", JSON.stringify(response.data));
    }
  } catch (e) {
    dispatch({
      type: SET_IS_FETCHING_WEATHER,
      payload: false,
    });
    console.log(e);
  }
};

export const getWeather = (location) => async (dispatch) => {
  try {
    dispatch({
      type: SET_IS_FETCHING_WEATHER,
      payload: true,
    });
    const response = await api.get(`forecast.json?key=76c6ba98c9834c79beb101656232703&q=${location}&days=7`)
    dispatch({
      type: GET_WHEATHER,
      payload: { weather: response.data},
    });
    if (response.data) {
      localStorage.setItem("weather", JSON.stringify(response.data));
    }
  } catch (e) {
    dispatch({
      type: SET_IS_FETCHING_WEATHER,
      payload: false,
    });
    console.log(e);
  }
};