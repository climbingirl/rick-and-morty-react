import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const host = 'http://localhost:3000';

export default (component: React.ReactNode, route = '/') => {
  const path = route === '/' ? route : `/${route}`;

  const router = createMemoryRouter(
    [
      {
        path: path,
        element: component,
      },
    ],
    {
      initialEntries: [path],
    }
  );

  return render(<RouterProvider router={router} />);
};
