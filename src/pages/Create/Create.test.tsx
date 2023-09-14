import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import ROUTES from '../../types/routes';
import Create from './Create';
import userEvent from '@testing-library/user-event';

describe('Create', () => {
  beforeEach(() => {
    render(withRouter(<Create />, ROUTES.CREATE));
  });

  it('renders by "create" route', () => {
    const createPage = screen.getByRole('region', { name: 'Create product page' });
    expect(createPage).toBeInTheDocument();
  });

  it('renders CreateForm component and cards list', () => {
    const createForm = screen.getByRole('form', { name: 'Create product' });
    const cardsList = screen.getByRole('list', { name: 'Card list' });
    expect(createForm).toBeInTheDocument();
    expect(cardsList).toBeInTheDocument();
  });

  it('creates a card after submitting the correct form data', async () => {
    window.URL.createObjectURL = vi.fn();
    vi.spyOn(window.URL, 'createObjectURL').mockReturnValue('URL');
    const cards = screen.queryAllByRole('listitem', { name: 'Card' });
    expect(cards.length).toBe(0);

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
    const updatedCards = await screen.findAllByRole('listitem');
    expect(updatedCards.length).toBe(1);
  });
});
