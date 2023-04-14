import {
  GET_EVENTS,
  RESET_EVENTS,
} from "./types";
import ApiCalendar from 'react-google-calendar-api';

const today = new Date();
today.setHours(0, 0, 0, 0);
const config = {
  "clientId": "873908410228-2eiurj3dn7askps354etbvtulnpl96nb.apps.googleusercontent.com",
  "apiKey": "AIzaSyCQCeLUnmutLbsIQLyOVM9xWDQl2V14WcY",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config);

export const getEvents = () => async (dispatch) => {
  try {
    apiCalendar.listEvents({
      timeMin: today.toISOString(),
      showDeleted: true,
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
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