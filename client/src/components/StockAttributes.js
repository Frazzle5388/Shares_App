import React, { useState } from 'react';

const StockAttributes = ({ selectedStock, updateTotal, updateNumberOfShares }) => {

    // const [updatedNumberOfShares, setupdatedNumberOfShares] = useState(selectedStock.numberOfShares);

    const [quantity, setQuantity] = useState(0);

    const handleQuantity = event => setQuantity(event.target.value);

    const sale = () => {
        updateTotal(quantity * selectedStock.currentSharePrice)
    }

    const purchase = () => {
        updateTotal(-quantity * selectedStock.currentSharePrice)
    }

    //     // const updatedNumberOfShares = () => {


    // }

    return (
        <div>
            <h3>{selectedStock.stockName}</h3>
            <p>ISIN: {selectedStock.ISIN}</p>
            <p>Number of Shares Held: {selectedStock.numberOfShares}</p>
            <p>Current Share Price: {selectedStock.currentSharePrice}</p>
            <p>Purchase Share Price: {selectedStock.boughtSharePrice}</p>
            <h4>Gain/(Loss): </h4>
            <input type="value" placeholder="Input Quantity " value={quantity} onChange={handleQuantity} />
            <button onClick={purchase} >Purchase</button>
            <button onClick={sale}>Sell</button>
        </div>
    )
}

export default StockAttributes;