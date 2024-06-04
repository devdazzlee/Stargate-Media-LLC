import React from 'react'
import './Banner.css';
import '../../App.css';
import Form from '../Form/Form';
import img1 from '../../Assets/Images/banner-slider-1.webp';
import img2 from '../../Assets/Images/banner-slider-2.webp';
import img3 from '../../Assets/Images/banner-slider-3.webp';
import img4 from '../../Assets/Images/banner-slider-4.webp';
import img5 from '../../Assets/Images/banner-slider-5.webp';
const ContactBanner = () => {
  return (
<div className='banner-bg-contact pt-16 h-full '>
      <div className='banner-bg-pt1'>
        <div>
     
          <div>
            <h1 className='text-4xl font-bold mb-2'>Contact Us</h1>
            <p className='para'>Are you looking to hire a ghostwriter to write a book? Trust our professional ghostwriter with your story. Let our ghostwriters stir our magical cauldron of powerful words to bring you an elixir in the form of an ingenious book.</p>
            <ul  className='text-start' >

 <li  className='my-2' ><i class="fa-solid themetextcolor fa-check"></i> Original and Plagiarism Free Content</li>
 <li  className='my-2' ><i class="fa-solid themetextcolor fa-check"></i> Free Unlimited Revisions</li>
 <li  className='my-2' ><i class="fa-solid themetextcolor fa-check"></i> Free Order Status Inquiry</li>
 <li  className='my-2' ><i class="fa-solid themetextcolor fa-check"></i> Custom Writing Services</li>
</ul>
          </div>
        </div>
    
      </div>


    </div>
  )
}

export default ContactBanner