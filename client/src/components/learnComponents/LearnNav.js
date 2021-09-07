import React from "react";
import {NavLink} from "react-router-dom";

function LearnNav(props) {
  return (
    <div className="nav row" id="nav">
        <NavLink to="/learn"> </NavLink>
        <NavLink to="/learn/books">Books + Articles </NavLink>
        <NavLink to="/learn/Videos">Videos </NavLink>
    </div>
  );
}

export default LearnNav;