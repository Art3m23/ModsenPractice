import styles from './weatherForLocation.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByGeo } from '../../actions/weather';
import { getWeather } from '../../actions/weather';

export const WeatherForLocation = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.weather);
  useEffect(() => {
    if ("geolocation" in navigator && !localStorage.getItem('weather')) {

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

  const changeLocation = (e) => {
    setValue(e.target.value);
  }
  const handleClick = () => {
    dispatch(getWeather(value));
  }
  return (
    <>
      <div className={styles.city_wrep}>
        {weather !== null &&
          <>
            <div className={styles.current_weather_wrep}>
              <div className={styles.input_wrep}>
                <input value={value} onChange={changeLocation} />
                <button type='button' onClick={handleClick} className={styles.search} />
              </div>
              <div className={styles.params_weather_wrep}>
                <img src={weather.current.condition.icon} alt='weather-icon' />
                <p className={styles.params_weather}>{'Temperature: ' + weather.current.temp_c + ' °C'}</p>
                <p className={styles.params_weather}>{'Feels like: ' + weather.current.feelslike_c + ' °C'}</p>
                <p className={styles.params_weather}>{'Wind speed: ' + weather.current.wind_kph + ' km/h'}</p>
                <p className={styles.params_weather}>{'Humidity: ' + weather.current.humidity + ' %'}</p>
                <p className={styles.params_weather}>{'Cloud cover: ' + weather.current.cloud + ' %'}</p>
              </div>
            </div>
            <div className={styles.params_weather_for_week_wrep}>
              {weather.forecast.forecastday.map((el, i) =>
                <div key={i} className={styles.params_weather_for_day}>
                  <p>{i === 0 ? 'Today' : new Date(el.date).toLocaleString('en', { weekday: 'short' }) + ' ' + new Date(el.date).getDate()}</p>
                  <div>
                    <img src={el.day.condition.icon} alt='weather-icon' />
                    <p>{el.day.maxtemp_c}°</p>
                  </div>
                </div>
              )}
            </div>
          </>
        }
      </div>
    </>
  )
}