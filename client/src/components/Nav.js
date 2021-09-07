import React from "react";
import {NavLink} from "react-router-dom";
// import { Navbar, Container, NavDropdown } from "react-bootstrap"

// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';


function Nav(props) {
  return (
    // <Navbar variant="dark" bg="dark" expand="lg">
    //   <Container fluid>
    //     <Navbar.Toggle aria-controls="navbar-dark-example" />
    //     <Navbar.Collapse id="navbar-dark-example">
    //       <Nav>
    //         <NavDropdown
    //           id="nav-dropdown-dark-example"
    //           title="Dropdown"
    //           menuVariant="dark"
    //         >
    //           <NavDropdown.Item href="/home">home</NavDropdown.Item>
    //           <NavDropdown.Item href="/about">about</NavDropdown.Item>
    //           <NavDropdown.Item href="learn">Learn</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>



    <div className="nav row" id="nav">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/learn">Learn </NavLink>
    </div>

    // Create a dropdown icon menu
  );
}

export default Nav;