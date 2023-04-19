import styles from './style.module.css'
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByGeo } from '../../actions/weather';
import { getWeather } from '../../actions/weather';
import { HourlyWeather } from '../hourlyWeather';


export const WeatherForLocation = () => {
  const [value, setValue] = useState('');
  const weatherForWeek = useRef(null);
  const [activeDay, setActiveDay] = useState(0);
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.weather);

  useEffect(() => {
    if ("geolocation" in navigator && weather===null) {

      const geo_success = (position) => {
        dispatch(getWeatherByGeo(position.coords.latitude, position.coords.longitude))
      }
      navigator.geolocation.getCurrentPosition(geo_success);

    }
  }, [dispatch,weather])

  useEffect(() => {
    if (weather) {
      setValue(weather.location.name);
      [...weatherForWeek.current.children][0].classList.add(styles.activeDay);
      console.log(weather)
    }
  }, [weather])

  const changeLocation = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    [...weatherForWeek.current.children].forEach(element => {
      element.classList.remove(styles.activeDay);
    });
    dispatch(getWeather(value));
  }

  const handleClickDay = (e) => {
    if (e.target.closest(`.${styles.params_weather_for_day}`)) {
      setActiveDay([...weatherForWeek.current.children].indexOf(e.target));
      [...weatherForWeek.current.children].forEach(element => {
        element.classList.remove(styles.activeDay);
      });
      e.target.classList.add(styles.activeDay);
    } else {
      return;
    }
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
                <div className={styles.img_wrep}>
                  <img src={weather.current.condition.icon} alt='weather-icon' />
                  <p className={styles.weather_text}>{weather.current.condition.text}</p>
                </div>
                <p className={styles.params_weather}>{'Temperature: ' + Math.round(weather.current.temp_c) + ' °C'}</p>
                <p className={styles.params_weather}>{'Feels like: ' + Math.round(weather.current.feelslike_c) + ' °C'}</p>
                <p className={styles.params_weather}>{'Wind speed: ' + weather.current.wind_kph + ' km/h'}</p>
                <p className={styles.params_weather}>{'Humidity: ' + weather.current.humidity + ' %'}</p>
                <p className={styles.params_weather}>{'Cloud cover: ' + weather.current.cloud + ' %'}</p>
              </div>
            </div>
            <div ref={weatherForWeek} className={styles.params_weather_for_week_wrep} onClick={handleClickDay}>
              {weather.forecast.forecastday.map((el, i) =>
                <div key={i} className={styles.params_weather_for_day}>
                  <p>{i === 0 ? 'Today' : new Date(el.date).toLocaleString('en', { weekday: 'short' }) + ' ' + new Date(el.date).getDate()}</p>
                  <div className={styles.days_img_wrep}>
                    <img src={el.day.condition.icon} alt='weather-icon' />
                    <p>{Math.round(el.day.maxtemp_c)}°</p>
                  </div>
                </div>
              )}
            </div>
            <HourlyWeather activeDay={activeDay} />
          </>
        }
      </div>
    </>
  )
}