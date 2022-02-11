"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const figlet = require("figlet");
exports.command = 'cli';
exports.desc = 'landing page';
const builder = (yargs) => yargs;
exports.builder = builder;
const handler = (argv) => {
    figlet('argus-cli', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
        }
        console.log(data);
    });
};
exports.handler = handler;
//# sourceMappingURL=landingPage.js.map