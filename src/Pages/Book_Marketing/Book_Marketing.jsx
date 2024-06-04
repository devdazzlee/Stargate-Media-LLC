import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before (1).webp';
import img2 from '../../Assets/Images/cta-after (1).webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/faq.webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/keywords-heading.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import Book_MarketingBanner from '../../Components/Banner/BookMarketingBanner'
import ImageText3 from '../../Components/Image_Text/Image_Text3'
import img7 from '../../Assets/Images/publishing-book (1).webp'
const Book_Marketing = () => {
    const faqData = [
        {
          question: 'What is book marketing?',
          answer: 'Book marketing is a long, well-thought-out procedure of promoting your book in such a manner as to generate book sales. Book marketing also creates awareness of the book that is being marketed among sellers, readers, and customers. There are several steps within book marketing, and carrying each one of them out in an effective manner results in optimum profit, which is the ultimate goal of book marketing.'
        },
        {
          question: 'What does a book marketer do?',
          answer: 'The job of a book marketer is to execute such promotional and marketing strategies to raise book sales to the sky. Marketing and promotion strategies vary from marketer to marketer. A book marketer is efficient in determining the target audience as the first step and then devising plans accordingly. They also determine the size of the book in the market and analyze similar books and their promotions to decipher which promotional strategies would be most beneficial for the author.'
        },
        {
          question: 'Do I need to hire a book marketer?',
          answer: 'If you’re an author, then yes, you do need to hire a book marketer. Writing a book and promoting it are two very different functions. If one is excellent at writing a book, they would perhaps not be as good at promoting the book, and vice versa. Hence, it is a safe idea to hire a professional to carry out the marketing and promotional activities for you. Professional book marketers have good relations with publishing industries that may take you years to develop. The experience and qualifications of the marketer will allow them to execute those strategies that result in maximum and efficient benefits, which is a better option than you carrying out new experiments and wasting your precious time and efforts.'
        },
        {
          question: 'What should I need to look for in a book marketer?',
          answer: 'Before hiring a book marketer, you need to determine which qualities you’re looking for in them and precisely what plans you think should be carried out by them. If the book marketer is responsive and agrees to execute your plans with the touches you want, you should hire them. Your chosen book marketer should also provide you constant updates on your book promotion strategies and, most importantly, provide numbers. Numbers show how effective the strategies actually are. A professional book marketer will keep you updated at all times without you having to ask them for details again and again. If you find all these attributes in a book marketer, you should hire them immediately without a second thought.'
        },
    
      ];


  const cardContent = {
    title: "A Leading Book Marketing Company",
    content: (
      <>
        <p>
        Self-marketing your book can be an arduous job, especially if you’ve had no prior experience executing the relative strategies.
        </p>
      
      </>
    ),
    content2: (
        <>
          <p>
          Not only do we possess the most efficient book promotion ideas, but also the tools, expertise, experience, and intelligence to execute them in the most efficient manner.
          </p>
        
          <p>
          Let us reach out to the relevant journalists, draft out press releases, and maintain good relations with the media, all to ensure your book is being promoted at the right platforms and acquiring the recognition it rightfully deserves.


          </p>
  
          <p>
          We only accept a limited number of books to execute our marketing strategies, which speaks for the top-notch quality results we provide. We specialize in the following ways:
          </p>
        </>
      ),
    imgSrc: img5,
    listItems: [
      "Email marketing",
      "Marketing strategy      ",
      "Advertising",
      "Search engine optimized content",
    ]
  };
  const cards = [
    {
      step: 'Step',
      number: '01',
      title: 'We Connect',
      description: 'You leave us a message with information about your project. One of our cordial project managers gets back to you as soon as possible with answers to all your queries.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Manuscript Review',
      description: 'You send us your manuscript, and our panel of experts reviews it for marketability and completion status. We help you complete the front and back matter and anything else necessary to complete the book before we publish the book on Amazon.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'Editing, Formatting & Proofreading',
      description: 'Our formatting team transforms it into a professional-looking book according to the Amazon publishing guidelines. Finally, we proofread the text to eliminate any visible or hidden errors.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Cover design',
      description: 'Our creative artist team designs attention-grabbing cover art that best captures the feel you want your book to emanate and represents the central idea of your book.'
    },
    {
      step: 'Step',
      number: '05',
      title: 'Publishing',
      description: 'We publish your book on Amazon and take care of all the nuances from start to finish. You don’t have to lift a finger until your book goes live on the Amazon Kindle store.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Collect Royalties',
      description: 'The last step is for you to reap the fruits of your hard work, patience, and dedication. You will receive all payments directly into your bank account. There are no cuts in the royalties you earn.'
    },
    
    // Add more cards as needed
  ];

  const statistics = [
    { icon: 'far fa-calendar-check', value: '4+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-medal', value: '326+', label: 'Books Written' },
    { icon: 'fa fa-book', value: '116+', label: 'American Writers' }
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<Book_MarketingBanner/>
</div>
<GhostNews/>

<ImageText3
        title="Executing Efficient Marketing Plan for Self-published Book"
        description1="Already published your book but can’t reach the desired sales you hoped you would achieve? With our practical marketing plans, you can still accomplish your goals! With our useful book promotion ideas, it can never be too late to promote your book. We use exceptional marketing methods to attract more readers. Our marketing methods are customized to meet all our customers’ needs since we know that each book is different from the other in various ways, and each book requires a specified marketing plan to reach optimum sales. If you have already released your book and you’re worried you’re not reaping the benefits you had anticipated, do not fret. Reserve your book marketing services now and watch your book turn into a bestseller."
        // description2="Are you an entrepreneur? Do you have a success story that went against all the odds? Hire a ghostwriter now, and let your story be known to the world! We will give a voice to your story that inspires. We make sure to incorporate your feedback throughout the process. Our ghostwriter's manuscripts are destined to influence bibliophiles, making them look forward to reading more books written by you."
        imageSource={img7}
        statistics={statistics}
      />



<WorldLiterature
      image1={img1}
      image2={img2}
      title="Pondering Over How to Market Books?"
      description="Stop thinking and start taking action. Hire a marketing company for your book promotion."
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



<RepeatCard2 cards={cards} heading={"Your Amazon Publishing Process with Us"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Publish Your Book on Amazon the Easy Way."
      description="Let us handle the struggles of Amazon book publishing."
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

export default Book_Marketing