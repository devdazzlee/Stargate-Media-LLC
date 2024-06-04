import React from 'react';
import './Banner.css';
import '../../App.css';
import Form from '../Form/Form';
import img1 from '../../Assets/Images/PORT (3).png';
import img2 from '../../Assets/Images/PORT (4).png';
import img3 from '../../Assets/Images/PORT (1).png';
import img4 from '../../Assets/Images/PORT (2).png';
import img5 from '../../Assets/Images/banner-slider-5.webp';

const Banner = () => {
  return (
    <div className='banner-bg pt-16'>
      <div className='banner-bg-pt1'>
        <div>
          <div className='border-inner'>
            <div className='flex justify-center'>
              <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
              <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
              <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
              <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
              <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
            </div>
            <span className='font-semibold' >100% Satisfaction Guaranteed</span>
          </div>
          <div>
            <h1 className='text-4xl font-bold mb-2 '>Find a Ghostwriter for <br /> Your Next Book. <br />Hire a Stargate Media Now!</h1>
            <p className='para  text-xl text-black font-semibold'>Are you looking to hire a ghostwriter to write a book? Trust our professional ghostwriter with your story. Let our ghostwriters stir our magical cauldron of powerful words to bring you an elixir in the form of an ingenious book.</p>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>

      <div className='imagecardparent1  flex mt-12 justify-center pb-12 '>
        <img className='img1-card2' src={img1} alt="" />
        <img className='img1-card2' src={img2} alt="" />
        <img className='img1-card2' src={img3} alt="" />
        <img className='img1-card2' src={img4} alt="" />
        <img className='img1-card2' src={img5} alt="" />
      </div>
    </div>
  );
}

export default Banner;