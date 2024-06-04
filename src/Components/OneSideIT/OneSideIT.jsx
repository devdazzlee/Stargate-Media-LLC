import React from 'react';
import img1 from '../../Assets/Images/about-1.webp';

const OneSideIT = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
      <div className="md:w-1/2 md:order-1">
        <img
          src={img1}
          alt="Description of the image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:order-2 px-4 md:px-8 lg:px-12 xl:px-16">
        <p className="text-base md:text-lg leading-relaxed">
          As life started to pick up the pace, so did our responsibilities, and
          we started saying no to the extra favors with heavy hearts. But our
          friendly clients wouldn't take no for an answer and insisted on
          paying us for the work.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          One after another, we started taking orders to make ends meet and
          afford a piece of pie now and then. Through recommendations and word
          of mouth, our popularity grew and we decided to make a living out of
          the very thing that we loved to do.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          We helped people write books long and short, simple and complex,
          fiction, non-fiction, in styles we didn't know even existed, in
          genres and niches as diverse as a rainbow. One link leads to
          another, and we were connected to more like-minded people. Our team
          grew, so did business and the number of projects on which we were
          working.
        </p>
      </div>
    </div>
  );
};

export default OneSideIT;
