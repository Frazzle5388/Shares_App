import React, { useState, useEffect } from 'react';
import SharesList from '../components/SharesList';
import StockAttributes from '../components/StockAttributes';

const SharesService = () => {
    const [total, setTotal] = useState(0);
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

    const updateTotal = (number) => {
        setTotal(total + number)
    }

    useEffect(() => {
        getStocks();
    }, [])

    const onStockClick = function (stock) {
        setSelectedStock(stock);
    }
    const getStocks = function () {
        fetch('http://localhost:5000/api/shares')
            .then(res => res.json())
            .then(stocks => setStocks(stocks))
    }

    return (
        <div>
            <h1>Total: {total} </h1>
            <SharesList stocks={stocks} onStockClick={onStockClick} />
            {selectedStock ? <StockAttributes selectedStock={selectedStock} updateTotal={updateTotal} /> : null}
        </div >
    )

}
export default SharesService;