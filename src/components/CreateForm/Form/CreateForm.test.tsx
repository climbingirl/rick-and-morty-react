import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act, createEvent, fireEvent, render, screen } from '@testing-library/react';
import CreateForm from './CreateForm';
import userEvent from '@testing-library/user-event';

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

  it('shows and hide (after 3 sec delay) the sucsess status by submit form action', async () => {
    window.URL.createObjectURL = vi.fn();
    vi.spyOn(window.URL, 'createObjectURL').mockReturnValue('URL');
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('');

    const user = userEvent.setup();

    fireEvent.change(screen.getByLabelText('Your name'), {
      target: { value: 'Name' },
    });
    fireEvent.change(screen.getByLabelText('Your surname'), {
      target: { value: 'Surame' },
    });
    fireEvent.change(screen.getByLabelText('Date of birth'), {
      target: { value: '2020-05-24' },
    });
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'Thailand' },
    });
    await user.upload(
      screen.getByLabelText('Your photo'),
      new File(['photo'], 'photo.png', { type: 'image/png' })
    );
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(await screen.findByRole('status')).toHaveTextContent('The data has been saved');

    await act(async () => {
      await new Promise((r) => setTimeout(r, 3000));
    });
    expect(await screen.findByRole('status')).toHaveTextContent('');
  });
});
