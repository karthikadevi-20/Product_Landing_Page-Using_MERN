// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FiltersBar from "./components/FiltersBar";
import ProductGrid from "./components/ProductGrid";
import { mockProducts } from "./data/products";
import "./index.css";

function App() {
  const [products, setProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("ALL");

  // cart: array of { ...product, quantity }
  const [cartItems, setCartItems] = useState([]);

  const applyFilters = (query, cat, price) => {
    let filtered = mockProducts;

    if (cat && cat !== "All") {
      filtered = filtered.filter((p) => p.category === cat);
    }

    if (query && query.trim()) {
      const lower = query.toLowerCase();
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(lower)
      );
    }

    if (price === "UNDER_2000") {
      filtered = filtered.filter((p) => p.price < 2000);
    } else if (price === "2000_10000") {
      filtered = filtered.filter((p) => p.price >= 2000 && p.price <= 10000);
    } else if (price === "ABOVE_10000") {
      filtered = filtered.filter((p) => p.price > 10000);
    }

    setProducts(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, category, priceFilter);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    applyFilters(searchQuery, cat, priceFilter);
  };

  const handlePriceChange = (pf) => {
    setPriceFilter(pf);
    applyFilters(searchQuery, category, pf);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">
      <Header
        onSearch={handleSearch}
        category={category}
        onCategoryChange={handleCategoryChange}
        cartCount={cartCount}
      />

      <main className="main">
        <Hero />

        <section className="content">
          <div className="results-header">
            <div>
              <h2 className="results-title">Featured Products</h2>
              <p className="results-subtitle">
                {products.length} product{products.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          <FiltersBar priceFilter={priceFilter} onPriceChange={handlePriceChange} />

          <div className="results-products">
            <ProductGrid products={products} onAddToCart={handleAddToCart} />
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} ShopVerse. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
