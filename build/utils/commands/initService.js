"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const paths_1 = require("../../constants/paths");
const cli_1 = require("../cli");
exports.default = async (token) => {
    const filename = paths_1.sys_path + 'src/secrets/secrets.json';
    const file = require(filename);
    file.api.token = token;
    fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
        if (err) {
            return (0, cli_1.log)(err);
        }
        else {
            (0, cli_1.log)('writing secrets...');
            (0, cli_1.log)('token: ' + token);
        }
    });
};
//# sourceMappingURL=initService.js.map