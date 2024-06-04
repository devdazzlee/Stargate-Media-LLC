import React from 'react'
import './Banner.css';
import '../../App.css';
import Form from '../Form/Form';
import img1 from '../../Assets/Images/about-banner-img-1.webp';
import img2 from '../../Assets/Images/about-banner-img-2.webp';
import img3 from '../../Assets/Images/about-banner-img-3.webp';
const AboutBanner = () => {
  return (
    <div className='about-banner-bg pt-16'>
    <div className='banner-bg-pt1'>
      <div    >
        <div className='border-inner'>
          <div className='flex justify-center'>
            <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
            <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
            <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
            <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
            <i style={{ color: '#F5950E' }} className="fa-solid fa-star"></i>
          </div>
          100% Satisfaction Guaranteed
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-2 themetextcolor mt-12'>About Us</h1>
          <p className='para'>We are a diverse team of passionate writers, managers, editors, and designers determined to make your ideas come into reality.</p>
          <button type="button" class="mt-8 text-white themecolor   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get  Started </button>
        </div>
      </div>
      <div     className='banner-bg-pt2 flex'     >
<img    className='about-banner-image1' src={img1} alt="Book-Image1" />
<img   className='about-banner-image2'  src={img2} alt="Book-Image2" />
<img   className='about-banner-image3'  src={img3} alt="Book-Image3" />
      </div>
    </div>

  </div>
  )
}

export default AboutBanner