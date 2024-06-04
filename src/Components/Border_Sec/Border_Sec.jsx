import React from 'react'
import Service_Box from './Service_Box'
import Service_Box2 from './Service_Box2'
import './Service_Box.css'
const Border_Sec = () => {
  return (
<>

<div style={{"width " :"70%"}}>

<p   className='font-bold text-center my-4  '  >Along with providing experienced ghostwriters and proofreaders, we offer a range of other services that includes:</p>
</div>


<div   className='flex       service-card       '  >


<Service_Box   

heading={"Book Marketing & Promotion"}
paragraph={"Marketing and Promotion are two facets of a comprehensive marketing strategy. Branding and marketing your book is an essential aspect of getting the book published. Our team works together to get your book publicized by making it reachable to a wide array of audiences located throughout the world. Our digital marketing specialists creates public awareness about your book through a variety of strategies and different forms of communication."}
button={"Read More"}
/>

<Service_Box2

heading={"Book Marketing & Promotion"}
paragraph={"Marketing and Promotion are two facets of a comprehensive marketing strategy. Branding and marketing your book is an essential aspect of getting the book published. Our team works together to get your book publicized by making it reachable to a wide array of audiences located throughout the world. Our digital marketing specialists creates public awareness about your book through a variety of strategies and different forms of communication."}
button={"Read More"}
/>
</div>
<div   className='flex       service-card       '  >


<Service_Box   

heading={"Book Marketing & Promotion"}
paragraph={"Marketing and Promotion are two facets of a comprehensive marketing strategy. Branding and marketing your book is an essential aspect of getting the book published. Our team works together to get your book publicized by making it reachable to a wide array of audiences located throughout the world. Our digital marketing specialists creates public awareness about your book through a variety of strategies and different forms of communication."}
button={"Read More"}
/>

<Service_Box2

heading={"Amazon Publication"}
paragraph={"Through Amazon publication services, we can help you reach millions of potential readers located throughout the world. Our service providers get your copies published at Amazon and entitle you to a chance to win royalties. Your book can usually get published quickly without a delay and then gets distributed globally to a wide range of audiences."}
button={"Read More"}
/>
</div>
<div   className='flex       service-card       '  >


<Service_Box   

heading={"Book Editing"}
paragraph={"Our book ghostwriters and editors can assist you in proofreading your copies without a hassle. Our editors have a keen eye for detail and they ensure every write-up being produced is error-free. Allow us to elevate your manuscript through a detailed review by our proficient editors."}
button={"Read More"}
/>

<Service_Box2

heading={"Book Cover Design"}
paragraph={"Books are and will continue to be judged by their cover in the real world. An attractive cover immediately grabs the customer’s attention. Let's say that you've written an amazing book. But if no one is ever going to look at it amongst hundreds of other books surrounding it, no one will ever know how good of a book it actually is. We have a team of dedicated designers who can squeeze and extract your whole book into a single page of art that completely represents the idea of your book. The first impression is the last. The book cover is what persuades the reader to pick up your book from the shelves."}
button={"Read More"}
/>
</div>
<div   className='flex       service-card       '  >


<Service_Box   
className={"service-wrap3"}
heading={"Hip Hop Writing"}
paragraph={"You can get your rap hip hop lyrics written by us. We have a dedicated team of hip hop writers being eager to write your songs. Our hip hop writers understand how lyrics are supposed to be expressive and they work hard to deliver remarkable lyrics by making use of their imaginative creativity."}
button={"Read More"}
/>

<Service_Box2
className={"service-wrap4"}
heading={"Fiction Book Writing"}
paragraph={"Fiction writing is the work of imagination. All you have to do is to provide us with a plot and characters; our fiction book writers will do the rest. Our writers are as much excited about writing fiction books as our clients. It gives them a free canvas to draw upon. Our fiction writers are intricate with details and provide as much detail in description and worldbuilding as the client requires, with no upper limits"}
button={"Read More"}
/>
</div>




</>
  )
}

export default Border_Sec