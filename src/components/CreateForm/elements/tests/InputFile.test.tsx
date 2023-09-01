import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputFile from '../InputFile';
import provideUseFormMethods from '../../../../test/provideUseFormMethods';

describe('InputFile', () => {
  const { register, watch } = provideUseFormMethods();
  beforeEach(() => {
    render(<InputFile register={register} watch={watch} error={undefined} />);
  });

  it('renders label, file input, upload btn, file name and error component', () => {
    const label = screen.getByText('Your photo');
    const input = screen.getByTestId('file');
    const btn = screen.getByRole('button', { name: 'Upload file' });
    const name = screen.getByTestId('file-name');
    const error = screen.getByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });
});
