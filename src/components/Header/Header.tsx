import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="header__container container">
          <nav className="heder__nav">
            <Link className="nav__link" to="/">
              Home
            </Link>
            <Link className="nav__link" to="about">
              About
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
