// src/context/CartContext.js
// ...
import React, { useState, useContext } from 'react';

const CartContext = React.createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Rest of your code
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // If the item exists, update the quantity
      setCartItems(prevItems =>
        prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      );
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Add function to update quantity if needed

  // Add function to calculate total

  const clearCart = () => {
    setCartItems([]);
  };

return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
    }}
  >
    {children}
  </CartContext.Provider>
);
};

// ...
