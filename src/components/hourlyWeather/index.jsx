import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

export const HourlyWeather = ({ activeDay }) => {
  const weather = useSelector(state => state.weather.weather);
  return (
    <div className='slider_wrep'>
      <Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Navigation]} className='slider'>
        {weather.forecast.forecastday[activeDay].hour.map((el, i) =>
          <SwiperSlide key={i}>
            <img src={el.condition.icon} alt='weather-icon' />
            <p className='params_weather temp'>{Math.round(el.temp_c) + ' °'}</p>
            <p className='weather_text'>{el.condition.text}</p>
            <p className='params_weather wind'>{el.wind_kph + ' km/h'}</p>
            <p className='params_weather humidity'>{el.humidity + ' %'}</p>
            <p className='time'>{(new Date(el.time).getHours()===0 || new Date(el.time).getHours()===12?12:new Date(el.time).getHours()>12?new Date(el.time).getHours()-12:new Date(el.time).getHours()) + (new Date(el.time).getHours()<12?' AM':' PM')}</p>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}