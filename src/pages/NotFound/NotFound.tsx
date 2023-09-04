import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found" aria-label="Not found page">
      <div className="not-found__container container">
        <h2 className="not-found__title">404</h2>
        <div className="not-found__text">Page not found</div>
      </div>
    </section>
  );
}

export default NotFound;
