import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import ROUTES from '../../types/routes';
import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    render(withRouter(<Home />, ROUTES.ROOT));
  });

  it('renders by "/" route', () => {
    const homePage = screen.getByRole('region', { name: 'Home page' });
    expect(homePage).toBeInTheDocument();
  });

  it('renders Search and ProductList components', () => {
    const search = screen.getByRole('search');
    const productList = screen.getByRole('list');
    expect(search).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
  });
});
