import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import ROUTES from '../../types/routes.types';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders by "404" route', () => {
    renderwithRouter(<NotFound />, ROUTES.NOT_FOUND);
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toBeInTheDocument();
  });

  it('renders by invalid route', () => {
    renderwithRouter(<NotFound />, 'this-route-does-not-exist');
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toBeInTheDocument();
  });

  it('has "404" title', () => {
    renderwithRouter(<NotFound />, ROUTES.NOT_FOUND);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('404');
  });
});
