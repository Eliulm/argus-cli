import figlet = require('figlet');
import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
    name: string
    upper: boolean | undefined
}

export const command : string = 'cli'
export const desc: string = 'landing page'

export const builder: CommandBuilder<Options, Options> = (yargs) => 
    yargs

export const handler = (argv: Arguments<Options>): void => {
    figlet('argus-cli', function(err, data): void {
        if (err) {
            console.log('Something went wrong...')
            console.dir(err)
        }
        console.log(data)
    })
}

