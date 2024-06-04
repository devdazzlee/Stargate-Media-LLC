import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AboutBanner from '../../Components/Banner/AboutBanner'
import OnceUponTime from '../../Components/OnceUponTime/OnceUponTime'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import OneSideIT from '../../Components/OneSideIT/OneSideIT'
import OpposeOneSideIT from '../../Components/OpposeOneSideIT/OpposeOneSideIT'
import Hire_Ghost_Writer from '../../Components/Hire_Ghost_Writer/Hire_Ghost_Writer'

const About_Us = () => {
  return (
    <>
    
    <Navbar/>
<div className='pt-20'  >
<AboutBanner/>
</div>
<OnceUponTime/>
<OneSideIT/>
<OpposeOneSideIT/>
<Hire_Ghost_Writer/>
<GhostNews/>
<Footer/>
    
    
    </>
  )
}

export default About_Us