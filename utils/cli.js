const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	token: {
		type: `string`,
		alias: `t`,
		desc: `Pass an access token`
	}
};

const commands = {
	help: { desc: `Print help info` },
	landingPage: {desc: `Landing page`},
	init: {desc: `Saves an access token for the polygon.io api`}
};

const helpText = meowHelp({
	name: `hello`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
