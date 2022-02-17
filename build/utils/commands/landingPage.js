"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figlet = require('figlet');
exports.default = () => {
    figlet('argus-cli', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
        }
        console.log(data);
    });
};
//# sourceMappingURL=landingPage.js.map