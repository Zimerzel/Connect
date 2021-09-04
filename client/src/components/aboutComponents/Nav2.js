import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const appNavbar2 = () => {
    return(
        <>
        <Navbar bg='dark' variant='dark' expand='lg' id="nav" >
          <Container fluid>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='nav'>
              <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/about'>
                  Home
                </Nav.Link>
              </Nav>
              <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/why-connect'>
                  Why Connect?
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
}

export default appNavbar2;