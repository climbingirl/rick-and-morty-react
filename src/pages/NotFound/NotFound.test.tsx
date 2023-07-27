import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import setupRouter from '../../test/setupRouter';
import ROUTES from '../../types/routes.types';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders by "404" route', () => {
    render(setupRouter(<NotFound />, ROUTES.NOT_FOUND));
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toHaveTextContent('404');
  });

  it('renders by invalid route', () => {
    render(setupRouter(<NotFound />, 'this-route-does-not-exist'));
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toHaveTextContent('404');
  });
});
