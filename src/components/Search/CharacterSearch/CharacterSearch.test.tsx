import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterSearch from './CharacterSearch';
import ROUTES from '../../../types/routes';
import withRouter from '../../../test/withRouter';
import * as useAppDispatch from '../../redux/hooks/useAppDispatch';
import * as useAppSelector from '../../redux/hooks/useAppSelector';

describe('CharacterSearch', () => {
  const mockedDispatch = vi.spyOn(useAppDispatch, 'useAppDispatch');
  const mockedSelector = vi.spyOn(useAppSelector, 'useAppSelector');
  const dispatch = vi.fn;

  it('renders search form', () => {
    mockedDispatch.mockReturnValue(dispatch);
    mockedSelector.mockReturnValue('test');
    render(withRouter(<CharacterSearch />, ROUTES.API));
    const searchForm = screen.getByRole('search', { name: 'Characters' });
    expect(searchForm).toBeInTheDocument();
  });

  /* it('prevents default submit form action', () => {
    mockedDispatch.mockReturnValue(dispatch);
    mockedSelector.mockReturnValue('test');
    render(withRouter(<CharacterSearch />, ROUTES.API));
    const searchForm = screen.getByRole('search', { name: 'Characters' });
    const submitEvent = createEvent.submit(searchForm);
    fireEvent(searchForm, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  }); */
});
