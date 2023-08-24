import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import ROUTES from '../../types/routes';
import Header from './Header';
import renderwithRouter, { host } from '../../test/renderWithRouter';

describe('Header', () => {
  beforeEach(() => {
    renderwithRouter(<Header />, ROUTES.ROOT);
  });

  it('has navigation menu', () => {
    const header = screen.getByRole('banner');
    const navigation = screen.getByRole('navigation');
    expect(header).toContainElement(navigation);
  });

  it('has active home page link', () => {
    const activeLink = screen.getByRole<HTMLAnchorElement>('link', { current: 'page' });
    expect(activeLink.href).toBe(`${host}/`);
  });

  it('has the "home page" current title ', () => {
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('home page');
  });
});
