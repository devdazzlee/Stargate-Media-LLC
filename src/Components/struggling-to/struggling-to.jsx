import React from 'react'
import img1 from '../../Assets/Images/Book1.webp'
import img2 from '../../Assets/Images/Book2.webp'
import '../World_Literature/World_Literature.css'
import { Link } from 'react-router-dom'
const Struggling_to_Write = () => {
  return (
<div className='flex-wrap-mobile    flex  items-center justify-center lg:justify-between themecolor h-auto'>

<div>
    <img  className='w-96' src={img1} alt="" />
</div>
<div  className='text-center'   >
<h1 className='text-xl font-bold md:text-2xl lg:text-4xl'  >Struggling to Write a Book on Your Own?</h1>
<p  className='mt-4 font-medium' >Why not hire someone with experience to help you out? Talk to us for details.</p>


<div  className='flex div-col justify-evenly mt-12 items-center ' >
<Link to={'/Contact-us'} >
<button type="button" class="text-white bg-black   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
</Link>

<a  className='font-bold upAndDownAnimation'  href="tel:+17372951375 " >+1 (737) 295-1375</a>
<Link to={'/Contact-us'} >
<button type="button" class="text-white bg-black   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Live Chat</button>
</Link>
</div>

</div>

<div>

<img  className='w-96' src={img2} alt="" />

</div>
</div>
  )
}

export default Struggling_to_Write