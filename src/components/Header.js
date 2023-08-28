// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="text-white py-3">
      <Container>
        <Row>
          <Col >
            <img src="/images/wil-logo.png" alt="Wahidiya Bookshop" width="70" />
          </Col>
          <Col>
            <div>
              <img src="/images/logo-name.png" alt="Wahidiya Islamiya Library" height={40}/>
            </div>
            <Navbar className="text-dark" variant="light">
              <Nav>
                <Nav.Item>
                  <Link to="/" className="nav-link">লাইব্রেরী</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/publications" className="nav-link">প্রকাশনা</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/free-ebooks" className="nav-link">ফ্রি ই-বুক</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/daawah" className="nav-link">দাওয়াহ</Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Nav>
              <Nav.Item>
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/signin" className="nav-link">Sign In</Link>
              </Nav.Item>
            </Nav>
            <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
