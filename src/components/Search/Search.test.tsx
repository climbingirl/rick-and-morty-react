import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

describe('Search', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
  });

  it('renders search form with input', () => {
    render(<Search />);
    const searchForm = screen.getByRole('search', { name: 'Product cards' });
    const input = screen.getByPlaceholderText('Enter search text');
    expect(searchForm).toContainElement(input);
  });

  it('renders input with empty value if localStorage is empty', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Enter search text');
    expect(getItemSpy).toHaveBeenCalled();
    expect(input).toHaveValue('');
  });

  it('changes the input value by entering text', async () => {
    const { rerender } = render(<Search />);
    const input = screen.getByPlaceholderText('Enter search text');
    expect(input).toHaveValue('');

    const user = userEvent.setup();
    await user.type(input, 'test');
    expect(setItemSpy).toHaveBeenCalled();

    rerender(<Search />);
    expect(input).toHaveValue('test');
  });
});
