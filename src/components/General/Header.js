import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import Container from '../UX/Container'

const Header = () => {
  return (
    <header className="header">
      <Container containerName="footer-container">
        <Link to='/' className="header__logo">
          <img src={logo} alt="Logo" />
        </Link>
      </Container>
    </header>
  );
}

export default Header;
