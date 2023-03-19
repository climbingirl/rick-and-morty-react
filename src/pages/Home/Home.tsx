import React from 'react';

import Search from '../../components/Search/Search';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="home">
        <div className="home__container container">
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
