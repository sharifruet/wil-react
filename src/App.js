import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main>
          <Routes>
        
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={ProductList} />
            <Route path="/products/:productId" element={ProductDetail} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
