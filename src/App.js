import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Publications from './components/Publications';
import Ebook from './components/Ebook';
import Daawah from './components/Daawah';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main>
          <Routes>
        
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={ProductList} />
            <Route path="/products/:productId" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/publications" element={<Publications/>} />
            <Route path="/free-ebooks" element={<Ebook/>} />
            <Route path="/daawah" element={<Daawah/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
