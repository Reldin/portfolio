import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../store/context";

import "./nav.styles.scss";

const Nav = () => {
  const ctx = useContext(Context);

  return (
  <nav className="nav">
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink to="/front-page" activeClassName="active">{ctx.navLink1}</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to='/mini-project' activeClassName="active">{ctx.navLink2}</NavLink>
      </li>
    </ul>
  </nav>
  )
};

export default Nav;
