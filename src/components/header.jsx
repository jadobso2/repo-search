import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/base/header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <Link to="/" className="header__link">Github Repository Search</Link>
    </h1>
  </header>
);

export default Header;
