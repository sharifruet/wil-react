import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Badge, Stack } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import GlobalContext from '../GlobalContext'; // Import GlobalContext

const Header = () => {
  const { cart, loggedIn, user, handleLogout } = useContext(GlobalContext); // Access cart from GlobalContext

  return (
    <header className="text-white pt-2">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/images/wil-logo.png" alt="Wahidiya Bookshop" width="70" />
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <img src="/images/logo-name.png" alt="Wahidiya Islamiya Library" height={40}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Navbar data-bs-theme="dark">
                  <Container>
                    <Nav className="me-auto">
                      <Nav.Link className="text-primary" href="/">লাইব্রেরী</Nav.Link>
                      <Nav.Link className="text-primary" href="/publications">প্রকাশনা</Nav.Link>
                      <Nav.Link className="text-primary" href="/free-ebooks">ফ্রি ই-বুক</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Stack direction="horizontal" gap={3}>
              {loggedIn?
                <>{user.name} | <span onClick={handleLogout}>Logout</span> </>
                :<>
                  <Link to="/signup" className="nav-link text-primary">Sign Up</Link>
                  <Link to="/signin" className="nav-link text-primary">Sign In</Link>
                </>
              }
              <Link to="/cart" className=""> 
                <BsCartFill/> 
                <Badge pill bg="danger">{cart.length}</Badge> {/* Use cart.length */}
                <span className="visually-hidden">Items in Cart</span> 
              </Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
