import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputFile from '../InputFile';

describe('InputFile', () => {
  const ref = React.createRef<HTMLInputElement>();
  beforeEach(() => {
    render(<InputFile forwRef={ref} error={null} />);
  });

  it('renders label,file input, upload btn and error component', () => {
    const label = screen.getByText('Your photo');
    const input = screen.getByTestId('file');
    const btn = screen.getByRole('button', { name: 'Upload file' });
    const error = screen.getByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });
});
