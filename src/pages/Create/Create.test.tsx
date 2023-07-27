import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import setupRouter from '../../test/setupRouter';
import ROUTES from '../../types/routes.types';
import Create from './Create';

describe('Create', () => {
  it('renders by "create" route', () => {
    render(setupRouter(<Create />, ROUTES.CREATE));
    const createPage = screen.getByRole('region', { name: 'Create product page' });
    expect(createPage).toBeInTheDocument();
  });
});
