import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    );
  }
}

export default App;
