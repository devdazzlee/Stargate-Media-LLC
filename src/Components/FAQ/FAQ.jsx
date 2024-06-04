import React, { useState } from 'react';

const FAQ = ({ faqData, imgSrc }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className='container mx-auto px-4 py-12 lg:py-24'>
      <h1 className='text-2xl lg:text-4xl font-bold text-center mb-8'>
      Frequently Asked Questions
      </h1>
      <div className='max-w-2xl mx-auto'>
        {faqData.map((faq, index) => (
          <div key={index} className='mb-6'>
            <h2  style={{"background" :"#F5950E"}}
              className={`themecolor flex justify-between items-center py-2 px-4 bg-gray-200 rounded-lg cursor-pointer transition duration-300 ${
                openQuestion === index ? 'text-black' : 'text-gray-800'
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <span className='font-semibold'>{faq.question}</span>
              <span className='text-xl font-bold'>{openQuestion === index ? '-' : '+'}</span>
            </h2>
            {openQuestion === index && (
              <p className='bg-gray-100 p-4 text-sm lg:text-base text-justify'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
