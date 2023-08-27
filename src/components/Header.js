// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Navbar, Nav, NavItem, NavLink, Container, Row, Col } from "react-bootstrap";

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
              <img src="/images/logo-name.png" height={40}/>
          </div>
          <Navbar className="text-dark" variant="light">
            <Nav>
              <NavItem>
                <NavLink href="/">লাইব্রেরী</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/publications">প্রকাশনা</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/free-ebooks">ফ্রি ই-বুক</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dawah">দাওয়াহ</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <NavLink href="/cart">Cart</NavLink>
        </Col>
      </Row>
    </Container>
   


    </header>
  );
};

export default Header;
