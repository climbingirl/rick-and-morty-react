import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="header__container container">
          <nav className="heder__nav">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
            <NavLink className="nav__link" to="about">
              About
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
