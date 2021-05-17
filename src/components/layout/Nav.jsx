import React from 'react';

import './nav.styles.scss';

const Nav = () => (
    <nav className="nav">
        <ul className="nav-links">
            <li className="nav-link"><a href="/#">Home</a></li>
            <li className="nav-link"><a href="/#">About</a></li>
        </ul>
    </nav>
)

export default Nav;