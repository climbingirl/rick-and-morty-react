import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import App from './App';

describe('App', () => {
  it('renders Header component', () => {
    render(withRouter(<App />));
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
