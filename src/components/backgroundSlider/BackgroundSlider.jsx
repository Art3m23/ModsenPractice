import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './backgroundSlider.module.css'

import { Autoplay} from 'swiper';

export const BackgroundSlider = ({ arrayImages }) => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay]}
      className={styles.slider}
    >
      {arrayImages.map((el,i) => <SwiperSlide className={styles.itemSlider} key={i}><img src={el} alt='sun'/></SwiperSlide>)}
    </Swiper>
  )
}