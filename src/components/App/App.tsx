import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="app" data-testid="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <div className="footer"></div>
    </div>
  );
}

export default App;
