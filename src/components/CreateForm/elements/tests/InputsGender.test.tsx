import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputsGender from '../InputsGender';

describe('InputsGender', () => {
  const refs = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
  beforeEach(() => {
    render(<InputsGender forwRef={refs} />);
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
