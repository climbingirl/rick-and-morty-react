import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { ICard } from '../../models';

describe('Card', () => {
  const tsetCard: ICard = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  it('Renders image', () => {
    render(<Card card={tsetCard} key="0" />);
    const card = screen.getByTestId('card');
    const image = screen.getByRole('img');
    expect(card).toContainElement(image);
  });

  it('Has a title', () => {
    render(<Card card={tsetCard} key="0" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveTextContent(tsetCard.title);
  });

  it('Has a price', () => {
    render(<Card card={tsetCard} key="0" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveTextContent(tsetCard.price.toFixed(2));
  });
});
