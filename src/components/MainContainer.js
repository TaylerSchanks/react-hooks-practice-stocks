import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, buyStock, sellStock, portfolio }) {

    const [sort, setSort] = useState(null)
    const [filter, setFilter] = useState("All")

    const filteredAndSortedStocks = stocks
        .filter((stock) => filter === "All" || stock.type === filter)
        .sort((a, b) => {
            if (sort === "Alphabetically") {
                return a.name.localeCompare(b.name);
            } else if (sort === "Price") {
                return a.price - b.price;
            }
            return 0; // Default case, no sorting
        });

    function handleSort(sortCriteria) {
        setSort(sortCriteria);
    }

    function handleFilter(filterCriteria) {
        setFilter(filterCriteria);
    }

  return (
    <div>
      <SearchBar stocks={stocks} portfolio={portfolio} handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredAndSortedStocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
