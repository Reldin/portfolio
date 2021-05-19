import React from "react";

import "./nav.styles.scss";

const Nav = (props) => (
  <nav className="nav">
    <ul className="nav-links">
      <li className="nav-link">
        <a href="/#">{props.firstLink}</a>
      </li>
      <li className="nav-link">
        <a href="/#">{props.secondLink}</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
