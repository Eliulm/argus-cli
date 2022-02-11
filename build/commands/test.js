"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'test <token>';
exports.desc = 'Greet <name> with Hello';
const builder = (yargs) => yargs
    .options({
    upper: { type: 'boolean' },
})
    .positional('token', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { token, upper } = argv;
    const greeting = `Hello, ${token}!`;
    process.stdout.write(upper ? greeting.toUpperCase() : greeting);
    process.exit(0);
};
exports.handler = handler;
//# sourceMappingURL=test.js.map