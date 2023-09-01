import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputText from '../InputText';
import provideUseFormMethods from '../../../../test/provideUseFormMethods';

describe('InputText', () => {
  const { register } = provideUseFormMethods();
  beforeEach(() => {
    render(<InputText register={register} name="name" error={undefined} />);
  });

  it('renders label, text input and error component', () => {
    const label = screen.getByText('Your name');
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
