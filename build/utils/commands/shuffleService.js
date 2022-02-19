"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const cheerio = require('cheerio');
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
exports.default = async () => {
    //fill in your own
    const url = "https://finance.yahoo.com/screener/9464e970-083b-42e5-9e1c-19e745588dac?count=100&offset=0";
    //const url ="https://www.iban.com/exchange-rates";
    (0, webcrawlerHelper_1.fetchData)(url).then((res) => {
        const html = res.data;
        console.log(html);
        const $ = cheerio.load(html);
        const tickers = [];
        const tickerTable = $('#scr-res-table > div > table > tbody > tr > td');
        console.log("processing...");
        tickerTable.each(function () {
            let ticker = $(this).text().toString();
            console.log("ticker:");
            console.log(ticker);
        });
    }).catch((err) => console.log(err));
};
//# sourceMappingURL=shuffleService.js.map