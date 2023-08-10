import React from 'react';
import { Product } from '../../types/models';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
}

class ProductCard extends React.Component<ProductCardProps> {
  product: Product;

  constructor(props: ProductCardProps) {
    super(props);
    this.product = props.product;
  }

  render() {
    return (
      <div className="product-card" role="listitem">
        <img className="card__image" src={this.product?.image} alt={this.product?.title} />
        <div className="card__inner">
          <div className="card__title">{this.product?.title}</div>
          <div className="card__price">${this.product?.price.toFixed(2)}</div>
          <div className="card__details">
            <div className="card__rate">Raing: {this.product?.rating.rate}</div>
            <div className="card__stock">Stock: {this.product?.rating.count}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
