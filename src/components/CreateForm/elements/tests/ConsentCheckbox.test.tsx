import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConsentCheckbox from '../ConsentCheckbox';
import provideUseFormMethods from '../../../../test/provideUseFormMethods';

describe('ConsentCheckbox', () => {
  const { register } = provideUseFormMethods();
  beforeEach(() => {
    render(<ConsentCheckbox register={register} error={undefined} />);
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
