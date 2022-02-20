"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const cheerio = require('cheerio');
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
exports.default = async (amount) => {
    //fill in your own
    const url = "https://de.finance.yahoo.com/most-active/?offset=0&count=100";
    (0, webcrawlerHelper_1.fetchData)(url).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        const tickers = [];
        const tickerTable = $('#scr-res-table > div > table > tbody > tr > td > a');
        tickerTable.each(function () {
            let ticker = $(this).text().toString();
            tickers.push(ticker);
        });
        let count = tickers.length;
        for (let i = 0; i < amount; i++) {
            var randInt = Math.floor(Math.random() * count);
            var symbol = tickers[randInt];
            console.log(symbol);
        }
    }).catch((err) => console.log(err));
};
//# sourceMappingURL=shuffleService.js.map