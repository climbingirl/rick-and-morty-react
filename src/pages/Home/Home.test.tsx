import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import setupRouter from '../../test/setupRouter';
import ROUTES from '../../types/routes.types';
import Home from './Home';

describe('Home', () => {
  it('renders by "/" route', () => {
    render(setupRouter(<Home />, ROUTES.ROOT));
    const homePage = screen.getByRole('region', { name: 'Home page' });
    expect(homePage).toBeInTheDocument();
  });
});
