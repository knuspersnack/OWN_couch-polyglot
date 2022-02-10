import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/components/Navigation.module.scss"

const Navigation = () => {
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
            Learn with me
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/impressum" className={style.navPoint}>
            My content
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

export default Navigation;
