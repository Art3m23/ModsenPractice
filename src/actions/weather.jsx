import api from "../services/api";
import {
  GET_WHEATHER,
  RESET_WHEATHER
} from "./types";

export const getWeatherByGeo = (latitude, longitude) => async (dispatch) => {
  try {
    const response = await api.get(`forecast.json?key=9e66d8e708c94133bdd91135231204&q=${latitude},${longitude}&days=7`)
    dispatch({
      type: GET_WHEATHER,
      payload: { weather: response.data},
    });
  } catch (e) {
    console.log(e);
  }
};

export const getWeather = (location) => async (dispatch) => {
  try {
    const response = await api.get(`forecast.json?key=9e66d8e708c94133bdd91135231204&q=${location}&days=7`)
    dispatch({
      type: GET_WHEATHER,
      payload: { weather: response.data},
    });
  } catch (e) {
    console.log(e);
  }
};

export const resetWeather=()=> {
  return { type: RESET_WHEATHER };
}