import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  name: string;
  upper: boolean | undefined;
};

export const command: string = 'init <token>';
export const desc: string = 'Greet <name> with Hello';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('token', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { token, upper } = argv;
  const greeting = `Hello, ${token}!`;
  process.stdout.write(upper ? greeting.toUpperCase() : greeting);
  process.exit(0);
};