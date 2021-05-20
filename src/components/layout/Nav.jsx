import React, { useContext } from "react";
import Context from "../../store/context";

import "./nav.styles.scss";

const Nav = () => {
  const ctx = useContext(Context);

  return (
  <nav className="nav">
    <ul className="nav-links">
      <li className="nav-link">
        <a href="/#">{ctx.navLink1}</a>
      </li>
      <li className="nav-link">
        <a href="/#">{ctx.navLink2}</a>
      </li>
    </ul>
  </nav>
  )
};

export default Nav;
