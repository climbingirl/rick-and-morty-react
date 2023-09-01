import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputsGender from '../InputsGender';
import provideUseFormMethods from '../../../../test/provideUseFormMethods';

describe('InputsGender', () => {
  const { register } = provideUseFormMethods();
  beforeEach(() => {
    render(<InputsGender register={register} />);
  });

  it('renders radiogroup with labels and radio inputs', () => {
    const radiogroup = screen.getByRole('radiogroup', { name: 'Choose gender' });
    const labelMale = screen.getByText('Male');
    const labelFemale = screen.getByText('Female');
    const inputMale = screen.getByRole('radio', { name: 'Male' });
    const inputFemale = screen.getByRole('radio', { name: 'Female' });
    expect(radiogroup).toBeInTheDocument();
    expect(radiogroup).toContainElement(labelMale);
    expect(radiogroup).toContainElement(labelFemale);
    expect(radiogroup).toContainElement(inputMale);
    expect(radiogroup).toContainElement(inputFemale);
  });

  it('has male input checked by default', () => {
    const input = screen.getByRole('radio', { name: 'Male' });
    expect(input).toBeChecked();
  });
});
