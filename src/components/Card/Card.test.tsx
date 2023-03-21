import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('Renders image', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    const image = screen.getByRole('img');
    expect(card).toContainElement(image);
  });
});

describe('Card', () => {
  it('Has a title', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    expect(card).toContainHTML('<div class="card__title"></div>');
  });
});

describe('Has a price', () => {
  it('Has a title', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    expect(card).toContainHTML('<div class="card__price">$</div>');
  });
});
