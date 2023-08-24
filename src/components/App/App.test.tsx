import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import renderwithRouter from '../../test/renderWithRouter';
import App from './App';

describe('App', () => {
  it('renders Header component', () => {
    renderwithRouter(<App />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
