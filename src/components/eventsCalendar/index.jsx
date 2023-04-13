import { useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { getEvents } from '../../actions/events';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css'

const config = {
  "clientId": "873908410228-2eiurj3dn7askps354etbvtulnpl96nb.apps.googleusercontent.com",
  "apiKey": "AIzaSyCQCeLUnmutLbsIQLyOVM9xWDQl2V14WcY",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config);

export const EventsCalendar = () => {

  const events = useSelector(state => state.events.events);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!events) {
      dispatch(getEvents(apiCalendar));
    }
  }, [events, dispatch])

  return (
    <div className={styles.events_container}>
      <h2>today's events</h2>
      <div className={styles.events}>
        {events !== null && events.result.items.length ? events.result.items.map((el, i) =>
          <div key={i} className={styles.events_item}>
            <span>{`${(new Date(el.start.dateTime).getHours() <= 9 ? '0' + new Date(el.start.dateTime).getHours() : new Date(el.start.dateTime).getHours()) + ' : ' + (new Date(el.start.dateTime).getMinutes() <= 9 ? '0' + new Date(el.start.dateTime).getMinutes() : new Date(el.start.dateTime).getMinutes())} - ${(new Date(el.end.dateTime).getHours() <= 9 ? '0' + new Date(el.end.dateTime).getHours() : new Date(el.end.dateTime).getHours()) + ' : ' + (new Date(el.end.dateTime).getMinutes() <= 9 ? '0' + new Date(el.end.dateTime).getMinutes() : new Date(el.end.dateTime).getMinutes())}`}</span>
            <span>{el.summary}</span>
          </div>)
          : <p className={styles.description} />}
      </div>
    </div>
  );
}