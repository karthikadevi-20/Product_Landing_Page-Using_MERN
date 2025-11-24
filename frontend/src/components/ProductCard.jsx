// src/components/ProductCard.jsx
const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, rating, imageUrl, category } = product;
  const stars = "⭐".repeat(Math.round(rating));

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">₹{price}</p>
        <p className="product-rating">{stars}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
