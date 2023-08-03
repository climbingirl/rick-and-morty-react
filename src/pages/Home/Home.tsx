import React from 'react';
import ProductList from '../../components/ProductLiast/ProductList';
import Search from '../../components/Search/Search';
import { products } from '../../data';

class Home extends React.Component {
  render() {
    return (
      <section className="home container" aria-label="Home page">
        <Search />
        <ProductList products={products} />
      </section>
    );
  }
}

export default Home;
