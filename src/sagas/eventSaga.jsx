import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'

import { getEvents,resetEvents } from '../actions/events';


import {
  GET_EVENT,
  RESET_EVENT,
} from "../actions/types";
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

const getAllEvents = async () => {
  try {
    apiCalendar.listEvents({
      timeMin: today.toISOString(),
      showDeleted: true,
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    }).then((result) => {
      // dispatch({
      //   type: GET_EVENTS,
      //   payload: { events: result},
      // });
      return result;
    });
  } catch (e) {
    console.log(e);
  }
}

function* getEvent(){

  const event = yield call(getAllEvents)

  yield put(getEvents(event))
  
};

function* resetEvent () {
  yield put(resetEvents())
}

export default function* eventSaga() {
  yield takeEvery(GET_EVENT, getEvent)
  yield takeEvery(RESET_EVENT, resetEvent)
}