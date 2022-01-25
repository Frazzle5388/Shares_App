import React from 'react';

const StockItem = ({ stock, onStockClick }) => {

    const handleClick = function () {
        onStockClick(stock);
    }
    return <li onClick={handleClick}>{stock.stockName}</li>
}

export default StockItem;