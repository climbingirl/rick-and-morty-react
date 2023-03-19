import React from 'react';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="not-found">
        <div className="not-found__container container">
          <h2 className="not-found__title title-h2">404</h2>;
          <div className="not-found__text">Page not found</div>;
        </div>
      </div>
    );
  }
}

export default NotFound;
