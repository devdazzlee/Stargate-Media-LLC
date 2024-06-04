import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before.webp';
import img2 from '../../Assets/Images/cta-after.webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/faq.webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/keywords-heading.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
const Book_Publishing = () => {
  const faqData = [
    {
      question: 'What is Amazon publishing?',
      answer: 'Amazon Publishing is Amazon’s traditional publishing house which is often confused with Kindle Direct Publishing. Amazon Kindle Direct Publishing (KDP) is Amazon’s self-publishing platform and the biggest in the world right now. Most people mean KDP when they say Amazon publishing, but they are two different book publishing platforms, both run by Amazon.'
    },
    {
      question: 'How to get a book published on Amazon?',
      answer: 'To publish a book on Amazon, you need to make an account on the Amazon Kindle Direct Publishing platform and fill out all your profile details. After the profile is complete, you can upload your book by going to the “Bookshelf” tab of the KDP webpage. KDP will require you to input some details about your book that help the platform categorize the book so readers can find it. You will have to submit a title, a cover design, a book description, some tags related to your book, and two categories that best represent your book. After all the details are complete, all there is to do is set a release date, and release your book on Amazon. '
    },
    {
      question: 'How to sell your book on Amazon?',
      answer: 'Publishing your book on Amazon is one thing, but selling it is another. In order to sell your book, you have to understand how the Amazon search engine and the KDP reader market works. The tags and categories you select at the time of publishing your book can help set your book in the right direction. But if you really want to sell like an author, you can not rely on the bare minimum. You need to promote your book on the internet, make an author website, run marketing campaigns, polish your work and continue writing to become a renowned author to start selling thousands of copies.'
    },
    {
      question: 'How much does it cost to self-publish a book on Amazon?',
      answer: 'Self-publishing a book on Amazon is free of cost. Amazon does not charge a single penny for publishing your book. It does, however, take a cut from each book you sell through Amazon. These are called royalties. Amazon gives you a percentage of the money earned from each book that sells and keeps a portion for itself. The percentage you receive can be either 35% or 70%, depending upon some rules. But you don’t have to pay anything out of your pocket to self-publish a book through Amazon Kindle Direct Publishing.'
    },

  ];


  const cardContent = {
    title: "Amazon Publishing Services for Beginning Authors",
    content: (
      <>
        <p>
          Publishing a book is no joke. Authors spend a lot of energy in writing a book. By the time the draft is complete, they’re drained. We will take care of the extra struggle for you. We understand the Amazon Kindle Direct Publishing like the back of our hands.
        </p>
        
      </>
    ),

    content2:(
<>

<p>
          We’ll take your draft and turn it into a published book on Amazon with all the essential elements prepared and refined to perfection. It might be your first, second, or third project, but we publish books on Amazon on a daily basis.
        </p>
        <p>
          We know the ins-and-outs of Amazon publishing and can save you hours of precious time, a lot of extra money, and a ton of energy. From your desktop to the Amazon Kindle store, we handle all the tasks in-between.
        </p>

</>
    ), 
    imgSrc: img5,
    listItems: [
      "Thought-provoking title",
      "Attention-grabbing cover design",
      "Aesthetic and accurate formatting",
      "Amazon tags and descriptions",
      "Smooth publishing",
      "Easy payment methods"
    ]
  };
  const cards = [
    {
      step: 'Step',
      number: '01',
      title: 'Order Details',
      description: 'Reserve your spot by filling a simple brief form and provide all relevant information about your book. You will instantly be welcomed by one of our project managers. Once the manager has received all the necessary information, your order will be confirmed.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Research & Determining Target Audience',
      description: 'The most eligible marketers will be appointed to draft marketing strategies for your book. After thorough research on the subject of your book, the target audience will be determined, and the book will be marketed in a manner as to target that specific audience.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'First Marketing Strategy Approval',
      description: 'As soon as the first marketing step is drawn out, it is sent to you for your approval. Once approved, the execution of marketing strategies similarly begins.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Pre-launch Promotion',
      description: 'Our marketers will create buzz and hype among the public before your book is even published. This is achieved by appealing posts, opening pre-bookings, and self-advertisement in top newspapers and magazines.'
    },
    {
      step: 'Step',
      number: '05',
      title: 'Book launch',
      description: 'Our marketers know very well how to plan the perfect book launch, to invite those guests that will play a pivotal role in marketing your book by building public relations and hiring media people.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Post-launch Promotion',
      description: 'Even after your book is released, our marketers will not settle down. For them, this is a crucial point in determining the success of your book and will execute more promotional plans until your book turns into a bestseller.'
    },
    
    // Add more cards as needed
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<Book_PublisingBanner/>
</div>
<GhostNews/>

<Image_Text2/>


<WorldLiterature
      image1={img1}
      image2={img2}
      title="Having Trouble Publishing on Amazon?"
      description="We can help you like we’ve helped 100+ other writers."
      buttonText="Get Started"
      buttonLink="tel:+17372951375"
    />

<RepeatCard1
      title={cardContent.title}
      content={cardContent.content}
      content2={cardContent.content2}
      imgSrc={cardContent.imgSrc}
      listItems={cardContent.listItems}
    />



<RepeatCard2 cards={cards} heading={"Process of Book Marketing"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Book Marketing for Authors"
      description="Put an end to your book marketing concerns by hiring professionals and having them make your job easier for you."
      buttonText="Get Started"
      buttonLink="tel:+17372951375"
    />
    <FAQ faqData={faqData} imgSrc={img4} />
<div   className='py-6 themecolor' > 
<h1   className='text-3xl text-center font-bold my-4'  >Our Testimonials</h1>
<Review    color={"black"}    />
</div>
   <Footer/>
   </>
  )
}

export default Book_Publishing