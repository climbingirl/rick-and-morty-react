import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ROUTES from '../../types/routes.types';
import Header from './Header';
import setupRouter, { host } from '../../test/setupRouter';

describe('Header', () => {
  beforeEach(() => {
    render(setupRouter(<Header />, ROUTES.ROOT));
  });

  it('renders navigation menu', () => {
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
    expect(title.innerHTML).toBe('home page');
  });
});
