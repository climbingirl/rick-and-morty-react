import React from 'react';
import { ICard } from '../../types/models';
import Card from '../Card/Card';
import './CardList.scss';

interface CardListProps {
  cards: ICard[];
}

class CardList extends React.Component<CardListProps> {
  render() {
    if (!this.props.cards.length) {
      return (
        <div className="cards__list_empty" data-testid="cards-empty">
          Products not found
        </div>
      );
    }

    return (
      <div className="cards__list" role="list" aria-label="Product cards list">
        {this.props.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
