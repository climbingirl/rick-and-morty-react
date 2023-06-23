import React from 'react';
import CardList from '../../components/CardLiast/CardList';
import Search from '../../components/Search/Search';
import { cards } from '../../data';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__container container">
          <Search />
          <CardList cards={cards} />
        </div>
      </div>
    );
  }
}

export default Home;
