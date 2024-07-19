import React from 'react';
// import img1 from '../../Images'
import logo from '../../Assets/Images/logo white.svg'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white  md:px-6 px-6  sm:py-8 md:py-8  footer-image ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <div to={'/'}>
              <img    width={"100px"} src={logo} alt="WorldTour Logo" />
            </div>
            <p className="text-sm py-4 sm:py-6 text-white  ">
            Your trusted partner for comprehensive book publishing solutions, ensuring every aspect of your literary journey is expertly handled.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/" >
              <i class="fa-brands fa-2x  fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" >
              <i class="fa-brands fa-2x  fa-instagram"></i>

              </a>
              <a href="https://www.linkedin.com/company" >
              <i class="fab fa-2x  fa-linkedin-in"></i>
                {/* <FontAwesomeIcon icon={fadivedin}   style={{"color" : "#FF9903"}} size="2x" /> */}
              </a>
            </div>
          </div>
     
          <div className="mt-8">
            <h2   className="text-2xl text-white mb-2 font-bold">Services</h2>
            <hr />
            <ul className="mt-4 space-y-2">
              <li   className='text-white   ' >
                <Link to="/Book-Marketing">Book Marketing</Link>
              </li>
              <li   className='text-white   ' >
                <Link to="/Book-Publisihing">Book Publising</Link>
              </li>
              <li   className='text-white   ' >
                <Link to="/Book-Editing">Book Editing</Link>
              </li>
              <li   className='text-white   ' >
                <Link to="/Ghost-Writing">Ghost Writing</Link>
              </li>
              <li   className='text-white   ' >
                <Link to="/Book-Cover-Design">Book Cover Design</Link>
              </li>
              <li   className='text-white   ' >
                <Link to="/Video-Book-Trailer">Video Book Trailer</Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2   className="text-white text-2xl   mb-2">Quick Links</h2>
            <hr />
            <ul className="mt-4 space-y-2">
            <li   className='text-white  ' >
            <Link to="/">Home</Link>
              </li>
<li    className=' '  >
<Link to="/About-us">About</Link>

</li>
<li   className=' ' >

<Link to="/Contact-us">Conatact Us</Link>
</li>


            
            </ul>
          </div>
          <div className="mt-8">
            <h2    className="text-white text-2xl   mb-2">About Us</h2>
            <hr />
            <ul className="mt-4 space-y-2">
             
             <li ><i class="fa-solid fa-location-dot mr-2 "></i> Our Address</li>
            <li>9319 5th Avenue, Brooklyn NY 11209</li>
            <li><i className="fa-solid fa-phone-volume mr-2 py-2"></i><a href="tel:+17372951375">+1 929-539-9786</a></li>
<li>
  <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
  <a href="mailto:contact@strgatemedia.com">contact@strgatemedia.com</a>
</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-whitemt-2 font-2xl">
    <div  className='my-3' > 
      &copy; 2024 <Link   className=' ' to="https://thereadsy.com/" target="_blank" style={{ textDecoration: "underline"}}>The Readsy</Link>. All rights reserved.
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;