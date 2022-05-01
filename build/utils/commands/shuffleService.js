"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require('cheerio');
const fs = require('fs');
const fileHelper_1 = require("../helper/fileHelper");
const filterHelper_1 = require("../helper/filterHelper");
const webcrawlerHelper_1 = require("../helper/webcrawlerHelper");
const cli_1 = require("../cli");
const paths_1 = require("../../constants/paths");
const utils_1 = require("../../constants/utils");
exports.default = async (amount, market) => {
    const url = {
        de: paths_1.yahoo_de,
        us: paths_1.yahoo_us
    };
    const today = new Date().getTime();
    const lastRefreshDate = isNaN(new Date((0, fileHelper_1.getCache)(market).date).getTime())
        ? new Date().getTime() - (utils_1.DAY + 1)
        : new Date((0, fileHelper_1.getCache)(market).date).getTime();
    //If last cache is older than a day:
    if (today - lastRefreshDate > utils_1.DAY) {
        (0, webcrawlerHelper_1.fetchData)(market == 'us' ? url['us'] : url['de'])
            .then(res => {
            const html = res.data;
            const $ = cheerio.load(html);
            const tickers = (0, filterHelper_1.filterData)($, amount, market);
            (0, fileHelper_1.clearCache)(market);
            (0, fileHelper_1.writeCache)(tickers, market);
            if (amount > tickers.length) {
                (0, cli_1.log)('Specified ticker amount is exceeding available tickers.' +
                    '\n');
                (0, cli_1.log)(`Printing ${tickers.length} tickers instead`);
                amount = tickers.length;
            }
            (0, cli_1.log)('Market: ' + market + ' | Amount: ' + amount + '\n');
            for (const ticker of tickers.slice(0, amount)) {
                (0, cli_1.log)(ticker);
            }
        })
            .catch(err => console.log(err));
    }
    else {
        //get random tickers from cash
        const tickers = (0, fileHelper_1.getCache)(market).tickers;
        if (amount > tickers.length) {
            (0, cli_1.log)('Specified ticker amount is exceeding available tickers.' + '\n');
            (0, cli_1.log)(`Printing ${tickers.length} tickers instead`);
            amount = tickers.length;
        }
        (0, cli_1.log)('Market: ' + market + ' | Amount: ' + amount + '\n');
        for (let i = 0; i < amount; i++) {
            var randInt = Math.floor(Math.random() * tickers.length);
            (0, cli_1.log)(tickers[randInt]);
        }
    }
};
//# sourceMappingURL=shuffleService.js.map