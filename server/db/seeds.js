use portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        stockName: "AG Barr",
        numberOfShares: 200,
        currentSharePrice: 5.59,
        boughtSharePrice: 3.27,
        ISIN: "GB00B6XZKY75"
    },
    {
        stockName: "Greggs plc",
        numberOfShares: 75,
        currentSharePrice: 22.50,
        boughtSharePrice: 15.50,
        ISIN: "GB00B63QSB39"

    },
    {
        stockName: "Oxford Cannabinoid Technologies Holdings PLC",
        numberOfShares: 125,
        currentSharePrice: 30.59,
        boughtSharePrice: 11.23,
        ISIN: "GB00BMVMRB86"

    },
    {
        stockName: "Flutter Entertainment",
        numberOfShares: 125,
        currentSharePrice: 107.50,
        boughtSharePrice: 23.45,
        ISIN: "IE00BWT6H894"

    },
    {
        stockName: "JD Sports Entertainment plc",
        numberOfShares: 349,
        currentSharePrice: 1.8615,
        boughtSharePrice: 12.47,
        ISIN: "GB00BM8Q5M07"

    }
]);