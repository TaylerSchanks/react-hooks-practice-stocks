import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

    const [stocks, setStocks] = useState([])
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/stocks")
            .then(resp => resp.json())
            .then((data) => setStocks(data))
    }, [])

    const buyStock = (stock) => {
        setPortfolio([...portfolio, stock])
    }

    const sellStock = (stock) => {
        setPortfolio(portfolio.filter((item) => item.id !== stock.id))
    }

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} buyStock={buyStock} portfolio={portfolio} sellStock={sellStock}/>
    </div>
  );
}

export default App;
