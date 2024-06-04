import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before (1).webp';
import img2 from '../../Assets/Images/cta-after (5).webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/ebook-img-3.webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/ebook-img-2.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import Book_Cover_Tabs from '../../Components/Book_Cover_Tabs/Book_Cover_Tabs'
import ImageText3 from '../../Components/Image_Text/Image_Text3'
import design from '../../Assets/Images/ebook-img-1 (1).webp'
import Book_Cover_Banner from '../../Components/Banner/BookCover_DesignBanner'
import GhostWriter_Banner from '../../Components/Banner/Ghost_Writer_Banner'
const Ghost_Writing = () => {

  const statistics = [
    { icon: 'far fa-calendar-check', value: '0+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-medal', value: '25+', label: 'Books Written' },
    { icon: 'fa fa-book', value: '9+', label: 'American Writers' }
  ];

  const faqData = [
    {
      question: 'Can I hire someone to write an ebook?',
       answer : `
       Yes, you can definitely hire someone to write an ebook. There are hundreds of ghostwriters available to be hired on freelance platforms. But if you're looking for more professional ghostwriting services, you can hire one on one of the ghostwriting websites. Once an authoritative name is attached to the ghostwriter, the level of service, quality of content you get, and how much you can trust them all increase dramatically. Either method can be used to hire a ghostwriter, but it is suggested to make the right choice initially to save money in the long term.


      `},
      
    {
      question: 'How much does it cost to ghostwrite an ebook?',
      answer:  `
      To ghostwrite an ebook, all you need is a computer, an internet connection, skill with words, lots of time to spend on writing and rewriting, and a ton of patience. Most ghostwriters also specialize in capturing the tone of the author, but you don't necessarily have to be an expert writer to start. As long as you can research well, learn fast, and have the ability to write well, you are good to go. You can begin ghostwriting by writing for a beginning author who does not have an established tone and style of writing. Assuming you have a literary background or some writing experience from the past, register yourself on one of the freelancer platforms, or apply for a ghostwriting agency.


      `},
      ,
      
      {
        question: 'How much does a ghostwriter cost?',
        answer:  `
        A ghostwriter usually charges depending upon the word count of the ebook. However, the per-word cost can vary depending upon the nature of work, the skill of the writer, the deadlines, how much research is required and how much data is being provided by the author, etc. You will have to pay anywhere between half a dollar up to 5 dollars per word. If you're not going to create the cover design yourself or carry out the marketing, hiring one entity for all the tasks will naturally be more affordable than outsourcing to different people. Just make sure who you're hiring is trustworthy and knows what they're doing.


  
        `},,
      
        {
          question: 'Are "ghost" writers legal?',
          answer:  `
          Ghostwriters are definitely legal. They are professionals you can hire for their time and expertise. There is a whole market for ebook ghostwriting, and ghostwriters earn their bread and butter through their services. It is legal because they are not looking for the recognition of an author. And since the original idea comes from the author and they decide what goes in their book and what doesn't, it makes the relationship perfectly legal for all reasons. It is the same as hiring an architect to design a house that you will own, sell and make money off of. After all, it is your property, and you hold the burden of risk. In the same way, the written words belong to the authors of the books, not the ghostwriters. And that's why ebook writing is legal and a thriving profession with the increasing market demands.


    
          `}, 

  ];


  const cardContent = {
    title: "Hire an eBook Ghostwriter for Fiction",
    content: (
      <>
        <p>
        eBooks have developed a market of their own in the past few years. Authors who have their own book series would understand how the audience has grown. Other writers already know the demand for young adult fiction ebooks.
        </p>
        <p>
        But that's not where the potential for the ebook market ends. Businesses use it to incentivize potential leads, and niche writers with experience writing have utilized this digital channel to bring new ideas to the digital world.
        </p>
      </>
    ),

    content2:(
<>

<p>
With the increasing competition, you need professional writing services and editing aid to make an ebook that is good enough to make it in this competitive world. We have a cadre of professional ghostwriters, editors, and designers to offer a complete range of writing services to authors. With our skills and hours of effort, we can convert the thought in your mind into a published ebook.



        </p>
        <p>
        Just answer a few questions to help us understand the kind of person you are to capture your tone, your reason for writing, and every single thing that you have in mind regarding your book. We will assign an experienced ghostwriter for your ebook ghostwriting project and make your vision come true. Hire an ebook ghostwriter using our highly affordable ebook writing package and become a published ebook author without a worry in the world.



        </p>

</>
    ), 
    imgSrc: img5,
    listItems: [
    ]
  };
  const cards = [
    {
      step: 'Step',
      number: '01',
      title: 'Order Details',
      description: 'Fill in your contact details in the form at the top of the page. Our cordial support staff will contact you to take in the details of your requirements, the focus of your ebook, the idea behind it, your life story, your inspiration, any reference material, how many words you want, etc.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Outline Draft',
      description: 'Based on the details provided in the first step, we will find the right writer for your ghostwriting project from our team of professionals. The ghostwriter works on a chapter outline using those details. Once you approve the outline, the ghostwriter starts the writing process.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'Chapter Approval',
      description: 'With the writing, the communication process also takes off according to your own schedule. Research material is shared, and chapters are sent to you for approval or revision. Approval for each chapter is crucial because revisions affect the course of your ebook.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Editing & Proofreading',
      description: 'After the writing process concludes, the book goes to an editor. The editor works vigorously on the manuscript to polish the ebook from the ground up, going through it word by word. After editing, a proofreader will rid it of errors to make it clean enough to be published.'
    },
    {
      step: 'Step',
      number: '05',
      title: 'Formatting, Typesetting & Designing',
      description: 'The final version goes to the publication department, where they give the text document the shape of a book by performing formatting, typesetting, and inner page designing. Simultaneous graphic designers handle the book cover design. Compliance with the guidelines of the publishing platform is also ensured.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Publishing & Promotion',
      description: 'Once your manuscript has transformed into a full-fledged ebook with the front and back matter, formatting, cover design, and all the bells and whistles ready, we publish your ebook. After publishing, if you choose, we will continue to market and promote your ebook through multiple channels.'
    },
    
    // Add more cards as needed
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<GhostWriter_Banner/>
</div>
<GhostNews/>
<ImageText3
        title="Why Hire a Business eBook Writer?"
        description1="There is a bunch of freelance writing jobs popping up every day. A business owner can not take out time from their busy schedule and can not acquire the writing skills required to write an ebook so easily. eBooks have become an essential digital marketing tool to boost sales. How do you fulfill this market requirement? Blog articles on the website are not enough. An ebook holds more information than an on-site article and is an extremely efficient reader magnet in every niche. The solution: You seek out ebook ghostwriting services to solve the problem for you. By hiring a ghostwriter, you get quality content with comprehensive subject matter research, proficient editors to polish your ebook to perfection, artistically creative ebook designing, and all that within your budget."
        // description2="Are you an entrepreneur? Do you have a success story that went against all the odds? Hire a ghostwriter now, and let your story be known to the world! We will give a voice to your story that inspires. We make sure to incorporate your feedback throughout the process. Our ghostwriter's manuscripts are destined to influence bibliophiles, making them look forward to reading more books written by you."
        imageSource={design}
        statistics={statistics}
      />





<WorldLiterature
      image1={img1}
      image2={img2}
      title="Looking for Ghostwriters?"
      description="Contact us for a free consultation, and let us help you out."
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



<RepeatCard2 cards={cards} heading={"Our eBook Ghostwriting Process"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Unlimited Revision for a Limited Period!"
      description="Avail the offer by reserving a spot before it runs out!"
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

export default Ghost_Writing