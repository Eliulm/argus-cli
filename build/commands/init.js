"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'init <token>';
exports.desc = 'Initilaize app with with polygon.io token for api.';
const builder = (yargs) => yargs
    .positional('token', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { token } = argv;
    const fs = require('fs');
    const fileName = '../../secrets.json';
    const file = require(fileName);
    file.api.token = token;
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function callback(err) {
        if (err)
            return console.log(err);
        console.log('writing secret...');
        console.log(JSON.stringify(file));
        process.exit(0);
    });
};
exports.handler = handler;
//# sourceMappingURL=init.js.map