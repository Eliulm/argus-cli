const cheerio = require('cheerio');
const fs = require('fs');

import { writeCache } from '../helper/fileHelper';
import { filterData} from '../helper/filterHelper'
import { fetchData } from '../helper/webcrawlerHelper'

export type Market = "de" | "us";

export default async (amount: number, market: Market) => {
    
    const url = {"de": "https://de.finance.yahoo.com/most-active/?offset=0&count=100",
                "us": "https://finance.yahoo.com/most-active/?offset=0&count=100"};

    //If last cache is older than a day:
    if (getCache(date, de).day < today) {
        //TODO: clear tickers
        fetchData(market == "us" ? url["us"] : url["de"]).then( (res) => {
            const html: string = res.data;
            const $: any = cheerio.load(html);
            const tickers = filterData($, amount, market);
            //TODO: Write tickers to cache
            console.log("Market: " + market, "| Amount: " + amount + "\n");
            for (const ticker of tickers) {
                console.log(ticker);
            }
        }).catch((err) => console.log(err));
    } else {
        //TODO: retrieve tickers from cache.
    }
}