import { useEffect } from 'react';
import { getEvents } from '../../actions/events';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css'



export const EventsCalendar = () => {
  
  const events = useSelector(state => state.events.events);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  },[dispatch])


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