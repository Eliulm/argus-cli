#!/usr/bin/env node
"use strict";
/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//const init = require('./utils/commands/init');
//const cli = require('./utils/cli');
//const log = require('./utils/log');
//const landingPage = require('./utils/commands/landingPage')*/
const init_1 = require("./utils/commands/init");
const cli_1 = require("./utils/cli");
const cli_2 = require("./utils/cli");
const log_1 = require("./utils/log");
const landingPage_1 = require("./utils/commands/landingPage");
const input = cli_2.default.input;
const flags2 = cli_2.default.flags;
const { clear, debug } = cli_1.flags;
(async () => {
    //init({ clear });
    input[0].indexOf(`help`) > -1 && cli_2.default.showHelp(0);
    debug.default && (0, log_1.default)(cli_1.flags);
    if (input[0].indexOf('cli') > -1) {
        (0, landingPage_1.default)();
    }
    if (input[0].indexOf('init') > -1) {
        (0, init_1.default)(flags2.token);
    }
})().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map