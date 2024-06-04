import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before (1).webp';
import img2 from '../../Assets/Images/cta-after (3).webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/faq (2).webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/services.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import Book_Cover_Tabs from '../../Components/Book_Cover_Tabs/Book_Cover_Tabs'
import ImageText3 from '../../Components/Image_Text/Image_Text3'
import design from '../../Assets/Images/ebook-img-1.webp'
import Book_Cover_Banner from '../../Components/Banner/BookCover_DesignBanner'
import Book_Editing_Banner from '../../Components/Banner/Book_EditingBanner'
const Book_Editing = () => {

  const statistics = [
    { icon: 'far fa-calendar-check', value: '5+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-medal', value: '396+', label: 'Books Written' },
    { icon: 'fa fa-book', value: '141+', label: 'American Writers' }
  ];

  const faqData = [
    {
      question: 'What is book editing?',
       answer : `
       A book editor’s main focus is on the overall structure of the book, to make sure the format of the book looks presentable, or to make any changes in the presentation of the look of the book.


      `},
      
    {
      question: 'How are book editing and book proofreading different from each other?',
      answer:  `
      Book editing is often confused with book proofreading. While book editing takes care of the formatting, book proofreading accounts for correcting any grammatical errors, misspellings, or improper punctuations. Book proofreading is the final step in the book publication process.


      `},
      {
        question: 'Why does one need book editing services?',
        answer:  `
        There is no work or book out there that was flawless the first time it was written. Every bestseller there is has been gone through multiple editing and proofreading.

        When a person writes a book by themselves, there are bound to be some errors always. However, the problem arises when these faults are not fixed. The human mind has a tendency to overlook mistakes made by themselves since they are not exactly classified as mistakes. Therefore, it is always a better option to hire professional book editors to make sure your book is immaculate before publishing.
        
        
  
        `},
        {
          question: 'Which book editing services should I employ?',
          answer:  `
          If this is your first time hiring a book editor, you should always go to one that serves maximum, if not all, of your requirements. A book editor having extensive experience is essential if you want your book to be flawless. Book editing is not just about correcting grammatical mistakes, so you should always go for an editing service that provides maximum benefits.    
          `},
         

  ];


  const cardContent = {
    title: "Your Go-to Place for Book Editing Services",
    content: (
      <>
        <p>
        We start editing your book by carrying out a thorough analysis of it and coming up with a draft of amendments that need to be made.

        </p>

        <p>
        You do not need to concern yourself with all the complications of book editing since we take care of all that for you.


        </p>
        
      </>
    ),

    content2:(
<>

<p>
Offering the most competitive prices in the market, we understand the need for efficiency with affordability and do not step back to deliver quality content under any circumstances.



        </p>
        <p>
        Our proficient editors are well trained to work in the toughest deadlines without compromising the quality of the content.



        </p>
<p>
Ensuring all your guidelines are implemented in your book, our teammates deliver your content within the dates you require.



</p>

<p>
Furthermore, our services are customized for our clients. We understand that book editing services are not like clothes; they do not have free sizes, so we offer our clients an option to get their services customized according to their requirements. Contact us now to get a fair quote on the services you require.


</p>
<li> Historical fiction</li>
<li>Romance</li>
<li>Flash fiction</li>
<li>Fan fiction for anime</li>
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
      description: 'Book your spot on our website by providing the relevant draft of your book that you need to get edited. You also need to provide any instructions and guidelines where necessary.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Research & Outline Draft',
      description: 'Our professional book editors will carry out further research on the topic of your book and add more points wherever required. Afterward, they will draft an outline describing the editing that would be made to your book.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'First Chapter Approval',
      description: 'After completing the editing of the first chapter, we ask our clients for their approval. If approved, we carry out the editing of the next chapters in a similar manner. If unapproved, we incorporate whatever guidelines we’re provided with and redo it until our clients are fully satisfied.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Editing & Proofreading',
      description: 'We perform further editing and keep our professional proofreaders to ensure the book is free from any grammatical or spelling errors. If there are any errors, they are instantly eliminated without affecting the theme of the book.'
    },
    {
      step: 'Step',
      number: '05',
      title: 'Formatting, Typesetting & Designing',
      description: 'Once the writing and editing part is finished, the beauty of the book is enhanced by proper formatting, typesetting, and designing. Since many people judge a book by its cover, we make sure it’s perfect.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Publishing & Promotion',
      description: 'As soon as your book is complete, we step onto the last part, the publishing, on various outlets and platforms. Planned promotion and marketing of your book are done by us as well.'
    },
    
    // Add more cards as needed
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<Book_Editing_Banner/>
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
      title="Think Your Book Requires Some Final Editing?"
      description="Do not worry. Let us elevate your book with the help of our professional book editors."
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



<RepeatCard2 cards={cards} heading={"Process of Book Editing"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Not Sure Whether Your Book Requires Editing?"
      description="Contact us now to get a free consultation and make your decision easier."
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

export default Book_Editing