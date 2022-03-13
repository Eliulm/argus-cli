const fs = require('fs');
import { market } from '../commands/shuffleService';

export const writeCache = async (tickers: string[], market: market) => {
	const filename = 'C:/Users/Elias Wahl/argus-cli/build/temp/cache.json';
	const file = require(filename);

    if (market == 'de') {
        file.date_de = new Date();
        file.tickers_de = tickers;
    } else if (market == 'us') {
        file.date_us = new Date();
    }

	fs.writeFile(filename, JSON.stringify(file, null, 2), (err : any) => {
		if (err) {
			return console.log(err);
		} else {
            console.log("rewriting cache...");
        }
	});
};

