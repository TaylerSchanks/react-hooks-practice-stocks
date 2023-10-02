import React, { useState } from "react";

function SearchBar({ stocks, portfolio, handleSort, handleFilter }) {

    const [selectedFilter, setSelectedFilter] = useState('All');


    const handleFilterChange = (event) => {
        const newFilter = event.target.value
        setSelectedFilter(newFilter)
        handleFilter(newFilter)
    }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={() => handleSort("Alphabetically")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={() => handleSort("Price")}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
