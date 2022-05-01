"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figlet = require('figlet');
const cli_1 = require("../cli");
exports.default = () => {
    figlet('argus-cli', function (err, data) {
        if (err) {
            (0, cli_1.log)('Something went wrong...');
            console.dir(err);
        }
        (0, cli_1.log)(data);
    });
};
//# sourceMappingURL=landingPageService.js.map