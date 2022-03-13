const fs = require('fs');
import { Market } from '../commands/shuffleService';

export const writeCache = async (tickers: string[], market: Market) => {
	const filename = '/Users/elias_wahl/argus-cli/build/temp/cache.json';
	const file = require(filename);

    if (market == 'de') {
        file.date_de = new Date();
        for (var ticker of tickers) {
            file.tickers_de.push(ticker);
        }
    } else if (market == 'us') {
        file.date_us = new Date();
        for (var ticker of tickers) {
            file.tickers_us.push(ticker);
        }
    }

	fs.writeFile(filename, JSON.stringify(file, null, 2), (err : any) => {
		if (err) {
			return console.log(err);
		} else {
            console.log("rewriting cache...");
        }
	});
};

