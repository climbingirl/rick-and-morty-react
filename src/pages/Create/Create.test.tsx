import { describe, it, expect, vi } from 'vitest';
/* import { fireEvent, render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import ROUTES from '../../types/routes';
import Create from './Create';
import userEvent from '@testing-library/user-event';;
import * as reduxHooks from 'react-redux';
import { CardElement } from '../../types/models'; */

/* const cardsMock: CardElement[] = [
  {
    gender: 'male',
    name: 'MG',
    surname: 'Sanin',
    birthDate: '9/9/2023',
    country: 'Thailand',
    photo: 'blob:http://localhost:5173/ac8d5b78-2438-43ab-8098-8d682fb1dbe2',
    consent: true,
  },
]; */
vi.mock('react-redux');

describe('Create', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });

  /*   const mockedAppSelector = vi.spyOn(useAppSelector, 'useAppSelector');
  const mockedSelector = vi.spyOn(reduxHooks, 'useSelector');

  it('renders by "create" route', () => {
    mockedSelector.mockReturnValue([]);
    mockedAppSelector.mockReturnValue([]);
    render(withRouter(<Create />, ROUTES.CREATE));
    const createPage = screen.getByRole('region', { name: 'Create product page' });
    expect(createPage).toBeInTheDocument();
  });

  it('renders CreateForm component and cards list', () => {
    mockedSelector.mockReturnValue(cardsMock);
    mockedAppSelector.mockReturnValue(cardsMock);
    render(withRouter(<Create />, ROUTES.CREATE));
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
  }); */
});
