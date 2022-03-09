"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterData = void 0;
const filterData = (html, amount, market) => {
    const tickers = [];
    const tickerTable = html('#scr-res-table > div > table > tbody > tr > td > a');
    tickerTable.each(function () {
        let ticker = html(this).text().toString();
        if (ticker.split('.')[1] == 'DE' && market == "de") {
            tickers.push(ticker.split('.')[0]);
        }
        else if (market == "us") {
            tickers.push(ticker);
        }
    });
    let symbols = [];
    let count = tickers.length;
    for (let i = 0; i < amount; i++) {
        var randInt = Math.floor(Math.random() * count);
        var symbol = tickers[randInt];
        symbols.push(symbol);
    }
    return symbols;
};
exports.filterData = filterData;
//# sourceMappingURL=filterHelper.js.map