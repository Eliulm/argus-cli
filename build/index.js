#!/usr/bin/env node
"use strict";
/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*const init = require('./utils/commands/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const landingPage = require('./utils/commands/landingPage')*/
const init_1 = require("./utils/commands/init");
const cli_1 = require("./utils/cli");
const log_1 = require("./utils/log");
const landingPage_1 = require("./utils/commands/landingPage");
const input = cli_1.default.input;
const flags = cli_1.default.flags;
const { clear, debug } = flags;
(async () => {
    //init({ clear });
    input.includes(`help`) && cli_1.default.showHelp(0);
    debug && (0, log_1.default)(flags);
    if (input.includes('cli')) {
        (0, landingPage_1.default)();
    }
    if (input.includes('init')) {
        (0, init_1.default)(flags.token);
    }
})();
//# sourceMappingURL=index.js.map