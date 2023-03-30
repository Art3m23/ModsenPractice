import styles from './backgroundImage.module.css'
import { useSelector } from 'react-redux'
const objImages = {
  'Sunny': 'images/solnechnaya-pogoda.jpg',
  'Clear': 'images/clear.jpg',
  'Overcast': 'images/overcast.jpg',
  'Partly cloudy': 'images/partly_cloudy.jpeg',
  'Cloudy': 'images/cloudy.jpg',
  'Mist': 'images/mist.jpg',
  'Patchy rain possible': 'images/Patchy_rain_possible.jpg',
  'Patchy snow possible': 'images/Patchy_snow_possible.jpg',
  'Patchy sleet possible': 'images/sleet.jpg',
  'Patchy freezing drizzle possible': 'images/freezing_drizzle.jpg',
  'Thundery outbreaks possible': 'images/Thundery_outbreaks_possible.jpg',
  'Blowing snow': 'images/Blowing_snow.jpg',
  'Blizzard': 'images/overcast.jpg',
  'Fog': 'images/fog.jpg',
  'Freezing fog': 'images/fog.jpg',
  'Patchy light drizzle': 'images/light_drizzle.jpg',
  'Light drizzle': 'images/light drizzle.jpg',
  'Freezing drizzle': 'images/freezing_drizzle.jpg',
  'Heavy freezing drizzle': 'images/Heavy_freezing_drizzle.jpg',
  'Patchy light rain': 'images/light_rain.jpg',
  'Light rain': 'images/light_rain.jpg',
  'Moderate rain at times': 'images/Moderate_rain.jpg',
  'Moderate rain': 'images/Moderate_rain.jpg',
  'Heavy rain at times': 'images/Heavy_rain.jpg',
  'Heavy rain': 'images/Heavy_rain.jpg',
  'Light freezing rain': 'images/freezing_rain.jpg',
  'Moderate or heavy freezing rain': 'images/freezing_rain.jpg',
  'Light sleet': 'images/sleet.jpg',
  'Moderate or heavy sleet': 'images/sleet.jpg',
  'Patchy light snow': 'images/light_snow.jpg',
  'Light snow': 'images/light_snow.jpg',
  'Patchy moderate snow': 'images/moderate_snow.jpg',
  'Patchy heavy snow': 'images/heavy_snow.jpg',
  'Heavy snow': 'images/heavy_snow.jpg',
  'Ice pellets': 'images/Ice_pellets.jpg',
  'Light rain shower': 'images/light_rain.jpg',
  'Moderate or heavy rain shower': 'images/Heavy_rain.jpg',
  'Torrential rain shower': 'images/Torrential_rain_shower.jpg',
  'Light sleet showers': 'images/sleet.jpg',
  'Moderate or heavy sleet showers': 'images/sleet.jpg',
  'Light snow showers': 'images/light_snow.jpg',
  'Moderate or heavy snow showers': 'images/overcast.jpg',
  'Light showers of ice pellets': 'images/Ice_pellets.jpg',
  'Moderate or heavy showers of ice pellets': 'images/ice-pellets.jpg',
  'Patchy light rain with thunder': 'images/light_rain_thunder.jpg',
  'Moderate or heavy rain with thunder': 'images/heavy_rain_thunder.jpg',
  'Patchy light snow with thunder': 'images/light_snow_thunder.jpeg',
  'Moderate or heavy snow with thunder': 'images/heavy_snow_thunder.jpg',
}
export const BackgroundImage = () => {
  const weather = useSelector(state=>state.weather.weather);
  return (
    <div className={styles.img_wrep}>
      {weather!==null && <img src={objImages[weather.current.condition.text]} alt='weather'/>}
    </div>
  )
}