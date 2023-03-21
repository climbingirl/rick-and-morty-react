import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('Renders image', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    const image = screen.getByTestId('card-image');
    expect(card).toContainElement(image);
  });
});
