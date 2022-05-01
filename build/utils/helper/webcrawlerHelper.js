"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios = require('axios');
const cli_1 = require("../cli");
const fetchData = async (url) => {
    (0, cli_1.log)('Crawling data...');
    (0, cli_1.log)('');
    // make http call to url
    let response = await axios(url, { withCredentials: true }).catch(err => (0, cli_1.log)(err));
    if (response.status !== 200) {
        (0, cli_1.log)('Error occurred while fetching data');
        return;
    }
    return response;
};
exports.fetchData = fetchData;
//# sourceMappingURL=webcrawlerHelper.js.map