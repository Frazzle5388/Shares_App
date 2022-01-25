import React from 'react';

const StockAttributes = ({ selectedStock }) => {

    return (
        <div>
            <h3>{selectedStock.stockName}</h3>
            <p>ISIN: {selectedStock.ISIN}</p>
            <p>Number of Shares Held: {selectedStock.numberOfShares}</p>
            <p>Current Share Price: {selectedStock.currentSharePrice}</p>
            <p>Purchase Share Price: {selectedStock.boughtSharePrice}</p>
            <h4>Gain/(Loss): </h4>
            <p>hi </p>
        </div>
    )
}

export default StockAttributes;