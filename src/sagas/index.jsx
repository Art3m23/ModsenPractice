import { spawn } from 'redux-saga/effects';

import eventSaga from './eventSaga';

export default function* rootSaga() {

  yield spawn(eventSaga)
}