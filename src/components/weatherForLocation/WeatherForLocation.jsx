import styles from './weatherForLocation.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByGeo } from '../../actions/weatherByGeo';

export const WeatherForLocation = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.weather);
  useEffect(() => {
    if ("geolocation" in navigator) {

      const geo_success = (position) => {
        dispatch(getWeatherByGeo(position.coords.latitude, position.coords.longitude))
      }
      navigator.geolocation.getCurrentPosition(geo_success);

    }
  }, [dispatch])
  useEffect(() => {
    if (weather) {
      setValue(weather.location.name);
    }
  }, [weather])
  return (
    <>
      <div className={styles.city_wrep}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <img src={weather.current.condition.icon} alt='weather-icon' />
        <p className={styles.temp}>{'Temperature: ' + weather.current.temp_c + ' °C'}</p>
        <p className={styles.temp}>{'Feels like temperature: ' + weather.current.feelslike_c + ' °C'}</p>
        <p className={styles.temp}>{'Wind speed: ' + weather.current.wind_kph + ' kph'}</p>
        <p className={styles.temp}>{'Humidity: ' + weather.current.humidity + ' %'}</p>
        <p className={styles.temp}>{'Cloud cover: ' + weather.current.cloud+ ' %'}</p>
      </div>
    </>
  )
}