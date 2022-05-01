"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.options = exports.helpText = exports.commands = exports.flags = void 0;
const meow = require('meow');
const meowHelp = require('cli-meow-help');
exports.flags = {
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
    },
    amount: {
        type: `number`,
        default: 10,
        alias: `a`,
        desc: `Prints a scpecified random amount of actively traded ticker. (Default is 10).`
    },
    market: {
        type: `string`,
        default: `de`,
        alias: `m`,
        desc: `Specifies the market. (Default is de)`
    }
};
exports.commands = {
    help: { desc: `Print help info` },
    landingPage: { desc: `Landing page` },
    init: { desc: `Saves an access token for the polygon.io api` },
    shuffle: { desc: `Retrieves random tickers from yahoo finance api` }
};
exports.helpText = meowHelp({
    name: `hello`,
    flags: exports.flags,
    commands: exports.commands
});
exports.options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags: exports.flags
};
const log = args => {
    console.log(args);
};
exports.log = log;
exports.default = meow(exports.helpText, exports.options);
//# sourceMappingURL=cli.js.map