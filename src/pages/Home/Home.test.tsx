import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import ROUTES from '../../types/routes.types';
import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    renderwithRouter(<Home />, ROUTES.ROOT);
  });

  it('renders by "/" route', () => {
    const homePage = screen.getByRole('region', { name: 'Home page' });
    expect(homePage).toBeInTheDocument();
  });

  it('renders Search and CardList components', () => {
    const search = screen.getByRole('search', { name: 'Product cards' });
    const cardList = screen.getByRole('list');
    expect(search).toBeInTheDocument();
    expect(cardList).toBeInTheDocument();
  });
});
