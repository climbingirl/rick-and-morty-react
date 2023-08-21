import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('renders empty alert when dosent get error', () => {
    render(<ErrorMessage error={null} />);
    const error = screen.getByRole('alert');
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('');
  });

  it('shows error text when gets an error', () => {
    render(<ErrorMessage error="Name is required" />);
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Name is required');
  });
});
