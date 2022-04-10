"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = exports.clearCache = exports.writeCache = void 0;
const fs = require('fs');
const paths_1 = require("../../constants/paths");
const filename = paths_1.sys_path + 'build/temp/cache.json';
const writeCache = async (tickers, market) => {
    const file = require(filename);
    if (market == 'de') {
        file.de.date = new Date();
        for (var ticker of tickers) {
            file.de.tickers.push(ticker);
        }
    }
    else if (market == 'us') {
        file.us.date = new Date();
        for (var ticker of tickers) {
            file.us.tickers.push(ticker);
        }
    }
    fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log('rewriting cache...');
        }
    });
};
exports.writeCache = writeCache;
const clearCache = (market) => {
    const file = require(filename);
    market == 'de' ? (file.de.tickers = []) : (file.us.tickers = []);
    fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log('clearing cache...');
        }
    });
};
exports.clearCache = clearCache;
const getCache = (market) => {
    const file = require(filename);
    return market == 'de' ? file.de : file.us;
};
exports.getCache = getCache;
//# sourceMappingURL=fileHelper.js.map