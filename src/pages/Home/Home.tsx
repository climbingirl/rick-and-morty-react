import React from 'react';
import CardList from '../../components/CardLiast/CardList';
import Search from '../../components/Search/Search';
import { cards } from '../../data';

class Home extends React.Component {
  render() {
    return (
      <section className="home container" aria-label="Home page">
        <Search />
        <CardList cards={cards} />
      </section>
    );
  }
}

export default Home;
