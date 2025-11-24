// src/components/FiltersBar.jsx
const FiltersBar = ({ priceFilter, onPriceChange }) => {
  const options = [
    { id: "ALL", label: "All prices" },
    { id: "UNDER_2000", label: "Under ₹2,000" },
    { id: "2000_10000", label: "₹2,000 – ₹10,000" },
    { id: "ABOVE_10000", label: "Above ₹10,000" },
  ];

  return (
    <div className="filters-bar">
      <span className="filters-label">Filter by price:</span>
      <div className="filters-pills">
        {options.map((opt) => (
          <button
            key={opt.id}
            className={
              priceFilter === opt.id
                ? "filter-pill filter-pill--active"
                : "filter-pill"
            }
            onClick={() => onPriceChange(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersBar;
