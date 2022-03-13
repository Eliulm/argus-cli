#!/usr/bin/env node

/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */


import { flags, commands, options} from './utils/cli'
import cli from './utils/cli'
import log from './utils/log'

import landingPage from './utils/commands/landingPageService'
import init from './utils/commands/initService'
import shuffle from './utils/commands/shuffleService'
import { Market } from './utils/commands/shuffleService'

const input = cli.input;
//from meow
const flagsInput = cli.flags;
const { clear, debug } = flags;

(async () => {
	//init({ clear });

	input[0].indexOf(`help`) > -1 && cli.showHelp(0);

	debug.default && log(flags);

	if (input[0].indexOf('cli') > -1) {
		landingPage();
	} else if (input[0].indexOf('init') > -1) {
		init(flagsInput.token);
	} else if(input[0].indexOf('shuffle') > -1) {
		if (flagsInput.market == 'de') {
			shuffle(flagsInput.amount, 'de');
		} else if (flagsInput.market == 'us') {
			shuffle(flagsInput.amount, 'us');
		} else {
			console.log("Unproper market description.");
		}
	}

})().catch((err) => console.log(err));
