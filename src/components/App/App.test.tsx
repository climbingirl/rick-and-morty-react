import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import setupRouter from '../../test/setupRouter';
import App from './App';

describe('App', () => {
  it('renders by router', () => {
    render(setupRouter(<App />));
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
