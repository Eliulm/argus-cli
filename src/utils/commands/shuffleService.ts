const cheerio = require('cheerio')

import { filterData} from '../helper/filterHelper'
import { fetchData } from '../helper/webcrawlerHelper'

export default async (amount: number, market: string) => {
    
    const url = "https://de.finance.yahoo.com/most-active/?offset=0&count=100";

    fetchData(url).then( (res) => {
        const html: string = res.data;
        const $: any = cheerio.load(html);
        const tickers = filterData($, amount);

        let count : number = tickers.length;
        for (let i=0; i< amount; i++) {
            var randInt : number = Math.floor(Math.random() * count);
            var symbol = tickers[randInt];
            console.log(symbol);
        }
    }).catch((err) => console.log(err));
}