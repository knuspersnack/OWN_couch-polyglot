import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact activeClassName="current" to="/">
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/impressum">
            Impressum
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
