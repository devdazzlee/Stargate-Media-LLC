import React from 'react'
import './Banner.css';
import '../../App.css';
import Form from '../Form/Form';
import img1 from '../../Assets/Images/banner-slider-1.webp';
import img2 from '../../Assets/Images/banner-slider-2.webp';
import img3 from '../../Assets/Images/banner-slider-3.webp';
import img4 from '../../Assets/Images/banner-slider-4.webp';
import img5 from '../../Assets/Images/banner-slider-5.webp';
import { Link } from 'react-router-dom';




const Book_Editing_Banner = () => {
  return (
    <div className='banner-bg-bookpublishing pt-16 my-8 pb-8'>
    <div className='banner-bg-pt1'>
      <div>
     
        <div>
            <h1 className=' text-white text-4xl font-bold mb-2 themetextcolor'>Professional <br /> <span className='font-bold' >Book Editing</span> Services</h1>
          <p className=' text-white para  font-semibold'>Aid your writing career by investing in professional book editing services, perhaps the best services a writer can invest in.</p>
          <div class="flex flex-col w-full md:w-3/5 mt-2 mb-4 justify-between">
    <ul class="flex flex-col md:flex-row my-4">
        <li class="font-bold mr-4 mb-2 md:mb-0 text-white flex items-center">
            <i class="fa fa-book mr-2" aria-hidden="true"></i>
            Highly responsive

        </li>
        <li class="font-bold mr-4 mb-2 md:mb-0 text-white flex items-center">
            <i class="fa fa-book mr-2" aria-hidden="true"></i>
            Competitive prices

        </li>
    </ul>
    <ul class="flex flex-col md:flex-row my-4">
        <li class="font-bold mr-4 mb-2 md:mb-0 text-white flex items-center">
            <i class="fa fa-book mr-2" aria-hidden="true"></i>
            Prompt services

        </li>
        <li class="font-bold mr-4 mb-2 md:mb-0 text-white flex items-center">
            <i class="fa fa-book mr-2" aria-hidden="true"></i>
            Impeccable editing skills
        </li>
    </ul>
</div>

<Link to={'/Contact-us'} >
<button type="button" class="text-white themecolor   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>

</Link>

<Link to={'/Contact-us'} >
<button type="button" class="text-white themecolor   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Free Consultation</button>
</Link>

        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </div>
  )
}

export default Book_Editing_Banner