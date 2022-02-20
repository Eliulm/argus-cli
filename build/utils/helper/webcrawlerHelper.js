"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios = require('axios');
const fetchData = async (url) => {
    console.log("Crawling data...");
    console.log("");
    // make http call to url
    let response = await axios(url, { withCredentials: true }).catch((err) => console.log(err));
    if (response.status !== 200) {
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
};
exports.fetchData = fetchData;
//# sourceMappingURL=webcrawlerHelper.js.map