#!/usr/bin/env node

/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */

const init = require('./utils/commands/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const landingPage = require('./utils/commands/landingPage')


const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	//init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('cli')) {
		landingPage();
	}

	if(input.includes('init')) {
		init(flags.token);
	}

})();
