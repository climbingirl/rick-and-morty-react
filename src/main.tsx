import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import './index.css';
import About from './pages/About/About';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
