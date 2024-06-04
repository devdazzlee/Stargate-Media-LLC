import React from 'react'
import img1 from '../../Assets/Images/imgp1.webp'
import './Image_Text.css'
import { Link } from 'react-router-dom'
const Image_Text = () => {
  return (
    <div   className='flex image-text-container items-center px-12'   >
<div className='image-text-container-part1'        >

    <div    className='resource-img '  >
<img src={img1} alt="" />

    </div>
</div>
<div   className='image-text-container-part2 my-12  '    >
<h1   className='text-4xl themetextcolor font-bold'   >The Most Professional <br /> Ghostwriting Services in the <br /> Business</h1>
<p className='my-4 text-black-200 para-80 w-full'>
Hire a ghostwriter through our platform for your project to forego the worry that exhausts your mind. Our ghostwriters have exceptional book writing skills that liven up all the stories. Be it a story of rags to riches, a historical account, or the tale of a magical kingdom; our writers have you covered.
</p>
<p  className='my-4 text-black-200 para-80 w-full	 ' >Are you an entrepreneur? Do you have a success story that went against all the odds? Hire a ghostwriter now, and let your story be known to the world! We will give a voice to your story that inspires. We make sure to incorporate your feedback throughout the process. Our ghostwriter's manuscripts are destined to influence bibliophiles, making them look forward to reading more books written by you.</p>

<div  className='flex     experince-part-image-text' >
<div   className='flex ' >
<i class="fa-2x far fa-calendar-check mr-4 themetextcolor" aria-hidden="true"></i>

<h3>
<span className='text-2xl font-bold' >10+</span> <br />
<span  className='text-sm' >Years of Experience</span>

</h3>

</div>

<div   className='flex mr-12' >
<i class="fa-2x fa-solid fa-medal mr-4 themetextcolor" aria-hidden="true"></i>

<h3>
<span className='text-2xl font-bold' >700+</span> <br />
<span    className='text-sm' >Books Written</span>



</h3>

</div>
<div   className='flex mr-12' >

<i class="fa-2x fa fa-book mr-4 themetextcolor" aria-hidden="true"></i>

<h3>
<span className='text-2xl font-bold' >250+</span> <br />
<span  className='text-sm' >American Writers</span>

</h3>

</div>
</div>
<div  className='flex mt-6  xl:justify-start  justify-center' >
<Link to={'/Contact-us'} >
<button type="button" class="text-white themecolor   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
</Link>
<Link to={'/Contact-us'} >

<button type="button" class="text-white themecolor   focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Free Consultation</button>
</Link>

</div>

</div>


    </div>
  )
}

export default Image_Text