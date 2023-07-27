import React from 'react';
import { NavLink, Location } from 'react-router-dom';
import ROUTES from '../../types/routes.types';
import './Header.scss';
import withRouter from './withRouter';

interface Link {
  name: string;
  title: string;
  route: string;
}

interface HeaderProps {
  location: Location;
}

class Header extends React.Component<HeaderProps> {
  links: Link[] = [
    { name: 'home', title: 'home page', route: ROUTES.ROOT },
    { name: 'about', title: 'about page', route: ROUTES.ABOUT },
    { name: 'create', title: 'create page', route: ROUTES.CREATE },
  ];

  getCurrentPageTitle() {
    let currentRoute = this.props.location.pathname.replace('/', '');
    if (!currentRoute) {
      currentRoute = '/';
    }

    const currentLinkTitle = this.links.find((link) => link.route === currentRoute)?.title;

    return currentLinkTitle;
  }

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <nav className="heder__nav">
            {this.links.map((link) => (
              <NavLink className="nav__link" to={link.route} key={link.name}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          <h2 className="header__current-title">{this.getCurrentPageTitle()}</h2>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
