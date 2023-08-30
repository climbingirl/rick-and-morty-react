import React, { useState } from 'react';
import CreateForm from '../../components/CreateForm/Form/CreateForm';
import { CardElement } from '../../types/models';
import Card from '../../components/CreateForm/Card/Card';
import './Create.scss';

function Create() {
  const [cards, setCards] = useState<CardElement[]>([]);

  function handleCardCreate(card: CardElement) {
    setCards([...cards, card]);
  }

  return (
    <section className="create container" aria-label="Create product page">
      <CreateForm onCardCreate={handleCardCreate} />
      <div className="cards" role="list" aria-label="Card list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Create;
