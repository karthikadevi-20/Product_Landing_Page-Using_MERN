// src/components/Header.jsx
import SearchBar from "./SearchBar";

const Header = ({ onSearch, category, onCategoryChange, cartCount }) => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Row 1: logo + mobile cart (on mobile) */}
        <div className="header-left">
          <div className="logo">ShopVerse</div>
          <div className="header-cart header-cart--mobile">
            🛒 <span className="cart-count">{cartCount}</span>
          </div>
        </div>

        {/* Search */}
        <div className="header-center">
          <SearchBar
            onSearch={onSearch}
            category={category}
            onCategoryChange={onCategoryChange}
          />
        </div>

        {/* Desktop cart */}
        <div className="header-right">
          <div className="header-cart">
            🛒 <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
