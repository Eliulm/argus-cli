#!/usr/bin/env node

/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */

//const init = require('./utils/commands/init');
//const cli = require('./utils/cli');
//const log = require('./utils/log');
//const landingPage = require('./utils/commands/landingPage')*/
import init from './utils/commands/init'
import { flags, commands, options} from './utils/cli'
import cli from './utils/cli'
import log from './utils/log'
import landingPage from './utils/commands/landingPage'

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
	}

	if(input[0].indexOf('init') > -1) {
		init(flagsInput.token);
	}

})().catch((err) => console.log(err));
