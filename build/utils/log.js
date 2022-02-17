"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alert = require('cli-alerts');
//import alert from 'cli-alerts';
exports.default = info => {
    alert({
        type: `warning`,
        name: `DEBUG LOG`,
        msg: ``
    });
    console.log(info);
    console.log();
};
//# sourceMappingURL=log.js.map