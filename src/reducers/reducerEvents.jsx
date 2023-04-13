import {
  GET_EVENTS,
  RESET_EVENTS,
} from "../actions/types";

const events = localStorage.getItem("persist:root");
const defaultState = events
  ? { events }
  : { events: null };


export const eventsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload.events,
      };
    case RESET_EVENTS:
      return {
        ...state,
        events: null,
      };
    default:
      return state;
  }
}