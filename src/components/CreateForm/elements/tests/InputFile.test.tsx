import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InputFile from '../InputFile';

describe('InputFile', () => {
  const ref = React.createRef<HTMLInputElement>();
  beforeEach(() => {
    render(<InputFile error={undefined} />);
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

  it('changes the file name content after the file is loaded', () => {
    const name = screen.getByTestId('file-name');
    expect(name).toHaveTextContent('');
    fireEvent.change(screen.getByTestId('file'), {
      target: {
        files: [new File(['test'], 'test.png')],
      },
    });
    expect(name).toHaveTextContent('test.png');
  });
});
