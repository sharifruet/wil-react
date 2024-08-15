import { useContext, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsKeyFill } from 'react-icons/bs';
import api from '../api';
import GlobalContext from '../GlobalContext';

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [object, setObject] = useState({username:"", password: ""});
    const { handleLogin } = useContext(GlobalContext); // Access cart from GlobalContext

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLoginSubmit = () => {
        api.login(object)
        .then( data => {
            //console.log(data);
            handleLogin(data);
            handleClose();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
        
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Login
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Log In <BsKeyFill/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <FloatingLabel controlId="floatingInput" label="Phone number"  className="mb-3" >
                    <Form.Control type="username" placeholder="phone number" onChange={(e) => object.username = e.target.value}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => object.password = e.target.value} />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleLoginSubmit}>
                Login
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default LoginModal;