import React from 'react';
import './Image_Text.css';
import { Link } from 'react-router-dom';

const ImageText3 = ({ title, description1, description2, imageSource, statistics }) => {
  return (
    <div className="flex image-text-container items-center mx-auto py-8">
      <div className="image-text-container-part1">
        <div className="resource-img">
          <img src={imageSource} alt="" />
        </div>
      </div>
      <div className="image-text-container-part2 my-12">
        <h1 className="text-4xl themetextcolor font-bold">{title}</h1>
        <p className="my-4 text-black-200 para-80 w-full">{description1}</p>
        <p className="my-4 text-black-200 para-80 w-full">{description2}</p>
        <div className="flex experince-part-image-text">
          {statistics.map((item, index) => (
            <div key={index} className="flex mr-12">
              <i className={`fa-2x ${item.icon} mr-4 themetextcolor`} aria-hidden="true"></i>
              <h3>
                <span className="text-2xl font-bold">{item.value}</span> <br />
                <span className="text-sm">{item.label}</span>
              </h3>
            </div>
          ))}
        </div>
        <div className="flex mt-6 xl:justify-start justify-center">
        <Link to={'/Contact-us'} >

          <button type="button" className="text-white themecolor   focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
        </Link>
        <Link to={'/Contact-us'} >

          <button type="button" className="text-white themecolor   focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Free Consultation</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageText3;
