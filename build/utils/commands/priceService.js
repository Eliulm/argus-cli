"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const axios = require('axios');
const cli_1 = require("../cli");
const paths_1 = require("../../constants/paths");
//TODO implement rest call to get query.
exports.default = async () => {
    const filename = paths_1.sys_path + 'src/secrets/secrets.json';
    const file = require(filename);
    fs.readFile(file, (err, data) => {
        if (err)
            (0, cli_1.log)(err);
        const token = data.api.token;
        axios
            .get(`https://api.polygon.io/v3/reference/tickers
        ?active=true&sort=ticker&order=asc&limit=10&apiKey=${token}`)
            .then((response) => {
            (0, cli_1.log)(response.results[0].ticker);
        })
            .catch((error) => {
            (0, cli_1.log)(error);
        });
    });
};
//# sourceMappingURL=priceService.js.map