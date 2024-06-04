import React from 'react';
import img1 from '../../Assets/Images/about-2.webp'
const OpposeOneSideIT = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
         <div className="md:w-1/2 md:order-1 px-4 md:px-8 lg:px-12 xl:px-16">

        <p className="text-base md:text-lg leading-relaxed">
        Before we even knew it, our little startup was now a full-fledged running business. Today, we are a successful name in the ghostwriting industry, our titles hit bestsellers, and our words are quoted all around the internet.


        </p>
        <p  className="text-base md:text-lg leading-relaxed">
        We still celebrate to this day when we hit the bullseye on a critic's review or our projects' market ratings, just like we did at our local library when it was just a handful of us. The difference is that there are no librarians to hush at us when we cheer after seeing the book we ghostwrote hit the bestseller today or blow the market away.


        </p>
      </div>
      <div className="md:w-1/2 md:order-1">
        <img
          src={img1}
          alt="Description of the image"
          className="max-w-full h-auto"
        />
      </div>
     
    </div>
  );
};

export default OpposeOneSideIT;

