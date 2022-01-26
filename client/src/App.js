import './App.css';
import React, { useState, useEffect } from 'react';
import SharesService from './services/SharesService';
import SharesList from './components/SharesList';
import StockAttributes from './components/StockAttributes';


function App() {
  const [total, setTotal] = useState(0);
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  const updateTotal = (number) => {
    setTotal(total + number)
  }

  useEffect(() => {
    SharesService.getStock();
  }, [])

  const onStockClick = function (stock) {
    setSelectedStock(stock);
  }

  // const updateStock = updatedStock => {

  //   SharesService.updateStock(updatedStock);

  //   const updatedStockIndex = stocks.findIndex(stock => stock._id === updatedStock._id);
  //   const updatedStocks = [...stocks];
  //   updatedStocks[updatedStockIndex] = updatedStock;
  //   setStocks(updatedStocks);
  // };

  return (
    <div>
      <h1>Total: {total} </h1>
      <SharesList stocks={stocks} onStockClick={onStockClick} />
      {selectedStock ? <StockAttributes selectedStock={selectedStock} updateTotal={updateTotal} /> : null}
    </div>
  )
}

export default App;
