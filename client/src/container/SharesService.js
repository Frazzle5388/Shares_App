import React, { useState, useEffect } from 'react';
import SharesList from '../components/SharesList';
import StockAttributes from '../components/StockAttributes';

const SharesService = () => {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

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
            <SharesList stocks={stocks} onStockClick={onStockClick} />
            {selectedStock ? <StockAttributes selectedStock={selectedStock} /> : null}
        </div >
    )

}
export default SharesService;