import React from 'react'
import './GhostNews.css'
import img1 from '../../Assets/Images/Kisslogo.png'
import img2 from '../../Assets/Images/BBC.png'
import img3 from '../../Assets/Images/esquire--removebg-preview.png'
import img4 from '../../Assets/Images/5847e9aacef1014c0b5e4828 (1).png'
import img5 from '../../Assets/Images/Los_Angeles_Times.png'
import img6 from '../../Assets/Images/Inc._magazine_logo.png'
import img7 from '../../Assets/Images/images.png'
import img8 from '../../Assets/Images/POLITICO_Logo_Black.png'
const GhostNews = () => {
  return (
    <div  style={{"borderBottom" :"2px solid #ebebeb"}}  className='ghost-main   py-12'   >
    
    <h1    className='text-3xl text-center' >Our Ghostwriters In The News</h1>
    <p   className='text-center' >Our ghostwriters' team has a flair for writing that's been featured many times by prestigious media outlets like The New York Times for their top-notch ghostwriting services. Our ghostwriters have succeeded in helping our clients get recognized as best-selling authors by writing a book.</p>
 
<div   className='flex mt-4 flex-wrap   justify-center' >

<div    className='flex items-center btn-company'   >
    <img  className='w-16'  src={img1} alt="" />
</div>
<div    className='flex items-center btn-company' >
    <img  className='w-16'  src={img2} alt="" />
</div>
<div   className='flex items-center btn-company'   >
    <img  className='w-16'  src={img3} alt="" />
</div>
<div  className='flex items-center btn-company'     >
    <img  className='w-16'  src={img4} alt="" />
</div>
<div  className='flex items-center btn-company'     >
    <img  className='w-24'  src={img5} alt="" />
</div>
<div  className='flex items-center btn-company'     >
    <img  className='w-12'  src={img6} alt="" />
</div>
<div  className='flex items-center btn-company'     >
    <img  className='w-24'  src={img7} alt="" />
</div>
<div  className='flex items-center btn-company'     >
    <img  className='w-16'  src={img8} alt="" />
</div>
</div>


    </div>
  )
}

export default GhostNews