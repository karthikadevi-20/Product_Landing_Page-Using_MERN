// src/components/SearchBar.jsx
import { useState, useMemo } from "react";
import { mockProducts } from "../data/products";

const categories = [
  "All",
  "Mobiles",
  "Electronics",
  "Computers",
  "Fashion",
  "Furniture",
];

const SearchBar = ({ onSearch, category, onCategoryChange }) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return mockProducts
      .filter((p) => p.name.toLowerCase().includes(lower))
      .slice(0, 5);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    onSearch(name);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    // small delay so click can register
    setTimeout(() => setShowSuggestions(false), 150);
  };

  return (
    <div className="search-shell">
      <form className="header-search" onSubmit={handleSubmit}>
        <select
          className="header-search-category"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          className="header-search-input"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleBlur}
        />

        <button className="header-search-btn" type="submit">
          🔍
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((s) => (
            <li
              key={s.id}
              className="search-suggestion-item"
              onMouseDown={() => handleSuggestionClick(s.name)}
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
