import React from 'react';
import { ICard } from '../../models';
import Card from '../Card/Card';
import './CardList.scss';

interface CardListProps {
  cards: ICard[];
}

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div className="cards">
        <div className="cards__inner">
          {this.props.cards?.map((card) => card && <Card card={card} key={card.id} />)}
        </div>
      </div>
    );
  }
}

export default CardList;
