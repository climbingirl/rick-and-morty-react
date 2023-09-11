import { NavLink, Location } from 'react-router-dom';
import ROUTES from '../../types/routes';
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

function Header(props: HeaderProps) {
  const links: Link[] = [
    { name: 'home', title: 'home page', route: ROUTES.ROOT },
    { name: 'about', title: 'about page', route: ROUTES.ABOUT },
    { name: 'create', title: 'create page', route: ROUTES.CREATE },
    { name: 'characters', title: 'characters page', route: ROUTES.API },
  ];

  function getCurrentPageTitle() {
    let currentRoute = props.location.pathname.replace('/', '');
    if (!currentRoute) {
      currentRoute = '/';
    }
    const currentLinkTitle = links.find((link) => link.route === currentRoute)?.title;
    return currentLinkTitle;
  }

  return (
    <header className="header">
      <div className="header__container container">
        <nav className="heder__nav">
          {links.map((link) => (
            <NavLink className="nav__link" to={link.route} key={link.name}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <h2 className="header__current-title">{getCurrentPageTitle()}</h2>
      </div>
    </header>
  );
}

export default withRouter(Header);
