import React from 'react';
import './RepeatCard2.css';

const RepeatCard2 = ({ cards,heading }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl text-center my-8 text- themetextcolor font-bold">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="border-b-2 border-gray-300 pb-4 mb-4">
              <h5 className="text-themetextcolor font-bold">{card.step}</h5>
              <h2 className="text-4xl text- themetextcolor font-bold">{card.number}</h2>
            </div>
            <div className="text-center">
              <h1 className="font-bold">{card.title}</h1>
              <p className="w-full sm:w-96">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepeatCard2;
