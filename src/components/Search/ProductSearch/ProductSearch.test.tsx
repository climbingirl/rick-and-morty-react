import { describe, it, expect, afterEach, vi } from 'vitest';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductSearch from './ProductSearch';

describe('ProductSearch', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
  });

  it('renders search form', () => {
    render(<ProductSearch />);
    const searchForm = screen.getByRole('search', { name: 'Product cards' });
    expect(searchForm).toBeInTheDocument();
  });

  it('prevents default submit form action', () => {
    render(<ProductSearch />);
    const searchForm = screen.getByRole('search', { name: 'Product cards' });
    const submitEvent = createEvent.submit(searchForm);
    fireEvent(searchForm, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it('renders input with empty value if localStorage is empty', () => {
    render(<ProductSearch />);
    const input = screen.getByRole('textbox');
    expect(getItemSpy).toHaveBeenCalled();
    expect(input).toHaveValue('');
  });

  it('changes the input value by entering text', async () => {
    const { rerender } = render(<ProductSearch />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    const user = userEvent.setup();
    await user.type(input, 'test');
    expect(setItemSpy).toHaveBeenCalled();

    rerender(<ProductSearch />);
    expect(input).toHaveValue('test');
  });
});
