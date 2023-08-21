import React from 'react';
import CreateForm from '../../components/CreateForm/Form/CreateForm';
import { CreateElement, EmptyProps } from '../../types/models';
import Card from '../../components/CreateForm/Card/Card';
import './Create.scss';

interface CreateState {
  cards: CreateElement[];
}

class Create extends React.Component<EmptyProps, CreateState> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.handleCardCreate = this.handleCardCreate.bind(this);
  }

  handleCardCreate(card: CreateElement) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    return (
      <section className="create container" aria-label="Create product page">
        <CreateForm onCardCreate={this.handleCardCreate} />
        <div className="cards" role="list" aria-label="Card list">
          {this.state.cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </section>
    );
  }
}

export default Create;
