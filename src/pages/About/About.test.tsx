import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import ROUTES from '../../types/routes.types';
import About from './About';

describe('About', () => {
  beforeEach(() => {
    renderwithRouter(<About />, ROUTES.ABOUT);
  });

  it('renders by "about" route', () => {
    const aboutPage = screen.getByRole('article');
    expect(aboutPage).toBeInTheDocument();
  });

  it('has "Aboute us" title', () => {
    const aboutPage = screen.getByRole('article');
    const title = screen.getByRole('heading', { name: 'About us' });
    expect(aboutPage).toContainElement(title);
  });
});
