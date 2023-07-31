import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ICard } from '../../types/models';
import CardList from './CardList';

describe('CardList', () => {
  const testCards: ICard[] = [
    {
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
    },
  ];

  it('renders cards list if cards array has elements', () => {
    render(<CardList cards={testCards} />);
    const cardList = screen.getByRole('list', { name: 'Product cards list' });
    const cards = screen.getAllByRole('listitem');
    expect(cardList).toBeInTheDocument();
    expect(cardList).toContainElement(cards[0]);
  });

  it('renders "Products not found" text if cards array is empty', () => {
    render(<CardList cards={[]} />);
    const emptyList = screen.getByRole('list');
    expect(emptyList).toHaveTextContent('Products not found');
  });
});
