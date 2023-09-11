import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import ROUTES from '../../types/routes';
import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    renderwithRouter(<Home />, ROUTES.ROOT);
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
