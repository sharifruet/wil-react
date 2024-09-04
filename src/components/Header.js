import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Badge, Stack, Toast } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import GlobalContext from '../GlobalContext'; // Import GlobalContext
import LoginModal from './LoginModal';

const Header = () => {
  const { cart, loggedIn, user, handleLogout, showLogin, setShowLogin } = useContext(GlobalContext); // Access cart from GlobalContext

  return (
    <header className="text-info pt-2">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/images/wil-logo.png" alt="Wahidiya Bookshop" width="70" />
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <img src="/images/logo-name.png" alt="Wahidiya Islamiya Library" height={30}/><br/>
                <span className="text-white">নির্ভরযোগ্য তথ্য সমৃদ্ধ কিতাব প্রকাশে সচেষ্ট</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <Navbar data-bs-theme="dark" className='m-0 b-0'>
                    <Nav className="me-auto">
                      <Nav.Link className="text-primary" href="/">লাইব্রেরী</Nav.Link>
                      <Nav.Link className="text-primary" href="/publications">প্রকাশনা</Nav.Link>
                      <Nav.Link className="text-primary" href="/free-ebooks">ফ্রি ই-বুক</Nav.Link>
                    </Nav>
                 
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
                  <LoginModal/>
                </>
              }
              <Link to="/cart" className=""> 
                <BsCartFill/> 
                <Badge pill bg="danger">{cart.length}</Badge> 
                <span className="visually-hidden">Items in Cart</span> 
              </Link>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <Toast onClose={() => setShowLogin(false)} show={showLogin} delay={3000} autohide>
              <Toast.Header>
                <strong className="me-auto">Notification</strong>
              </Toast.Header>
              <Toast.Body>Please login first</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
      
    </header>
  );
};

export default Header;
