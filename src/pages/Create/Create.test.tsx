import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import ROUTES from '../../types/routes.types';
import Create from './Create';

describe('Create', () => {
  beforeEach(() => {
    renderwithRouter(<Create />, ROUTES.CREATE);
  });

  it('renders by "create" route', () => {
    const createPage = screen.getByRole('region', { name: 'Create product page' });
    expect(createPage).toBeInTheDocument();
  });

  it('renders CreateForm component', () => {
    const createForm = screen.getByRole('form', { name: 'Create product' });
    expect(createForm).toBeInTheDocument();
  });
});
