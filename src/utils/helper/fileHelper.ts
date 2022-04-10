const fs = require('fs');
import { log } from '../cli';

import { Market } from '../commands/shuffleService';
import { sys_path } from '../../constants/paths';

const filename = sys_path + 'build/temp/cache.json';

export const writeCache = async (tickers: string[], market: Market) => {
  const file = require(filename);

  if (market == 'de') {
    file.de.date = new Date();
    for (var ticker of tickers) {
      file.de.tickers.push(ticker);
    }
  } else if (market == 'us') {
    file.us.date = new Date();
    for (var ticker of tickers) {
      file.us.tickers.push(ticker);
    }
  }

  fs.writeFile(filename, JSON.stringify(file, null, 2), (err: any) => {
    if (err) {
      return log(err);
    } else {
      log('rewriting cache...');
    }
  });
};

export const clearCache = (market: Market) => {
  const file = require(filename);
  market == 'de' ? (file.de.tickers = []) : (file.us.tickers = []);

  fs.writeFile(filename, JSON.stringify(file, null, 2), (err: any) => {
    if (err) {
      return log(err);
    } else {
      log('clearing cache...');
    }
  });
};

export const getCache = (market: Market) => {
  const file = require(filename);

  return market == 'de' ? file.de : file.us;
};
