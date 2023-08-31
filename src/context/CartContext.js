// src/context/CartContext.js
// ...
import React, { useState, useContext, useEffect } from 'react';

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

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.componentId === product.componentId);

    if (existingItem) {
      // If the item exists, update the quantity
      setCartItems(prevItems =>
        prevItems.map(item => item.componentId === product.componentId ? { ...item, quantity: item.quantity + 1 } : item)
      );
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.componentId !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.componentId === productId ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.componentId === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item)
    );
  };

  // Add function to update quantity if needed

  // Add function to calculate total

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    // Update localStorage whenever cart items change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity
    }}
  >
    {children}
  </CartContext.Provider>
);
};

// ...
