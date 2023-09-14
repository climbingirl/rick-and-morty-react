import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import ROUTES from '../../types/routes';
import About from './About';

describe('About', () => {
  beforeEach(() => {
    render(withRouter(<About />, ROUTES.ABOUT));
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
