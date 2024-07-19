import React from 'react';
import { useCart } from '../../Components/Context/Context';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navabar/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, finalPrice, updateItemFormat } = useCart();
  const navigate = useNavigate();

  const handleFormatChange = (bookId, format) => {
    updateItemFormat(bookId, format);
  };

  const calculateItemTotal = (book) => {
    const price = book.selectedFormat === 'hardcover' ? (book.hardcoverPrice || 0) : (book.projectPrice || 0);
    return price * book.quantity;
  };

  const calculateEstimatedTotal = () => {
    return cart.reduce((total, book) => {
      const price = book.selectedFormat === 'hardcover' ? (book.hardcoverPrice || 0) : (book.projectPrice || 0);
      return total + (price * book.quantity)
    }, 0);
  };
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`; // Format the amount to two decimal places
  };
  
  const navigateHome = () => {
    navigate('/');
  };

  console.log('Cart:', cart); // Debugging: Check cart data

  return (
    <>
      <Navbar />
      <div className="cartContainer">
        <h1 className="cartHeader ml-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="emptyCartMessage">Your cart is empty</p>
        ) : (
          <div className="cartContent">
            <div className="cartItems">
              {cart.map((book) => (
                <div key={book._id} className="cartItem">
                  <img className="cartItemImage" src={book.imageUrl[0]} alt={book.projectName} />
                  <div className="cartItemDetails">
                    <h2 className="cartItemTitle">{book.projectName}</h2>
                    <select
                      value={book.selectedFormat}
                      onChange={(e) => handleFormatChange(book._id, e.target.value)}
                      className="formatSelect"
                    >
                      <option value="ebook">Ebook - USD {book.projectPrice}</option>
                      <option value="hardcover">Hardcover - USD {book.hardcoverPrice || 'N/A'}</option>
                    </select>
                    <p className="cartItemDetailsText">Quantity: {book.quantity}</p>
                    <div className="quantityControl">
                      <button onClick={() => decreaseQuantity(book._id)} className="adjustQuantityButton">
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                      <span className="currentQuantity">{book.quantity}</span>
                      <button onClick={() => increaseQuantity(book._id)} className="adjustQuantityButton">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(book._id)} className="removeFromCartButton">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="cartItemTotal">
                    USD {formatCurrency(calculateItemTotal(book))}
                  </div>
                </div>
              ))}
            </div>
            <div className="cartSummary">
              <p className="subtotal">
              Subtotal: {formatCurrency(calculateEstimatedTotal())}

              </p>
              <p className="note">Taxes and shipping calculated at checkout</p>
              <p className="finalPrice">
              Final Price: {formatCurrency(finalPrice)}

              </p>
              <Link to={'/checkout'} className="checkoutButton">
                <button className='flex w-full justify-center'>CHECK OUT</button>
              </Link>
              <button onClick={navigateHome} className="continueShoppingButton">CONTINUE SHOPPING</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
