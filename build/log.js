"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let alert = require('cli-alerts');
const cli_alerts_1 = require("cli-alerts");
module.exports = info => {
    (0, cli_alerts_1.default)({
        type: `warning`,
        name: `DEBUG LOG`,
        msg: ``
    });
    console.log(info);
    console.log();
};
//# sourceMappingURL=log.js.map