import {
  GET_EVENTS,
  RESET_EVENTS,
} from "./types";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const getEvents = (apiCalendar) => async (dispatch) => {
  try {
    apiCalendar.listEvents({
      timeMin: today.toISOString(),
      showDeleted: true,
      maxResults: 10,
    }).then((result) => {
      dispatch({
        type: GET_EVENTS,
        payload: { events: result},
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const resetEvents=()=> {
  return { type: RESET_EVENTS };
}