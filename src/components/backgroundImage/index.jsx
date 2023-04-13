import { useSelector } from 'react-redux';
import styles from './style.module.css';
import { objImages } from '../../const/const';


export const BackgroundImage = () => {
  const weather = useSelector(state=>state.weather.weather);
  return (
    <div className={styles.img_wrep}>
      {weather!==null && <img src={objImages[weather.current.condition.text]} alt='weather'/>}
    </div>
  )
}