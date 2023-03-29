import { combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducerWeather";
const rootReducer = combineReducers({
  weather: weatherReducer,
});


export const store = configureStore({ reducer: rootReducer },applyMiddleware([thunk]));