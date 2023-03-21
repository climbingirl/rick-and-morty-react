import React from 'react';
import { ICard } from '../../models';
import './Card.scss';

interface CardProps {
  card: ICard;
}

class Card extends React.Component {
  card: ICard;

  constructor(props: CardProps) {
    super(props);
    this.card = props.card;
  }

  render(): React.ReactNode {
    return (
      <div className="card" data-testid="card">
        <img
          className="card__image"
          src={this.card?.image}
          alt={this.card?.title}
          data-testid="card-image"
        />
        <div className="card__inner">
          <div className="card__title">{this.card?.title}</div>
          <div className="card__price">${this.card?.price.toFixed(2)}</div>
          <div className="card__details">
            <div className="card__rate">Raing: {this.card?.rating.rate}</div>
            <div className="card__stock">Stock: {this.card?.rating.count}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
