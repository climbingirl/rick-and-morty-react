import React from 'react';
import './NotFound.scss';

class NotFound extends React.Component {
  render() {
    return (
      <section className="not-found" aria-label="Not found page">
        <div className="not-found__container container">
          <div className="not-found__title">404</div>
          <div className="not-found__text">Page not found</div>
        </div>
      </section>
    );
  }
}

export default NotFound;
