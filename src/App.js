// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/:productId" component={ProductDetail} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
