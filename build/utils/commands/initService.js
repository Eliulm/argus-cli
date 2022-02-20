"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
exports.default = async (token) => {
    const filename = 'C:/Users/Elias Wahl/argus-cli/src/secrets/secrets.json';
    const file = require(filename);
    file.api.token = token;
    fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log('writing secrets...');
            console.log("token: " + token);
        }
    });
};
//# sourceMappingURL=initService.js.map