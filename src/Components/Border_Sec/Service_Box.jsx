import React, { useEffect } from 'react';
import './Service_Box.css'
import '../Animation.css'
const Service_Box = ({heading,paragraph,button ,className}) => {

  useEffect(() => {
    const cards = document.querySelectorAll('.ft-text-animate');
    const cards2 = document.querySelectorAll('.ft-text-animate-right');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${className ? className + ' ft-text-animate' : 'service-wrap1 ft-text-animate'}`}>
    <h1  className='text-xl font-bold my-4'   >{heading}</h1>
    <p>{paragraph}</p>
    <button> {button}</button>
    </div>
  )
}

export default Service_Box