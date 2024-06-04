import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before (1).webp';
import img2 from '../../Assets/Images/cta-after (2).webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/faq (1).webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/cover.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import Book_Cover_Tabs from '../../Components/Book_Cover_Tabs/Book_Cover_Tabs'
import ImageText3 from '../../Components/Image_Text/Image_Text3'
import design from '../../Assets/Images/design.webp'
import Book_Cover_Banner from '../../Components/Banner/BookCover_DesignBanner'
const Bookcover_Design = () => {

  const statistics = [
    { icon: 'far fa-calendar-check', value: '1+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-medal', value: '84+', label: 'Books Written' },
    { icon: 'fa fa-book', value: '30+', label: 'American Writers' }
  ];

  const faqData = [
    {
      question: 'How to make a cover for a book?',
       answer : `
      With technology on your side, it has become a lot easier to make a book cover nowadays, that is if you can gather the right tools. Spend some time searching for graphic designing software. You can even find applications specially developed to design cover art for books. Compare the software based on how easy it is to learn, whether it offers preset templates, how much it costs and other features.
      
      When you’ve decided on one tool, install it on your device of choice, and mess around for a bit to get familiar with the interface and features.
      
      Keeping in mind the aspect ratio of your book’s front cover, start sketching and testing your ideas. For inspiration, look at other book covers, re-read your book to get your head in that zone, listen to befitting music, and do whatever else it takes to spread the idea of your book into every nook and corner of your brain.
      Don’t shy away from trying out all the different ideas coming into your head. They’re bound to look different when you draw them on the screen, compared to inside your head.
      
      That being said, if you’re looking to make it big in the competitive market, it is always recommended to hire a pro to take care of the task. Do what you do best, and that is writing. Hire a professional book cover designer to do what they do best.
      `},
      
    {
      question: 'How to hire a book cover designer online?',
      answer:  `
      It is getting exceedingly easy to hire a book cover designer online. Just google something along the lines of “book front page designer” or “hire a book designer” and you will have a multitude of options to choose from. Click on a few links, and browse through their website. Most designer websites will have an option for you to contact them, and there is usually no fee for that. At least, we are always open for a conversation. Click on the link above on this page to Get Started. If we can establish a mutual understanding between us, then voila! You’ve got yourself the best book cover designers in the business.
      `},
   

  ];


  const cardContent = {
    title: "Cover Art for Books of All Kinds",
    content: (
      <>
        <p>
        They say that a picture is worth a thousand words. We can neither entirely agree to this statement nor disagree with it.We understand that the words written on the pages inside of your book are sheer art in their own worth.


        </p>
        
      </>
    ),

    content2:(
<>

<p>
But the fact is that your book’s front page art is going to set the first impression on your potential readers. And a magnificent book deserves an equally gorgeous cover design art.


        </p>
        <p>
        Take the lead from your competition by getting an illustration that snatches people’s attention away from other books around yours. You do not just want a beautiful cover; you want to radiate a powerful message that tempts people to find out more about it.


        </p>
<p>
Our designers are great collaborators who are assisted by our brilliant writer prodigies who extract out a concept from your book, coupled with the market demands of your genre, to develop ingenious illustrations that are bound to entice your target market.


</p>

<p>
Hire a professional book cover designer with us today!


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
      title: 'Submit the Form',
      description: 'Click on the link to Get Started with the process of hiring a book cover artist with us. You will be met with a simple brief form that will only take 2 minutes of your precious time.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Place Order',
      description: 'Upon receiving the form, you will instantly be contacted by one of our cordial project managers who will take the details about your order, for example, any ideas you might have, a summary of your book’s theme, how the characters look, etc.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'Selection of Candidate',
      description: 'Based on your requirements and the kind of illustration required for the project, we cherry-pick a book cover artist from our team who best fits your needs.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Designing',
      description: 'The artist selected for you starts working on the cover design art for your book. You will receive a basic sketch of the cover art to approve, some description about the cover design, a color palette, and some other options to choose from. '
    },
    {
      step: 'Step',
      number: '05',
      title: 'Detailing',
      description: 'After you select the options you like, colors, details, bells and whistles are added, and the book cover illustration is finalized as intended to look on the cover of your book.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Approval',
      description: 'We do not close a project until the final cover art for books aren’t approved by the clients. We will continue to work on it again and again until 100% client satisfaction is achieved.'
    },
    
    // Add more cards as needed
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<Book_Cover_Banner/>
</div>
<GhostNews/>
{/* <Book_Cover_Tabs/> */}
<ImageText3
        title="Book Front Page Designs that Catch Everyone’s Eyes"
        description1="Whoever said, “Do not judge a book by its cover,” must not have a good front cover designer. In the practical world of our reality, people do judge a book by its cover. And truth be told, most people will not even look at your book twice when they visit the bookstore. So regardless of how epic your book might be, if you want people to pick it up and take a peek inside, it needs to make them want to keep looking at it until they are compelled to pick it up. If you want the same for your book, contact us to make a book cover that stuns viewers and pulls them towards it."
        // description2="Are you an entrepreneur? Do you have a success story that went against all the odds? Hire a ghostwriter now, and let your story be known to the world! We will give a voice to your story that inspires. We make sure to incorporate your feedback throughout the process. Our ghostwriter's manuscripts are destined to influence bibliophiles, making them look forward to reading more books written by you."
        imageSource={design}
        statistics={statistics}
      />





<WorldLiterature
      image1={img1}
      image2={img2}
      title="Want to Make a Front-Cover That Says it All?"
      description="Hire an expert illustrator to dream up a stunning front cover design."
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



<RepeatCard2 cards={cards} heading={"What a Typical Cover Design Process Looks Like"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Looking for Book Cover Designers Online?"
      description="Congratulations, because you’ve found the best of them."
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

export default Bookcover_Design