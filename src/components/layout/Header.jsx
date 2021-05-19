import React from "react";

import Nav from "./Nav";

import "./header.styles.scss";

const Header = (props) => (
  <header className="header">
    <Nav firstLink={props.firstLink} secondLink={props.secondLink} />
  </header>
);

export default Header;
