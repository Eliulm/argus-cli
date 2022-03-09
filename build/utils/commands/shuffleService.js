"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require('cheerio');
const filterHelper_1 = require("../helper/filterHelper");
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
exports.default = async (amount, market) => {
    const url = { "de": "https://de.finance.yahoo.com/most-active/?offset=0&count=100",
        "us": "https://finance.yahoo.com/most-active/?offset=0&count=100" };
    (0, webcrawlerHelper_1.fetchData)(market == "us" ? url["us"] : url["de"]).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        const tickers = (0, filterHelper_1.filterData)($, amount, market);
        for (const ticker of tickers) {
            console.log(ticker);
        }
    }).catch((err) => console.log(err));
};
//# sourceMappingURL=shuffleService.js.map