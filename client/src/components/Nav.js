import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Container, NavDropdown, Nav, NavItem } from "react-bootstrap"

function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </>
  )
}

export default Navbar;

       /* <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">home</NavDropdown.Item>
              <NavDropdown.Item href="/about">about</NavDropdown.Item>
              <NavDropdown.Item href="/learn">Learn</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> *}

    // <div className="nav row" id="nav">
    //     <NavLink to="/">Home </NavLink>
    //     <NavLink to="/about">About </NavLink>
    //     <NavLink to="/learn">Learn </NavLink>
    // </div>

    // Create a dropdown icon menu
  );
} */