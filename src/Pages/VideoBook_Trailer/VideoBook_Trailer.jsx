import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Book_PublisingBanner from '../../Components/Banner/Book_PublisingBanner'
import GhostNews from '../../Components/Ghost_News/GhostNews'
import Image_Text2 from '../../Components/Image_Text/Image_Text2'
import WorldLiterature from '../../Components/World_Literature/World_Literature'
import img1 from '../../Assets/Images/cta-before (1).webp';
import img2 from '../../Assets/Images/cta-after (4).webp';
import Review from '../../Components/Review/Review'
import FAQ from '../../Components/FAQ/FAQ'
import img4 from '../../Assets/Images/faq (1).webp';
import Repeat_Card1 from '../../Components/Repeat_Card1/Repeat_Card1'
import RepeatCard1 from '../../Components/Repeat_Card1/Repeat_Card1'
import img5 from '../../Assets/Images/trailer.webp'
import ReapeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import RepeatCard2 from '../../Components/ReapeatCard2/ReapeatCard2'
import Book_Cover_Tabs from '../../Components/Book_Cover_Tabs/Book_Cover_Tabs'
import ImageText3 from '../../Components/Image_Text/Image_Text3'
import design from '../../Assets/Images/book-video.webp'
import Book_Cover_Banner from '../../Components/Banner/BookCover_DesignBanner'
import Video_Book_Banner from '../../Components/Banner/VideoBookTrailer'
const Video_Book_Trailer = () => {

  const statistics = [
    { icon: 'far fa-calendar-check', value: '10+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-medal', value: '700+', label: 'Books Written' },
    { icon: 'fa fa-book', value: '250+', label: 'American Writers' }
  ];

  const faqData = [
    {
      question: 'What is a book trailer?',
       answer : `
       A book trailer is a short video designed to introduce a book to the world. Just like trailers of other forms of media like movies, television series etc, a book trailer spills just enough tea to grab the target market’s attention and keep them hanging, but not enough to kill the thirst for answers. A good book video trailer will highlight significant themes and ideas that appeal to readers, compel them to find out more, but won’t mislead them. YouTube is a great source for examples of cinematic book trailers.


      `},
      
    {
      question: 'How to make a trailer for book?',
      answer:  `
      The first part of making a trailer for a book is brainstorming. Write down the main themes and ideas presented in the book, and compare them. Then select the one which you think best represents the book.

      Map that theme out on the main plotline, and without revealing any spoilers, write a video script for the trailer. This script serves as a shopping list for you to acquire all the necessary elements you need to record the video, for example, footage, music, voiceover speech, etc.
      
      Remember, you can hire a professional at any point of the process to take care of the rest of the project. Stargate Media handles all the steps in creating book video trailers individually as well as a complete project.
      
      
      `},
      ,
      
      {
        question: 'How long should a book trailer be?',
        answer:  `
        A book trailer video can be as short as a 30-second clip and may extend to even 2 minutes. The trailer’s length depends upon the trailer’s concept, the book’s genre, premise, and other foundational elements, and not the story directly.

        Ideally, trailers should be as short as possible. A longer trailer video does not necessarily mean more effort. It takes skill and careful execution to know what to unveil in the trailer and how to present it in the shortest timeframe possible. You don’t want to turn it into a bombardment of information about the book; it might be too much for your reader to digest.. Or maybe that’s what your ideal cinematic book trailer needs to be? We suggest that you let a professional decide that.
        
        A cinematic video trailer for a book is not the same as a book commercial. A trailer is like an appetizer to entice readers for your book’s story. Although both are created with the focus of marketing it to the world, a commercial focuses on selling copies. In contrast, a trailer for a book teases and entices potential readers about the concept, theme or story. It is focused more on what’s written inside the book.
        
        Some genres are better marketed with commercials like self-help or nonfiction, while other genres like thriller, mystery, romance, and other types of fiction do better with book trailers.
        
        
        
        `},
        ,
      
        {
          question: 'Who can best understand the mind of an author?',
          answer:  `
          Answer: Another writer.

          Stargate Media is a platform that is writer-centered. What’s the benefit of that? Our trailer production department never goes astray with their objective. An expert of the particular genre is selected to read thoroughly and deconstruct the book, extracting all necessary elements that best combine to form the perfect trailer for you.
          
          Their ideas are then directed by videography specialists who turn it into a professional video book trailer that could not have been possible without the brevity and creative touch of a writer.
          
          Click the link to Get Started with the most exciting part of your book’s release.
          
          
          
          
          `},
      






   

  ];


  const cardContent = {
    title: "Book Video Trailers, Commercials and Marketing",
    content: (
      <>
        <p>
        Writing a great book is a significant accomplishment, but being the author of a remarkable book and being



        </p>
        
      </>
    ),

    content2:(
<>

<p>
the author of a bestselling book is not precisely the same. In the real world, a well-marketed book outsells a well-written book. Why not have both? Utilize our specialized book trailer video services and get your book ready to be released to the world with a smash.



        </p>
        <p>
        How do we make that possible? Just like all the other big publishers and authors do, with professional marketing. Some genres are better marketed with commercials like self-help or nonfiction. In contrast, genres like thriller, mystery, romance, and different types of fiction go well with cinematic trailers and epic music. We are proficient in both.
        </p>
<p>
Don’t know what strategy will work best for you? Let us know what your book is about by clicking the link below and let professionals guide you.
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
      description: 'Click on the link to Get Started on the journey of creating the trailer for your book. You will be met with a simple brief form that will only take 2 minutes of your precious time.'
    },
    {
      step: 'Step',
      number: '02',
      title: 'Conceptualizing',
      description: 'An expert of the particular genre is cherry-picked to study your book from the writer’s perspective, and extract potential ideas out of it for a video trailer. We encourage and appreciate any ideas and suggestions of your own during this phase.'
    },
    {
      step: 'Step',
      number: '03',
      title: 'Video Script',
      description: 'The raw ingredients are sent to one of our proficient screenwriters, who write a comprehensive video script based on the information received from the previous step. The script is sent to the client for approval before we continue further.'
    },
    {
      step: 'Step',
      number: '04',
      title: 'Animation',
      description: 'After revisions, if any, the script goes into production. Our team of producers who create some of the best book trailers in the game, gets busy producing a captivating book trailer video.'
    },
    {
      step: 'Step',
      number: '05',
      title: 'Music & Extra Effects',
      description: 'Epic music that is befitting to the video produced in the last step is added to pour life into the trailer video. The trailer video is edited to perfection by filling it with effects.'
    },
    {
      step: 'Step',
      number: '06',
      title: 'Final Approval',
      description: 'We do not rest until we achieve a hundred percent client satisfaction. The video continues to get edited and revised in the light of the client’s input and suggestions until it is refined to perfection. Rest assured that you will receive the finest possible product in the end.'
    },
    
    // Add more cards as needed
  ];


  return (
   <>
   
   <Navbar/>
   <div className='pt-20'  >

<Video_Book_Banner/>
</div>
<GhostNews/>
<ImageText3
        title="Book Video Trailers, Commercials and Marketing"
        description1="Who can best understand the mind of an author? Answer: Another writer. Stargate Media is a platform that is writer-centered. What’s the benefit of that? Our trailer production department never goes astray with their objective. An expert of the particular genre is selected to read thoroughly and deconstruct the book, extracting all necessary elements that best combine to form the perfect trailer for you. We make smart use of our invaluable asset of creative writers to employ such concepts in book video trailers that build tension and climax, and leave the viewers hanging from the edge of their seats, compelled to read the book to quench their thirsts. Want the same for your book too? Contact us today!"
        imageSource={design}
        statistics={statistics}
      />





<WorldLiterature
      image1={img1}
      image2={img2}
      title="Looking for Book Trailer Websites?"
      description="Your search ends here. Let’s begin your video book trailer’s production now."
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



<RepeatCard2 cards={cards} heading={"Process of Video Book Trailer Production"} />




<WorldLiterature
      image1={img1}
      image2={img2}
      title="Make a Mind-Blowing Trailer Video."
      description="Don’t know how to do that? Fear not; just let us handle it for you."
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

export default Video_Book_Trailer