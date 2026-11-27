import { products } from './data/products.js';
import ProductCard from './ProductCard';

function ProductSection() {
  if (products.length === 0) {
    return <p>No products today. Come back tomorrow!</p>;
  }

  return (
    <section id="menu" className="products-section">
      <h2>OUR BAKES</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            left={product.left}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;