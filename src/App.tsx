import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </>
    );
  }
}

export default App;
