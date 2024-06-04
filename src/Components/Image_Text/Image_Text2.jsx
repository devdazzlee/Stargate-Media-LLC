import React from 'react'
import img1 from '../../Assets/Images/publish.webp'
import './Image_Text.css'
import { Link } from 'react-router-dom'
const Image_Text2 = () => {
  return (
    <div   className='flex image-text-container items-center m-auto'   >

<div   className='image-text-container-part2 my-12 '    >
<h1   className='text-4xl themetextcolor font-bold'   >Publish Your Book the Easiest <br /> Way</h1>
<p className='my-4 text-black-200 para-80 w-full'>
Amazon book publishing is a rocky road to tread on for someone who hasn’t charted those paths before. After putting your blood and sweat into writing a book, it shouldn’t be acceptable to watch it collect dust or, worse, handled poorly solely due to a lack of understanding about the publishing industry’s nuances. Why not let experienced people take care of the complicated processes for you? You can sit back and watch your manuscript appear at the Amazon KDP store as a beautifully designed book complete with an eye-catching cover design and matching theme in the inner pages. Let us join hands and make that dream of yours come true today.
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
<div className=''        >

    <div    className='resource-img '  >
<img src={img1} alt="" />

    </div>
</div>

    </div>
  )
}

export default Image_Text2