import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputDate from '../InputDate';
import provideUseFormMethods from '../../../../test/provideUseFormMethods';

describe('InputDate', () => {
  const { register } = provideUseFormMethods();
  beforeEach(() => {
    render(<InputDate register={register} error={undefined} />);
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
