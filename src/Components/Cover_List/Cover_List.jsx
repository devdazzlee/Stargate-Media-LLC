import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Form from '../Form/Form';
import img1 from '../../Assets/Images/PORT (3).png';
import img2 from '../../Assets/Images/PORT (4).png';
import img3 from '../../Assets/Images/PORT (1).png';
import img4 from '../../Assets/Images/PORT (2).png';
import img5 from '../../Assets/Images/banner-slider-5.webp';
import img6 from '../../Assets/Images/PORT (1).webp';
import img7 from '../../Assets/Images/banner-slider-2.webp';
import img8 from '../../Assets/Images/banner-slider-3.webp';
import img9 from '../../Assets/Images/banner-slider-4.webp';
import img10 from '../../Assets/Images/PORTLast.png';

import './CoverList.css'

const Cover_List = () => {
  return (
    <div className='imagecardparent flex mt-12 justify-center pb-12 w-4/5 m-auto'>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1} // Default to 1 slide per view
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
        autoplay={true}
      >
        <SwiperSlide><img className='img1-card' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img9} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img1-card' src={img10} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Cover_List;
