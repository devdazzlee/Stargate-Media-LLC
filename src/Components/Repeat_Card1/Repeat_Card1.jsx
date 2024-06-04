import React from 'react';
import './RepeatCard1.css'; // Import CSS for styling

const RepeatCard1 = ({ title, content, content2, imgSrc, listItems }) => {
  return (
    <div className='flex flex-wrap justify-center items-center my-8'>
      <div className='max-w-lg mx-4 my-4'>
        <h1 className='text-3xl mb-4 themetextcolor font-medium'>{title}</h1>
        <p className='text-lg leading-relaxed'>{content}</p>
        {imgSrc && <img className='my-4' src={imgSrc} alt='Keywords Heading' />}
      </div>
      <div className='max-w-lg mx-4 my-4'>
        <p className='text-lg leading-relaxed'>{content2}</p>
        <ul className='custom-list mt-4'>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepeatCard1;
