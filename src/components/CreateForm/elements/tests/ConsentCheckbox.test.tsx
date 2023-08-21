import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ConsentCheckbox from '../ConsentCheckbox';

describe('ConsentCheckbox', () => {
  const ref = React.createRef<HTMLInputElement>();
  beforeEach(() => {
    render(<ConsentCheckbox forwRef={ref} error={null} />);
  });

  it('renders label, checkbox" input and error component', () => {
    const label = screen.getByText(/i agree/i);
    const input = screen.getByRole('checkbox');
    const error = screen.getByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('has input unchecked by default', () => {
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();
  });
});
