import React from 'react';
import img1 from '../../Assets/Images/profile-pic2.png';
import img2 from '../../Assets/Images/profile-pic.png';
import img3 from '../../Assets/Images/profile-pic (1).png';
import './Review.css';

const Review = ({ color}) => {

    const textColorClass = color === 'black' ? 'text-black' : 'themetextcolor';


    return (
        <div className='flex flex-wrap justify-center'>

            <div className='review-card'>
                <p className='font-medium'>"Very creating and insightful work, made my ramblings make sense! I loved the added details and the way my characters were brought to life. The writer was prompt in her responses and catered to all last-minute adjustments patiently. Thank you for your help. I appreciate it. 100% recommended."</p>

                <div className='flex items-center mt-12'>
                    <div className='mr-6' style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={img1} alt="Profile Image" />
                    </div>
                    <h5  className={`font-medium text-xl ${textColorClass}`} >Joseph Boucher</h5>
                </div>
            </div>

            <div className='review-card'>
                <p   className='font-medium' >"I rarely write reviews but this goes to the ghostwriter I hired. The process, from the selection of the writer to the final submission of my book, went smooth. I loved how he stayed engaged and concerned about my story. Thank you for giving an interpersonal touch to the story. Very quick to answer all queries. I am very satisfied with the quality of much. Way to go."</p>

                <div className='flex items-center my-12'>
                    <div className='mr-6' style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={img2} alt="Profile Image" />
                    </div>
                    <h5  className={`font-medium text-xl ${textColorClass}`} >Annabell Ison</h5>
                </div>
            </div>

            <div className='review-card'>
                <p className='font-medium' >"This website is the best to hire a ghostwriter for any book! I hired a book ghostwriter thinking it would be a lengthy process but to my surprise, they delivered my book in no time. Great work is done! It felt as if the writer had read my mind. Wonderful. I also got my website made by them. Thank you."</p>

                <div className='flex items-center my-12'>
                    <div className='mr-6' style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={img3} alt="Profile Image" />
                    </div>
                    <h5 className={`font-medium text-xl ${textColorClass}`}>
      Moore W.
    </h5>

                </div>
            </div>
        </div>
    );
}

export default Review;
