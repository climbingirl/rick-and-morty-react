import { describe, it, expect, afterEach, vi } from 'vitest';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterSearch from './CharacterSearch';

describe('CharacterSearch', () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
  });

  it('renders search form', () => {
    render(<CharacterSearch />);
    const searchForm = screen.getByRole('search', { name: 'Characters' });
    expect(searchForm).toBeInTheDocument();
  });

  it('prevents default submit form action', () => {
    render(<CharacterSearch />);
    const searchForm = screen.getByRole('search', { name: 'Characters' });
    const submitEvent = createEvent.submit(searchForm);
    fireEvent(searchForm, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it('changes the entered text in localStorage by form submit and gets this text after rerender', async () => {
    const { rerender } = render(<CharacterSearch />);
    const searchForm = screen.getByRole('search', { name: 'Characters' });
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    const user = userEvent.setup();
    await user.type(input, 'test');
    const submitEvent = createEvent.submit(searchForm);
    fireEvent(searchForm, submitEvent);
    expect(setItemSpy).toHaveBeenCalled();

    rerender(<CharacterSearch />);
    expect(input).toHaveValue('test');
  });
});
