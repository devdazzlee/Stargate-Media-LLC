import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Banner from '../../Components/Banner/Banner'
import '../../App.css'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import OtherServices from '../../Components/OtherServices/OtherServices'
import Cover_List from '../../Components/Cover_List/Cover_List'
import Review from '../../Components/Review/Review'
import World_Literature from '../../Components/World_Literature/World_Literature'
import Image_Text from '../../Components/Image_Text/Image_Text'
import Border_Sec from '../../Components/Border_Sec/Border_Sec'
import Ghost_Writer_will from '../../Components/Ghostwriterswill/Ghostwriterswill'
import Struggling_to_Write from '../../Components/struggling-to/struggling-to'
import Everythingneed from '../../Components/Everythingneed/Everythingneed'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'
import img1 from '../../Assets/Images/Book1.webp';
import img2 from '../../Assets/Images/Book2.webp';
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img4 from '../../Assets/Images/faq-1.webp';


const Home = () => {


// Live Chat
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/665f33d59a809f19fb38f2cb/1hvhu4v8n';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  const faqData = [
    {
      question: 'What is ghostwriting?',
      answer: 'Ghostwriting is a service in which a professional writer helps their client write their book in exchange for money. Ghostwriters rarely take credit for their work. Hence, the book is mostly published under the client’s name as the author. The word ghostwriting, however, is not only limited to books. There are ghostwriters for screenwriting, songwriting, speech writing, and practically every category to which writing as a skill is extended.'
    },
    {
      question: 'How to hire a ghostwriter?',
      answer: 'With Stargate Media, hiring a ghostwriter is as easy as ever. Communicate with us by leaving your contact and order details for one of our cordial project managers to get back to you as soon as possible. They will take details regarding your book, and you two will decide the cost of the project mutually. You can choose how to pay and what to pay. Once a deal is made, we appoint the best writer for your book, depending upon the project requirements. After which, you may lay back and relax that your book is in good hands.'
    },
    {
      question: 'How much does it cost to hire a ghostwriter?',
      answer: 'The cost of hiring a ghostwriter varies with the type of order, the number of words, extra services required (if any), deadlines, and other details of the order. To get a quick quotation of your project, talk to one of our co-ordinators. We offer free and prompt consultation via live chat, email, and voice calls.'
    },
    {
      question: 'How long does it take to write a book?',
      answer: 'On average, it takes about 6 months to complete a book. However, the actual duration may vary depending upon the type of order, length of the amount of research required, etc. It also depends upon the ghostwriter, where you are hiring them from, what services you are hiring them for, and the skill level of the ghostwriter.'
    },
    {
      question: 'Do ghostwriters get credit?',
      answer: 'Whether a ghostwriter gets credit or not depends upon the agreement between the author and the ghostwriter. At Stargate Media, we keep the writer bound by a non-disclosure agreement. At Stargate Media, we make sure that our writers do not desire any credit for your book.'
    },
    {
      question: 'Do ghostwriters get royalties?',
      answer: 'Most ghostwriters in the writing business do not demand any share in the royalties. They work for a fixed fee at the time of hiring. However, there may be exceptions, mostly with already established book series or books of bestselling authors.'
    },
    {
      question: 'Are your services 100% confidential?',
      answer: 'We respect the privacy of our clients and understand the risks involved with unpublished work. We take all measures to keep all provided information 100% confidential. The ghostwriter assigned to you will be bound by nondisclosure and confidentiality clauses in their agreement so you can.'
    }
  ];

  return (
<>

<Navbar/>

<div className='pt-20'  >

<Banner/>
</div>
<GhostNews/>
<OtherServices/>
<Cover_List/>
<Review/>
<WorldLiterature
      image1={img1}
      image2={img2}
      title="Enter The World of Literature"
      description="Here's a quick way to become an author. Hire a Stargate Media  to write a book."
      buttonText="Get Started"
      buttonLink="tel:+17372951375"
    />
<Image_Text/>
<Border_Sec/>
<Ghost_Writer_will/>
<Struggling_to_Write/>
<FAQ faqData={faqData} imgSrc={img4} />
<Everythingneed/>
<Footer/>
</>
  )
}

export default Home