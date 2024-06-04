import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ContactBanner from '../../Components/Banner/ContactBanner'
import Contac_Form from '../../Components/Contact_Form/Contac_Form'

const Contact_Us = () => {
  return (
<>
<Navbar/>
<div className='pt-20'  >
<ContactBanner/>
</div>

<Contac_Form/>

<Footer/>
</>
  )
}

export default Contact_Us