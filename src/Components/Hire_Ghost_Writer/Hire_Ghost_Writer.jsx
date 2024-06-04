import React from 'react'
import img1 from '../../Assets/Images/about-3.webp';
const Hire_Ghost_Writer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-center m-auto my-16">
    <div className="md:order-1">
      <img
        src={img1}
        alt="Description of the image"
        className="max-w-full h-auto"
      />
    </div>
    <div className="md:w-1/2 md:order-2 px-4 md:px-8 lg:px-12 xl:px-16">
      <p className="text-base md:text-lg leading-relaxed my-3">
      Other than ghostwriting the book, we provide, but are not <br /> limited to, the following services:
      </p>
  <ul   className='list-disc	' >
 <li className='my-2'>  Editing & Proofreading  </li>
 <li className='my-2'>Publication  </li>
 <li className='my-2'>Book cover design  </li>
  <li className='my-2'>Marketing & Promotion </li>
<li className='my-2'>Author website design</li>
<li className='my-2'>Editing & Proofreading</li>
<li className='my-2'>Song, Rap and Hip-Hop Writing</li>
  </ul>
      <p className="text-base md:text-lg leading-relaxed my-6">
      Your ultimate source for all ghostwriting needs under a  <br /> single roof, with promised excellency and an experience <br /> as memorable as the book-writing journey can be.
      </p>
    </div>
  </div>
  )
}

export default Hire_Ghost_Writer