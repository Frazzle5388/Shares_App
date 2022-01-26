import React, { useState } from 'react';

const StockAttributes = ({ selectedStock, updateTotal }) => {
    const const [total, setTotal] = useState(0);


    const purchase = () => {
        updateTotal(selectedStock.currentSharePrice)
    }

    const sale = () => {
        updateTotal(-selectedStock.currentSharePrice)
    }






    return (
        <div>
            <h3>{selectedStock.stockName}</h3>
            <p>ISIN: {selectedStock.ISIN}</p>
            <p>Number of Shares Held: {selectedStock.numberOfShares}</p>
            <p>Current Share Price: {selectedStock.currentSharePrice}</p>
            <p>Purchase Share Price: {selectedStock.boughtSharePrice}</p>
            <h4>Gain/(Loss): </h4>
            <input></input>
            <button onClick={purchase} >Purchase</button>
            <button onClick={sale}>Sell</button>
        </div>
    )
}

export default StockAttributes;