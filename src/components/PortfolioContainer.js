import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {
  return (
    <div>
      <h2>Brad's Portfolio</h2>
      {
       portfolio.map((stock) => (
           <Stock
           key={stock.id}
           name={stock.name}
           price={stock.price}
           sellStock={() => sellStock(stock)}
           />
       ))
      }
    </div>
  );
}

export default PortfolioContainer;
