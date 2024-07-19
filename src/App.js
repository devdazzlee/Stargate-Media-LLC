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
import Books from './Pages/Books/Books';
import Inner_Book from './Pages/Books/Inner_Book';
import { CartProvider } from './Components/Context/Context';
import Cart from './Components/Cart/Cart';
import ScrollToTop from './Components/Scroll_Top/Scroll_Tops';
import PaymentForm1 from './Components/PaymentForm/PaymentForm';

const App = () => {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
<Routes>

<Route
      path={"/"}
      element={
        <>
        <ScrollToTop/>
        <Home/>
        </>
      }
    />
<Route
      path={"/Contact-us"}
      element={

        <>
          <ScrollToTop/>
          <Contact_Us/>
        </>
      }
    />
<Route
      path={"/About-us"}
      element={
        <>
        <ScrollToTop/>
        <About_Us/>
        </>
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
        <>
        <ScrollToTop/>
        <Book_Publishing/>
        </>
      }
    />
<Route
      path={"/Book-Marketing"}
      element={
        <>
        <ScrollToTop/>
        <Book_Marketing/>
        </>
      }
    />
    
    <Route
      path={"/Book-Cover-Design"}
      element={
        <>
        <ScrollToTop/>
        <Bookcover_Design/>
        </>
      }
    />

<Route
      path={"/Ghost-Writing"}
      element={
        <>
        <ScrollToTop/>
        <Ghost_Writing/>
        </>
      }
    />


<Route
      path={"/Book-Editing"}
      element={
        <>
        <ScrollToTop/>
        <Book_Editing/>
        </>
      }
    />


<Route
      path={"/Video-Book-Trailer"}
      element={
        <>
        <ScrollToTop/>
        <Video_Book_Trailer/>
        </>
      }
    />
<Route
      path={"/Books"}
      element={
        <>
        <ScrollToTop/>
        <Books/>
        </>
      }
    />
<Route
      path={"/Books/:id"}
      element={
        <>
        <ScrollToTop/>
        <Inner_Book/>
        </>
      }
    />

<Route
      path={"/cart"}
      element={
        <>
        <ScrollToTop/>
        <Cart/>
        </>
      }
    />
  

  <Route
      path={"/checkout"}
      element={
        <>
          <ScrollToTop/>
        <PaymentForm1/>
        </>
      }
    />

  
</Routes>
    
    </BrowserRouter>
      </CartProvider>





    </>
  )
}

export default App