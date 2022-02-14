import type { Arguments, CommandBuilder} from 'yargs'

type Options = {
    token: string
}

export const command : string = 'init <token>'
export const desc : string = 'Initilaize app with with polygon.io token for api.'

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .positional('token', {type: 'string', demandOption: true})
    
export const handler = (argv: Arguments<Options>): void => {
    const {token} = argv
    const fs = require('fs')
    const fileName = '../../secrets.json'
    const file = require(fileName)

    file.api.token = token 

    fs.writeFile(fileName, JSON.stringify(file, null, 2), function callback(err) {
        if (err) return console.log(err);
            console.log('writing secret...')
            console.log(JSON.stringify(file))
            process.exit(0)
      })
}
