"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require('cheerio');
const fs = require('fs');
const fileHelper_1 = require("../helper/fileHelper");
const filterHelper_1 = require("../helper/filterHelper");
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
exports.default = async (amount, market) => {
    const url = { "de": "https://de.finance.yahoo.com/most-active/?offset=0&count=100",
        "us": "https://finance.yahoo.com/most-active/?offset=0&count=100" };
    (0, webcrawlerHelper_1.fetchData)(market == "us" ? url["us"] : url["de"]).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        const tickers = (0, filterHelper_1.filterData)($, amount, market);
        console.log("Market: " + market, "| Amount: " + amount + "\n");
        for (const ticker of tickers) {
            console.log(ticker);
        }
        if (true) {
            (0, fileHelper_1.writeCache)(tickers, market);
        }
    }).catch((err) => console.log(err));
};
//# sourceMappingURL=shuffleService.js.map