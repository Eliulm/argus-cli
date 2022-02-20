const fs = require('fs')
const cheerio = require('cheerio')

import { fetchData } from '../helper/webcrawlerHelper'

export default async (amount : number) => {
    //fill in your own
    const url = "https://de.finance.yahoo.com/most-active/?offset=0&count=100";

    fetchData(url).then( (res) => {
        const html = res.data;
        const $ = cheerio.load(html);

        const tickers : string[] = [];
        const tickerTable = $('#scr-res-table > div > table > tbody > tr > td > a');
        tickerTable.each(function() {
            let ticker = $(this).text().toString();
            tickers.push(ticker);
        });

        let count : number = tickers.length;
        for (let i=0; i< amount; i++) {
            var randInt : number = Math.floor(Math.random() * count);
            var symbol = tickers[randInt];
            console.log(symbol);
        }
    }).catch((err) => console.log(err));
}