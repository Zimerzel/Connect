import React from "react";
import {NavLink} from "react-router-dom";

// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';


function Nav(props) {
  return (
    <div className="nav row" id="nav">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/learn">Learn </NavLink>
    </div>
  );
}


// const appNavbar = () => {
//     return(
//         <>
        
//           {/* <div id="nav">
//               <Nav>
//                 <Nav.Link as={Link} to='/' id="nav">
//                   Home
//                 </Nav.Link>
//               </Nav>
//               <Nav>
//                 <Nav.Link as={Link} to='/about' id="nav">
//                   About
//                 </Nav.Link>
//               </Nav>
//           </div> */}
//         </>
//     );
// }

export default Nav;