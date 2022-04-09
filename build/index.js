#!/usr/bin/env node
"use strict";
/**
 * argus
 * landing page :)
 *
 * @author Elias Ruben Wahl <https://github.com/Eliulm>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./utils/cli");
const cli_2 = require("./utils/cli");
const log_1 = require("./utils/log");
const landingPageService_1 = require("./utils/commands/landingPageService");
const initService_1 = require("./utils/commands/initService");
const shuffleService_1 = require("./utils/commands/shuffleService");
const input = cli_2.default.input;
//from meow
const flagsInput = cli_2.default.flags;
const { clear, debug } = cli_1.flags;
(async () => {
    //init({ clear });
    input[0].indexOf(`help`) > -1 && cli_2.default.showHelp(0);
    debug.default && (0, log_1.default)(cli_1.flags);
    if (input[0].indexOf('cli') > -1) {
        (0, landingPageService_1.default)();
    }
    else if (input[0].indexOf('init') > -1) {
        (0, initService_1.default)(flagsInput.token);
    }
    else if (input[0].indexOf('shuffle') > -1) {
        if (flagsInput.market == 'de') {
            (0, shuffleService_1.default)(flagsInput.amount, 'de');
        }
        else if (flagsInput.market == 'us') {
            (0, shuffleService_1.default)(flagsInput.amount, 'us');
        }
        else {
            console.log('Invalid market description.');
        }
    }
})().catch(err => console.log(err));
//# sourceMappingURL=index.js.map