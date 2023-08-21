import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputDate from '../InputDate';

describe('InputDate', () => {
  const ref = React.createRef<HTMLInputElement>();
  beforeEach(() => {
    render(<InputDate forwRef={ref} error={null} />);
  });

  it('renders label, date input and error component', () => {
    const label = screen.getByText('Date of birth');
    const input = screen.getByRole('textbox');
    const error = screen.getByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('has empty input by default', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});
