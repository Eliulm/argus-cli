const cheerio = require('cheerio')

import { filterData} from '../helper/filterHelper'
import { fetchData } from '../helper/webcrawlerHelper'

export default async (amount: number, market: string) => {
    
    const url = {"de": "https://de.finance.yahoo.com/most-active/?offset=0&count=100",
                "us": "https://finance.yahoo.com/most-active/?offset=0&count=100"};

    fetchData(market == "us" ? url["us"] : url["de"]).then( (res) => {
        const html: string = res.data;
        const $: any = cheerio.load(html);
        const tickers = filterData($, amount, market);

        for (const ticker of tickers) {
            console.log(ticker);
        } 
    }).catch((err) => console.log(err));
}