import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { ICard } from '../../types/models';

describe('Card', () => {
  const testCard: ICard = {
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

  beforeEach(() => {
    render(<Card card={testCard} key="0" />);
  });

  it('renders image', () => {
    const card = screen.getByRole('listitem');
    const image = screen.getByRole('img');
    expect(card).toContainElement(image);
  });

  it('has a title', () => {
    const card = screen.getByRole('listitem');
    expect(card).toHaveTextContent(testCard.title);
  });

  it('has a price', () => {
    const card = screen.getByRole('listitem');
    expect(card).toHaveTextContent(testCard.price.toFixed(2));
  });
});
