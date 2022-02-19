const fs = require('fs')
const cheerio = require('cheerio')

import { fetchData } from '../helper/webcrawlerHelper'

export default async () => {
    //fill in your own
    const url = "";
    //const url ="https://www.iban.com/exchange-rates";

    fetchData(url).then( (res) => {
        const html = res.data;
        console.log(html)
        const $ = cheerio.load(html);

        const tickers : string[] = [];
        const tickerTable = $('#scr-res-table > div > table > tbody > tr > td');
        console.log("processing...")
        tickerTable.each(function() {
            let ticker = $(this).text().toString();
            console.log("ticker:")
            console.log(ticker);
        });
    }).catch((err) => console.log(err))
}