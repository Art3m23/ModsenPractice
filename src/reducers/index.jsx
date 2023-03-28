import { combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { weatherByGeoReducer } from "./reducerWeatherByGeo";
const rootReducer = combineReducers({
  weather: weatherByGeoReducer,
});


export const store = configureStore({ reducer: rootReducer },applyMiddleware([thunk]));