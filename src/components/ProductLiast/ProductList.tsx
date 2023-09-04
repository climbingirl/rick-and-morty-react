import { Product } from '../../types/models';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';

interface ProductListProps {
  products: Product[];
}

function ProductList(props: ProductListProps) {
  return (
    <div className="products">
      {!props.products.length ? (
        <div className="products__list-empty" role="list" aria-label="Products not found">
          Products not found
        </div>
      ) : (
        <div className="products__list" role="list" aria-label="Product cards list">
          {props.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
