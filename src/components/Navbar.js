import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg='secondary' variant="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#HomePage">Home</Nav.Link>
                    <Nav.Link href="#AboutPage">About</Nav.Link>
                    <Nav.Link href="#ResourcesPage">Resources</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;