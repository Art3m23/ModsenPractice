import styles from './watch.module.css'
import { useState, useEffect } from "react"

export const Watch = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1 * 1000);
  }, [date]);
  const getGreetings = () => {
    let greeting = '';
    if (date.getHours() >= 6 && date.getHours() < 12) { greeting = 'Good morning' }
    else if (date.getHours() >= 12 && date.getHours() < 18) { greeting = 'Good afternoon' }
    else if (date.getHours() >= 18 && date.getHours() < 24) { greeting = 'Good evening' }
    else if (date.getHours() >= 0 && date.getHours() < 6) { greeting = 'Good night' }
    return greeting
  }
  return (
    <>
      <div className={styles.watch_wrep}>
        <p className={styles.times_wrep}>
          <span>{date.getHours() <= 9 ? '0' + date.getHours() : date.getHours()}</span><span>:</span><span>{date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()}</span><span>:</span><span>{date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()}</span>
        </p>
        <p className={styles.date_wrep}>
          <span>{new Date().toLocaleString('en', { weekday: 'long' })}, </span>
          <span>{new Date().getDate()} </span>
          <span>{new Date().toLocaleString('en', { month: 'long' })} </span>
          <span>{new Date().getFullYear()} </span>
        </p>
        <p className={styles.greetings}>{getGreetings()}</p>
      </div>
    </>
  )
}