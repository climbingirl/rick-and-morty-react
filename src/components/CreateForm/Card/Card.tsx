import React from 'react';
import { CreateElement } from '../../../types/models';
import './Card.scss';

interface CardProps {
  card: CreateElement;
}

class Card extends React.Component<CardProps> {
  card: CreateElement;

  constructor(props: CardProps) {
    super(props);
    this.card = props.card;
  }

  render() {
    return (
      <div className="create-card" role="listitem">
        <img className="card__photo" src={this.card?.photo} alt={this.card?.name} />
        <div className="card__inner">
          <div className="card__title">{this.card?.name + ' ' + this.card?.surname}</div>
          <div className="card__line">
            <span className="card__info">Gender: </span>
            {this.card?.gender}
          </div>
          <div className="card__line">
            <span className="card__info">Birthday: </span>
            {this.card?.birthDate}
          </div>
          <div className="card__line">
            <span className="card__info">Country: </span>
            {this.card?.country}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
