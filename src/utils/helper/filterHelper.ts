import { log } from '../cli';

export const filterData = (
  html: any,
  amount: number,
  market: string,
  all: boolean = true
): string[] => {
  const tickers: string[] = [];
  const tickerTable = html(
    '#scr-res-table > div > table > tbody > tr > td > a'
  );
  tickerTable.each(function() {
    let ticker = html(this).text().toString();

    if (ticker.split('.')[1] == 'DE' && market == 'de') {
      tickers.push(ticker.split('.')[0]);
    } else if (market == 'us') {
      tickers.push(ticker);
    }
  });

  let symbols: string[] = [];
  let count: number = tickers.length;
  amount = all ? tickers.length : amount;

  if (amount <= count) {
    for (let i = 0; i < amount; i++) {
      var randInt: number = Math.floor(Math.random() * count);
      var symbol = tickers[randInt];
      symbols.push(symbol);
    }
  } else {
    log(
      'Error -> Specified amount can not exceed total of tickers available.'
    );
  }
  return symbols;
};
