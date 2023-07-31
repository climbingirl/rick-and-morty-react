import React from 'react';
import { ICard } from '../../types/models';
import Card from '../Card/Card';
import './CardList.scss';

interface CardListProps {
  cards: ICard[];
}

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div className="cards">
        {!this.props.cards.length ? (
          <div className="cards__list-empty" role="list" aria-label="Products not found">
            Products not found
          </div>
        ) : (
          <div className="cards__list" role="list" aria-label="Product cards list">
            {this.props.cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardList;
