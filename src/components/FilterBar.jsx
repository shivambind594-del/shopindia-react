function FilterBar({ activeCategory, onCategoryChange }) {
  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'kitchen', label: '🔪 Kitchen' },
    { key: 'watch', label: '⌚ Watches' },
    { key: 'salon', label: '🏠 Home & Living' },
  ]

  return (
    <div className="filter-section">
      <h4>Filter by Category</h4>
      <div className="d-flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`btn btn-sm rounded-pill ${activeCategory === cat.key ? 'btn-dark' : 'btn-outline-secondary'}`}
            onClick={() => onCategoryChange(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar