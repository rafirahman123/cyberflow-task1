import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar className='navbar-color' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ST<span className="nav-title">Rental</span></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">What we do</Nav.Link>
                        <Nav.Link href="#features">Request for Demo</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <button className="signup-button px-3">Sign up</button>
                        <button className="login-button px-4">Login</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;