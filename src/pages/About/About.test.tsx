import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import setupRouter from '../../test/setupRouter';
import ROUTES from '../../types/routes.types';
import About from './About';

describe('About', () => {
  it('renders by "about" route', () => {
    render(setupRouter(<About />, ROUTES.ABOUT));
    const aboutPage = screen.getByRole('article');
    expect(aboutPage).toBeInTheDocument();
  });
});
