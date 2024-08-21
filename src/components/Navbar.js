import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar expand="lg" bg='secondary' >
            <Container>
                <Nav className="header">
                    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/About">About</Link></Nav.Link>
                    <Nav.Link ><Link to="/Resources">Resources</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;