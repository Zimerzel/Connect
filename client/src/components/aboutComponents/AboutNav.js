import React from "react";
import {NavLink} from "react-router-dom";

function AboutNav(props) {
  return (
    <div className="nav row" id="nav">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/about/Our-community">Community </NavLink>
        <NavLink to="/about/Our-Team">Team </NavLink>
        <NavLink to="/about/Contact">Contact </NavLink>
    </div>
  );
}

export default AboutNav;
