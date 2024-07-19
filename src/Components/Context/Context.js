import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [finalPrice, setFinalPrice] = useState(0); // State for final price
  const [totalQuantity, setTotalQuantity] = useState(0); // State for total quantity

  useEffect(() => {
    // Calculate total quantity and final price when cart changes
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);

    const newFinalPrice = calculateEstimatedTotal(); // Calculate your final price here
    setFinalPrice(newFinalPrice);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingBookIndex = prevCart.findIndex(item => item._id === book._id);
      if (existingBookIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingBookIndex] = { ...updatedCart[existingBookIndex], quantity: updatedCart[existingBookIndex].quantity + 1 };
        return updatedCart;
      } else {
        return [...prevCart, { ...book, quantity: 1, selectedFormat: 'ebook' }]; // Default format to 'ebook'
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter(book => book._id !== bookId));
  };

  const decreaseQuantity = (bookId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(book => {
        if (book._id === bookId && book.quantity > 1) {
          return { ...book, quantity: book.quantity - 1 };
        }
        return book;
      });
      return updatedCart;
    });
  };

  const increaseQuantity = (bookId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(book => {
        if (book._id === bookId) {
          return { ...book, quantity: book.quantity + 1 };
        }
        return book;
      });
      return updatedCart;
    });
  };

  const updateItemFormat = (bookId, format) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(book => {
        if (book._id === bookId) {
          return { ...book, selectedFormat: format };
        }
        return book;
      });
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setFinalPrice(0);
    localStorage.removeItem('cart');
  };

  const calculateEstimatedTotal = () => {
    return cart.reduce((total, book) => {
      const price = book.selectedFormat === 'hardcover' ? (book.hardcoverPrice || 0) : (book.projectPrice || 0);
      return total + (price * book.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, updateItemFormat, finalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
