import conf from 'conf';
import fs from 'fs';
import chalk from 'chalk';

function init (token : string) {
    writeApiToken(token)
}

const writeApiToken = (token : string) => {
    fs.writeFile('./argus.txt', token, function(err : any) : void {
        if (err) {
            console.log('There has been an error writing to file:\n\n' + chalk.bold.red(err))
        } else {
            console.log('Successfully saved token.\n' + chalk.bold.red('Caution') + 'tokens are stored in plain text')
        }
    })
} 

module.exports = init