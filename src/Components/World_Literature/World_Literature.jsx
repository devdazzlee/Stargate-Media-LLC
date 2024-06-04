import React from 'react';
import './World_Literature.css';
import { Link } from 'react-router-dom';

const WorldLiterature = ({ image1, image2, title, description, buttonText, buttonLink }) => {
  return (
    <div className='flex-wrap-mobile flex items-center justify-center lg:justify-between themecolor h-auto'>
      <div>
        <img className='w-96' src={image1} alt="" />
      </div>
      <div className='text-center'>
        <h1 className='text-xl font-bold md:text-2xl lg:text-4xl text-center'>{title}</h1>
        <p className='mt-4 font-medium w-96 text-center m-auto'>{description}</p>

        <div className='flex div-col justify-evenly mt-12 items-center'>
        <Link to={'/Contact-us'} >
          <button
            type="button"
            className="blinking-text text-white bg-black   focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
            {buttonText}
          </button>

            </Link>
          <a
            className='font-bold upAndDownAnimation'
            href="tel:+17372951375"
          >
            +1 (737) 295-1375
          </a>
          <Link to={'/Contact-us'} >

          <a
            className="blinking-text text-white bg-black   focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            href="https://your-live-chat-url.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Live Chat
          </a>
            </Link>
        </div>
      </div>

      <div>
        <img className='w-64' src={image2} alt="" />
      </div>
    </div>
  );
};

export default WorldLiterature;
