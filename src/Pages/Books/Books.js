  import React, { useEffect, useState } from 'react';
  import Video_Book_Banner from '../../Components/Banner/VideoBookTrailer';
  import Navbar from '../../Components/Navabar/Navbar';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import './Book.css';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faStar } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { useCart } from '../../Components/Context/Context';
  import Footer from '../../Components/Footer/Footer';
  import { RotatingLines } from 'react-loader-spinner';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  library.add(faStar);

  const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const { addToCart } = useCart();

    useEffect(() => {
      const fetchData = async () => {
        try {
          let response = await axios.get('https://trazzel-update-backend.vercel.app/api/v1/products');
          const booksWithStars = response.data.data.map(book => ({
            ...book,
            stars: generateRandomStars()
          }));
          setBooks(booksWithStars);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    const generateRandomStars = () => {
      const starsCount = Math.floor(Math.random() * 3) + 3;
      return Array.from({ length: starsCount }, (_, index) => (
        <FontAwesomeIcon key={index} icon="star" className="star" />
      ));
    };

    const truncateText = (text, wordLimit) => {
      const words = text.split(' ');
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
      }
      return text;
    };

    const handleToggleDescription = (id) => {
      setExpandedDescriptions(prevState => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };

    const handleAddToCart = (product) => {
      addToCart(product);
      toast.success(<CartToast />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });   
    };

    const CartToast = () => (
      <div className='text-black font-bold'>
      Product has been added to your cart.<Link to="/cart" className="text-blue-500 underline">Click here to view your cart</Link>
      </div>
    );

    return (
      <>
        <Navbar />
        <div className="pt-20">
          <Video_Book_Banner />
        </div>
        
        {isLoading ? (
          <div className="loader flex justify-center m-auto">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              strokeColor="#E8B551"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="bookContainer">
            {books.map((data) => (
              <div key={data._id} className="bookCard">
                <img className="bookCoverImage" src={data.imageUrl[0]} alt={data.projectName} />
                <div className="bookInfo">
                  <div>
                    {data.projectName === "Silver Lining" && (
                      <div className="preBookingLabel">Pre Booking</div>
                    )}
                  </div>
                  <h1 className="bookTitle">{data.projectName}</h1>
                  <div className="stars">{data.stars}</div>
                  <div className="bookPrice">
                    <span className='font-medium'>
                      <sup className='font-medium' style={{ position: "relative", top: "-2px" }}>$</sup>
                      {data.projectPrice}
                    </span>
                  </div>
                  <p className='text-sm font-medium mb-2'>
                    {expandedDescriptions[data._id] ? data.projectDescription : truncateText(data.projectDescription, 20)}
                    <button 
                      className="text-blue-500 underline"
                      onClick={() => handleToggleDescription(data._id)}
                    >
                      {expandedDescriptions[data._id] ? 'Show Less' : 'Show More'}
                    </button> 
                  </p>
                  <button onClick={() => handleAddToCart(data)} className="addToCartButton themecolor">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Footer />
        <ToastContainer />
      </>
    );
  };

  export default Books;
