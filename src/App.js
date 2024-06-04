import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact_Us from './Pages/Contact_us/Contact_Us';
import About_Us from './Pages/About_Us/About_Us';
import Book_Publishing from './Pages/Book_Publishing/Book_Publishing';
import Book_Marketing from './Pages/Book_Marketing/Book_Marketing';
import Bookcover_Design from './Pages/BookCover_Design/BookCover_Design';
import Ghost_Writing from './Pages/Ghost_Writing/Ghost_Writing';
import Book_Editing from './Pages/Book_Editing/Book_Editing';
import Video_Book_Trailer from './Pages/VideoBook_Trailer/VideoBook_Trailer';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
<Routes>

<Route
      path={"/"}
      element={
     <Home/>
      }
    />
<Route
      path={"/Contact-us"}
      element={
     <Contact_Us/>
      }
    />
<Route
      path={"/About-us"}
      element={
     <About_Us/>
      }
    />


<Route
      path={"*"}
      element={
     <Home/>
      }
    />

<Route
      path={"/Book-Publisihing"}
      element={
        <Book_Publishing/>
      }
    />
<Route
      path={"/Book-Marketing"}
      element={
        <Book_Marketing/>
      }
    />
    
    <Route
      path={"/Book-Cover-Design"}
      element={
        <Bookcover_Design/>
      }
    />

<Route
      path={"/Ghost-Writing"}
      element={
        <Ghost_Writing/>
      }
    />


<Route
      path={"/Book-Editing"}
      element={
        <Book_Editing/>
      }
    />


<Route
      path={"/Video-Book-Trailer"}
      element={
        <Video_Book_Trailer/>
      }
    />



</Routes>
    
    </BrowserRouter>



    </>
  )
}

export default App