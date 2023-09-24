import React from "react";

function FilterProducts({ categories, filter, onFilterChange }) {
  return (
    <div>
      <label>Filtrar por categoría:</label>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="Todos">Todos</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterProducts;
