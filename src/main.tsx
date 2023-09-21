import ReactDOM from 'react-dom/client';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import ROUTES from './types/routes';
import App from './components/App/App';
import About from './pages/About/About';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import NotFound from './pages/NotFound/NotFound';
import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<App />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CREATE} element={<Create />} />
      <Route path={ROUTES.API} element={<Characters />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="/*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
