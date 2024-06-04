import React from 'react'
import img1 from '../../Assets/Images/plot.webp'
import '../Image_Text/Image_Text.css'
import { Link } from 'react-router-dom'
const Ghost_Writer_will = () => {
  return (
    <div   className='flex image-text-container items-center px-12'   >
<div className='image-text-container-part1'        >

    <div    className='resource-img'  >
<img src={img1} alt="" />

    </div>
</div>
<div   className='image-text-container-part2 my-12'    >
<h1   className='text-4xl themetextcolor font-bold'   >Have a Story in Mind? Need <br /> help?</h1>
<p className='my-4 text-black-200 para-80 w-full'>
If yes, then find your voice with us. Let us give words to your thoughts and stitch them together in the form of a captivating book that will keep your readers hooked until the last page is turned. We have qualified writers who employ such storytelling techniques and structures to make a biography sound like a heroic tale. We offer free consultation services with our experts who can navigate you through the process.
</p>
<div  className='flex     experince-part-image-text' >
<ul  className='text-start' >

 <li><i class="fa-solid themetextcolor fa-circle-check"></i> Proper planning & guidance</li>
 <li><i class="fa-solid themetextcolor fa-circle-check"></i> Inclusive research, editing, and reviewing</li>
 <li><i class="fa-solid themetextcolor fa-circle-check"></i> Drafting of a detailed outline</li>
 <li><i class="fa-solid themetextcolor fa-circle-check"></i> In-depth discussions throughout the process</li>
 <li><i class="fa-solid themetextcolor fa-circle-check"></i> Final product/service refined to perfection</li>

</ul>
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

export default Ghost_Writer_will