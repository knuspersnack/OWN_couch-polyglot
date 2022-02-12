import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/layout/Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={style.navigationContainer}>
      <ul className={style.horizontal}>
        <li>
          <NavLink exact activeClassName="current" to="/" className={style.navPoint}>
            Me
          </NavLink>{" "}
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/impressum" className={style.navPoint}>
            Learn
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/grid" className={style.navPoint}>
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/impressum" className={style.navPoint}>
            Follow
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/impressum" className={style.navPoint}>
            Impressum
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
