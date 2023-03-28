import api from "../services/api";
import {
  GET_WHEATHER_BY_GEO,
  SET_IS_FETCHING_WEATHER_BY_GEO,
} from "./types";

export const getWeatherByGeo = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch({
      type: SET_IS_FETCHING_WEATHER_BY_GEO,
      payload: true,
    });
    const response = await api.get(`current.json?key=76c6ba98c9834c79beb101656232703&q=${latitude},${longitude}`)
    dispatch({
      type: GET_WHEATHER_BY_GEO,
      payload: { weather: response.data },
    });
    if (response.data) {
      localStorage.setItem("weather", JSON.stringify(response.data));
    }
  } catch (e) {
    dispatch({
      type: SET_IS_FETCHING_WEATHER_BY_GEO,
      payload: false,
    });
    console.log(e);
  }
};