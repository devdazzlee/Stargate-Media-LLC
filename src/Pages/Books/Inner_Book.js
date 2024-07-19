import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inner_Book = () => {
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState(null); // State to hold book detail
  const [error, setError] = useState(null); // State to hold error message

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axios.get(`https://trazzel-update-backend.vercel.app/api/v1/Book-detail/${id}`);
        if (!response.data) {
          setError("Book not found");
        } else {
          setBookDetail(response.data.data);
          console.log(bookDetail)
        }
      } catch (error) {
        setError("An error occurred while fetching book detail");
        console.log(error);
      }
    };

    fetchBookDetail(); // Call the async function inside useEffect
  }, [id]); // Add id to dependency array to re-fetch book detail when id changes

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {bookDetail ? (
            <div>
              <h2>{bookDetail.title}</h2> {/* Assuming title is a property in book detail */}
              <p>{bookDetail.description}</p> {/* Assuming description is a property in book detail */}
              {/* Render other book details */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Inner_Book;
