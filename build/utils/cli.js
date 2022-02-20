"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.helpText = exports.commands = exports.flags = void 0;
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
        desc: `Prints a scpecified random amount of actively traded ticker in german markets. Default is 10.`
    }
};
exports.commands = {
    help: { desc: `Print help info` },
    landingPage: { desc: `Landing page` },
    init: { desc: `Saves an access token for the polygon.io api` }
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
exports.default = meow(exports.helpText, exports.options);
//module.exports = meow(helpText, options);
//# sourceMappingURL=cli.js.map