"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require('cheerio');
const filterHelper_1 = require("../helper/filterHelper");
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
exports.default = async (amount, market) => {
    const url = "https://de.finance.yahoo.com/most-active/?offset=0&count=100";
    (0, webcrawlerHelper_1.fetchData)(url).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        const tickers = (0, filterHelper_1.filterData)($, amount);
        let count = tickers.length;
        for (let i = 0; i < amount; i++) {
            var randInt = Math.floor(Math.random() * count);
            var symbol = tickers[randInt];
            console.log(symbol);
        }
    }).catch((err) => console.log(err));
};
//# sourceMappingURL=shuffleService.js.map