import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act, createEvent, fireEvent, render, screen } from '@testing-library/react';
import CreateForm from './CreateForm';

describe('CreateForm', () => {
  beforeEach(() => {
    render(<CreateForm onCardCreate={vi.fn()} />);
  });

  it('renders form', () => {
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('renders form elements', () => {
    const radiogroup = screen.getByRole('radiogroup');
    const textFields = screen.getAllByTestId('text-field');
    const dateFields = screen.getByTestId('date-field');
    const countryFields = screen.getByTestId('country-field');
    const fileFields = screen.getByTestId('file-field');
    const consentFields = screen.getByTestId('consent-field');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    expect(radiogroup).toBeInTheDocument();
    expect(textFields).toHaveLength(2);
    expect(dateFields).toBeInTheDocument();
    expect(countryFields).toBeInTheDocument();
    expect(fileFields).toBeInTheDocument();
    expect(consentFields).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('prevents default submit form action', () => {
    const form = screen.getByRole('form');
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it('shows and hide (after 3 sec delay) the sucsess status by submit form action', () => {
    vi.useFakeTimers();
    window.URL.createObjectURL = vi.fn();
    vi.spyOn(window.URL, 'createObjectURL').mockReturnValue('URL');
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('');

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Name' } });
    fireEvent.change(screen.getByLabelText('Your surname'), {
      target: { value: 'Surame' },
    });
    fireEvent.change(screen.getByLabelText('Date of birth'), {
      target: { value: '2020-05-24' },
    });
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'Thailand' },
    });
    fireEvent.change(screen.getByLabelText('Your photo'), {
      target: { files: [new File(['photo'], 'photo.png', { type: 'image/png' })] },
    });
    fireEvent.change(screen.getByLabelText(/i agree/i), {
      target: { checked: true },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(status).toHaveTextContent('The data has been saved');
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(status).toHaveTextContent('');
  });
});
