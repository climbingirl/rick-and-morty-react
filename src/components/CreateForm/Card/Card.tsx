import React from 'react';
import { CreateElement } from '../../../types/models';
import './Card.scss';

interface CardProps {
  card: CreateElement;
}

function Card(props: CardProps) {
  const card = props.card;

  return (
    <div className="create-card" role="listitem" aria-label="Card">
      <img className="card__photo" src={card?.photo} alt={card?.name} />
      <div className="card__inner">
        <div className="card__title">{card?.name + ' ' + card?.surname}</div>
        <div className="card__line">
          <span className="card__info">Gender: </span>
          {card?.gender}
        </div>
        <div className="card__line">
          <span className="card__info">Birthday: </span>
          {card?.birthDate}
        </div>
        <div className="card__line">
          <span className="card__info">Country: </span>
          {card?.country}
        </div>
      </div>
    </div>
  );
}

export default Card;
