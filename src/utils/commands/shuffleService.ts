const cheerio = require('cheerio');
const fs = require('fs');

import { writeCache, getCache, clearCache } from '../helper/fileHelper';
import { filterData } from '../helper/filterHelper';
import { fetchData } from '../helper/webcrawlerHelper';
import { log } from '../cli';

import { yahoo_de, yahoo_us } from '../../constants/paths';
import { DAY } from '../../constants/utils';

export type Market = 'de' | 'us';

export default async (amount: number, market: Market) => {
  const url = {
    de: yahoo_de,
    us: yahoo_us
  };
  const today = new Date().getTime();
  const lastRefreshDate = isNaN(new Date(getCache(market).date).getTime())
    ? new Date().getTime() - (DAY + 1)
    : new Date(getCache(market).date).getTime();
  //If last cache is older than a day:
  if (today - lastRefreshDate > DAY) {
    fetchData(market == 'us' ? url['us'] : url['de'])
      .then(res => {
        const html: string = res.data;
        const $: any = cheerio.load(html);
        const tickers = filterData($, amount, market);
        clearCache(market);
        writeCache(tickers, market);

        if (amount > tickers.length) {
          log(
            'Specified ticker amount is exceeding available tickers.' +
            '\n'
          );
          log(`Printing ${tickers.length} tickers instead`);
          amount = tickers.length;
        }

        log('Market: ' + market + ' | Amount: ' + amount + '\n');
        for (const ticker of tickers.slice(0, amount)) {
          log(ticker);
        }
      })
      .catch(err => console.log(err));
  } else {
    //get random tickers from cash
    const tickers = getCache(market).tickers;
    if (amount > tickers.length) {
      log(
        'Specified ticker amount is exceeding available tickers.' + '\n'
      );
      log(`Printing ${tickers.length} tickers instead`);
      amount = tickers.length;
    }

    log('Market: ' + market + ' | Amount: ' + amount + '\n');
    for (let i = 0; i < amount; i++) {
      var randInt: number = Math.floor(Math.random() * tickers.length);
      log(tickers[randInt]);
    }
  }
};
