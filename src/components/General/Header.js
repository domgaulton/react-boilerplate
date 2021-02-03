import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="header__logo">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
