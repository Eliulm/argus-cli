"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterData = void 0;
const filterData = (html, amount) => {
    const tickers = [];
    const tickerTable = html('#scr-res-table > div > table > tbody > tr > td > a');
    tickerTable.each(function () {
        let ticker = html(this).text().toString();
        if (ticker.split('.')[1] == 'DE') {
            tickers.push(ticker);
        }
    });
    return tickers;
};
exports.filterData = filterData;
//# sourceMappingURL=filterHelper.js.map