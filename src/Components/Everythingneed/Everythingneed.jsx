import React from 'react';
import { Link } from 'react-router-dom';

const Everythingneed = () => {
  return (
    <div className='themecolor text-center py-12'>
      <h1 className='text-xl font-bold md:text-2xl lg:text-4xl'>Everything You Need to Write a Book!</h1>
      <p className='para m-auto my-4 text-base md:text-lg lg:text-xl'>
        Providing a ghostwriter is one of the many services we have to offer. Stargate Media writers is a one-stop-shop for every single aspect of the writing journey, from editing, formatting, cover designs to publishing and marketing your books to your reader market.
      </p>
<Link  to={'/Contact-us'} >
<button type="button" className="text-white bg-black   focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center md:text-base lg:text-lg me-2 mb-2">
      Schedule A Consult
      </button>
</Link>
    </div>
  );
}

export default Everythingneed;
