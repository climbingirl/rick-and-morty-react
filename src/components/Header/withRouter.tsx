import React from 'react';
import { useLocation } from 'react-router-dom';

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export default function withRouter<Props>(Component: React.ComponentType<Props>) {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    return <Component {...(props as Props)} location={useLocation()} />;
  };
}
