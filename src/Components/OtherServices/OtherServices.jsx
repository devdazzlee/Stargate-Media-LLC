import React from 'react';
import img1 from '../../Assets/Images/NBC-Logo.png';
import img2 from '../../Assets/Images/bbc-icon-2048x598-qym2t21f.png';
import img3 from '../../Assets/Images/Esquire_logo_PNG2.png';
import img4 from '../../Assets/Images/brand-forbes-icon-2048x532-fvsol7zd.png';
import img5 from '../../Assets/Images/Los_Angeles_Times_logo.svg.png';
import '../../App.css';
import './OtherServices.css';

const OtherServices = () => {
  return (
    <div style={{ "borderBottom": "2px solid #ebebeb" }} className='ghost-main py-12'>

      <h1 className='text-3xl text-center themetextcolor font-bold'>Other Services Related to Book Ghost Writing</h1>

      <div className='flex mt-4 flex-wrap justify-center bd-border-container'>

        <div className='bd-border'>
          <p>Book Cover Design</p>
        </div>

        <div className='bd-border'>
          <p>Fiction Writing</p>
        </div>
        <div className='bd-border'>
          <p>Author Website Design</p>
        </div>
        <div className='bd-border'>
          <p>Book Audio</p>
        </div>
        <div className='bd-border'>
          <p>Books Editing</p>
        </div>
        <div className='bd-border'>
          <p>Book Trailer</p>
        </div>

      </div>
      <div className='flex mt-4 flex-wrap justify-center bd-border-container'>

        <div className='bd-border'>
          <p>Marketing & Promotions</p>
        </div>

        <div className='bd-border'>
          <p>French Translation</p>
        </div>

      </div>

    </div>
  )
}

export default OtherServices;
