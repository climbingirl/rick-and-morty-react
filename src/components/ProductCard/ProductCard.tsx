import { Product } from '../../types/models';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
}

function ProductCard(props: ProductCardProps) {
  const product = props.product;

  return (
    <div className="product-card" role="listitem">
      <img className="card__image" src={product?.image} alt={product?.title} />
      <div className="card__inner">
        <div className="card__title">{product?.title}</div>
        <div className="card__price">${product?.price.toFixed(2)}</div>
        <div className="card__details">
          <div className="card__rate">Raing: {product?.rating.rate}</div>
          <div className="card__stock">Stock: {product?.rating.count}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
