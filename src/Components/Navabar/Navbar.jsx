
import React, { useState } from 'react';
import "./Navbar.css"; // CSS for styling
// import img1 from '../../Images/updatedAsset 9.svg'
import { Link  , useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo-1 (1).png'


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
  
  const navigate = useNavigate()
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(prevState => !prevState);
    };
    const handleClick = () => {
      window.location.href = 'tel:+17373591874';
    };
  
  
    function handleClick23() {
      navigate("/Contact-us");
    }
  
    return (
      <nav 
      style={{
        position: 'fixed',
        zIndex: '100',
      }}
      className="navbar nav-with-shadow bg-white border-gray-200 py-4">
        <div className="navbar-container">
     <Link  to={"/"} >
  
  
     <img  className='h-24 w-24 md:mx-12 mx-4'  src={logo} alt="" />
  
        
        
        </Link>
  
          <div className="navbar-hamburger" onClick={toggleMobileMenu}>
            ☰
          </div>
  
          <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
  
          <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold    "
                to={'/'}
              >
                Home
              </Link>

              <li className="with-dropdown">
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold    "
                to={'/'}
              >
                Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
              
              <ul className="dropdown">
  
  <li  className="nested-dropdown-container"  >
        
  <Link     style={{"color" :"white"}} to={"/Ghost-Writing"} >
    <span className='navlinkhover' >Ghost Writng </span>
  
  </Link>
       
  </li>
  
                <li  className="nested-dropdown-container"  >
                  <Link style={{"color" :"white"}}  to={"/Book-Editing"} >
                  <span className='navlinkhover' >Book Editing  </span>  
                  </Link>
  </li>
  <li  className="nested-dropdown-container"  >
                  <Link  style={{"color" :"white"}}  to={"/Video-Book-Trailer"} >
                  <span className='navlinkhover' >Video Book Trailer</span>   
                  </Link>
  </li>
  <li  className="nested-dropdown-container"  >
                  <Link  style={{"color" :"white"}}    to={'/Book-Marketing'} >
                  <span className='navlinkhover' > Book Marketing  </span>   
                  </Link>
  </li>

 
  
              </ul>
            </li>

             

            
              <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold    "
                to={'/Book-Publisihing'}
              >
      Book Publishing

              </Link>
              <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold    "
                to={'/Book-Cover-Design'}
              >
             Book Cover Design
              </Link>
     

            
  <li   className='mb-dropdown' >
  
  
  <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold font-bold"
                onClick={()=>{
                  setDropdown(!dropdown)
                }}
              >
                Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
  {
    dropdown ? <>
    
   
  
                <li    >
                  <Link  className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold font-bold" style={{"color" :"black"}}  to={"/Ghost-Writing"} >
                 Ghost Writng 
                  </Link>
  </li>
  <li    >
                  <Link    className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold font-bold" style={{"color" :"black"}}  to={"/Book-Editing"} >
               Book Editing
                  </Link>
  </li>
  <li   >
                  <Link   className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold font-bold" style={{"color" :"black"}}   to={"/Video-Book-Trailer"} >
           Video Book Trailer
                  </Link>
  </li>

  <li   >
                  <Link   className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold font-bold" style={{"color" :"black"}}   to={'/Book-Marketing'}  >
                  Book Marketing  
                  </Link>
  </li>

  
  
  
    </> : ''
  
  }
  
  
  </li>
  
  
  
  
  
  

  <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block py-2 pl-3 pr-4 text-white rounded  md:p-0 font-bold    "
                to={'/About-us'}
              >
           About
              </Link>
        
         
            <li>
             <Link itemprop="availability" href="https://schema.org/InStock"
                className="navlinkhover block  text-white rounded  md:p-0 font-bold    "
                to={'/Contact-us'}
              >
                Contact Us
              </Link>
            
            </li>
  
  
            <button
  onClick={handleClick23}
  style={{ background: "#232F3F" }}
  className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button blinking-text"
  itemscope
  itemtype="http://schema.org/Button"
>
  <span itemprop="name">FREE CONSULTATION</span>
</button>

  {/* </Link> */}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;