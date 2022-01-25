import React from 'react';
import StockItem from './StockItem';

const SharesList = ({ stocks, onStockClick }) => {

    const StocksItems = stocks.map((stock, index) => {
        return <StockItem stock={stock} onStockClick={onStockClick} key={index} />
    })

    return (
        <div>
            <ul>
                {StocksItems}
            </ul>
        </div>
    )
}

export default SharesList;


