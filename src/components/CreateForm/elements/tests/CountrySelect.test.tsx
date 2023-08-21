import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CountrySelect from '../CountrySelect';

describe('CountrySelect', () => {
  const ref = React.createRef<HTMLSelectElement>();
  beforeEach(() => {
    render(<CountrySelect forwRef={ref} error={null} />);
  });

  it('renders label text, select input with options and error component', () => {
    const label = screen.getByText('Country');
    const input = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');
    const error = screen.getByRole('alert');
    expect(input).toContain(options);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('has "choose your country" option checked by default', () => {
    const option = screen.getByRole('option', { selected: true });
    expect(option).toHaveTextContent(/choose your country/);
  });
});
