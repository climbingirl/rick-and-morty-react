import ProductList from '../../components/ProductList/ProductList';
import ProductSearch from '../../components/Search/ProductSearch/ProductSearch';
import { products } from '../../data';

function Home() {
  return (
    <section className="home container" aria-label="Home page">
      <ProductSearch />
      <ProductList products={products} />
    </section>
  );
}

export default Home;
