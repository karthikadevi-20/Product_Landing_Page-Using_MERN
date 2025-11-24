// src/components/ProductGrid.jsx
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
};

export default ProductGrid;
