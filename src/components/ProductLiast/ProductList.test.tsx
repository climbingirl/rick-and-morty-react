import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Product } from '../../types/models';
import ProductList from './ProductList';

describe('ProductList', () => {
  const testProducts: Product[] = [
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

  it('renders products list if products array has elements', () => {
    render(<ProductList products={testProducts} />);
    const list = screen.getByRole('list', { name: 'Product cards list' });
    const products = screen.getAllByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(list).toContainElement(products[0]);
  });

  it('renders "Products not found" text if cards array is empty', () => {
    render(<ProductList products={[]} />);
    const emptyList = screen.getByRole('list');
    expect(emptyList).toHaveTextContent('Products not found');
  });
});
