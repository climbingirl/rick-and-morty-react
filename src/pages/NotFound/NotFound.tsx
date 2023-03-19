import React from 'react';
import './NotFound.scss';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="not-found">
        <div className="not-found__container container">
          <div className="not-found__title">404</div>
          <div className="not-found__text">Page not found</div>
        </div>
      </div>
    );
  }
}

export default NotFound;
